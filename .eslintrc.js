module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "airbnb-base",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es2021: true,
    jasmine: true
  },
  ignorePatterns: ["./node-modules/**", "**/common/**", "**/dist/**"],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "no-useless-constructor": "off",
    "no-nested-ternary": "off"
  },
};
