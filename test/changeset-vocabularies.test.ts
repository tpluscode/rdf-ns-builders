import { expect } from 'chai'
import { describe, it } from 'mocha'
import type {
  VocabularyDiff,
} from '../scripts/changeset-vocabularies.js'
import {
  parseVocabulary,
  compareVocabularies,
  determineReleaseType,
  formatVocabSummary,
  formatSummary,
  normalizeDoc,
  getPackageName,
  createCli,
  createVocabChangesets,
} from '../scripts/changeset-vocabularies.js'

describe('changeset-vocabularies', () => {
  describe('normalizeDoc', () => {
    it('normalizes multi-line JSDoc comments to single-line text', () => {
      const doc = '/**\n * credit be given to\n * copyright holder\n */'
      expect(normalizeDoc(doc)).to.eq('credit be given to copyright holder')
    })

    it('handles empty or whitespace doc', () => {
      expect(normalizeDoc('')).to.eq('')
      expect(normalizeDoc('   ')).to.eq('')
    })
  })

  describe('parseVocabulary', () => {
    it('parses interface and members correctly', () => {
      const code = `
import { NamedNode } from "@rdfjs/types";

export interface Example {
    '': NamedNode<'http://example.org/'>;
    /** An example property */
    "prop1": NamedNode<'http://example.org/prop1'>;
    "prop2": NamedNode<'http://example.org/prop2'>;
}
`
      const result = parseVocabulary(code, 'example.ts')
      expect(result.interfaceName).to.eq('Example')
      expect(result.terms.size).to.eq(3)
      expect(result.terms.get('')).to.deep.eq({
        name: '',
        type: "NamedNode<'http://example.org/'>",
        docs: '',
      })
      expect(result.terms.get('prop1')).to.deep.eq({
        name: 'prop1',
        type: "NamedNode<'http://example.org/prop1'>",
        docs: '/** An example property */',
      })
      expect(result.terms.get('prop2')).to.deep.eq({
        name: 'prop2',
        type: "NamedNode<'http://example.org/prop2'>",
        docs: '',
      })
    })
  })

  describe('compareVocabularies', () => {
    const baseCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    /** Original doc */
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termB": NamedNode<'http://example.org/foo#termB'>;
}
`

    it('returns "none" when contents are identical', () => {
      const diff = compareVocabularies(baseCode, baseCode, 'foo')
      expect(diff.changeType).to.eq('none')
      expect(diff.added).to.be.empty
      expect(diff.removed).to.be.empty
      expect(diff.docChanged).to.be.false
    })

    it('returns "patch" when only documentation changes', () => {
      const updatedDocCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    /** Updated documentation */
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termB": NamedNode<'http://example.org/foo#termB'>;
}
`
      const diff = compareVocabularies(baseCode, updatedDocCode, 'foo')
      expect(diff.changeType).to.eq('patch')
      expect(diff.added).to.be.empty
      expect(diff.removed).to.be.empty
      expect(diff.docChanged).to.be.true
    })

    it('returns "minor" when new terms are added', () => {
      const addedTermsCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    /** Original doc */
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termB": NamedNode<'http://example.org/foo#termB'>;
    "termC": NamedNode<'http://example.org/foo#termC'>;
}
`
      const diff = compareVocabularies(baseCode, addedTermsCode, 'foo')
      expect(diff.changeType).to.eq('minor')
      expect(diff.added).to.deep.eq(['termC'])
      expect(diff.removed).to.be.empty
    })

    it('returns "major" when terms are removed', () => {
      const removedTermsCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    /** Original doc */
    "termA": NamedNode<'http://example.org/foo#termA'>;
}
`
      const diff = compareVocabularies(baseCode, removedTermsCode, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.removed).to.deep.eq(['termB'])
      expect(diff.added).to.be.empty
    })

    it('returns "major" when terms are both added and removed', () => {
      const mixedCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termC": NamedNode<'http://example.org/foo#termC'>;
}
`
      const diff = compareVocabularies(baseCode, mixedCode, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.removed).to.deep.eq(['termB'])
      expect(diff.added).to.deep.eq(['termC'])
    })

    it('returns "minor" when a new vocabulary file is added', () => {
      const diff = compareVocabularies(null, baseCode, 'foo')
      expect(diff.changeType).to.eq('minor')
      expect(diff.added).to.deep.eq(['termA', 'termB'])
      expect(diff.removed).to.be.empty
    })

    it('returns "major" when a vocabulary file is deleted', () => {
      const diff = compareVocabularies(baseCode, null, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.removed).to.deep.eq(['termA', 'termB'])
      expect(diff.added).to.be.empty
    })

    it('returns "major" when term type or namespace URI changes', () => {
      const changedTypeCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/different-uri#'>;
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termB": NamedNode<'http://example.org/foo#termB'>;
}
`
      const diff = compareVocabularies(baseCode, changedTypeCode, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.typeChanged).to.be.true
    })
  })

  describe('determineReleaseType', () => {
    it('returns null when diffs list is empty or all none', () => {
      expect(determineReleaseType([])).to.be.null
      const diffNone: VocabularyDiff = {
        vocabName: 'foo',
        filePath: 'foo.ts',
        changeType: 'none',
        added: [],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(determineReleaseType([diffNone])).to.be.null
    })

    it('returns "patch" when only patch changes are present', () => {
      const diffPatch: VocabularyDiff = {
        vocabName: 'foo',
        filePath: 'foo.ts',
        changeType: 'patch',
        added: [],
        removed: [],
        docChanged: true,
        typeChanged: false,
      }
      expect(determineReleaseType([diffPatch])).to.eq('patch')
    })

    it('returns "minor" when patch and minor changes are present', () => {
      const diffPatch: VocabularyDiff = {
        vocabName: 'foo',
        filePath: 'foo.ts',
        changeType: 'patch',
        added: [],
        removed: [],
        docChanged: true,
        typeChanged: false,
      }
      const diffMinor: VocabularyDiff = {
        vocabName: 'bar',
        filePath: 'bar.ts',
        changeType: 'minor',
        added: ['newTerm'],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(determineReleaseType([diffPatch, diffMinor])).to.eq('minor')
    })

    it('returns "major" when major changes are present along with patch/minor', () => {
      const diffMinor: VocabularyDiff = {
        vocabName: 'bar',
        filePath: 'bar.ts',
        changeType: 'minor',
        added: ['newTerm'],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      const diffMajor: VocabularyDiff = {
        vocabName: 'baz',
        filePath: 'baz.ts',
        changeType: 'major',
        added: [],
        removed: ['oldTerm'],
        docChanged: false,
        typeChanged: false,
      }
      expect(determineReleaseType([diffMinor, diffMajor])).to.eq('major')
    })
  })

  describe('formatVocabSummary', () => {
    it('formats single patch summary with updated documentation', () => {
      const diff: VocabularyDiff = {
        vocabName: 'cc',
        filePath: 'packages/lib/vocabularies/cc.ts',
        changeType: 'patch',
        added: [],
        removed: [],
        docChanged: true,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `cc`: updated documentation')
    })

    it('formats single minor summary with sum of added terms (singular)', () => {
      const diff: VocabularyDiff = {
        vocabName: 'vcard',
        filePath: 'packages/lib/vocabularies/vcard.ts',
        changeType: 'minor',
        added: ['AddressBook'],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `vcard`: added 1 term')
    })

    it('formats single minor summary with sum of added terms (plural)', () => {
      const diff: VocabularyDiff = {
        vocabName: 'vcard',
        filePath: 'packages/lib/vocabularies/vcard.ts',
        changeType: 'minor',
        added: ['AddressBook', 'WebID'],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `vcard`: added 2 terms')
    })

    it('formats major summary with sum of removed terms', () => {
      const diff: VocabularyDiff = {
        vocabName: 'constant',
        filePath: 'packages/lib/vocabularies/constant.ts',
        changeType: 'major',
        added: [],
        removed: ['ValueForElectronVolt', 'Pi'],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `constant`: removed 2 terms')
    })

    it('formats major summary with both removed and added term sums and doc updates', () => {
      const diff: VocabularyDiff = {
        vocabName: 'dtype',
        filePath: 'packages/lib/vocabularies/dtype.ts',
        changeType: 'major',
        added: ['dateUnion', 'defaultObjectValue', 'GMD_DTYPE', 'objectValue'],
        removed: ['position'],
        docChanged: true,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq(
        'Updated `dtype`: removed 1 term; added 4 terms; updated documentation',
      )
    })
  })

  describe('formatSummary', () => {
    it('formats multiple vocabularies summary grouped by version bump', () => {
      const diffs: VocabularyDiff[] = [
        {
          vocabName: 'cc',
          filePath: 'cc.ts',
          changeType: 'patch',
          added: [],
          removed: [],
          docChanged: true,
          typeChanged: false,
        },
        {
          vocabName: 'vcard',
          filePath: 'vcard.ts',
          changeType: 'minor',
          added: ['AddressBook'],
          removed: [],
          docChanged: false,
          typeChanged: false,
        },
        {
          vocabName: 'constant',
          filePath: 'constant.ts',
          changeType: 'major',
          added: ['Pi'],
          removed: ['ValueForElectronVolt'],
          docChanged: false,
          typeChanged: false,
        },
      ]
      const summary = formatSummary(diffs)
      expect(summary).to.eq(
        'Major:\n'
        + '- Updated `constant`: removed 1 term; added 1 term\n\n'
        + 'Minor:\n'
        + '- Updated `vcard`: added 1 term\n\n'
        + 'Patch:\n'
        + '- Updated `cc`: updated documentation',
      )
    })
  })

  describe('getPackageName', () => {
    it('reads package name from packages/lib/package.json', () => {
      const pkgName = getPackageName()
      expect(pkgName).to.eq('@tpluscode/rdf-ns-builders')
    })
  })

  describe('createCli', () => {
    it('configures commander CLI with include-breaking and dry-run options without package-name, base, head, or all', () => {
      const program = createCli()
      const optionNames = program.options.map(o => o.long)
      expect(optionNames).to.include('--include-breaking')
      expect(optionNames).to.include('--dry-run')
      expect(optionNames).to.not.include('--package-name')
      expect(optionNames).to.not.include('--all')
      expect(optionNames).to.not.include('--base')
      expect(optionNames).to.not.include('--head')
    })
  })

  describe('createVocabChangesets', () => {
    it('runs in dryRun mode without includeBreaking and does not create major changesets', async () => {
      const result = await createVocabChangesets({ dryRun: true })
      expect(result).to.have.property('changesets')
      expect(result).to.have.property('diffs')
      for (const cs of result.changesets) {
        expect(cs.changesetId).to.be.null
        expect(cs.releaseType).to.not.eq('major')
        expect(cs.summary).to.include(`Updated \`${cs.vocabName}\``)
      }
      const types = result.changesets.map(cs => cs.releaseType)
      const minorIndices = types.map((t, i) => t === 'minor' ? i : -1).filter(i => i >= 0)
      const patchIndices = types.map((t, i) => t === 'patch' ? i : -1).filter(i => i >= 0)
      if (minorIndices.length > 0 && patchIndices.length > 0) {
        expect(Math.max(...minorIndices)).to.be.lessThan(Math.min(...patchIndices))
      }
    })

    it('runs in dryRun mode with includeBreaking: true including major changesets grouped by bump order', async () => {
      const result = await createVocabChangesets({ includeBreaking: true, dryRun: true })
      expect(result).to.have.property('changesets')
      expect(result).to.have.property('diffs')
      for (const cs of result.changesets) {
        expect(cs.changesetId).to.be.null
        expect(cs.summary).to.include(`Updated \`${cs.vocabName}\``)
      }
      const types = result.changesets.map(cs => cs.releaseType)
      const majorIndices = types.map((t, i) => t === 'major' ? i : -1).filter(i => i >= 0)
      const minorIndices = types.map((t, i) => t === 'minor' ? i : -1).filter(i => i >= 0)
      const patchIndices = types.map((t, i) => t === 'patch' ? i : -1).filter(i => i >= 0)
      if (majorIndices.length > 0 && minorIndices.length > 0) {
        expect(Math.max(...majorIndices)).to.be.lessThan(Math.min(...minorIndices))
      }
      if (minorIndices.length > 0 && patchIndices.length > 0) {
        expect(Math.max(...minorIndices)).to.be.lessThan(Math.min(...patchIndices))
      }
    })
  })
})
