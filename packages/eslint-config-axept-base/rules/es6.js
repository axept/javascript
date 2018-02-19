module.exports = {
  rules: {
    /**
     * Exports declaration only in bottom of the file.
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     * */
    'import/exports-last': 'error',

    /**
     * Disallows a newline before an arrow function body.
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     * */
    'implicit-arrow-linebreak': ['error', 'beside'],
  }
}
