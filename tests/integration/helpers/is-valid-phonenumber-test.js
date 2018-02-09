import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-valid-phonenumber', 'helper:is-valid-phonenumber', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{is-valid-phonenumber inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
