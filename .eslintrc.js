module.exports = {
  extends: 'airbnb',
  env: {
    'node': true,
    'jest': true,
    'browser': true,
  },
  rules: {
    'func-names': 0,
    'no-console': 0,
    'no-param-reassign': [2, { 'props': false }],
    'no-underscore-dangle': 0,
    'no-unused-vars': ["error", { "argsIgnorePattern": "next" }],
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0
  },
};
