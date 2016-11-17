/**
 * @namespace AppEvents
 */

/**
 * Event triggered when incoming call arrives.
 *
 * Since each incoming call creates new session, it can be dispatched only once during session lifetime
 *
 * @event AppEvents.CallAlerting
 * @name AppEvents.CallAlerting
 *
 * @property {Call} call Incoming call that triggered the event
 * @property {string} callerid CallerID for current call
 * @property {string} customData Optional: Custom data that was passed from client with the call
 * @property {string} destination Dialed number
 * @property {string} displayName Displayable name of the caller
 * @property {string} fromURI CallerID with domain or SIP URI for incoming SIP call
 * @property {string} headers Custom SIP headers received with the call (ones starting with "X-")
 * @property {string} name The name of the event - "Application.CallAlerting"
 * @property {string} toUri Dialed SIP URI
 */

/**
 * Event triggered when HTTP request is received by the session. HTTP requests are sent via `media_session_access_url`
 * returned from `StartScenarios` and `StartConference` methods of HTTP API. Requests are used to stop scenario or pass
 * additional data into it.
 *
 * Handler of this event should return data that will be sent in HTTP response. If it is string or number, it's sent as
 * is, otherwise it's encoded using JSON, and Content-Type of response is set to `application/json`.
 *
 * @event AppEvents.HttpRequest
 * @name AppEvents.HttpRequest
 *
 * @property {string} content HTTP request content
 * @property {string} method HTTP request method
 * @property {string} path HTTP path requested (without domain name)
 */

/**
 * Event dispatched when application initialization completes
 *
 * @event AppEvents.Started
 * @name AppEvents.Started
 *
 * @property {string} accessURL HTTP URL that can be used to send commands to this scenario from outer world
 */

/**
 * Event triggered when session was terminated.
 *
 * @event AppEvents.Terminated
 * @name AppEvents.Terminated
 */

/**
 * Event triggered when session is about to terminate.
 *
 * @event AppEvents.Terminating
 * @name AppEvents.Terminating
 */
