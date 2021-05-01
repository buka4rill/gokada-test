module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  ecmaVersion: '2018',
  sourceType: 'module',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
