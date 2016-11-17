/**
 * @module Modules.Recorder
 */

/**
 * @namespace RecorderEvents
 */

/**
 * Dispatched in case of problems during the recording process
 *
 * @event RecorderEvents.RecorderError
 * @name RecorderEvents.RecorderError
 *
 * @property {string} error Error message
 * @property {Recorder} recorder Recorder that generated the event
 */

/**
 * Dispatched after the recording start
 *
 * @event RecorderEvents.Started
 * @name RecorderEvents.Started
 *
 * @property {Recorder} recorder Recorder that generated the event
 * @property {string} url Record URL
 */

/**
 * Dispatched after the recording stop
 *
 * @event RecorderEvents.Stopped
 * @name RecorderEvents.Stopped
 *
 * @property {string} cost Record cost (ed.: probably it's `number` rather than `string`)
 * @property {string} duration Record duration (ed.: probably it's `number` rather than `string`)
 * @property {Recorder} recorder Recorder that generated the event
 */

/**
 * Create new audio recorder
 * Sources can later be attached using {@link Call.sendMediaTo `Call.sendMediaTo()`} etc.
 *
 * @function VoxEngine.createRecorder
 *
 * @param {VoxEngine.RecorderParameters} parameters Recorder parameters
 *
 * @return {Recorder}
 */

/**
 * @class Recorder
 */

/**
 * @callback Recorder.eventListener
 *
 * @param {object} event Event this listener has been set to listen for.
 */

/**
 * Adds handler for specific event generated by {@link Recorder}
 *
 * @function Recorder#addEventListener
 *
 * @param {function} recorderevent Event class specified in {@link RecorderEvents}
 * @param {Recorder.eventListener} handler Handler function. A single parameter is passed - object with event
 *   information
 */

/**
 * Mute/unmute whole record without detaching media sources from it.
 *
 * @function Recorder#mute
 *
 * @param {boolean} doMute Mute/unmute switch
 */

/**
 * Removes handler for specific event generated by {@link Recorder}.
 *
 * @function Recorder#removeEventListener
 *
 * @param {function} recorderevent Event class specified in {@link RecorderEvents}
 * @param {Recorder.eventListener} [handler] Handler function. If not specified, all event listeners are removed
 */

/**
 * Stop recording. Causes {@link RecorderEvents.Stopped} to be dispatched.
 *
 * @function Recorder#stop
 */