'use strict';

/**
 * Create an Express middleware function which redirects a request.
 *
 * @public
 * @param {number | string} status
 *     The HTTP status code to redirect with or a URL to redirect to.
 * @param {string} [url]
 *     The URL to redirect to (if a status code is specified).
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
/**
 * @overload
 * @param {number} status
 *     The HTTP status code to redirect with.
 * @param {string} url
 *     The URL to redirect to.
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
/**
 * @overload
 * @param {string} url
 *     The URL to redirect to.
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
function redirect(status, url = '') {
	let redirectStatus = 302;
	let redirectUrl = url;

	if (typeof status === 'string') {
		redirectUrl = status;
	} else {
		redirectStatus = status;
	}

	return (_request, response) => {
		response.redirect(redirectStatus, redirectUrl);
	};
}

module.exports = redirect;
module.exports.default = module.exports;
