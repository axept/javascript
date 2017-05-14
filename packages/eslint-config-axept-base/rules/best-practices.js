module.exports = {
  rules: {
    /**
     * http://eslint.org/docs/rules/comma-dangle
     *
     * Pros: better for git diff, better to re-arrange lines
     * Cons: harder to re-use objects as JSON, but different quotes make it less portable too
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * http://eslint.org/docs/rules/dot-notation
     *
     * Pros: better to use Google Closure Advanced Mode and other obfuscation tools
     * Cons: more cognitive loading
     */
    'dot-notation': ['error', {
      'allowPattern': '^([a-z,A-Z,0-9,_,-]+)$',
    }],
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
