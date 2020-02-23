import { expand } from '@zazuko/rdf-vocabularies'
import { schema, foaf, dcterms, xml } from '../src'

describe('generated types', () => {
  it('export a class', () => {
    expect(schema.Person.value).toEqual(expand('schema:Person'))
  })

  it('export a property', () => {
    expect(foaf.knows.value).toEqual(expand('foaf:knows'))
  })

  it('is callable', () => {
    expect(dcterms('foo').value).toEqual(expand('dcterms:foo'))
  })

  it('is a dynamic proxy', () => {
    expect(xml.TOKEN.value).toEqual(expand('xml:TOKEN'))
  })
})
