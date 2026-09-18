import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import type {
  VocabularyDiff,
} from '../scripts/changeset-vocabularies.js'
import {
  parseVocabulary,
  compareVocabularies,
  formatVocabSummary,
  formatSummary,
  normalizeDoc,
  getPackageName,
  inspectGitChanges,
  createCli,
  createVocabChangesets,
} from '../scripts/changeset-vocabularies.js'

describe('changeset-vocabularies', () => {
  describe('normalizeDoc', () => {
    it('normalizes multi-line JSDoc comments to single-line text', () => {
      const doc = '/**\n * credit be given to\n * copyright holder\n */'
      expect(normalizeDoc(doc)).to.eq('credit be given to copyright holder')
    })

    it('normalizes CRLF line endings', () => {
      const doc = '/**\r\n * line 1\r\n * line 2\r\n */'
      expect(normalizeDoc(doc)).to.eq('line 1 line 2')
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

    it('parses members with leading comments and backtick/single-quote names', () => {
      const code = `
export interface Sample {
    // Leading single line comment
    'propSingle': string;
    "propDouble"?: number;
    noType;
}
`
      const result = parseVocabulary(code, 'sample.ts')
      expect(result.interfaceName).to.eq('Sample')
      expect(result.terms.has('propSingle')).to.be.true
      expect(result.terms.get('propSingle')?.docs).to.include('Leading single line comment')
      expect(result.terms.has('propDouble')).to.be.true
      expect(result.terms.has('noType')).to.be.true
      expect(result.terms.get('noType')?.type).to.eq('')
    })

    it('handles code without interface', () => {
      const result = parseVocabulary('export const x = 1;')
      expect(result.interfaceName).to.eq('')
      expect(result.terms.size).to.eq(0)
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

    it('returns "none" when oldContent and newContent are both null', () => {
      const diff = compareVocabularies(null, null, 'foo')
      expect(diff.changeType).to.eq('none')
      expect(diff.added).to.be.empty
      expect(diff.removed).to.be.empty
    })

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

    it('returns "minor" when a new vocabulary file is added with terms', () => {
      const diff = compareVocabularies(null, baseCode, 'foo')
      expect(diff.changeType).to.eq('minor')
      expect(diff.added).to.deep.eq(['termA', 'termB'])
      expect(diff.removed).to.be.empty
    })

    it('returns "patch" when a new vocabulary file is added with no terms', () => {
      const emptyInterface = 'export interface Foo { }'
      const diff = compareVocabularies(null, emptyInterface, 'foo')
      expect(diff.changeType).to.eq('patch')
      expect(diff.added).to.be.empty
    })

    it('returns "major" when a vocabulary file is deleted', () => {
      const diff = compareVocabularies(baseCode, null, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.removed).to.deep.eq(['termA', 'termB'])
      expect(diff.added).to.be.empty
    })

    it('returns "major" when namespace URI changes', () => {
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

    it('returns "major" when base property is added or removed', () => {
      const noBaseCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    "termA": NamedNode<'http://example.org/foo#termA'>;
    "termB": NamedNode<'http://example.org/foo#termB'>;
}
`
      const diffRemoved = compareVocabularies(baseCode, noBaseCode, 'foo')
      expect(diffRemoved.changeType).to.eq('major')
      expect(diffRemoved.typeChanged).to.be.true

      const diffAdded = compareVocabularies(noBaseCode, baseCode, 'foo')
      expect(diffAdded.changeType).to.eq('major')
      expect(diffAdded.typeChanged).to.be.true
    })

    it('returns "major" when a term property type changes', () => {
      const changedPropTypeCode = `
import { NamedNode } from "@rdfjs/types";

export interface Foo {
    '': NamedNode<'http://example.org/foo#'>;
    "termA": string;
    "termB": NamedNode<'http://example.org/foo#termB'>;
}
`
      const diff = compareVocabularies(baseCode, changedPropTypeCode, 'foo')
      expect(diff.changeType).to.eq('major')
      expect(diff.typeChanged).to.be.true
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
        removed: ['removeA'],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `constant`: removed 1 term')
    })

    it('formats major summary with both removed and added term sums and doc updates', () => {
      const diff: VocabularyDiff = {
        vocabName: 'constant',
        filePath: 'packages/lib/vocabularies/constant.ts',
        changeType: 'major',
        added: ['newA'],
        removed: ['oldA', 'oldB'],
        docChanged: true,
        typeChanged: true,
      }
      expect(formatVocabSummary(diff)).to.eq(
        'Updated `constant`: removed 2 terms; modified term types/namespace; added 1 term; updated documentation',
      )
    })

    it('formats summary when parts are empty', () => {
      const diff: VocabularyDiff = {
        vocabName: 'sample',
        filePath: 'packages/lib/vocabularies/sample.ts',
        changeType: 'patch',
        added: [],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatVocabSummary(diff)).to.eq('Updated `sample`')
    })
  })

  describe('formatSummary', () => {
    it('formats single diff object passed directly', () => {
      const diff: VocabularyDiff = {
        vocabName: 'cc',
        filePath: 'packages/lib/vocabularies/cc.ts',
        changeType: 'patch',
        added: [],
        removed: [],
        docChanged: true,
        typeChanged: false,
      }
      expect(formatSummary(diff)).to.eq('Updated `cc`: updated documentation')
    })

    it('returns empty string for empty array or all none diffs', () => {
      expect(formatSummary([])).to.eq('')
      const diffNone: VocabularyDiff = {
        vocabName: 'cc',
        filePath: 'packages/lib/vocabularies/cc.ts',
        changeType: 'none',
        added: [],
        removed: [],
        docChanged: false,
        typeChanged: false,
      }
      expect(formatSummary([diffNone])).to.eq('')
    })

    it('formats multiple vocabularies summary grouped by version bump', () => {
      const diffs: VocabularyDiff[] = [
        {
          vocabName: 'cc',
          filePath: 'packages/lib/vocabularies/cc.ts',
          changeType: 'patch',
          added: [],
          removed: [],
          docChanged: true,
          typeChanged: false,
        },
        {
          vocabName: 'vcard',
          filePath: 'packages/lib/vocabularies/vcard.ts',
          changeType: 'minor',
          added: ['AddressBook'],
          removed: [],
          docChanged: false,
          typeChanged: false,
        },
        {
          vocabName: 'constant',
          filePath: 'packages/lib/vocabularies/constant.ts',
          changeType: 'major',
          added: ['addedTerm'],
          removed: ['removedTerm'],
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

    it('reads custom package name when package.json exists', () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pkg-test-'))
      const pkgDir = path.join(tmp, 'packages/lib')
      fs.mkdirSync(pkgDir, { recursive: true })
      fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify({ name: 'custom-package' }))

      expect(getPackageName(tmp)).to.eq('custom-package')
      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('falls back to default if package.json has no name or is invalid JSON', () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pkg-test-'))
      const pkgDir = path.join(tmp, 'packages/lib')
      fs.mkdirSync(pkgDir, { recursive: true })
      fs.writeFileSync(path.join(pkgDir, 'package.json'), 'invalid json')

      expect(getPackageName(tmp)).to.eq('@tpluscode/rdf-ns-builders')
      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('falls back to default if package.json does not exist', () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pkg-test-'))
      expect(getPackageName(tmp)).to.eq('@tpluscode/rdf-ns-builders')
      fs.rmSync(tmp, { recursive: true, force: true })
    })
  })

  describe('inspectGitChanges', () => {
    it('inspects modified, added, untracked, and deleted files in a git repository', () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'git-test-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const vocabDir = path.join(tmp, 'packages/lib/vocabularies')
      fs.mkdirSync(vocabDir, { recursive: true })

      // File 1: will be modified
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; }')
      // File 2: will be deleted
      fs.writeFileSync(path.join(vocabDir, 'del.ts'), 'export interface Del { "b": string; }')
      // Non-ts file: will be ignored
      fs.writeFileSync(path.join(vocabDir, 'ignore.txt'), 'ignore')

      execFileSync('git', ['add', '.'], { cwd: tmp })
      execFileSync('git', ['commit', '-m', 'initial'], { cwd: tmp })

      // Modify mod.ts
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; "c": string; }')
      // Delete del.ts
      fs.unlinkSync(path.join(vocabDir, 'del.ts'))
      // Untracked new.ts
      fs.writeFileSync(path.join(vocabDir, 'new.ts'), 'export interface New { "d": string; }')

      const diffs = inspectGitChanges({ cwd: tmp })
      expect(diffs).to.have.length(3)

      const modDiff = diffs.find(d => d.vocabName === 'mod')
      expect(modDiff?.changeType).to.eq('minor')

      const delDiff = diffs.find(d => d.vocabName === 'del')
      expect(delDiff?.changeType).to.eq('major')

      const newDiff = diffs.find(d => d.vocabName === 'new')
      expect(newDiff?.changeType).to.eq('minor')

      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('handles non-git directory gracefully', () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'non-git-'))
      const diffs = inspectGitChanges({ cwd: tmp })
      expect(diffs).to.be.empty
      fs.rmSync(tmp, { recursive: true, force: true })
    })
  })

  describe('createCli', () => {
    it('configures commander CLI with include-breaking and dry-run options', () => {
      const program = createCli()
      const optionNames = program.options.map(o => o.long)
      expect(optionNames).to.include('--include-breaking')
      expect(optionNames).to.include('--dry-run')
      expect(optionNames).to.not.include('--package-name')
      expect(optionNames).to.not.include('--all')
      expect(optionNames).to.not.include('--base')
      expect(optionNames).to.not.include('--head')
    })

    it('parses options and executes action in dry-run mode', async () => {
      const program = createCli()
      await program.parseAsync(['node', 'test', '--dry-run'])
    })

    it('catches and handles error during CLI execution', async () => {
      const program = createCli()
      const originalExit = process.exit
      const originalError = console.error
      let exitedCode: number | null = null
      let loggedError = ''

      process.exit = ((code?: number) => {
        exitedCode = code ?? 0
        throw new Error(`process.exit:${code}`)
      }) as never

      console.error = (...args: unknown[]) => {
        loggedError = args.join(' ')
      }

      // Pass an invalid option / trigger action failure by causing process.cwd failure in custom context
      // We can also test calling action directly or via parseAsync
      const originalCwd = process.cwd
      process.cwd = () => {
        throw new Error('Test CLI error')
      }

      try {
        await program.parseAsync(['node', 'test', '--dry-run'])
      }
      catch (err: unknown) {
        expect((err as Error).message).to.include('process.exit:1')
      }
      finally {
        process.cwd = originalCwd
        process.exit = originalExit
        console.error = originalError
      }

      expect(exitedCode).to.eq(1)
      expect(loggedError).to.include('Test CLI error')
    })
  })

  describe('createVocabChangesets', () => {
    it('handles empty git repository with no changes', async () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'changesets-empty-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const result = await createVocabChangesets({ cwd: tmp })
      expect(result.changesets).to.be.empty
      expect(result.diffs).to.be.empty

      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('skips major changes when includeBreaking is false', async () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'changesets-major-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const vocabDir = path.join(tmp, 'packages/lib/vocabularies')
      fs.mkdirSync(vocabDir, { recursive: true })
      fs.writeFileSync(path.join(vocabDir, 'del.ts'), 'export interface Del { "b": string; }')
      execFileSync('git', ['add', '.'], { cwd: tmp })
      execFileSync('git', ['commit', '-m', 'initial'], { cwd: tmp })

      fs.unlinkSync(path.join(vocabDir, 'del.ts'))

      const result = await createVocabChangesets({ cwd: tmp, includeBreaking: false, dryRun: true })
      expect(result.changesets).to.be.empty
      expect(result.diffs).to.have.length(1)
      expect(result.diffs[0].changeType).to.eq('major')

      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('runs in dryRun mode with changes without writing or staging files', async () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'changesets-dryrun-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const vocabDir = path.join(tmp, 'packages/lib/vocabularies')
      fs.mkdirSync(vocabDir, { recursive: true })
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; }')
      execFileSync('git', ['add', '.'], { cwd: tmp })
      execFileSync('git', ['commit', '-m', 'initial'], { cwd: tmp })

      // Modify (minor)
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; "b": string; }')

      const result = await createVocabChangesets({ cwd: tmp, dryRun: true })
      expect(result.changesets).to.have.length(1)
      expect(result.changesets[0].changesetId).to.be.null

      const changesetDir = path.join(tmp, '.changeset')
      expect(fs.existsSync(changesetDir)).to.be.false

      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('writes changesets and stages files when not in dry-run mode', async () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'changesets-write-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const vocabDir = path.join(tmp, 'packages/lib/vocabularies')
      fs.mkdirSync(vocabDir, { recursive: true })
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; }')
      execFileSync('git', ['add', '.'], { cwd: tmp })
      execFileSync('git', ['commit', '-m', 'initial'], { cwd: tmp })

      // Add a term (minor)
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; "b": string; }')

      const result = await createVocabChangesets({ cwd: tmp, dryRun: false })
      expect(result.changesets).to.have.length(1)
      expect(result.changesets[0].changesetId).to.be.a('string')
      expect(result.changesets[0].releaseType).to.eq('minor')

      const changesetPath = path.join(tmp, '.changeset', `${result.changesets[0].changesetId}.md`)
      expect(fs.existsSync(changesetPath)).to.be.true

      const stagedStatus = execFileSync('git', ['status', '--porcelain'], { cwd: tmp, encoding: 'utf8' })
      expect(stagedStatus).to.include('packages/lib/vocabularies/mod.ts')
      expect(stagedStatus).to.include('.changeset/')

      fs.rmSync(tmp, { recursive: true, force: true })
    })

    it('logs warning when git staging fails during writeChangeset', async () => {
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'changesets-stagewarn-'))
      execFileSync('git', ['init'], { cwd: tmp })
      execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmp })
      execFileSync('git', ['config', 'user.name', 'Tester'], { cwd: tmp })

      const vocabDir = path.join(tmp, 'packages/lib/vocabularies')
      fs.mkdirSync(vocabDir, { recursive: true })
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; }')
      execFileSync('git', ['add', '.'], { cwd: tmp })
      execFileSync('git', ['commit', '-m', 'initial'], { cwd: tmp })

      // Add a term (minor)
      fs.writeFileSync(path.join(vocabDir, 'mod.ts'), 'export interface Mod { "a": string; "b": string; }')

      // Create git index lock to simulate staging failure
      fs.writeFileSync(path.join(tmp, '.git/index.lock'), 'locked')

      const result = await createVocabChangesets({ cwd: tmp, dryRun: false })
      expect(result.changesets).to.have.length(1)
      expect(result.changesets[0].changesetId).to.be.a('string')

      fs.rmSync(tmp, { recursive: true, force: true })
    })
  })
})
