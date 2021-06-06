import * as ts from 'typescript'

function createExport(prefix: string) {
  return ts.createExportDeclaration(
    undefined,
    undefined,
    undefined,
    ts.createStringLiteral(`./vocabularies/${prefix}`),
  )
}

export function createDefaultModule(prefixes: Record<string, string>) {
  return ts.updateSourceFileNode(
    ts.createSourceFile('index.ts', '', ts.ScriptTarget.Latest),
    Object.keys(prefixes).map(createExport),
  )
}
