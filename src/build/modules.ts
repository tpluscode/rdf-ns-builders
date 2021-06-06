import { ExportDeclarationStructure, OptionalKind, SourceFile } from 'ts-morph'
import { aliases } from './strings'

function createExport(prefix: string, exportName: string): OptionalKind<ExportDeclarationStructure> {
  return {
    namedExports: [{
      name: exportName,
      alias: aliases[prefix] || prefix,
    }],
    moduleSpecifier: `./vocabularies/${prefix}`,
  }
}

export function createDefaultModule(sourceFile: SourceFile, prefixes: Record<string, string>): void {
  Object.keys(prefixes).forEach(prefix => {
    sourceFile.addExportDeclaration(createExport(prefix, 'loose'))
  })
}

export function createStrictModule(sourceFile: SourceFile, prefixes: Record<string, string>): void {
  Object.keys(prefixes).forEach(prefix => {
    sourceFile.addExportDeclaration(createExport(prefix, 'strict'))
  })
}
