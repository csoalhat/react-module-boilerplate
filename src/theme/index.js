/* eslint-disable global-require */

const theme = require('./theme');

// Export configured plugin for use with `babel-plugin-css-modules-transform`.
module.exports = options =>
  require('postcss-preset-env')(Object.assign({
    'css-variables': {
      variables: theme,
      preserve: true,
    },
    options,
  }));
