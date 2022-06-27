import { describe, it } from 'mocha'
import { expect } from 'chai'
import { expand, prefixes } from '@zazuko/rdf-vocabularies'
import { namedNode } from '@rdf-esm/data-model'
import { schema, foaf, dcterms } from '../src'
import { xml } from '../src/loose'

describe('generated types', () => {
  it('export a getter for namespace itself', () => {
    expect(schema['']).to.deep.eq(namedNode(prefixes.schema))
  })

  it('export a class', () => {
    expect(schema.Person.value).to.eq(expand('schema:Person'))
  })

  it('export a property', () => {
    expect(foaf.knows.value).to.eq(expand('foaf:knows'))
  })

  it('is callable', () => {
    expect(dcterms('language').value).to.eq(expand('dcterms:language'))
  })

  it('is a dynamic proxy', () => {
    expect(xml.TOKEN.value).to.eq(expand('xml:TOKEN'))
  })
})
