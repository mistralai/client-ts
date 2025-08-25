# CompletionEvent

## Example Usage

```typescript
import { CompletionEvent } from "@mistralai/mistralai-azure/models/components";

let value: CompletionEvent = {
  data: {
    id: "<id>",
    model: "Golf",
    choices: [
      {
        index: 715190,
        delta: {},
        finishReason: "error",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.CompletionChunk](../../models/components/completionchunk.md) | :heavy_check_mark:                                                       | N/A                                                                      |