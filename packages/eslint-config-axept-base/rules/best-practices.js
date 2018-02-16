module.exports = {
  rules: {
    /**
     * Add trailing commas, for more clear git diff.
     * http://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * Use dot notation for properties access.
     * http://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': ['error', {
      'allowPattern': '^([a-z,A-Z,0-9,_,-]+)$',
    }],

    /**
     * Don't use syntax which creates potential errors.
     * https://eslint.org/docs/rules/no-restricted-syntax
     * */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
}
