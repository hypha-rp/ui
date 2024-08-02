module.exports = [
  {
    files: ['src/**/*.ts'],
    ignores: ['node_modules/', 'dist/'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier')
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  },
  {
    files: ['src/**/*.html'],
    ignores: ['node_modules/', 'dist/'],
    plugins: {
      html: require('eslint-plugin-html'),
      prettier: require('eslint-plugin-prettier')
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
];