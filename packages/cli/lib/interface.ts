import { PropertySignatureStructure, StructureKind } from 'ts-morph'
import { shrink } from '@zazuko/prefixes'
import RDF from '@zazuko/env'
import { ImportedVocabularies } from './index.js'

const rdfsComment = RDF.namedNode('http://www.w3.org/2000/01/rdf-schema#comment')

function createMember(prefixes: ImportedVocabularies['prefixes'], prefix: string, term: string, comment?: string): PropertySignatureStructure {
  const member: PropertySignatureStructure = {
    name: `"${term}"`,
    kind: StructureKind.PropertySignature,
    type: `NamedNode<'${prefixes[prefix]}${term}'>`,
  }

  if (comment) {
    member.docs = [comment]
  }

  return member
}

export async function createMembers(prefix: string, { vocabularies, prefixes }: ImportedVocabularies): Promise<PropertySignatureStructure[]> {
  const prefixedRegex = new RegExp(`^${prefix}:(.+)$`)
  const terms = new Map<string, PropertySignatureStructure>()
  const dataset = (await vocabularies({ only: [prefix] }))[prefix]
  if (!dataset) {
    return []
  }

  const graph = RDF.clownface({ dataset })

  ;[...graph.in().toArray(), ...graph.out().toArray()]
    .forEach((node) => {
      const prefixedName = shrink(node.value)

      const matchesPrefix = prefixedName.match(prefixedRegex)
      if (prefixedName && matchesPrefix) {
        const term = matchesPrefix[1]

        if (!terms.has(matchesPrefix[1]) && term === encodeURIComponent(term)) {
          terms.set(term, createMember(prefixes, prefix, term, node.out(rdfsComment).values[0]))
        }
      }
    })

  return [...terms.values()].sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}
