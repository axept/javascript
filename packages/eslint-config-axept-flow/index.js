module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'babel'
  ],
  extends: [
    'plugin:flowtype/recommended',
    './rules/flowtype',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  'rules': {}
}
