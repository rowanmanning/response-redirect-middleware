/**
 * @module @rowanmanning/response-redirect-middleware
 */
'use strict';

/**
 * Create an Express middleware function which redirects a request.
 *
 * @access public
 * @param {number} [status=302]
 *     The HTTP status code to redirect with.
 * @param {string} path
 *     The URL to redirect to.
 * @returns {ExpressMiddleware}
 *     Returns a middleware function.
 */
module.exports = function redirect(...args) {
	return (request, response) => {
		response.redirect(...args);
	};
};

/**
 * A middleware function.
 *
 * @callback ExpressMiddleware
 * @param {object} request
 *     An Express Request object.
 * @param {object} response
 *     An Express Response object.
 * @returns {undefined}
 *     Returns nothing.
 */
