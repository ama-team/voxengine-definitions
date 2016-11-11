/**
 * @readonly
 * @enum {string}
 */
var _HttpMethods = {
        GET: 'GET',
        POST: 'POST'
    },
    Net = {
        /**
         * @class
         * @constructor
         */
        HttpRequestOptions: function () {
            /**
             * @type {Array<String>}
             */
            this.headers = [];
            /**
             * @type {_HttpMethods}
             */
            this.method = _HttpMethods.GET;
            /**
             * @type {{}}
             */
            this.params = {};
            this.postData = '';
            /**
             * @type {boolean}
             */
            this.rawOutput = false
        },
        /**
         * @class
         * @constructor
         */
        HttpRequestResult: function () {
            /**
             * @type {number}
             */
            this.code = 200;
            /**
             * @type {object<string, string>}
             */
            this.headers = {};
            /**
             * @type {string}
             */
            this.text = '';
        },
        /**
         * @class
         * @constructor
         */
        SendMailOptions: function () {
            /**
             * @type {String|Array<String>}
             */
            this.bcc = [];
            /**
             * @type {String|Array<String>}
             */
            this.cc = [];
            /**
             * @type {string}
             */
            this.html = '';
            /**
             * @type {string}
             */
            this.login = '';
            /**
             * @type {string}
             */
            this.password = '';
            /**
             * @type {number}
             */
            this.port = 465;
        },
        /**
         * @class
         * @constructor
         */
        SendMailResult: function () {
            /**
             * @type {number}
             */
            this.code = 200;
            /**
             * @type {string}
             */
            this.error = '';
        },

        /**
         * @param {string} url
         * @param {function} callback
         * @param {HttpRequestOptions} options
         */
        httpRequest: function (url, callback, options) {
            
        },
        /**
         * @param {string} url
         * @param {HttpRequestOptions} options
         *
         * @return {Promise}
         */
        httpRequestAsync: function (url, options) {

        },
        /**
         * @param {string} mailServerAddress
         * @param {string} from
         * @param {string|Array<string>} to
         * @param {string} title
         * @param {string} body
         * @param {function} callback
         * @param {SendMailOptions} [options]
         */
        sendMail: function (mailServerAddress, from, to, title, body, callback, options) {

        },
        /**
         * @param {string} mailServerAddress
         * @param {string} from
         * @param {string|Array<string>} to
         * @param {string} title
         * @param {string} body
         * @param {SendMailOptions} [options]
         *
         * @return {Promise}
         */
        sendMailAsync: function (mailServerAddress, from, to, title, body, options) {

        }
    };