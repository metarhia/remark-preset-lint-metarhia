'use strict';

const tap = require('tap');

tap.test('test plugins config', (t) => {
  let config;

  t.doesNotThrow(() => {
    config = require('..');
  }, 'plugin packages must be installed');

  t.ok(Array.isArray(config.plugins), 'plugins array must be exported');

  for (const [index, entry] of config.plugins.entries()) {
    let plugin;

    const arrayEntryTestMessage =
      `plugins[${index}] must only be an array if it has ` +
      'both plugin and options';

    if (Array.isArray(entry)) {
      t.ok(entry.length > 1, arrayEntryTestMessage);
      plugin = entry[0];
    } else {
      t.pass(arrayEntryTestMessage);
      plugin = entry;
    }

    t.type(
      plugin,
      'function',
      `plugin in plugins[${index}] must be a function`
    );
  }

  t.end();
});
