import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { execFileSync } from 'node:child_process'
import { Command } from 'commander'
import * as ts from 'typescript'
import { writeChangeset } from '@changesets/write'

export interface TermInfo {
  name: string
  type: string
  docs: string
}

export interface VocabularyParseResult {
  interfaceName: string
  terms: Map<string, TermInfo>
}

export type ChangeType = 'major' | 'minor' | 'patch' | 'none'

export interface VocabularyDiff {
  vocabName: string
  filePath: string
  changeType: ChangeType
  added: string[]
  removed: string[]
  docChanged: boolean
  typeChanged: boolean
}

export function normalizeDoc(doc: string): string {
  return doc
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trim().replace(/^\/\*\*?|\*\/$|^\*/g, '').trim())
    .filter(Boolean)
    .join(' ')
}

export function parseVocabulary(content: string, filename = 'vocab.ts'): VocabularyParseResult {
  const sourceFile = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true)
  const terms = new Map<string, TermInfo>()
  let interfaceName = ''

  function visit(node: ts.Node) {
    if (ts.isInterfaceDeclaration(node)) {
      interfaceName = node.name.text
      for (const member of node.members) {
        if (ts.isPropertySignature(member)) {
          const name = member.name.getText(sourceFile).replace(/^["'`]|["'`]$/g, '')
          const type = member.type ? member.type.getText(sourceFile).trim() : ''

          let docs = ''
          const jsDoc = (member as { jsDoc?: ts.JSDoc[] }).jsDoc
          if (jsDoc && jsDoc.length > 0) {
            docs = jsDoc.map(d => d.getText(sourceFile).trim()).join('\n')
          }
          else {
            const commentRanges = ts.getLeadingCommentRanges(sourceFile.text, member.pos)
            if (commentRanges && commentRanges.length > 0) {
              docs = commentRanges.map(r => sourceFile.text.substring(r.pos, r.end).trim()).join('\n')
            }
          }

          terms.set(name, { name, type, docs })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return { interfaceName, terms }
}

export function compareVocabularies(
  oldContent: string | null,
  newContent: string | null,
  vocabName: string,
  filePath = `packages/lib/vocabularies/${vocabName}.ts`,
): VocabularyDiff {
  if (oldContent === null && newContent === null) {
    return {
      vocabName,
      filePath,
      changeType: 'none',
      added: [],
      removed: [],
      docChanged: false,
      typeChanged: false,
    }
  }

  if (oldContent === null && newContent !== null) {
    const newParsed = parseVocabulary(newContent, `${vocabName}.ts`)
    const added = [...newParsed.terms.keys()].filter(k => k !== '')
    return {
      vocabName,
      filePath,
      changeType: added.length > 0 ? 'minor' : 'patch',
      added,
      removed: [],
      docChanged: false,
      typeChanged: false,
    }
  }

  if (oldContent !== null && newContent === null) {
    const oldParsed = parseVocabulary(oldContent, `${vocabName}.ts`)
    const removed = [...oldParsed.terms.keys()].filter(k => k !== '')
    return {
      vocabName,
      filePath,
      changeType: 'major',
      added: [],
      removed,
      docChanged: false,
      typeChanged: false,
    }
  }

  const oldParsed = parseVocabulary(oldContent!, `${vocabName}.ts`)
  const newParsed = parseVocabulary(newContent!, `${vocabName}.ts`)

  const oldKeys = new Set(oldParsed.terms.keys())
  const newKeys = new Set(newParsed.terms.keys())

  const added = [...newKeys].filter(k => !oldKeys.has(k) && k !== '')
  const removed = [...oldKeys].filter(k => !newKeys.has(k) && k !== '')

  let docChanged = false
  let typeChanged = false

  // Check base namespace property ''
  const oldBase = oldParsed.terms.get('')
  const newBase = newParsed.terms.get('')
  if (oldBase && newBase && oldBase.type !== newBase.type) {
    typeChanged = true
  }
  else if ((oldBase && !newBase) || (!oldBase && newBase)) {
    typeChanged = true
  }

  for (const key of newKeys) {
    if (oldKeys.has(key) && key !== '') {
      const oldTerm = oldParsed.terms.get(key)!
      const newTerm = newParsed.terms.get(key)!

      if (oldTerm.docs !== newTerm.docs || normalizeDoc(oldTerm.docs) !== normalizeDoc(newTerm.docs)) {
        docChanged = true
      }
      if (oldTerm.type !== newTerm.type) {
        typeChanged = true
      }
    }
  }

  let changeType: ChangeType = 'none'
  if (removed.length > 0 || typeChanged) {
    changeType = 'major'
  }
  else if (added.length > 0) {
    changeType = 'minor'
  }
  else if (docChanged || oldContent !== newContent) {
    changeType = 'patch'
  }

  return {
    vocabName,
    filePath,
    changeType,
    added,
    removed,
    docChanged,
    typeChanged,
  }
}

export function determineReleaseType(diffs: VocabularyDiff[]): 'major' | 'minor' | 'patch' | null {
  const activeDiffs = diffs.filter(d => d.changeType !== 'none')
  if (activeDiffs.length === 0) {
    return null
  }

  if (activeDiffs.some(d => d.changeType === 'major')) {
    return 'major'
  }
  if (activeDiffs.some(d => d.changeType === 'minor')) {
    return 'minor'
  }
  return 'patch'
}

export function formatVocabSummary(diff: VocabularyDiff): string {
  const parts: string[] = []
  if (diff.removed.length > 0) {
    parts.push(`removed ${diff.removed.length} ${diff.removed.length === 1 ? 'term' : 'terms'}`)
  }
  if (diff.typeChanged) {
    parts.push('modified term types/namespace')
  }
  if (diff.added.length > 0) {
    parts.push(`added ${diff.added.length} ${diff.added.length === 1 ? 'term' : 'terms'}`)
  }
  if (diff.docChanged) {
    parts.push('updated documentation')
  }

  if (parts.length === 0) {
    return `Updated \`${diff.vocabName}\``
  }

  return `Updated \`${diff.vocabName}\`: ${parts.join('; ')}`
}

export function formatSummary(diffs: VocabularyDiff[] | VocabularyDiff): string {
  if (!Array.isArray(diffs)) {
    return formatVocabSummary(diffs)
  }

  const activeDiffs = diffs.filter(d => d.changeType !== 'none')
  if (activeDiffs.length === 0) {
    return ''
  }

  const bumpOrder: Array<'major' | 'minor' | 'patch'> = ['major', 'minor', 'patch']
  const sections: string[] = []

  for (const bump of bumpOrder) {
    const bumpDiffs = activeDiffs.filter(d => d.changeType === bump)
    if (bumpDiffs.length > 0) {
      const label = bump.charAt(0).toUpperCase() + bump.slice(1)
      const lines = bumpDiffs.map(diff => `- ${formatVocabSummary(diff)}`)
      sections.push(`${label}:\n${lines.join('\n')}`)
    }
  }

  return sections.join('\n\n')
}

export interface InspectOptions {
  cwd?: string
}

export function inspectGitChanges(options: InspectOptions = {}): VocabularyDiff[] {
  const cwd = options.cwd || process.cwd()

  const diffOutput = execFileSync(
    'git',
    ['diff', 'HEAD', '--name-status', '--', 'packages/lib/vocabularies/*.ts'],
    { cwd, encoding: 'utf8' },
  )

  const changedFiles = new Map<string, 'A' | 'M' | 'D' | 'R'>()

  for (const line of diffOutput.trim().split('\n').filter(Boolean)) {
    const parts = line.split(/\t+/)
    const status = parts[0][0] as 'A' | 'M' | 'D' | 'R'
    const filePath = parts[status === 'R' ? 2 : 1]
    if (filePath && filePath.endsWith('.ts')) {
      changedFiles.set(filePath, status)
    }
  }

  const untrackedOutput = execFileSync(
    'git',
    ['ls-files', '--others', '--exclude-standard', 'packages/lib/vocabularies/*.ts'],
    { cwd, encoding: 'utf8' },
  )
  for (const line of untrackedOutput.trim().split('\n').filter(Boolean)) {
    if (line.endsWith('.ts')) {
      changedFiles.set(line.trim(), 'A')
    }
  }

  const diffs: VocabularyDiff[] = []

  for (const [filePath, status] of changedFiles.entries()) {
    const vocabName = path.basename(filePath, '.ts')
    let oldContent: string | null = null
    let newContent: string | null = null

    if (status !== 'A') {
      try {
        oldContent = execFileSync('git', ['show', `HEAD:${filePath}`], { cwd, encoding: 'utf8' })
      }
      catch {
        oldContent = null
      }
    }

    if (status !== 'D') {
      const fullPath = path.resolve(cwd, filePath)
      if (fs.existsSync(fullPath)) {
        newContent = fs.readFileSync(fullPath, 'utf8')
      }
    }

    const diff = compareVocabularies(oldContent, newContent, vocabName, filePath)
    diffs.push(diff)
  }

  return diffs.sort((a, b) => a.vocabName.localeCompare(b.vocabName))
}

export interface CreateChangesetsOptions extends InspectOptions {
  dryRun?: boolean
  packageName?: string
  includeBreaking?: boolean
}

export function getPackageName(cwd = process.cwd()): string {
  const pkgPath = path.resolve(cwd, 'packages/lib/package.json')
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
      if (pkg.name) {
        return pkg.name
      }
    }
    catch {
      // fallback
    }
  }
  return '@tpluscode/rdf-ns-builders'
}

export interface CreatedChangeset {
  vocabName: string
  releaseType: 'major' | 'minor' | 'patch'
  summary: string
  changesetId: string | null
  diff: VocabularyDiff
}

export interface CreateChangesetsResult {
  changesets: CreatedChangeset[]
  diffs: VocabularyDiff[]
}

export async function createVocabChangesets(options: CreateChangesetsOptions = {}): Promise<CreateChangesetsResult> {
  const cwd = options.cwd || process.cwd()
  const packageName = options.packageName || getPackageName(cwd)

  const diffs = inspectGitChanges({ cwd })
  const activeDiffs = diffs.filter(d => d.changeType !== 'none')

  if (activeDiffs.length === 0) {
    console.log('No vocabulary changes detected in packages/lib/vocabularies/*.ts.')
    return {
      changesets: [],
      diffs,
    }
  }

  const eligibleDiffs = activeDiffs.filter(d => options.includeBreaking || d.changeType !== 'major')

  if (eligibleDiffs.length === 0) {
    console.log('No eligible vocabulary changes detected (use --include-breaking to create major changesets).')
    return {
      changesets: [],
      diffs,
    }
  }

  console.log(`Detected changes in ${eligibleDiffs.length} vocabularies for ${packageName}:`)
  const created: CreatedChangeset[] = []
  const bumpOrder: Array<'major' | 'minor' | 'patch'> = ['major', 'minor', 'patch']

  for (const bump of bumpOrder) {
    if (bump === 'major' && !options.includeBreaking) {
      continue
    }

    const bumpDiffs = eligibleDiffs.filter(d => d.changeType === bump)
    if (bumpDiffs.length === 0) {
      continue
    }

    const label = bump.charAt(0).toUpperCase() + bump.slice(1)
    console.log(`\n${label}:`)

    for (const diff of bumpDiffs) {
      const releaseType = diff.changeType as 'major' | 'minor' | 'patch'
      const summary = formatVocabSummary(diff)
      console.log(`  - ${summary}`)

      if (options.dryRun) {
        created.push({
          vocabName: diff.vocabName,
          releaseType,
          summary,
          changesetId: null,
          diff,
        })
      }
      else {
        const changesetId = await writeChangeset(
          {
            releases: [
              {
                name: packageName,
                type: releaseType,
              },
            ],
            summary,
          },
          cwd,
        )
        const changesetFile = path.join('.changeset', `${changesetId}.md`)
        console.log(`    -> Created changeset: ${changesetFile}`)

        try {
          execFileSync('git', ['add', changesetFile, diff.filePath], { cwd, encoding: 'utf8' })
          console.log(`    -> Staged ${changesetFile} and ${diff.filePath}`)
        }
        catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err)
          console.error(`    -> Warning: Failed to stage ${changesetFile} or ${diff.filePath}:`, msg)
        }

        created.push({
          vocabName: diff.vocabName,
          releaseType,
          summary,
          changesetId,
          diff,
        })
      }
    }
  }

  if (options.dryRun) {
    console.log('\n[dry-run] Changeset files were not written or staged.')
  }

  return {
    changesets: created,
    diffs,
  }
}

export const createVocabChangeset = createVocabChangesets

export function createCli(): Command {
  const program = new Command()
    .description('Inspect changes in packages/lib/vocabularies/*.ts and generate changesets per vocabulary.')
    .option('-b, --include-breaking', 'Include breaking changes (major bump changesets)', false)
    .option('-d, --dry-run', 'Print changes without writing changeset files or staging', false)
    .action(async (options) => {
      try {
        await createVocabChangesets({
          includeBreaking: options.includeBreaking,
          dryRun: options.dryRun,
        })
      }
      catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error)
        console.error('Error creating changesets:', message)
        process.exit(1)
      }
    })

  return program
}

if (process.argv[1] && url.fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  await createCli().parseAsync(process.argv)
}
