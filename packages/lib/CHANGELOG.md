# Changelog

## 4.3.0

### Minor Changes

- ff6f87c: Add a way to extend namespace factory

## 4.2.0

### Minor Changes

- a7a64b0: Add shsh (no terms)
- a7a64b0: Update m4i terms
- a7a64b0: Adds SHACL-AF terms

## 4.1.1

### Patch Changes

- 3ca58e8: Namespace interfaces must be exported to prevent error "Exported variable 'x' has or is using name 'X' from external module "./node_modules/@tpluscode/rdf-ns-builders/vocabularies/x" but cannot be named."

## 4.1.0

### Minor Changes

- 72556d8: Added factory module for use with `@rdfjs/environment`

## 4.0.0

### Major Changes

- 9d5b01d: Removed bogus prefix `qudtv`
- 9d5b01d: Updated `earl` to use correct namespace (`s/https/http/`)
- 9d5b01d: Removed the `bin` from package to remove peer deps

### Minor Changes

- 9d5b01d: Updated prefixes `gs1`
- 9d5b01d: Added prefixes `cert`, `dig`, `la`, `list`, `log`, `m4i`, `math`, `oidc`, `pim`, `set`, `solid`, `stat`, string`

## 3.0.4

### Patch Changes

- c3a07b6: Removed `@zazuko/vocabularies` from peer deps

## 3.0.3

### Patch Changes

- 5bea3fc: Added dash-sparql prefix

## 3.0.2

### Patch Changes

- b649157: v3 was packaged without the modules

## 3.0.1

### Patch Changes

- 8fb5460: Installing from NPM would call `patch-package`

## 3.0.0

### Major Changes

- 6405678: Export ES Modules only

### Minor Changes

- 6405678: Updated all vocabularies
- 6405678: Added `crm` and `mads` prefixes

## 2.0.1

### Patch Changes

- cd656db: Strict module interface did not include the empty getter for namespace itself

## 2.0.0

### Major Changes

- 0687532: Make strict the default export

## 1.1.0

### Minor Changes

- 3aefaf6: Added latest namespaces from `@zazuko/rdf-ns-vocabularies`:
  - `bibo`
  - `dcam`
  - `dcmitype`
  - `ebucore`
  - `exif`
  - `gs1`[early-tomatoes-tease](early-tomatoes-tease.md)
  - `locn`

### Patch Changes

- 3aefaf6: Updated namespaces:
  - `constants`
  - `dbo`
  - `qkdv`
  - `quantitykind`
  - `qudt`
  - `schema`
  - `unit`

## 1.0.0

### Major Changes

- 2495728: Updated vocabularies from `@zazuko/rdf-vocabularies@2021.5.3`:

  - New terms: `hydra`, `quantitykind`, `unit`
  - Fixed namespace of `prefix` (`http://qudt.org/vocab/prefix`)

### Patch Changes

- 04704d8: Use `@rdfjs/types` package instead of old typing
- 768379b: CLI did not work locally because of double ts-node
- f9f8edb: Generating failed on prefix with hyphens

## 0.4.5

### Patch Changes

- Missing ts-node/register

## 0.4.4

### Patch Changes

- 40878c6: Make bin work with local module path

## 0.4.3

### Patch Changes

- cfc2cff: Added a strict builders module
- 17f45d0: Added bin for generating own builders package

## 0.4.2

### Patch Changes

- bdfa24e: Activity Streams - use correct namespace

## 0.4.1

### Patch Changes

- b2244bf: Updated: `dash`, `dbo`, `dcat`, `hydra`, `lvont`, `qudt`, `schema`
- b2244bf: Added:

  | Prefix         | Namespace                                   |
  | -------------- | ------------------------------------------- |
  | `acl`          | http://www.w3.org/ns/auth/acl#              |
  | `constants`    | http://qudt.org/vocab/constant/             |
  | `discipline`   | http://qudt.org/vocab/discipline/           |
  | `dpv`          | http://www.w3.org/ns/dpv#                   |
  | `prefix`       | http://qudt.org/2.1/vocab/prefix/           |
  | `qkdv`         | http://qudt.org/vocab/dimensionvector/      |
  | `quantitykind` | http://qudt.org/vocab/quantitykind/         |
  | `rico`         | https://www.ica.org/standards/RiC/ontology# |
  | `shex`         | http://www.w3.org/ns/shex#                  |
  | `sou`          | http://qudt.org/vocab/sou/                  |
  | `unit`         | http://qudt.org/vocab/unit/                 |

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.7...v0.4.0) (2020-09-03)

### Features

- update to named nodes with string types ([4040e87](https://github.com/tpluscode/rdf-ns-builders/commit/4040e87577574c6fe99dd416fc31ed96aa9587bb))

### [0.3.7](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.6...v0.3.7) (2020-07-14)

### [0.3.6](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.5...v0.3.6) (2020-06-26)

### Bug Fixes

- exports must begin with ./ ([134b7dd](https://github.com/tpluscode/rdf-ns-builders/commit/134b7dd4bc83a10806a10f439787f797e163aa53))

### [0.3.5](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.4...v0.3.5) (2020-06-17)

### Features

- added dash prefix ([d5c6a13](https://github.com/tpluscode/rdf-ns-builders/commit/d5c6a13d9ee51a8e3599d507bc5e90071d004ec1))

### [0.3.4](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.3...v0.3.4) (2020-06-12)

### [0.3.1](https://github.com/tpluscode/rdf-ns-builders/compare/v0.3.0...v0.3.1) (2020-06-08)

## [0.3.0](https://github.com/tpluscode/rdf-ns-builders/compare/v0.2.2...v0.3.0) (2020-06-07)

### [0.2.2](https://github.com/tpluscode/rdf-ns-builders/compare/v0.2.1...v0.2.2) (2020-05-19)

### [0.2.1](https://github.com/tpluscode/rdf-ns-builders/compare/v0.2.0...v0.2.1) (2020-05-18)

### Bug Fixes

- missing type declarations ([86b5568](https://github.com/tpluscode/rdf-ns-builders/commit/86b5568309bf98f6e999bd15d20b49b9bff7f06d))

## [0.2.0](https://github.com/tpluscode/rdf-ns-builders/compare/v0.1.0...v0.2.0) (2020-05-18)

### ⚠ BREAKING CHANGES

- removed commonjs exports

### build

- es-modules only package ([#1](https://github.com/tpluscode/rdf-ns-builders/issues/1)) ([952853c](https://github.com/tpluscode/rdf-ns-builders/commit/952853c3ecfb41d02a1486db010c2f9e860a9c81))

## [0.1.0](https://github.com/tpluscode/rdf-ns-builders/compare/v0.0.4...v0.1.0) (2020-02-29)

### [0.0.4](https://github.com/tpluscode/ts-template/compare/v0.0.3...v0.0.4) (2020-02-23)

### Bug Fixes

- exports were missing the namespace builder annotation ([21447d0](https://github.com/tpluscode/ts-template/commit/21447d0aa0a30e42038023b6207ae3630c22cff2))

### [0.0.3](https://github.com/tpluscode/ts-template/compare/v0.0.2...v0.0.3) (2020-02-23)

### [0.0.2](https://github.com/tpluscode/ts-template/compare/v0.0.1...v0.0.2) (2020-02-23)

### Bug Fixes

- mark side-effects free ([aabc816](https://github.com/tpluscode/ts-template/commit/aabc816278bf0a7eca84dde0273c549ac46d611b))

### 0.0.1 (2020-02-23)

### Features

- generated first version from @zazuko/rdf-vocabularies ([a63160c](https://github.com/tpluscode/ts-template/commit/a63160c91130045f08ca585654291d60ddebceda))
