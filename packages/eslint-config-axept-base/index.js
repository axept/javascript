{
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    // './rules/errors',
    // './rules/node',
    './rules/style',
    // './rules/variables',
    // './rules/es6',
    // './rules/imports',
  ].map(require.resolve),
  'rules': {
  }
}
