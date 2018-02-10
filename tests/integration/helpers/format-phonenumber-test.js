import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-phonenumber', 'helper:format-phonenumber', {
	integration: true
});

// Replace this with your real tests.
test('formats phone with number and country code | 8005553535 | RU', function(assert) {
	this.setProperties({
		phoneNo: '8005553535',
		countryCode: 'RU'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode}}`);

	assert.equal(this.$().text().trim(), '800 555-35-35');
});

test('formats phone with number and country code | 017212345678 | DE', function(assert) {
	this.setProperties({
		phoneNo: '017212345678',
		countryCode: 'DE'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode}}`);

	assert.equal(this.$().text().trim(), '0172 12345678');
});

test('formats phone with number and country code, forceIntl=true | 017212345678 | DE', function(assert) {
	this.setProperties({
		phoneNo: '017212345678',
		countryCode: 'DE'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=true}}`);

	assert.equal(this.$().text().trim(), '+49 172 12345678');
});

test('formats phone with number and country code, forceIntl=true | 6615551212 | US', function(assert) {
	this.setProperties({
		phoneNo: '6615551212',
		countryCode: 'US'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=true}}`);

	assert.equal(this.$().text().trim(), '+1 661 555 1212');
});

test('formats phone with number and country code, forceIntl=false | 6615551212 | US', function(assert) {
	this.setProperties({
		phoneNo: '6615551212',
		countryCode: 'US'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode forceIntl=false}}`);

	assert.equal(this.$().text().trim(), '(661) 555-1212');
});

test('return unformatted number if country code is missing | 8005553535 ', function(assert) {
	this.set('phoneNo', '8005553535');
	this.render(hbs`{{format-phonenumber phoneNo}}`);

	assert.equal(this.$().text().trim(), this.phoneNo);
});

test('return unformatted number if country code is missing and forceIntl=true | 8005553535 ', function(assert) {
	this.set('phoneNo', '8005553535');
	this.render(hbs`{{format-phonenumber phoneNo forceIntl=true}}`);

	assert.equal(this.$().text().trim(), this.phoneNo);
});

test('return unformatted number if parse fails | 017212345678 | US', function(assert) {
	this.setProperties({
		phoneNo: '017212345678',
		countryCode: 'US'
	});

	this.render(hbs`{{format-phonenumber phoneNo countryCode}}`);

	assert.equal(this.$().text().trim(), this.phoneNo);
});

test('return unformatted number if parse fails, missing helper param | 017212345678', function(assert) {
	this.set('phoneNo', '017212345678');

	this.render(hbs`{{format-phonenumber phoneNo}}`);

	assert.equal(this.$().text().trim(), this.phoneNo);
});

test('returns params untouched if not string | {}', function(assert) {
	this.set('phoneNo', {});

	this.render(hbs`{{format-phonenumber phoneNo}}`);
	assert.equal(this.$().text().trim(), this.phoneNo);
});

test('returns params untouched if not string | "I <3 Tomster"', function(assert) {
	this.set('phoneNo', 'I <3 Tomster');

	this.render(hbs`{{format-phonenumber phoneNo}}`);
	assert.equal(this.$().text().trim(), this.phoneNo);
});
