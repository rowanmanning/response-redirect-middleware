'use strict';

const {assert} = require('chai');
const td = require('testdouble');

describe('lib/redirect', () => {
	let redirect;

	beforeEach(() => {
		redirect = require('../../../lib/redirect');
	});

	it('is a function', () => {
		assert.isFunction(redirect);
	});

	describe('redirect(status, path)', () => {
		let middleware;

		beforeEach(() => {
			middleware = redirect('mock-status', 'mock-path');
		});

		it('returns a function', () => {
			assert.isFunction(middleware);
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
				td.verify(mockResponse.redirect('mock-status', 'mock-path'), {times: 1});
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

				it('calls `response.redirect` with just the `path`', () => {
					td.verify(mockResponse.redirect('mock-path'), {times: 1});
				});

			});

		});

	});

});
