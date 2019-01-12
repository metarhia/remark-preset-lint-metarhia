'use strict';

const tap = require('tap');

const testArrayPluginEntry = entry => t => {
  t.equal(entry.length, 2, 'entry must comprise two elements');

  const [plugin, config] = entry;

  t.type(plugin, 'function', 'plugin must be a function');

  t.ok(Array.isArray(config), 'config must be an array');
  t.ok(
    config.length === 1 || config.length === 2,
    'config must comprise one or two elements'
  );

  const [errorLevel] = config;
  t.match(errorLevel, /^(warn|error)$/, 'error level must be a suported value');

  t.end();
};

const testNonArrayPluginEntry = entry => t => {
  t.type(entry, 'function', 'entry must be a function');
  t.end();
};

tap.test('test plugins config', t => {
  let config;

  t.doesNotThrow(() => {
    config = require('..');
  }, 'plugin packages must be installed');

  t.ok(Array.isArray(config.plugins), 'plugins array must be exported');

  for (const [index, entry] of config.plugins.entries()) {
    if (Array.isArray(entry)) {
      t.test(
        `test array-type entry plugins[${index}]`,
        testArrayPluginEntry(entry)
      );
    } else {
      t.test(
        `test non-array-type entry plugins[${index}]`,
        testNonArrayPluginEntry(entry)
      );
    }
  }

  t.end();
});
