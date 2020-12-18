module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type':'off',
    '@typescript-eslint/explicit-member-accessibility':'off',
  },
};