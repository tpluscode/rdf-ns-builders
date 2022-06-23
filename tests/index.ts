import { describe, it } from 'mocha'
import { expect } from 'chai'
import { expand } from '@zazuko/rdf-vocabularies'
import { schema, foaf, dcterms, xml } from '../src/loose'

describe('generated types', () => {
  it('export a class', () => {
    expect(schema.Person.value).to.eq(expand('schema:Person'))
  })

  it('export a property', () => {
    expect(foaf.knows.value).to.eq(expand('foaf:knows'))
  })

  it('is callable', () => {
    expect(dcterms('foo').value).to.eq(expand('dcterms:foo'))
  })

  it('is a dynamic proxy', () => {
    expect(xml.TOKEN.value).to.eq(expand('xml:TOKEN'))
  })
})
