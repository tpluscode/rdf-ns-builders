import * as ts from 'typescript'
import { prefixes } from '@zazuko/rdf-vocabularies'

function createExport(prefix: string) {
  return ts.createExportDeclaration(
    undefined,
    undefined,
    undefined,
    ts.createStringLiteral(`./vocabularies/${prefix}`)
  )
}

export function createDefaultModule() {
  return ts.updateSourceFileNode(
    ts.createSourceFile('index.ts', '', ts.ScriptTarget.Latest),
    Object.keys(prefixes).map(createExport)
  )
}
