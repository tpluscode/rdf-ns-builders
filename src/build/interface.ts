import ts from 'typescript'
import type * as RdfVocabularies from '@zazuko/rdf-vocabularies'
import cf from 'clownface'
import { namedNode } from '@rdfjs/data-model'
import { toProperCase } from './strings'

const rdfsComment = namedNode('http://www.w3.org/2000/01/rdf-schema#comment')

function createMember(prefixes: typeof RdfVocabularies['prefixes'], prefix: string, term: string, comment?: string) {
  const member = ts.createPropertySignature(
    undefined,
    ts.createStringLiteral(term),
    undefined,
    ts.createTypeReferenceNode(
      ts.createIdentifier(`NamedNode<'${prefixes[prefix]}${term}'>`),
      undefined,
    ),
    undefined,
  )

  if (comment) {
    ts.addSyntheticLeadingComment(member, ts.SyntaxKind.MultiLineCommentTrivia, comment, true)
  }

  return member
}

async function createMembers(prefix: string, { vocabularies, shrink, prefixes }: typeof RdfVocabularies) {
  const prefixedRegex = new RegExp(`^${prefix}:(.+)$`)
  const terms = new Map<string, ts.PropertySignature>()
  const dataset = (await vocabularies({ only: [prefix] }))[prefix]
  if (!dataset) {
    return []
  }

  const graph = cf({ dataset })

  ;[...graph.in().toArray(), ...graph.out().toArray()]
    .forEach((node) => {
      const prefixedName = shrink(node.value)

      const matchesPrefix = prefixedName.match(prefixedRegex)
      if (prefixedName && matchesPrefix) {
        const term = matchesPrefix[1]

        if (!terms.has(matchesPrefix[1])) {
          terms.set(term, createMember(prefixes, prefix, term, node.out(rdfsComment).values[0]))
        }
      }
    })

  return [...terms.values()].sort()
}

export async function generateInterface(prefix: string, vocabs: typeof RdfVocabularies) {
  return ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    ts.createIdentifier(toProperCase(prefix)),
    undefined,
    ts.createIntersectionTypeNode([
      ts.createTypeReferenceNode(
        ts.createIdentifier('NamespaceBuilder'),
        undefined,
      ),
      ts.createTypeLiteralNode(await createMembers(prefix, vocabs)),
    ]),
  )
}
