/**
 * @module Modules.IVR
 * @see https://voximplant.com/docs/references/appengine/Module_IVR.html
 */

/**
 * @namespace IVR
 */

/**
 * Reset the IVR
 *
 * @function IVR.reset
 */

/**
 * IVR menu prompt settings.
 *
 * @class IVRPrompt
 *
 * @property {string|Language} lang TTSLanguage
 * @property {string} play Voice message url to play
 * @property {string} say Voice message to say
 */

/**
 * IVR menu state settings
 *
 * @class IVRSettings
 *
 * @property {number} inputLength For `inputfixed` - length of desired input
 * @property {IVRSettings.inputValidator} inputValidator For `inputunknown` states - function that returns whether input
 * is complete or not (input is passed as string)
 * @property {object} nextState Next state to go - for `noinput` state type
 * @property {object} nextStates For select type, map of IVR states to go to according to user input. If there is no
 * next state for specific input, `onInputComplete` is invoked
 * @property {IVRPrompt} prompt Prompt settings
 * @property {string} terminateOn When this digit is entered in `inputunknown` mode, input is considered to be complete
 * @property {number} timeout Timeout in milliseconds for user input
 * @property {('select'|'inputfixed'|'inputunknown'|'noinput')} type Menu type
 */

/**
 * @callback IVRSettings.inputValidator
 *
 * @param {string} input IVR input as string
 *
 * @return {boolean} Whether input is complete
 */

/**
 * IVR menu state
 *
 * @class IVRState
 *
 * @param {string} name State name.
 * @param {IVRSettings} settings Setting for state
 * @param {{IVRState.onInputComplete}} onInputComplete Callback that will be called after user correctly finished input
 *   depending on state type. User input is passed as parameter.
 * @param {IVRState.onInputTimeout} onInputTimeout Callback that will be called in case of input timeout. User input is
 *   passed as parameter.
 *
 * @property {string} input This property is set when IVR leaves the specific state and holds user input
 * @property {IVRSettings} settings IVR state settings
 */

/**
 * @callback IVRState.onInputComplete
 *
 * @param {string} input User input
 */

/**
 * @callback IVRState.onInputTimeout
 *
 * @param {string} input User input
 */

/**
 * Start IVR from current state for specified call
 *
 * @function IVRState#enter
 *
 * @param {Call} call Call that IVR will work with
 */