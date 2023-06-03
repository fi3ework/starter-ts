/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

// @ts-check
const { builtinModules } = require('node:module')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['packages/create-vite/template-**'],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'import/no-nodejs-modules': [
      'error',
      { allow: builtinModules.map((mod) => `node:${mod}`) },
    ],
    'import/no-duplicates': 'error',
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
  overrides: [],
})
