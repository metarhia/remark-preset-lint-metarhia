'use strict';

const remarkLint = require('remark-lint');
const remarkLintPlugins = require('./lib/remark-lint-plugins');

module.exports = {
  plugins: [remarkLint, ...remarkLintPlugins],
};
