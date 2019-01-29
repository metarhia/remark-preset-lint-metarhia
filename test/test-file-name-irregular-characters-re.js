'use strict';

const tap = require('tap');

const regex = require('../lib/file-name-irregular-characters-re');

tap.test('test regex for no-file-name-irregular-characters', t => {
  t.notMatch('first.md', regex, 'must allow lowercase latin letters');
  t.notMatch(
    'fist1.md',
    regex,
    'must allow lowercase latin letters and digits'
  );
  t.notMatch(
    'first-second.md',
    regex,
    'must allow lowercase latin letters and dashes'
  );
  t.notMatch(
    'first-second-123.md',
    regex,
    'must allow lowercase latin letters, dashes and digits'
  );

  t.notMatch('FIRST.md', regex, 'must allow uppercase latin letters');
  t.notMatch(
    'FIRST1.md',
    regex,
    'must allow uppercase latin letters and digits'
  );
  t.notMatch(
    'FIRST-SECOND.md',
    regex,
    'must allow uppercase latin letters and dashes'
  );
  t.notMatch(
    'FIRST-SECOND-123.md',
    regex,
    'must allow uppercase latin letters, dashes and digits'
  );

  t.match(
    'first_second.md',
    regex,
    'must not allow underscores in the middle of a lowercase name'
  );
  t.match(
    'trailing_.md',
    regex,
    'must not allow underscores in the end of a lowercase name'
  );
  t.notMatch(
    '_special.md',
    regex,
    'must allow an underscore in the beginning of a lowercase name'
  );
  t.match(
    '__special.md',
    regex,
    'must not allow multiple underscores in the beginning of a lowercase name'
  );

  // In fact, the regex only checks that the letters surrounding an underscore
  // are uppercase. We can make this assumption because of the
  // "no-file-name-mixed-case" rule, and it makes the regex simpler a lot.
  t.notMatch(
    'FIRST_SECOND.md',
    regex,
    'must allow underscores in the middle of an uppercase name'
  );
  t.match(
    'TRAILING_.md',
    regex,
    'must not allow underscores in the end of an uppercase name'
  );
  t.notMatch(
    '_SPECIAL.md',
    regex,
    'must allow an underscore in the beginning of an uppercase name'
  );
  t.match(
    '__SPECIAL.md',
    regex,
    'must not allow multiple underscores in the beginning of an uppercase name'
  );

  t.end();
});
