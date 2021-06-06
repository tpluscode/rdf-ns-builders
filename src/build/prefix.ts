import ts from 'typescript'
import type * as RdfVocabularies from '@zazuko/rdf-vocabularies'
import imports from './imports'
import { generateInterface } from './interface'
import { aliases, toProperCase } from './strings'

export async function createPrefixFile(prefix: string, namespace: string, vocabs: typeof RdfVocabularies) {
  return ts.updateSourceFileNode(
    ts.createSourceFile(`${prefix}.ts`, '', ts.ScriptTarget.Latest),
    [
      ...imports,
      await generateInterface(prefix, vocabs),
      ts.createVariableStatement(
        [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.createVariableDeclarationList(
          [
            ts.createVariableDeclaration(
              ts.createIdentifier(aliases[prefix] || prefix),
              ts.createTypeReferenceNode(
                ts.createIdentifier(toProperCase(prefix)),
                undefined,
              ),
              ts.createAsExpression(
                ts.createCall(ts.createIdentifier('namespace'), undefined, [
                  ts.createStringLiteral(namespace),
                ]),
                ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
              ),
            ),
          ],
          ts.NodeFlags.Const,
        ),
      ),
    ],
  )
}
