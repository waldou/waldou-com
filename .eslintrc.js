module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'quotes': [ 'error', 'single' ],
    'object-curly-spacing': [ 'error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-before-blocks': [ 'error' ],
    'brace-style': [ 'error' ],
    'arrow-spacing': [ 'warn' ],
    'comma-spacing': [ 'warn' ],
    'no-multi-spaces': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'no-inline-comments': [ 'error' ],
    'no-duplicate-imports': [ 'error' ],
  },
  overrides: [
    {
      files: [ '*.test.js' ],
      env: { jest: true }
    },
    {
      files: [ '*.vue' ],
      rules: {
        'vue/max-attributes-per-line': [ 'error', {
          'singleline': {
            'max': 5,
          },
          'multiline': {
            'max': 5,
          }
        } ]
      }
    },
  ],
}
