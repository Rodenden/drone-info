import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['dist/**/*', 'build/**/*', 'node_modules/**/*']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-empty': 'warn',
      'no-prototype-builtins': 'off',
      'no-constant-condition': 'warn',
      'no-useless-escape': 'warn',
      'no-control-regex': 'off',
      'no-func-assign': 'warn',
      'no-fallthrough': 'warn',
      'getter-return': 'warn',
      'valid-typeof': 'warn',
      'no-cond-assign': ['error', 'except-parens'],
      'no-misleading-character-class': 'warn',
      'no-console': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]; 