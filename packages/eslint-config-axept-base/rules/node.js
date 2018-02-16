module.exports = {
  rules: {
    /**
     * Allow global require.
     * https://eslint.org/docs/rules/global-require
     * @todo Turn it on? For case of static imports in ES6 global require does not match the standard.
     * */
    'global-require': 'off',
  },
}
