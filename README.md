> # @tpluscode/rdf-ns-builders

Common RDF vocabularies extracted from [`@zazuko/vocabularies`][rdfv] and wrapped
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

Simply import a namespace builder by its prefix defined in [`@zazuko/vocabularies`][rdfv]

```ts
import { schema } from '@tpluscode/rdf-ns-builders'
import { NamedNode } from '@rdfjs/types'

const schemaPerson: NamedNode = schema.Person
```

### Loose builder

The namespace builders exported from the main module allow arbitrary term but in TypeScript, an error will be shown if they do not exist in the vocabulary. Alternatively, loonse builders can be imported which will ignore terms from outside the vocabulary.

```
import { schema } from '@tpluscode/rdf-ns-builders/loose'
import { NamedNode } from '@rdfjs/types'

// will not show error
const schemaPerson: NamedNode = schema.Persona
```

## Roll your own

Given a package with same exports as `@zazuko/vocabularies`, it is possible to generate a set of namespace builders generated from your own vocabularies.

Install required peer dependencies:

```
npm i -D ts-node ts-morph clownface @zazuko/vocabularies safe-identifier
```

Run the following command to generate builders package by providing the source package name and output directory.

```
npm run rdf-ns-builders generate -p @my/vocabularies -o builders
```

This will create a directory `source`, containing typescript modules for all vocabularies, similar to those from [src](src/vocabularies).

[rdfv]: https://github.com/zazuko/rdf-vocabularies
[ns]: http://npm.im/@rdfjs/namespace
