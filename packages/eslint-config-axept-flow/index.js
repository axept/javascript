module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'babel'
  ],
  extends: [
    'eslint-config-axept-base',
    'plugin:flowtype/recommended',
    './rules/flowtype.js',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  'rules': {}
}
