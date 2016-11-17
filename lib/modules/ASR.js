/**
 * @module Modules.ACR
 */

/**
 * @namespace ASREvents
 */

/**
 * Dispatched in case of problems during the recognition process
 *
 * @event ASREvents.ASRError
 * @name ASREvents.ASRError
 *
 * @property {ASR} asr ASR instance that generated the event
 * @property {string} error Error message
 */

/**
 * Dispatched after ASR detected voice input and started collecting audio data for ASR
 *
 * @event ASREvents.CaptureStarted
 * @name ASREvents.CaptureStarted
 *
 * @property {ASR} asr ASR instance that generated the event
 */

/**
 * Dispatched when recognition result received from ASR
 *
 * @event ASREvents#Result
 * @name ASREvents#Result
 *
 * @property {ASR} asr ASR instance that generated the event
 * @property {number} confidence Recognition confidence in 0..100 Range (100 means full confidence, 0 - not confident at
 * all)
 * @property {string} text Recognition result
 */

/**
 * Dispatched after ASR captured audio data, before recognition process
 *
 * @event ASREvents.SpeechCapture
 * @name ASREvents.SpeechCapture
 *
 * @property {ASR} asr ASR instance that generated the event
 */

/**
 * Dispatched after ASR instance was created
 *
 * @event ASREvents.Started
 * @name ASREvents.Started
 *
 * @property {ASR} asr ASR instance that generated the event
 */

/**
 * Dispatched after ASR instance was created
 *
 * @event ASREvents.Stopped
 * @name ASREvents.Stopped
 *
 * @property {ASR} asr ASR instance that generated the event
 */

/**
 * @enum {string}
 * @readonly
 */
var ASRDictionary = {
    ADDRESS_RU: 'ADDRESS_RU',
    ADDRESS_TR: 'ADDRESS_TR',
    CITY_STATE_US: 'CITY_STATE_US',
    DATE: 'DATE',
    DATE_RU: 'DATE_RU',
    ECOMMERCE: 'ECOMMERCE',
    MONEY_US: 'MONEY_US',
    MUSIC: 'MUSIC',
    NAMES_RU: 'NAMES_RU',
    NBA: 'NBA',
    NFL: 'NFL',
    NOTES: 'NOTES',
    NUMBERS_RU: 'NUMBERS_RU',
    NUMBERS_TO_9: 'NUMBERS_TO_9',
    NUMBERS_TO_99: 'NUMBERS_TO_99',
    NUMBERS_TO_999: 'NUMBERS_TO_999',
    PHONE_NUMBER: 'PHONE_NUMBER',
    QUESTIONNAIRE_RU: 'QUESTIONNAIRE_RU',
    SEARCH_QUERIES: 'SEARCH_QUERIES',
    SPORTS_TEAMS: 'SPORTS_TEAMS',
    STREETS: 'STREETS',
    TIME: 'TIME'
};

/**
 * @enum {string}
 * @readonly
 */
var ASRLanguage = {
    AFRIKAANS_ZA: 'AFRIKAANS_ZA',
    ARABIC_AE: 'ARABIC_AE',
    ARABIC_BH: 'ARABIC_BH',
    ARABIC_DZ: 'ARABIC_DZ',
    ARABIC_EG: 'ARABIC_EG',
    ARABIC_IL: 'ARABIC_IL',
    ARABIC_IQ: 'ARABIC_IQ',
    ARABIC_JO: 'ARABIC_JO',
    ARABIC_KW: 'ARABIC_KW',
    ARABIC_LB: 'ARABIC_LB',
    ARABIC_MA: 'ARABIC_MA',
    ARABIC_OM: 'ARABIC_OM',
    ARABIC_PS: 'ARABIC_PS',
    ARABIC_QA: 'ARABIC_QA',
    ARABIC_SA: 'ARABIC_SA',
    ARABIC_TN: 'ARABIC_TN',
    BASQUE_ES: 'BASQUE_ES',
    BULGARIAN_BG: 'BULGARIAN_BG',
    CANTONESE_HK: 'CANTONESE_HK',
    CATALAN_ES: 'CATALAN_ES',
    CHINESE_CN: 'CHINESE_CN',
    CHINESE_HK: 'CHINESE_HK',
    CHINESE_TW: 'CHINESE_TW',
    CROATIAN_HR: 'CROATIAN_HR',
    CZECH_CZ: 'CZECH_CZ',
    DANISH_DK: 'DANISH_DK',
    DUTCH_NL: 'DUTCH_NL',
    ENGLISH_AU: 'ENGLISH_AU',
    ENGLISH_CA: 'ENGLISH_CA',
    ENGLISH_IE: 'ENGLISH_IE',
    ENGLISH_IN: 'ENGLISH_IN',
    ENGLISH_NZ: 'ENGLISH_NZ',
    ENGLISH_PH: 'ENGLISH_PH',
    ENGLISH_UK: 'ENGLISH_UK',
    ENGLISH_US: 'ENGLISH_US',
    ENGLISH_ZA: 'ENGLISH_ZA',
    FARSI_IR: 'FARSI_IR',
    FILIPINO_PH: 'FILIPINO_PH',
    FINNISH_FI: 'FINNISH_FI',
    FRENCH_CA: 'FRENCH_CA',
    FRENCH_FR: 'FRENCH_FR',
    GALICIAN_ES: 'GALICIAN_ES',
    GERMAN_DE: 'GERMAN_DE',
    GREEK_GR: 'GREEK_GR',
    HEBREW_IL: 'HEBREW_IL',
    HINDI_IN: 'HINDI_IN',
    HUNGARIAN_HU: 'HUNGARIAN_HU',
    ICELANDIC_IS: 'ICELANDIC_IS',
    INDONESIAN_ID: 'INDONESIAN_ID',
    ITALIAN_IT: 'ITALIAN_IT',
    JAPANESE_JP: 'JAPANESE_JP',
    KOREAN_KR: 'KOREAN_KR',
    LITHUANIAN_LT: 'LITHUANIAN_LT',
    MALAYSIA_MY: 'MALAYSIA_MY',
    NORWEGIAN_NO: 'NORWEGIAN_NO',
    POLISH_PL: 'POLISH_PL',
    PORTUGUESE_BR: 'PORTUGUESE_BR',
    PORTUGUES_PT: 'PORTUGUES_PT',
    ROMANIAN_RO: 'ROMANIAN_RO',
    RUSSIAN_RU: 'RUSSIAN_RU',
    SERBIAN_RS: 'SERBIAN_RS',
    SLOVAK_SK: 'SLOVAK_SK',
    SLOVENIAN_SL: 'SLOVENIAN_SL',
    SPANISH_AR: 'SPANISH_AR',
    SPANISH_BO: 'SPANISH_BO',
    SPANISH_CL: 'SPANISH_CL',
    SPANISH_CO: 'SPANISH_CO',
    SPANISH_CR: 'SPANISH_CR',
    SPANISH_DO: 'SPANISH_DO',
    SPANISH_EC: 'SPANISH_EC',
    SPANISH_ES: 'SPANISH_ES',
    SPANISH_GT: 'SPANISH_GT',
    SPANISH_HN: 'SPANISH_HN',
    SPANISH_MX: 'SPANISH_MX',
    SPANISH_NI: 'SPANISH_NI',
    SPANISH_PA: 'SPANISH_PA',
    SPANISH_PE: 'SPANISH_PE',
    SPANISH_PR: 'SPANISH_PR',
    SPANISH_PY: 'SPANISH_PY',
    SPANISH_SV: 'SPANISH_SV',
    SPANISH_US: 'SPANISH_US',
    SPANISH_UY: 'SPANISH_UY',
    SPANISH_VE: 'SPANISH_VE',
    SWEDISH_SE: 'SWEDISH_SE',
    THAI_TH: 'THAI_TH',
    TURKISH_TR: 'TURKISH_TR',
    UKRAINIAN_UA: 'UKRAINIAN_UA',
    VIETNAMESE_VN: 'VIETNAMESE_VN',
    ZULU_ZA: 'ZULU_ZA'
};

/**
 * @enum {string}
 * @readonly
 */
var ASRMicProfile = {
    MOBILE: 'MOBILE',
    PC: 'PC'
};

/**
 * ASR parameters
 *
 * @class ASRParameters
 *
 * @property {String|String[]|ASRDictionary|ASRDictionary[]} dict ASR dictionary. {@link ASRDictionary ASRDictionary.*}
 *   or array of words are possible values
 * @property {ASRLanguage} lang ASR language {@ling ASRLanguage ASRLanguage.*} are possible value
 * @property {ASRMicProfile} micProfile Microphone profile. {@link ASRMicProfile.MOBILE} and {@link ASRMicProfile.PC}
 *   are possible values
 */

/**
 * @class ASR
 */

/**
 * Please note that this is virtual member that doesn't really exist
 *
 * @callback ASR.eventListener
 *
 * @param {object} event See {@link ASREvents}
 */

/**
 * Adds handler for specific event generated by ASR
 *
 * @function ASR#addEventListener
 *
 * @param {function} asrevent Event class (i.e. ASREvents.Stopped)
 * @param {ASR.eventListener} handler Handler function. A single parameter is passed - object with event information
 */

/**
 * Removes handler for specific event generated by ASR
 *
 * @function ASR#removeEventListener
 *
 * @param {function} asrevent Event class (i.e. ASREvents.Stopped)
 * @param {ASR.eventListener} [handler] Handler function. If not specified, all event listeners are removed
 */

/**
 * op recognition. Causes {@link ASREvents.Stopped} to be dispatched
 *
 * @function ASR#stop
 */

/**
 * Create new speech recognizer and start recognition.
 *
 * @function VoxEngine.createASR
 *
 * @param {ASRParameters} params ASR parameters
 *
 * @return {ASR}
 */