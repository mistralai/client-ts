# VoiceAgentEvent


## Supported Types

### `components.VoiceAgentStateChangedEvent`

```typescript
const value: components.VoiceAgentStateChangedEvent = {
  oldState: "initializing",
  state: "thinking",
  ts: 9706.19,
};
```

### `components.VoiceAgentErrorEvent`

```typescript
const value: components.VoiceAgentErrorEvent = {
  source: "interruption_detection",
  code: "<value>",
  message: "<value>",
  fatal: false,
};
```

### `components.VoiceAgentSessionUpdatedEvent`

```typescript
const value: components.VoiceAgentSessionUpdatedEvent = {
  session: {
    llm: {},
    tts: {},
    stt: {},
    turn: {},
  },
  ts: 9472.38,
};
```

### `components.VoiceAgentToolCallEndedEvent`

```typescript
const value: components.VoiceAgentToolCallEndedEvent = {
  id: "<id>",
  name: "<value>",
  ts: 5900.3,
  arguments: "<value>",
  status: "error",
};
```

### `components.VoiceAgentToolCallStartedEvent`

```typescript
const value: components.VoiceAgentToolCallStartedEvent = {
  id: "<id>",
  name: "<value>",
  ts: 5866.61,
};
```

### `components.VoiceAgentTranscriptEvent`

```typescript
const value: components.VoiceAgentTranscriptEvent = {
  id: "<id>",
  role: "user",
  content: "<value>",
  final: false,
  ts: 4321.39,
};
```

