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
function redirect(status, url) {
	const redirectStatus = (typeof status === 'string' ? 302 : status);
	const redirectUrl = (typeof status === 'string' ? status : url || '');
	return (request, response) => {
		response.redirect(redirectStatus, redirectUrl);
	};
}

module.exports = redirect;
module.exports.default = module.exports;
