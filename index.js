'use strict';
const caniuse = require('caniuse-api')

module.exports = {
	name: require('./package').name,
	options: {
		autoImport: {
			alias: {}
		}
	},

	chooseLibPhoneForTargets(targets = {}) {
		let { browsers = [] } = targets;
		let browserQuery = browsers.join(',');
		if (caniuse.isSupported('es6-module', browserQuery)) {
			return 'libphonenumber/index.es6.js';
		}
		return 'libphonenumber-js/bundle/libphonenumber-js.min.js';
	},

	included() {
		this._super.included.apply(this, arguments);
	
		let findHost = this._findHost;
		let app = findHost.call(this);
	
		this.app = app;
		let targets = this.project.targets;

		this.options.autoImport.alias['libphonenumber-js'] = this.chooseLibPhoneForTargets(targets);
	}
	
};
