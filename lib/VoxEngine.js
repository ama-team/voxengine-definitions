/**
 * @namespace
 */
var VoxEngine = {
    /**
     * @param {AppEvents} appevent
     * @param {function} handler
     */
    addEventListener: function (appevent, handler) {

    },
    /**
     * @param {string} conferenceId
     * @param {string} [callerid]
     * @param {string} [displayName]
     * @param {Object} [headers]
     *
     * @return {Call}
     */
    callConference: function (conferenceId, callerid, displayName, headers) {

    },
    /**
     * @param {string} number
     * @param {string} [callerid]
     *
     * @return {Call}
     */
    callPSTN: function (number, callerid) {

    },
    /**
     * @param {string} to
     * @param {string} callerid
     * @param {string} [displayName]
     * @param {string} [password]
     * @param {string} [authUser]
     * @param {object} [extraHeaders]
     * @param {boolean} [video]
     * @param {string} [outProxy]
     *
     * @return {Call}
     */
    callSIP: function (to, callerid, displayName, password, authUser, extraHeaders, video, outProxy) {

    },
    /**
     * @param {string}username
     * @param {string} callerid
     * @param {string} [displayName]
     * @param {object} [extraHeaders]
     * @param {boolean} [video]
     *
     * @return {Call}
     */
    callUser: function (username, callerid, displayName, extraHeaders, video) {
        
    },
    /**
     * @param {Call} incomingCall
     * @param {string} username
     * @param {string} callerid
     * @param {string} [displayName]
     * @param {object} [extraHeaders]
     *
     * @return {Call}
     */
    callUserDirect: function (incomingCall, username, callerid, displayName, extraHeaders) {

    },
    /**
     * @param {string|undefined} cData
     */
    customData: function(cData) {
        
    },
    /**
     * @param {Call} call1
     * @param {Call} call2
     * @param {function} [onEstablishedCallback]
     */
    easyProcess: function (call1, call2, onEstablishedCallback) {

    },
    /**
     * @param {function} [numberTransform]
     * @param {function} [onEstablishedCallback]
     */
    forwardCallToPSTN: function (numberTransform, onEstablishedCallback) {

    },
    /**
     * @param {function} [onEstablishedCallback]
     * @param {boolean} [video]
     */
    forwardCallToSIP: function (onEstablishedCallback, video) {

    },
    /**
     * @param {function} [onEstablishedCallback]
     * @param {boolean} [video]
     */
    forwardCallToUser: function (onEstablishedCallback, video) {

    },
    /**
     * @param {function} [onEstablishedCallback]
     */
    forwardCallToUserDirect: function (onEstablishedCallback) {

    },
    /**
     * @param {string} fileUrl
     */
    playSoundAndHangup: function (fileUrl) {

    },
    /**
     * @param {AppEvents} appevent
     * @param {function} handler
     */
    removeEventListener: function (appevent, handler) {

    },
    /**
     * @param {Call|Conference} mediaUnit1
     * @param {Call|Conference} mediaUnit2
     */
    sendMediaBetween: function (mediaUnit1, mediaUnit2) {
        
    },
    /**
     * @param {Call} call1
     * @param {Call} call2
     */
    stopMediaBetween: function (call1, call2) {
        
    },
    terminate: function () {

    },

    /**
     * @class ConferenceParameters
     * @constructor
     */
    ConferenceParameters: function () {
        /**
         * @type {boolean}
         */
        this.hd_audio = false;
    },
    /**
     * @class RecorderParameters
     * @constructor
     */
    RecorderParameters: function () {
        this.hd_audio = false;
        this.language = ASR
    },
    /**
     * @class TTSOptions
     * @constructor
     */
    TTSOptions: function () {
        /**
         * @enum {string}
         * @readonly
         */
        var Rate = [
            'x-slow',
            'slow',
            'medium',
            'fast',
            'x-fast',
            'default'
        ];
        /**
         * @enum {string}
         * @readonly
         */
        var Volume = [
            'silent',
            'x-soft',
            'soft',
            'medium',
            'loud',
            'x-loud',
            'default'
        ];
        this.pitch = 1.0;
        /**
         * @type {Rate}
         */
        this.rate = 'default';
        /**
         * @type {Volume}
         */
        this.volume = 'default';
    }
};

module.exports = VoxEngine;