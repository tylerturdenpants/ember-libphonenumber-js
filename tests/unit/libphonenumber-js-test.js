import { module, test } from 'qunit';

import { parse, format, AsYouType } from 'libphonenumber-js'

module('Unit | vendor imports | libphonenumber-js', function() {
  test('it exports parse', function(assert) {
    assert.ok(parse);
  });

  test('it exports format', function(assert) {
    assert.ok(format);
  });

  test('it exports AsYouType', function(assert) {
    assert.ok(AsYouType);
  });
});
