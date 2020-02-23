import { writeFileSync } from 'fs'
import { resolve } from 'path'
import ts from 'typescript'
import { prefixes } from '@zazuko/rdf-vocabularies'
import { createPrefixFile } from './prefix'
import { createDefaultModule } from './defaultModule'

const printer = ts.createPrinter()
const outDir = resolve(process.argv[2])

const promises = Object.keys(prefixes).map(prefix => {
  return createPrefixFile(prefix).then(file => {
    writeFileSync(resolve(outDir, 'vocabularies', file.fileName), printer.printFile(file))
  })
})

Promise.all(promises)
  .then(() => writeFileSync(resolve(outDir, 'index.ts'), printer.printFile(createDefaultModule())))
