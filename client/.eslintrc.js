const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
     browser: true,
     es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
      react: {
          version: 'detect',
          pragma: 'React',
      },
      'import/resolver': {
          typescript: {},
      },
  },
  rules: {
    camelcase: OFF,
    'react/prop-types': OFF,
    'react/display-name': OFF,
    'react-hooks/exhaustive-deps': ERROR,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'prettier/prettier': [ERROR, { singleQuote: true }],
    'no-restricted-imports': [ERROR, { patterns: ['../*'] }],
  },
};
