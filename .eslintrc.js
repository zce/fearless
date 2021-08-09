/** @type {import('eslint').Linter.Config} */
const base = require('eslint-config-standard-ts')

base.rules = {
  ...base.overrides[0].rules,
  '@typescript-eslint/strict-boolean-expressions': 'off'
}

delete base.overrides[0].rules

base.overrides.push({
  files: ['*.vue'],
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
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
})

module.exports = base

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ output config ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// {
//   "extends": "eslint-config-standard",
//   "plugins": [
//     "@typescript-eslint"
//   ],
//   "overrides": [
//     {
//       "files": [
//         "*.ts",
//         "*.tsx"
//       ],
//       "parser": "@typescript-eslint/parser"
//     },
//     {
//       "files": [
//         "*.vue"
//       ],
//       "extends": [
//         "plugin:vue/vue3-recommended"
//       ],
//       "parser": "vue-eslint-parser",
//       "parserOptions": {
//         "parser": "@typescript-eslint/parser",
//         "extraFileExtensions": [
//           ".vue"
//         ]
//       },
//       "rules": {
//         "vue/singleline-html-element-content-newline": "off",
//         "vue/max-attributes-per-line": [
//           "error",
//           {
//             "singleline": 6,
//             "multiline": 6
//           }
//         ]
//       }
//     }
//   ],
//   "parserOptions": {
//     "project": "tsconfig.json"
//   },
//   "rules": {
//     "no-undef": "off",
//     "comma-spacing": "off",
//     "dot-notation": "off",
//     "brace-style": "off",
//     "func-call-spacing": "off",
//     "indent": "off",
//     "keyword-spacing": "off",
//     "lines-between-class-members": "off",
//     "no-array-constructor": "off",
//     "no-dupe-class-members": "off",
//     "no-redeclare": "off",
//     "no-throw-literal": "off",
//     "no-unused-vars": "off",
//     "no-unused-expressions": "off",
//     "no-useless-constructor": "off",
//     "quotes": "off",
//     "semi": "off",
//     "space-before-function-paren": "off",
//     "camelcase": "off",
//     "default-param-last": "off",
//     "no-use-before-define": "off",
//     "@typescript-eslint/comma-spacing": [
//       "error",
//       {
//         "before": false,
//         "after": true
//       }
//     ],
//     "@typescript-eslint/dot-notation": [
//       "error",
//       {
//         "allowKeywords": true
//       }
//     ],
//     "@typescript-eslint/brace-style": [
//       "error",
//       "1tbs",
//       {
//         "allowSingleLine": true
//       }
//     ],
//     "@typescript-eslint/func-call-spacing": [
//       "error",
//       "never"
//     ],
//     "@typescript-eslint/indent": [
//       "error",
//       2,
//       {
//         "SwitchCase": 1,
//         "VariableDeclarator": 1,
//         "outerIIFEBody": 1,
//         "MemberExpression": 1,
//         "FunctionDeclaration": {
//           "parameters": 1,
//           "body": 1
//         },
//         "FunctionExpression": {
//           "parameters": 1,
//           "body": 1
//         },
//         "CallExpression": {
//           "arguments": 1
//         },
//         "ArrayExpression": 1,
//         "ObjectExpression": 1,
//         "ImportDeclaration": 1,
//         "flatTernaryExpressions": false,
//         "ignoreComments": false,
//         "ignoredNodes": [
//           "TemplateLiteral *",
//           "JSXElement",
//           "JSXElement > *",
//           "JSXAttribute",
//           "JSXIdentifier",
//           "JSXNamespacedName",
//           "JSXMemberExpression",
//           "JSXSpreadAttribute",
//           "JSXExpressionContainer",
//           "JSXOpeningElement",
//           "JSXClosingElement",
//           "JSXFragment",
//           "JSXOpeningFragment",
//           "JSXClosingFragment",
//           "JSXText",
//           "JSXEmptyExpression",
//           "JSXSpreadChild"
//         ],
//         "offsetTernaryExpressions": true
//       }
//     ],
//     "@typescript-eslint/keyword-spacing": [
//       "error",
//       {
//         "before": true,
//         "after": true
//       }
//     ],
//     "@typescript-eslint/lines-between-class-members": [
//       "error",
//       "always",
//       {
//         "exceptAfterSingleLine": true
//       }
//     ],
//     "@typescript-eslint/no-array-constructor": "error",
//     "@typescript-eslint/no-dupe-class-members": "error",
//     "@typescript-eslint/no-redeclare": [
//       "error",
//       {
//         "builtinGlobals": false
//       }
//     ],
//     "@typescript-eslint/no-throw-literal": "error",
//     "@typescript-eslint/no-unused-vars": [
//       "error",
//       {
//         "args": "none",
//         "caughtErrors": "none",
//         "ignoreRestSiblings": true,
//         "vars": "all"
//       }
//     ],
//     "@typescript-eslint/no-unused-expressions": [
//       "error",
//       {
//         "allowShortCircuit": true,
//         "allowTernary": true,
//         "allowTaggedTemplates": true
//       }
//     ],
//     "@typescript-eslint/no-useless-constructor": "error",
//     "@typescript-eslint/quotes": [
//       "error",
//       "single",
//       {
//         "avoidEscape": true,
//         "allowTemplateLiterals": false
//       }
//     ],
//     "@typescript-eslint/semi": [
//       "error",
//       "never"
//     ],
//     "@typescript-eslint/space-before-function-paren": [
//       "error",
//       "always"
//     ],
//     "@typescript-eslint/no-use-before-define": [
//       "error",
//       {
//         "functions": false,
//         "classes": false,
//         "enums": false,
//         "variables": false,
//         "typedefs": false
//       }
//     ],
//     "@typescript-eslint/adjacent-overload-signatures": "error",
//     "@typescript-eslint/array-type": [
//       "error",
//       {
//         "default": "array-simple"
//       }
//     ],
//     "@typescript-eslint/consistent-type-assertions": [
//       "error",
//       {
//         "assertionStyle": "as",
//         "objectLiteralTypeAssertions": "never"
//       }
//     ],
//     "@typescript-eslint/consistent-type-definitions": [
//       "error",
//       "interface"
//     ],
//     "@typescript-eslint/default-param-last": "error",
//     "@typescript-eslint/explicit-function-return-type": [
//       "error",
//       {
//         "allowExpressions": true,
//         "allowHigherOrderFunctions": true,
//         "allowTypedFunctionExpressions": true,
//         "allowDirectConstAssertionInArrowFunctions": true
//       }
//     ],
//     "@typescript-eslint/member-delimiter-style": [
//       "error",
//       {
//         "multiline": {
//           "delimiter": "none"
//         },
//         "singleline": {
//           "delimiter": "comma",
//           "requireLast": false
//         }
//       }
//     ],
//     "@typescript-eslint/method-signature-style": "error",
//     "@typescript-eslint/naming-convention": [
//       "error",
//       {
//         "selector": "variableLike",
//         "leadingUnderscore": "allow",
//         "trailingUnderscore": "allow",
//         "format": [
//           "camelCase",
//           "PascalCase",
//           "UPPER_CASE"
//         ]
//       }
//     ],
//     "@typescript-eslint/no-base-to-string": "error",
//     "@typescript-eslint/no-dynamic-delete": "error",
//     "@typescript-eslint/no-empty-interface": [
//       "error",
//       {
//         "allowSingleExtends": true
//       }
//     ],
//     "@typescript-eslint/no-extra-non-null-assertion": "error",
//     "@typescript-eslint/no-extraneous-class": [
//       "error",
//       {
//         "allowWithDecorator": true
//       }
//     ],
//     "@typescript-eslint/no-floating-promises": "error",
//     "@typescript-eslint/no-for-in-array": "error",
//     "@typescript-eslint/no-implied-eval": "error",
//     "@typescript-eslint/no-invalid-void-type": "error",
//     "@typescript-eslint/no-misused-new": "error",
//     "@typescript-eslint/no-misused-promises": "error",
//     "@typescript-eslint/no-namespace": "error",
//     "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
//     "@typescript-eslint/no-non-null-assertion": "error",
//     "@typescript-eslint/no-this-alias": [
//       "error",
//       {
//         "allowDestructuring": true
//       }
//     ],
//     "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
//     "@typescript-eslint/no-unnecessary-type-assertion": "error",
//     "@typescript-eslint/no-var-requires": "error",
//     "@typescript-eslint/prefer-function-type": "error",
//     "@typescript-eslint/prefer-includes": "error",
//     "@typescript-eslint/prefer-nullish-coalescing": [
//       "error",
//       {
//         "ignoreConditionalTests": false,
//         "ignoreMixedLogicalExpressions": false
//       }
//     ],
//     "@typescript-eslint/prefer-optional-chain": "error",
//     "@typescript-eslint/prefer-readonly": "error",
//     "@typescript-eslint/prefer-reduce-type-parameter": "error",
//     "@typescript-eslint/prefer-ts-expect-error": "error",
//     "@typescript-eslint/promise-function-async": "error",
//     "@typescript-eslint/require-array-sort-compare": [
//       "error",
//       {
//         "ignoreStringArrays": true
//       }
//     ],
//     "@typescript-eslint/restrict-plus-operands": [
//       "error",
//       {
//         "checkCompoundAssignments": true
//       }
//     ],
//     "@typescript-eslint/restrict-template-expressions": [
//       "error",
//       {
//         "allowNumber": true
//       }
//     ],
//     "@typescript-eslint/return-await": [
//       "error",
//       "always"
//     ],
//     "@typescript-eslint/strict-boolean-expressions": "off",
//     "@typescript-eslint/triple-slash-reference": [
//       "error",
//       {
//         "lib": "never",
//         "path": "never",
//         "types": "never"
//       }
//     ],
//     "@typescript-eslint/type-annotation-spacing": "error"
//   }
// }
