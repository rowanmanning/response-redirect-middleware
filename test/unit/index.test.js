'use strict';

const assert = require('proclaim');
const index = require('../../index');
const redirect = require('../../lib/redirect');

describe('index', () => {

	it('aliases `lib/redirect`', () => {
		assert.strictEqual(index, redirect);
	});

});
