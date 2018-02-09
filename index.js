'use strict';

const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

module.exports = {
	name: 'ember-libphonenumber-js',

	included(app) {
		app = this._findHost();
		app.import('vendor/-ember-libphonenumber-js-bundle.js');
		app.import('vendor/-ember-libphonenumber-js-shims.js');
	},

	treeForVendor() {

		return new WebpackDependencyPlugin({
			outputName: 'ember-libphonenumber-js',
			expose: ['libphonenumber-js']
		});
	},
	_findHost() {
		let current = this;
		let app;

		// Keep iterating upward until we don't have a grandparent.
		// Has to do this grandparent check because at some point we hit the project.
		do {
			app = current.app || app;
		} while (current.parent.parent && (current = current.parent));
		return app;
	}
};
