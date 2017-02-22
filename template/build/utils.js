/* eslint-disable import/no-extraneous-dependencies, no-var, vars-on-top */

var path = require('path');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = (_path) => {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options) => {
  options = options || {}; // eslint-disable-line no-param-reassign
  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map((loader) => {
      var extraParamChar;
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?'); // eslint-disable-line no-param-reassign
        extraParamChar = '&';
      } else {
        loader = `${loader}-loader`; // eslint-disable-line no-param-reassign
        extraParamChar = '?';
      }
      return loader + (options.sourceMap ? `${extraParamChar}sourceMap` : '');
    }).join('!');

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    }
    return ['vue-style-loader', sourceLoader].join('!');
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus']),
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = (options) => {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) { // eslint-disable-line guard-for-in, no-restricted-syntax
    var loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      loader,
    });
  }
  return output;
};
