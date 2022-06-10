/**
 * @module @rowanmanning/response-redirect-middleware
 */
'use strict';

/**
 * Create an Express middleware function which redirects a request.
 *
 * @access public
 * @param {(number | string)} status
 *     The HTTP status code to redirect with or a URL to redirect to.
 * @param {string} [url]
 *     The URL to redirect to (if a status code is specified).
 * @returns {import('express').Handler}
 *     Returns a middleware function.
 */
module.exports = function redirect(status, url) {
	const redirectStatus = (typeof status === 'string' ? 302 : status);
	const redirectUrl = (typeof status === 'string' ? status : url || '');
	return (request, response) => {
		response.redirect(redirectStatus, redirectUrl);
	};
};
