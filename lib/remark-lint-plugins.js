'use strict';

const remarkLintRules = require('./remark-lint-rules.js');

module.exports = remarkLintRules.map((entry) => {
  const name = entry[0];
  const plugin = require('remark-lint-' + name);

  if (entry.length === 1) {
    return plugin;
  } else {
    return [plugin, ...entry.slice(1)];
  }
});
