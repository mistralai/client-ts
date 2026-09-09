# TranscriptionStreamEventsData


## Supported Types

### `components.TranscriptionStreamDone`

```typescript
const value: components.TranscriptionStreamDone = {
  model: "Charger",
  text: "<value>",
  usage: {},
  type: "transcription.done",
  language: "<value>",
};
```

### `components.TranscriptionStreamLanguage`

```typescript
const value: components.TranscriptionStreamLanguage = {
  type: "transcription.language",
  audioLanguage: "<value>",
};
```

### `components.TranscriptionStreamSegmentDelta`

```typescript
const value: components.TranscriptionStreamSegmentDelta = {
  type: "transcription.segment",
  text: "<value>",
  start: 2412.74,
  end: null,
};
```

### `components.TranscriptionStreamTextDelta`

```typescript
const value: components.TranscriptionStreamTextDelta = {
  type: "transcription.text.delta",
  text: "<value>",
};
```

