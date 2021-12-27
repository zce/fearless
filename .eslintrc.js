const base = require('eslint-config-standard-ts')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['standard', 'plugin:vue/vue3-recommended'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json'
  },
  rules: {
    ...base.overrides[0].rules,
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 6,
        multiline: 6
      }
    ]
  }
}
