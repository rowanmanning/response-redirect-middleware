'use strict';

const assert = require('proclaim');
const sinon = require('sinon');

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
					redirect: sinon.spy()
				};
				middleware(mockRequest, mockResponse);
			});

			it('calls `response.redirect` with the `status` and `path`', () => {
				assert.calledOnce(mockResponse.redirect);
				assert.calledWithExactly(mockResponse.redirect, 'mock-status', 'mock-path');
			});

		});

		describe('when `locals` is not defined', () => {

			beforeEach(() => {
				middleware = redirect('mock-path');
			});

			describe('middleware(request, response)', () => {
				let mockRequest;
				let mockResponse;

				beforeEach(() => {
					mockRequest = {};
					mockResponse = {
						redirect: sinon.spy()
					};
					middleware(mockRequest, mockResponse);
				});

				it('calls `response.redirect` with just the `path`', () => {
					assert.calledOnce(mockResponse.redirect);
					assert.calledWithExactly(mockResponse.redirect, 'mock-path');
				});

			});

		});

	});

});
