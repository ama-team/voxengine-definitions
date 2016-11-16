/**
 * @namespace Net
 */

/**
 * Please not that this is virtual definition, and {@link Net} doesn't have such member
 *
 * @callback Net.sendMailCallback
 *
 * @param {Net.SendMailResult} response
 */

/**
 * Please not that this is virtual definition, and {@link Net} doesn't have such member
 *
 * @callback Net.httpRequestCallback
 *
 * @param {Net.HttpRequestResult} response
 */

/**
 * Advanced HTTP request settings
 *
 * @class Net.HttpRequestOptions
 *
 * @property {string[]} headers Additional Request headers
 * @property {('GET'|'POST')} method HTTP request method
 * @property {object} params Optional request parameters. They can be specified in URL itself as well
 * @property {string} postData POST data to send with request
 * @property {boolean} rawOutput If true, HttpResult will have data field set , rather than text field
 */

/**
 * HTTP response
 *
 * @class Net.HttpRequestResult
 *
 * @property {number} code Response code. HTTP code (2xx-5xx) or one of our internal status codes:
 * - `-1` Unknown error
 * - `-2` Malformed URL
 * - `-3` Host not found
 * - `-4` Connection error
 * - `-5` Too many redirects
 * - `-6` Network error
 * - `-7` Timeout
 * - `-8` Internal error
 * @property {object} headers Response headers
 * @property {string} text Response text in textual form
 */

/**
 * Advanced options for sendMail method
 *
 * @class Net.SendMailOptions
 *
 * @property {string|string[]} bcc BCC addresses
 * @property {string|string[]} cc CC addresses
 * @property {string} html Alternative HTML body
 * @property {string} login Login for mail server
 * @property {string} password Password for mail server
 * @property {number} port Mail server port
 */

/**
 * Result of sending e-mail message
 *
 * @class Net.SendMailResult
 *
 * @property {number} code SMTP server response code
 * @property {string} error Optional SMTP server error message
 */

/**
 * Performs HTTP request
 *
 * @function Net.httpRequest
 *
 * @param {string} url HTTP url to query
 * @param {Net.httpRequestCallback} callback
 * @param {Net.HttpRequestOptions} options Advanced settings
 */

/**
 * Performs an asynchronous HTTP request
 *
 * @function Net.httpRequestAsync
 *
 * @param {string} url HTTP url to query
 * @param {Net.HttpRequestOptions} options Advanced settings
 */

/**
 * Send e-mail using specified e-mail server
 *
 * @function Net.sendMail
 *
 * @param {string} mailServerAddress Address of mail server to use
 * @param {string} from From address of e-mail message
 * @param {string|string[]} to To address or list of those
 * @param {string} title Message title
 * @param {string} body Message body
 * @param {Net.sendMailCallback} callback Function to be called on completion
 * @param {Net.SendMailOptions} [options] Advanced settings
 */

/**
 * Send e-mail using specified e-mail server
 *
 * @function Net.sendMailAsync
 *
 * @param {string} mailServerAddress Address of mail server to use
 * @param {string} from From address of e-mail message
 * @param {string|string[]} to To address or list of those
 * @param {string} title Message title
 * @param {string} body Message body
 * @param {Net.SendMailOptions} [options] Advanced settings
 *
 * @return {Promise}
 */
