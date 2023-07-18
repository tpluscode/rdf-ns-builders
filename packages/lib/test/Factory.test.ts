import Environment from '@rdfjs/environment/Environment.js'
import { expect } from 'chai'
import $rdf from 'rdf-ext'
import NsBuildersFactory from '../index.js'

describe('Factory', () => {
  it('works with environment', () => {
    // given
    const env = new Environment([
      NsBuildersFactory,
    ])

    // then
    const Person = env.ns.schema.Person

    // then
    expect(Person).to.deep.eq($rdf.namedNode('http://schema.org/Person'))
  })
})
