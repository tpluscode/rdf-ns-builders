import { resolve } from 'path'
import { Project } from 'ts-morph'
import type * as RdfVocabularies from '@zazuko/rdf-vocabularies'
import { createPrefixFile } from './prefix'
import { createDefaultModule, createStrictModule } from './modules'

const project = new Project()

interface Build {
  outDir: string
  vocabsPackage: string
}

export async function build({ outDir, vocabsPackage }: Build): Promise<void> {
  const rdfVocabularies: typeof RdfVocabularies = await import(vocabsPackage)

  const promises = Object.entries(rdfVocabularies.prefixes).map(([prefix, namespace]) => {
    const sourceFile = project.createSourceFile(resolve(outDir, 'vocabularies', `${prefix}.ts`), undefined, { overwrite: true })

    return createPrefixFile(sourceFile, prefix, namespace, rdfVocabularies)
  })

  await Promise.all(promises)

  const defaultModule = project.createSourceFile(resolve(outDir, 'index.ts'), undefined, { overwrite: true })
  createDefaultModule(defaultModule, rdfVocabularies.prefixes)

  const strictModule = project.createSourceFile(resolve(outDir, 'strict.ts'), undefined, { overwrite: true })
  createStrictModule(strictModule, rdfVocabularies.prefixes)

  await project.save()
}
