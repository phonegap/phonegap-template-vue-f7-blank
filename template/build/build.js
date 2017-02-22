/* eslint-disable import/no-extraneous-dependencies, no-var, vars-on-top */
/* global env, rm, cp, mkdir */

// https://github.com/shelljs/shelljs
require('./check-versions')();
require('shelljs/global');

env.NODE_ENV = 'production';

var path = require('path');
var config = require('../config');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'static/*', assetsPath);

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
});
