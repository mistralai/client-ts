# VoiceUpdateRequest

Request model for partially updating voice metadata.

## Example Usage

```typescript
import { VoiceUpdateRequest } from "@mistralai/mistralai/models/components";

let value: VoiceUpdateRequest = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `languages`        | *string*[]         | :heavy_minus_sign: | N/A                |
| `gender`           | *string*           | :heavy_minus_sign: | N/A                |
| `age`              | *number*           | :heavy_minus_sign: | N/A                |
| `tags`             | *string*[]         | :heavy_minus_sign: | N/A                |