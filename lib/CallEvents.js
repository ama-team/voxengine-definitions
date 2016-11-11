/**
 * @enum {string}
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

module.exports = CallEvents;