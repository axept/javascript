module.exports = {
  rules: {
    /**
     * http://eslint.org/docs/rules/no-unexpected-multiline
     *
     * Pros: fixes some issues for 'semi' rule
     */
    'no-unexpected-multiline': ['error', 'always', { 'omitLastInOneLineBlock': true }],

    /**
     * http://eslint.org/docs/rules/semi
     *
     * Pros: less code, faster code writing
     * Cons: human behaviours, dangerous unexpected use-cases
     */
    'semi': ['error', 'never'],

    /**
     * http://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': ['error', { before: false, after: true }],
  }
};
