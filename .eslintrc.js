const base = require('eslint-config-standard-ts')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: 'eslint-config-standard',
  plugins: ['@typescript-eslint'],
  rules: {
    ...base.overrides[0].rules,
    '@typescript-eslint/strict-boolean-expressions': 'warn'
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json'
      }
    },
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        project: 'tsconfig.json'
      },
      rules: {
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
  ]
}
