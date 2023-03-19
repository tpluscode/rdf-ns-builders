import { SourceFile, StructureKind, VariableDeclarationKind } from 'ts-morph'
import { identifier } from 'safe-identifier'
import { createMembers } from './interface.js'
import { toProperCase } from './strings.js'
import type { ImportedVocabularies } from '.'

export async function createPrefixFile(sourceFile: SourceFile, prefix: string, namespace: string, vocabs: ImportedVocabularies) {
  const interfaceName = identifier(toProperCase(prefix))

  sourceFile.addImportDeclaration({
    defaultImport: 'namespace',
    namedImports: [{
      name: 'NamespaceBuilder',
    }],
    moduleSpecifier: '@rdfjs/namespace',
  })

  sourceFile.addImportDeclaration({
    namedImports: [{
      name: 'NamedNode',
    }],
    moduleSpecifier: '@rdfjs/types',
  })

  const prefixInterface = sourceFile.addInterface({
    name: interfaceName,
  })

  prefixInterface.addMember({
    name: "''",
    kind: StructureKind.PropertySignature,
    type: `NamedNode<'${namespace}'>`,
  })
  prefixInterface.addMembers(await createMembers(prefix, vocabs))

  sourceFile.addVariableStatement({
    declarations: [{
      name: 'builder',
      initializer: `namespace("${namespace}")`,
      trailingTrivia: ' as any',
    }],
    declarationKind: VariableDeclarationKind.Const,
  })

  sourceFile.addVariableStatement({
    declarations: [{
      name: 'strict',
      initializer: 'builder',
      trailingTrivia: ` as NamespaceBuilder<keyof ${interfaceName}> & ${interfaceName}`,
    }],
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
  })

  sourceFile.addVariableStatement({
    declarations: [{
      name: 'loose',
      initializer: 'builder',
      trailingTrivia: ` as NamespaceBuilder & ${interfaceName}`,
    }],
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
  })
}
