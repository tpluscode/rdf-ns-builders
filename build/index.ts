import { writeFileSync } from 'fs'
import { resolve } from 'path'
import ts from 'typescript'
import vocabs from '@zazuko/rdf-vocabularies'
import { createPrefixFile } from './prefix.js'
import { createDefaultModule } from './defaultModule.js'

const printer = ts.createPrinter()
const outDir = resolve(process.argv[2])

const promises = Object.entries(vocabs.prefixes).map(([prefix, namespace]) => {
  return createPrefixFile(prefix, namespace).then(file => {
    writeFileSync(resolve(outDir, 'vocabularies', file.fileName), printer.printFile(file))
  })
})

Promise.all(promises)
  .then(() => writeFileSync(resolve(outDir, 'index.ts'), printer.printFile(createDefaultModule())))
