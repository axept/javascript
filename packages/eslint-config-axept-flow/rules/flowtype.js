module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'babel'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'flowtype/semi': 'off'
  }
}