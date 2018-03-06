module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'semistandard',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jasmine: true
  },
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: `${__dirname}/build/webpack.base.conf.js`
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-console': 0,
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
