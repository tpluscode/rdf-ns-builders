import { expand } from '@zazuko/rdf-vocabularies'
import { schema, foaf } from '../src'

describe('generated types', () => {
  it('export a class', () => {
    expect(schema.Person.value).toEqual(expand('schema:Person'))
  })

  it('export a property', () => {
    expect(foaf.knows.value).toEqual(expand('foaf:knows'))
  })
})
