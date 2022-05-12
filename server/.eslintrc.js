const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        extensions: ['.ts'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  rules: {
    camelcase: OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'prettier/prettier': [ERROR, { singleQuote: true }],
    'no-restricted-imports': [ERROR, { patterns: ['../*'] }],
  },
};
