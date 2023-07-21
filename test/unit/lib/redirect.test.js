'use strict';

const assert = require('node:assert');
const td = require('testdouble');

describe('lib/redirect', () => {
	let redirect;

	beforeEach(() => {
		redirect = require('../../../lib/redirect');
	});

	it('is a function', () => {
		assert.strictEqual(typeof redirect, 'function');
	});

	describe('redirect(status, path)', () => {
		let middleware;

		beforeEach(() => {
			middleware = redirect(345, 'mock-path');
		});

		it('returns a function', () => {
			assert.strictEqual(typeof middleware, 'function');
		});

		describe('middleware(request, response)', () => {
			let mockRequest;
			let mockResponse;

			beforeEach(() => {
				mockRequest = {};
				mockResponse = {
					redirect: td.func()
				};
				middleware(mockRequest, mockResponse);
			});

			it('calls `response.redirect` with the `status` and `path`', () => {
				td.verify(mockResponse.redirect(345, 'mock-path'), {times: 1});
			});

		});

		describe('when `status` is not defined', () => {

			beforeEach(() => {
				middleware = redirect('mock-path');
			});

			describe('middleware(request, response)', () => {
				let mockRequest;
				let mockResponse;

				beforeEach(() => {
					mockRequest = {};
					mockResponse = {
						redirect: td.func()
					};
					middleware(mockRequest, mockResponse);
				});

				it('calls `response.redirect` with the `path` and a default status code', () => {
					td.verify(mockResponse.redirect(302, 'mock-path'), {times: 1});
				});

			});

		});

	});

	describe('.default', () => {
		it('aliases the module exports', () => {
			assert.strictEqual(redirect, redirect.default);
		});
	});

});
