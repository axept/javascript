module.exports = {
  rules: {
    /**
     * http://eslint.org/docs/rules/comma-dangle
     * 
     * Pros: better for git diff, better to re-arrange lines
     * Cons: harder to re-use objects as JSON, but different quotes make it less portable too
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * http://eslint.org/docs/rules/dot-notation
     * 
     * Pros: better to use Google Closure Advanced Mode and other obfuscation tools
     * Cons: more cognitive loading
     */
    'dot-notation': ['error', {
      'allowPattern': '^([a-z,A-Z,0-9,_,-]+)$'
    }]
  }
};