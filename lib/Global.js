/**
 * Evaluates to given data decoded via Base64 encoding
 *
 * @function base64_decode
 *
 * @param {string} data Data to decode
 *
 * @return {number[]}
 */

/**
 * Evaluates to given data encoded via Base64 encoding
 *
 * @function base64_encode
 *
 * @param {string|number[]} data String or array of numbers to encode
 *
 * @return {string}
 */

/**
 * Creates a hex string from given bytes array.
 *
 * @function bytes2hex
 *
 * @param {number[]} data Array of numbers to convert into a string
 * @param {boolean} [toUpperCase] If set to 'true', resulting string will have uppercase 'A-F' chars.
 *   Default is 'false'.
 *
 * @return {string}
 */

/**
 * Given array of numbers create a string from them using specified encoding
 *
 * @function bytes2str
 *
 * @param {number[]} data Array of numbers to create a string from
 * @param {string} [encoding] Encoding to use for string creation, "utf-8" by default.
 *
 * @return {string}
 */

/**
 * Creates an array of numbers from parsing a hex string
 *
 * @function hex2bytes
 *
 * @param {string} data Hex string like "cafec0de"
 *
 * @return {number[]}
 */

/**
 * Calculates MD5 hash of specified data
 *
 * @function md5
 *
 * @param {string|number[]} data String or array of numbers to calculate hash from
 *
 * @return {string}
 */

/**
 * Calculates SHA-1 hash of specified data
 *
 * @function sha1
 *
 * @param {string} data String to calculate hash from
 *
 * @return {string}
 */

/**
 * Calculates SHA-256 hash of specified data
 *
 * @function sha256
 *
 * @param {string} data String to calculate hash from
 *
 * @return {string}
 */

/**
 * Creates an array of numbers from parsing string in specified codepage
 *
 * @function str2bytes
 *
 * @param {string} data String to parse
 * @param {string} [encoding] String encoding, "utf-8" by default.
 *
 * @return {number[]}
 */

/**
 * Generates unique identifier and returns it's string representation
 *
 * @function uuidgen
 *
 * @return {string}
 */
