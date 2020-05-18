import ts from 'typescript'
import imports from './imports.js'
import { generateInterface } from './interface.js'
import { aliases, toProperCase } from './strings.js'

export async function createPrefixFile(prefix: string, namespace: string) {
  return ts.updateSourceFileNode(
    ts.createSourceFile(`${prefix}.ts`, '', ts.ScriptTarget.Latest),
    [
      ...imports,
      await generateInterface(prefix),
      ts.createVariableStatement(
        [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.createVariableDeclarationList(
          [
            ts.createVariableDeclaration(
              ts.createIdentifier(aliases[prefix] || prefix),
              ts.createTypeReferenceNode(
                ts.createIdentifier(toProperCase(prefix)),
                undefined
              ),
              ts.createAsExpression(
                ts.createCall(ts.createIdentifier('namespace'), undefined, [
                  ts.createStringLiteral(namespace),
                ]),
                ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
              )
            ),
          ],
          ts.NodeFlags.Const
        )
      ),
    ]
  )
}
