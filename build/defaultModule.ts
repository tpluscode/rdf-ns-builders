import ts from 'typescript'
import vocabs from '@zazuko/rdf-vocabularies'

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
    Object.keys(vocabs.prefixes).map(createExport)
  )
}
