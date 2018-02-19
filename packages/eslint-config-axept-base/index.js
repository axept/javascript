module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
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
