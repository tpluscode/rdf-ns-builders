import { expect } from 'chai'
import prefixes, { expand } from '@zazuko/prefixes'
import RDF from 'rdf-ext'
import { schema, foaf, dcterms } from '../index.js'
import { xml } from '../loose.js'

describe('generated types', () => {
  it('export a getter for namespace itself', () => {
    expect(schema['']).to.deep.eq(RDF.namedNode(prefixes.schema))
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
