/**
 * @namespace CallEvents
 */

/**
 * Event triggered on accept ReInvite message
 *
 * @event CallEvents.AcceptReInvite
 * @name CallEvents.AcceptReInvite
 *
 * @property {string} body Content of the message
 * @property {Call} call Call that triggered the event
 * @property {object} headers Optional SIP headers received with the message
 * @property {string} mimeType MIME type of body data "application/sdp" or "application/json"
 * @property {string} name The name of the event - "Call.AcceptReInvite"
 */

/**
 * Event triggered after outgoing call starts receiving media from remote peer.
 *
 * @event CallEvents.AudioStarted
 * @name CallEvents.AudioStarted
 *
 * @property {Call} call Call that triggered the event
 * @property {object} headers Custom SIP headers received with the message (ones starting with "X-")
 * @property {string} name The name of the event - "Call.AudioStarted"
 */

/**
 * Event triggered after the call is established.
 *
 * @event CallEvents.Connected
 * @name CallEvents.Connected
 *
 * @property {Call} call Call that triggered the event
 * @property {string} customData Optional: Custom data that was passed from client with call accept command
 * @property {string} name The name of the event - "Call.Connected"
 */

/**
 * Event triggered when established call was terminated.
 *
 * @event CallEvents.Disconnected
 * @name CallEvents.Disconnected
 *
 * @property {Call} call Call that triggered the event
 * @property {number} cost Call cost in account currency
 * @property {number} duration Total call duration in seconds
 * @property {object} headers Custom SIP headers received with the message (ones starting with "X-")
 * @property {string} name The name of the event - "Call.Disconnected"
 */

/**
 * Event triggered when call was terminated before it was connected.
 *
 * @event CallEvents.Failed
 * @name CallEvents.Failed
 *
 * @property {Call} call Call that triggered the event
 * @property {number} code Status code of the call (e.g. 486)
 * @property {object} headers Custom SIP headers received with the message (ones starting with "X-")
 * @property {string} name The name of the event - "Call.Failed"
 * @property {string} reason Status message of call failure (e.g. `Busy Here`)
 */

/**
 * Dispatched after the first video packet received
 *
 * @event CallEvents.FirstVideoPacket
 * @name CallEvents.FirstVideoPacket
 *
 * @property {Call} call Call that triggered the event
 * @property {string} url Record URL
 */

/**
 * Event triggered when INFO message is received
 *
 * @event CallEvents.InfoReceived
 * @name CallEvents.InfoReceived
 *
 * @property {string} body Content of the message
 * @property {Call} call Call that triggered the event
 * @property {object} headers Optional SIP headers received with the message
 * @property {string} mimeType MIME type of INFO message
 * @property {string} name The name of the event - "Call.InfoReceived"
 */

/**
 * Event triggered when Text Message is received
 *
 * @event CallEvents.MessageReceived
 * @name CallEvents.MessageReceived
 *
 * @property {Call} call Call that triggered the event
 * @property {object} headers Optional SIP headers received with the message
 * @property {string} name The name of the event - "Call.MessageReceived"
 * @property {string} text Content of the message
 */

/**
 * Event triggered when microphone status changed.
 *
 * @event CallEvents.MicStatusChange
 * @name CallEvents.MicStatusChange
 *
 * @property {boolean} active Activity flag
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.MicStatusChange"
 */

/**
 * Event triggered when call is taken off hold
 *
 * @event CallEvents.OffHold
 * @name CallEvents.OffHold
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.OffHold"
 */

/**
 * Event triggered when call is put on hold
 *
 * @event CallEvents.OnHold
 * @name CallEvents.OnHold
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.OnHold"
 */

/**
 * Event triggered when audio playback is finished.
 *
 * @event CallEvents.PlaybackFinished
 * @name CallEvents.PlaybackFinished
 *
 * @property {Call} call Call that triggered the event
 * @property {string} error Optional: Error that occured during the playback
 * @property {string} name The name of the event - "Call.PlaybackFinished"
 */

/**
 * Event triggered when ReInvite message is received
 *
 * @event CallEvents.ReInvite
 * @name CallEvents.ReInvite
 *
 * @property {string} body Content of the message
 * @property {Call} call Call that triggered the event
 * @property {object} headers Optional SIP headers received with the message
 * @property {string} mimeType MIME type of body data "application/sdp" or "application/json"
 * @property {string name The name of the event - "Call.ReInvite"
 */

/**
 * Event triggered when call recording is started as result of Call.record()
 *
 * @event CallEvents.RecordStarted
 * @name CallEvents.RecordStarted
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.RecordStarted"
 * @property {string} url HTTP URL of record file.
 */

/**
 * Event triggered when call recording is stopped
 *
 * @event CallEvents.RecordStopped
 * @name CallEvents.RecordStopped
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.RecordStopped"
 * @property {string} url HTTP URL of record file.
 */

/**
 * Event triggered after outgoing call receives progress signal from remote peer.
 *
 * @event CallEvents.Ringing
 * @name CallEvents.Ringing
 *
 * @property {Call} call Call that triggered the event
 * @property {object} headers Custom SIP headers received with the message (ones starting with "X-")
 * @property {string} name The name of the event - "Call.Ringing"
 */

/**
 * Event triggered when tone is detected.
 *
 * @event CallEvents.ToneDetected
 * @name CallEvents.ToneDetected
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.ToneDetected"
 */

/**
 * Event triggered when DTMF signal is received.
 *
 * @event CallEvents.ToneReceived
 * @name CallEvents.ToneReceived
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.ToneReceived"
 * @property {string} tone Tone received in this event: 0-9,*,# are possible values
 */

/**
 * Event triggered when call transfer complete
 *
 * @event CallEvents.TransferComplete
 * @name CallEvents.TransferComplete
 *
 * @property {Call} call Call that triggered the event
 */

/**
 * Dispatched after the video track created
 *
 * @event CallEvents.VideoTrackCreated
 * @name CallEvents.VideoTrackCreated
 *
 * @property {Call} call Call that triggered the event
 * @property {string} url Record URL
 */

/**
 * Event triggered when voicemail prompt is detected. Please note that this method is based on specific audio signal
 * pattern which isn't always in place, so there is no 100% guarantee that it will detect voicemail in all situations.
 *
 * @event CallEvents.VoicemailPromptDetected
 * @name CallEvents.VoicemailPromptDetected
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.VoicemailPromptDetected"
 * @property {string} pattern Pattern which corresponds to media stream, see {@link PromptStreamPattern}
 */

/**
 * Event triggered when voicemail prompt is not detected. Please note that this method is based on specific audio signal
 * pattern which isn't always in place, so there is no 100% guarantee that it will detect voicemail in all situations.
 *
 * @event CallEvents.VoicemailPromptNotDetected
 * @name CallEvents.VoicemailPromptNotDetected
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.VoicemailPromptNotDetected"
 * @property {string} pattern Pattern which corresponds to media stream, see {@link PromptStreamPattern}
 */

/**
 * Event triggered when voicemail tone is detected.
 *
 * @event CallEvents.VoicemailToneDetected
 * @name CallEvents.VoicemailToneDetected
 *
 * @property {Call} call Call that triggered the event
 * @property {number} frequency TOne frequency
 * @property {string} name The name of the event - "Call.VoicemailToneDetected"
 */

/**
 * Event triggered when voicemail tone is not detected.
 *
 * @event CallEvents.VoicemailToneNotDetected
 * @name CallEvents.VoicemailToneNotDetected
 *
 * @property {Call} call Call that triggered the event
 * @property {string} name The name of the event - "Call.VoicemailToneNotDetected"
 */