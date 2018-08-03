import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('helper:format-phonenumber', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('formats phone with number and country code | 8005553535 | RU', async function(assert) {
      this.setProperties({
          phoneNo: '8 (800) 555 35 35',
          countryCode: 'RU'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode}}`);

      assert.dom('*').hasText('800 555-35-35');
  });

  test('formats phone with number and country code | 017212345678 | DE', async function(assert) {
      this.setProperties({
          phoneNo: '017212345678',
          countryCode: 'DE'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode}}`);

      assert.dom('*').hasText('0172 12345678');
  });

  test('formats phone with number and country code, forceIntl=true | 017212345678 | DE', async function(assert) {
      this.setProperties({
          phoneNo: '5417543010',
          countryCode: 'DE'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=true}}`);

      assert.dom('*').hasText('+49 541 7543010');
  });

  test('formats phone with number and country code, forceIntl=true | 6615551212 | US', async function(assert) {
      this.setProperties({
          phoneNo: '6615551212',
          countryCode: 'US'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=true}}`);

      assert.dom('*').hasText('+1 661 555 1212');
  });

  test('formats phone with number and country code, forceIntl=false | 6615551212 | US', async function(assert) {
      this.setProperties({
          phoneNo: '6615551212',
          countryCode: 'US'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=false}}`);

      assert.dom('*').hasText('(661) 555-1212');
  });

  test('return unformatted number if country code is missing | 8005553535 ', async function(assert) {
      this.set('phoneNo', '8005553535');
      await render(hbs`{{format-phonenumber phoneNo}}`);

      assert.dom('*').hasText(this.phoneNo);
  });

  test('return unformatted number if country code is missing and forceIntl=true | 8005553535 ', async function(assert) {
      this.set('phoneNo', '8005553535');
      await render(hbs`{{format-phonenumber phoneNo forceIntl=true}}`);

      assert.dom('*').hasText(this.phoneNo);
  });

  test('return unformatted number if parse fails | 017212345678 | US', async function(assert) {
      this.setProperties({
          phoneNo: '017212345678',
          countryCode: 'US'
      });

      await render(hbs`{{format-phonenumber phoneNo countryCode}}`);

      assert.dom('*').hasText(this.phoneNo);
  });

  test('return unformatted number if parse fails, missing helper param | 017212345678', async function(assert) {
      this.set('phoneNo', '017212345678');

      await render(hbs`{{format-phonenumber phoneNo}}`);

      assert.dom('*').hasText(this.phoneNo);
  });

  test('returns params untouched if not string | {}', async function(assert) {
      this.set('phoneNo', {});

      await render(hbs`{{format-phonenumber phoneNo}}`);
      assert.dom('*').hasText(this.phoneNo.toString());
  });

  test('returns params untouched if not string | "I <3 Tomster"', async function(assert) {
      this.set('phoneNo', 'I <3 Tomster');

      await render(hbs`{{format-phonenumber phoneNo}}`);
      assert.dom('*').hasText(this.phoneNo);
  });

  test('return unformatted number if parse fails, unknown country (UN)| 017212345678', async function(assert) {
      this.set('phoneNo', '017212345678');

      await render(hbs`{{format-phonenumber phoneNo 'UN'}}`);
      assert.dom('*').hasText(this.phoneNo);
  });
});
