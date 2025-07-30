import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    rules: {
      'linebreak-style': 0,
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'import/no-extraneous-dependencies': ['off'],
      'import/prefer-default-export': ['off'],
      'vue/valid-v-slot': ['error', {
        allowModifiers: true,
      }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],
      '@typescript-eslint/no-unused-vars': [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true,
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]
