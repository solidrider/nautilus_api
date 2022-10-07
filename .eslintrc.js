module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 'off',
    // 下記のエラーは深刻でないので一旦無視
    'no-restricted-globals': 'off', // isNaN, Arrayなど利用しているため一時無視
    'array-callback-return': 'off', // mapでreturnを返していなかったり問題のある書き方の箇所が多いため一時無視
    // "prefer-template": "off",
    // "no-useless-escape": "off",
    // "no-restricted-globals": "off",
    // "prefer-destructuring": "off",
    // "consistent-return": "off",
  },
};
