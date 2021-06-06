import { writeFileSync, ensureDirSync } from 'fs-extra'
import { resolve } from 'path'
import ts from 'typescript'
import type * as RdfVocabularies from '@zazuko/rdf-vocabularies'
import { createPrefixFile } from './prefix'
import { createDefaultModule } from './defaultModule'

const printer = ts.createPrinter()

interface Build {
  outDir: string
  vocabsPackage: string
}

export async function build({ outDir, vocabsPackage }: Build): Promise<void> {
  const rdfVocabularies: typeof RdfVocabularies = await import(vocabsPackage)

  ensureDirSync(outDir)

  const promises = Object.entries(rdfVocabularies.prefixes).map(([prefix, namespace]) => {
    return createPrefixFile(prefix, namespace, rdfVocabularies).then(file => {
      writeFileSync(resolve(outDir, file.fileName), printer.printFile(file))
    })
  })

  await Promise.all(promises)
  writeFileSync(resolve(outDir, 'index.ts'), printer.printFile(createDefaultModule(rdfVocabularies.prefixes)))
}
