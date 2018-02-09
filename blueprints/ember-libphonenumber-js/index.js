'use strict';

module.exports = {
	description: 'Installation blueprint for ember-libphonenumber-js',

	normalizeEntityName: function() {},

	afterInstall: function() {
		return this.addPackagesToProject([
			{ name: 'libphonenumber-js', target: '^1.0.17' }
		])
	}
};
