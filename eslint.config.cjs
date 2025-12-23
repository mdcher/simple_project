const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
  // 1. ВИПРАВЛЕННЯ: Додали 'dist' у список ігнорування
  { ignores: ['dist', '**/*.cjs'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',

      // 2. ВИПРАВЛЕННЯ: Вимикаємо стандартне правило JS (воно дає помилки на конструктори)
      'no-unused-vars': 'off',

      // Вмикаємо розумне правило TypeScript
      // Воно розуміє, що "private level" у конструкторі — це ОК
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];
