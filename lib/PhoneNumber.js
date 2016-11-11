/**
 * @enum {string}
 * @readonly
 */
var _ErrorCodes = {
        INVALID_COUNTRY_CODE: 'INVALID_COUNTRY_CODE',
        NOT_A_NUMBER: 'NOT_A_NUMBER',
        TOO_SHORT_AFTER_IDD: 'TOO_SHORT_AFTER_IDD',
        TOO_SHORT_NSN: 'TOO_SHORT_NSN',
        TOO_LONG_NSN: 'TOO_LONG_NSN'
    },
/**
 * @namespace
 */
    PhoneNumber = {
        /**
         * @param {string} number
         * @param {string} [country]
         *
         * @return {Info}
         */
        getInfo: function (number, country) {

        },
        /**
         * @class
         * @constructor
         */
        Info: function () {
            /**
             * @memberOf Info
             * @type {string}
             */
            this.error = '';
            /**
             * @memberOf Info
             * @type {boolean}
             */
            this.isPossibleNumber = false;
            /**
             * @memberOf Info
             * @type {boolean}
             */
            this.isValidNumber = false;
            /**
             * @memberOf Info
             * @type {boolean}
             */
            this.isValidNumberForRegion = false;
            /**
             * @memberOf Info
             * @type {string}
             */
            this.number = '';
            /**
             * @memberOf Info
             * @type {string}
             */
            this.numberType = '';
            /**
             * @memberOf Info
             * @type {string}
             */
            this.region = '';
        }
    };

module.exports = PhoneNumber;