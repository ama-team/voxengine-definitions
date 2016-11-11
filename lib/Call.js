/**
 * @class
 * @constructor
 */
function Call() {
    /**
     * @enum
     * @readonly
     * @private
     */
    var _ProgressToneCountries = ['US', 'RU'];

    /**
     * @param {CallEvents} callevent
     * @param {function} handler
     */
    this.addEventListener = function (callevent, handler) {};
    /**
     * @param {object<string, string>} [extraHeaders]
     */
    this.answer = function (extraHeaders) {};
    /**
     * @return {string}
     */
    this.callerid = function () {};
    /**
     * @param {string|undefined} cData
     * @return {string}
     */
    this.customData = function (cData) {};
    /**
     * @param {Number} [code]
     * @param {object<string, string>} [extraHeaders]
     */
    this.decline = function (code, extraHeaders) {};

    this.detectProgressTone = function () {};
    /**
     * @param {Number} [timeout]
     * @param {Number} [speechDuration]
     */
    this.detectVoicemailPrompt = function (timeout, speechDuration) {};
    /**
     * @param {Number} [timeout]
     * @param {Number} [threshold]
     */
    this.detectVoicemailTone = function (timeout, threshold) {};
    /**
     * @return {string}
     */
    this.displayName = function () {};
    /**
     * @param {boolean} handle
     */
    this.handleMicStatus = function (handle) {};
    /**
     * @param {boolean} doHandle
     */
    this.handleTones = function (doHandle) {};
    /**
     * @param {object<string, string>} extraHeaders
     */
    this.hangup = function (extraHeaders) {};
    /**
     * @return {string}
     */
    this.id = function () {};
    /**
     * @return {boolean}
     */
    this.incoming = function () {};
    /**
     * @return {string}
     */
    this.number = function () {};
    /**
     * @param {_ProgressToneCountries} country
     */
    this.playProgressTone = function (country) {};
    /**
     * @param {VoxEngine.RecorderParameters} [params]
     */
    this.record = function (params) {};
    /**
     * @param {Number} [code]
     * @param {object<string, string>} extraHeaders
     */
    this.reject = function (code, extraHeaders) {};
    /**
     * @param {CallEvents} callevent
     * @param {function} handler
     */
    this.removeEventListener = function (callevent, handler) {};
    /**
     * @param {object<string, string>} [extraHeaders]
     */
    this.ring = function (extraHeaders) {};
    /**
     * @param {string} text
     * @param {Language} [language]
     * @param {VoxEngine.TTSOptions} [ttsoptions]
     */
    this.say = function (text, language, ttsoptions) {};
    /**
     * @param {string} digits
     */
    this.sendDigits = function (digits) {};
    /**
     * @param {String} mimeType
     * @param {String} body
     * @param {object<string, string>} [headers]
     */
    this.sendInfo = function (mimeType, body, headers) {};
    /**
     * @param {Call|Conference} targetMediaUnit
     */
    this.sendMediaTo = function (targetMediaUnit) {};
    /**
     * @param {string} text
     */
    this.sendMessage = function (text) {};
    /**
     * @param {object<string, string>} [extraHeaders]
     */
    this.startEarlyMedia = function (extraHeaders) {};
    /**
     * @param {string} url
     * @param {boolean} [loop]
     */
    this.startPlayback = function (url, loop) {};
    /**
     * @return {string}
     */
    this.state = function () {};
    /**
     * @param {Call|Conference} targetMediaUnit
     */
    this.stopMediaTo = function (targetMediaUnit) {};

    this.stopPlayback = function () {};
    /**
     * @return {string}
     */
    this.toString = function () {};
    /**
     * @return {boolean}
     */
    this.vad = function () {};
}

module.exports = Call;