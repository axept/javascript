module.exports = {
  rules: {
    /**
     * Fixes some issues for 'semi' rule.
     * http://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * Don't use semicolons, less code, faster code writing.
     * http://eslint.org/docs/rules/semi
     */
    'semi': ['error', 'never'],

    /**
     * Indentation rules.
     * https://eslint.org/docs/developer-guide/code-conventions#indentation
     * */
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'FunctionDeclaration': {
        parameters: 1,
        body: 1,
      },
      'FunctionExpression': {
        parameters: 1,
        body: 1,
      },
      'MemberExpression': 1,
      'ArrayExpression': 1,
      'ObjectExpression': 1,
    }],

    /**
     * Don't add lines around directive.
     * https://eslint.org/docs/rules/lines-around-directive
     * */
    'lines-around-directive': ['error', {
      before: 'never',
      after: 'never',
    }],

    /**
     * Add new line in chained call if depth more than 2.
     * https://eslint.org/docs/rules/newline-per-chained-call
     * */
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    /**
     * Warn if trailing spaces in end of the lines.
     * https://eslint.org/docs/rules/no-trailing-spaces
     * */
    'no-trailing-spaces': 'warn',
  },
}
