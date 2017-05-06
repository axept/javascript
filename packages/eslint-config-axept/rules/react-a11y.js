module.exports = {
  rules: {
    'jsx-a11y/no-static-element-interactions': [
      'error', {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
  },
}
