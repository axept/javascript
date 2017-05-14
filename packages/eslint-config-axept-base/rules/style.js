module.exports = {
  rules: {
    /**
     * http://eslint.org/docs/rules/no-unexpected-multiline
     *
     * Pros: fixes some issues for 'semi' rule
     */
    'no-unexpected-multiline': 'error',

    /**
     * http://eslint.org/docs/rules/semi
     *
     * Pros: less code, faster code writing
     * Cons: human behaviours, dangerous unexpected use-cases
     */
    semi: ['error', 'never'],

    /**
     * http://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': ['error', { before: false, after: true }],
    'no-unneeded-ternary': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'func-call-spacing': ['error', 'never'],
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-else-return': 'error',
    'padded-blocks': ['error', 'never'],
    'object-curly-spacing': [2, 'always'],
    'quote-props': 'off',
    'indent': [1, 2, {
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
      'SwitchCase': 1,
      'ArrayExpression': 1,
      'ObjectExpression': 1,
    }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
    }],
    'lines-around-directive': ['error', {
      before: 'never',
      after: 'never',
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-trailing-spaces': 'warn',
  },
}
