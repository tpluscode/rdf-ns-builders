import { ExportDeclarationStructure, OptionalKind, SourceFile } from 'ts-morph'
import { identifier } from 'safe-identifier'

function createExport(prefix: string, exportName: string): OptionalKind<ExportDeclarationStructure> {
  return {
    namedExports: [{
      name: exportName,
      alias: identifier(prefix),
    }],
    moduleSpecifier: `./vocabularies/${prefix}`,
  }
}

export function createLooseModule(sourceFile: SourceFile, prefixes: Record<string, string>): void {
  Object.keys(prefixes).forEach(prefix => {
    sourceFile.addExportDeclaration(createExport(prefix, 'loose'))
  })
}

export function createDefaultModule(sourceFile: SourceFile, prefixes: Record<string, string>): void {
  Object.keys(prefixes).forEach(prefix => {
    sourceFile.addExportDeclaration(createExport(prefix, 'strict'))
  })
}
