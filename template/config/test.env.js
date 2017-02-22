/* eslint-disable import/no-extraneous-dependencies, no-var, vars-on-top */

var merge = require('webpack-merge');
var devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
});
