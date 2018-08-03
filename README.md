# ember-libphonenumber-js [![npm version](https://badge.fury.io/js/ember-libphonenumber-js.svg)](https://badge.fury.io/js/ember-libphonenumber-js) [![Build Status](https://travis-ci.org/tylerturdenpants/ember-libphonenumber-js.svg?branch=master)](https://travis-ci.org/tylerturdenpants/ember-libphonenumber-js) [![Greenkeeper badge](https://badges.greenkeeper.io/tylerturdenpants/ember-libphonenumber-js.svg)](https://greenkeeper.io/) [![Ember Observer Score](http://emberobserver.com/badges/ember-libphonenumber-js.svg)](http://emberobserver.com/addons/ember-libphonenumber-js)
This addon provides a way to add Google's [`libphonenumber`](https://github.com/googlei18n/libphonenumber) to your ember project using [`libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js) from  [`https://github.com/catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js).  This version of `libphonenumber` is much lighter than Google's, coming in at 120 KB.

Additionally, this addon provides some template helper (`format` only at this time).  Computed properties are coming soon.


## Installation

* ember install ember-libphonenumber-js

## Usage

```js
import { parse, format } from 'libphonenumber-js'

parse('8 (800) 555 35 35', 'RU')
// { country: 'RU', phone: '8005553535' }

format('2133734253', 'US', 'International')
// '+1 213 373 4253'

```

For other uses, please visit [`https://github.com/catamphetamine/libphonenumber-js`](https://github.com/catamphetamine/libphonenumber-js)

### Template Helper
The helper takes 2 parameters, a phone number and a 2 byte country code (ex: 'US'). Additionally, you can force international formatting by providing `forceIntl=true`.
```hbs
{{format-phonenumber '6615551212' 'US'}} {{!-- (661) 555-1212 --}}
```
#### With `forceIntl=true`
```hbs
{{format-phonenumber '6615551212' 'US' forceIntl=true}} {{!-- +1 661 555 1212 --}}
```

## Credits

The great majority of this addon is copied from the `ember-apollo-client` and `ember-cli-webpack-imports` addons. This addon is a single exposure using `ember-cli-webpack-import`.  If you need to import more `webpack` libs, I highly suggest using `ember-cli-webpack-imports`.


A special thanks to:
* Nikolay ([@catamphetamine](https://github.com/catamphetamine))
* Blake Gentry ([@bgentry](https://github.com/bgentry))
* Charles Demers ([@charlesdemers](https://github.com/charlesdemers))
