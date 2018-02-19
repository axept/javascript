module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    /**
     * Don't use semicolons, less code, faster code writing.
     * https://github.com/gajus/eslint-plugin-flowtype
     */
    'flowtype/semi': 'off'
  }
}
