/**
 * @enum {string}
 * @readonly
 *
 * @todo this enum actually consists of functions, not strings. Probably, at-event tag should be used here
 */
var CallEvents = {
    AcceptReInvite: 'AcceptReInvite',
    AudioStarted: 'AudioStarted',
    Connected: 'Connected',
    Disconnected: 'Disconnected',
    Failed: 'Failed',
    FirstVideoPacket: 'FirstVideoPacket',
    InfoReceived: 'InfoReceived',
    MessageReceived: 'MessageReceived',
    MicStatusChange: 'MicStatusChange',
    OffHold: 'OffHold',
    OnHold: 'OnHold',
    PlaybackFinished: 'PlaybackFinished',
    ReInvite: 'ReInvite',
    RecordStarted: 'RecordStarted',
    RecordStopped: 'RecordStopped',
    Ringing: 'Ringing',
    ToneDetected: 'ToneDetected',
    ToneReceived: 'ToneReceived',
    TransferComplete: 'TransferComplete',
    VideoTrackCreated: 'VideoTrackCreated',
    VoicemailPromptDetected: 'VoicemailPromptDetected',
    VoicemailPromptNotDetected: 'VoicemailPromptNotDetected',
    VoicemailToneDetected: 'VoicemailToneDetected',
    VoicemailToneNotDetected: 'VoicemailToneNotDetected'
};

exports = module.exports = CallEvents;