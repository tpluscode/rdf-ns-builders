import ts from 'typescript'

export default [ts.createImportDeclaration(
  undefined,
  undefined,
  ts.createImportClause(
    undefined,
    ts.createNamedImports([
      ts.createImportSpecifier(undefined, ts.createIdentifier('prefixes')),
    ])
  ),
  ts.createStringLiteral('@zazuko/rdf-vocabularies')
),
ts.createImportDeclaration(
  undefined,
  undefined,
  ts.createImportClause(
    ts.createIdentifier('namespace'),
    ts.createNamedImports([
      ts.createImportSpecifier(
        undefined,
        ts.createIdentifier('NamespaceBuilder')
      ),
    ])),
  ts.createStringLiteral('@rdfjs/namespace')
),
ts.createImportDeclaration(
  undefined,
  undefined,
  ts.createImportClause(
    undefined,
    ts.createNamedImports([
      ts.createImportSpecifier(undefined, ts.createIdentifier('NamedNode')),
    ])
  ),
  ts.createStringLiteral('rdf-js')
)]
