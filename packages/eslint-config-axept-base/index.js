module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    // './rules/variables',
    './rules/es6',
    // './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  'rules': {
  },
}
