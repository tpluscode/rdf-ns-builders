import { resolve } from 'path'
import { Project } from 'ts-morph'
import type * as RdfVocabularies from '@zazuko/vocabularies'
import { createPrefixFile } from './prefix.js'
import { createDefaultModule, createLooseModule } from './modules.js'

const project = new Project()

interface Build {
  outDir: string
  vocabsPackage: string
}

export type ImportedVocabularies = Pick<typeof RdfVocabularies, 'vocabularies' | 'prefixes'>

export async function build({ outDir, vocabsPackage }: Build): Promise<void> {
  const packagePath = vocabsPackage.startsWith('.') ? resolve(process.cwd(), vocabsPackage) : vocabsPackage
  const rdfVocabularies: ImportedVocabularies = await import(packagePath)

  const promises = Object.entries(rdfVocabularies.prefixes).map(([prefix, namespace]) => {
    const sourceFile = project.createSourceFile(resolve(outDir, 'vocabularies', `${prefix}.ts`), undefined, { overwrite: true })

    return createPrefixFile(sourceFile, prefix, namespace, rdfVocabularies)
  })

  await Promise.all(promises)

  const defaultModule = project.createSourceFile(resolve(outDir, 'strict.ts'), undefined, { overwrite: true })
  createDefaultModule(defaultModule, rdfVocabularies.prefixes)

  const looseModule = project.createSourceFile(resolve(outDir, 'loose.ts'), undefined, { overwrite: true })
  createLooseModule(looseModule, rdfVocabularies.prefixes)

  await project.save()
}
