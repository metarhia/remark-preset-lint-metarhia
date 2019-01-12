'use strict';

const remarkLintRules = require('./remark-lint-rules.js');

module.exports = remarkLintRules.map(entry => {
  const name = entry[0];
  const options = entry[1];
  const plugin = require('remark-lint-' + name);

  if (entry.length === 1) {
    return [plugin, ['error']];
  } else if (Array.isArray(options)) {
    return [plugin, ...entry.slice(1)];
  } else {
    return [plugin, ['error', ...entry.slice(1)]];
  }
});
