# TranscriptionStreamEventsData


## Supported Types

### `components.TranscriptionStreamDone`

```typescript
const value: components.TranscriptionStreamDone = {
  model: "Model X",
  text: "<value>",
  usage: {},
  language: "<value>",
};
```

### `components.TranscriptionStreamLanguage`

```typescript
const value: components.TranscriptionStreamLanguage = {
  audioLanguage: "<value>",
};
```

### `components.TranscriptionStreamSegmentDelta`

```typescript
const value: components.TranscriptionStreamSegmentDelta = {
  text: "<value>",
  start: 9670.47,
  end: 8748.43,
};
```

### `components.TranscriptionStreamTextDelta`

```typescript
const value: components.TranscriptionStreamTextDelta = {
  text: "<value>",
};
```

