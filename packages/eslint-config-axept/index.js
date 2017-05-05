module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-axept-base',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
  },
  'rules': {
  }
}