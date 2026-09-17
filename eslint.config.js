import config from '@tpluscode/eslint-config/ts-no-rdf'
import { globalIgnores, includeIgnoreFile } from '@eslint/config-helpers'
import { fileURLToPath } from 'node:url'

export default [
  ...config,
  globalIgnores([
    'packages/lib/vocabularies/'
  ]),
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url)), { gitignoreResolution: true }),
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
