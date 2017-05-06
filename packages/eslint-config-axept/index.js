module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-axept-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  'rules': {},
}
