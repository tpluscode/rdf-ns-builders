import ts from 'typescript'

export default [ts.createImportDeclaration(
  undefined,
  undefined,
  ts.createImportClause(
    ts.createIdentifier('namespace'),
    ts.createNamedImports([
      ts.createImportSpecifier(
        undefined,
        ts.createIdentifier('NamespaceBuilder'),
      ),
    ])),
  ts.createStringLiteral('@rdf-esm/namespace'),
),
ts.createImportDeclaration(
  undefined,
  undefined,
  ts.createImportClause(
    undefined,
    ts.createNamedImports([
      ts.createImportSpecifier(undefined, ts.createIdentifier('NamedNode')),
    ]),
  ),
  ts.createStringLiteral('rdf-js'),
)]
