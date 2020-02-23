> # @tpluscode/rdf-ns-builders

Common RDF vocabularies extracted from [`@zazuko/rdf-vocabularies`][rdfv] and wrapped
as [`@rdfjs/namespace`][ns] builder objects.

Also includes TypeScript declarations of the terms included in the known
vocabularies as extracted from the actual RDF source file.

## Why?

1. If you're tired of typing `const schema = namespace(prefixes.schema)` every so often
2. If you want to have your IDE "Find usages" of a `@rdfjs/namespace`-generated term

## Installation

```
npm i -S @tpluscode/rdf-ns-builders
```

## Usage

Simply import a namespace builder by its prefix defined in [`@zazuko/rdf-vocabularies`][rdfv]

```ts
import { schema } from '@tpluscode/rdf-ns-builders'
import { NamedNode } from 'rdf-js'

const schemaPerson: NamedNode = schema.Person
```

[rdfv]: https://github.com/zazuko/rdf-vocabularies
[ns]: http://npm.im/@rdfjs/namespace
