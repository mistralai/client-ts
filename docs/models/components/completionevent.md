# CompletionEvent

## Example Usage

```typescript
import { CompletionEvent } from "@mistralai/mistralai/models/components";

let value: CompletionEvent = {
  data: {
    id: "<id>",
    model: "Camaro",
    usage: {
      promptTokens: 16,
      completionTokens: 34,
      totalTokens: 50,
    },
    choices: [
      {
        index: 643990,
        delta: {},
        finishReason: "length",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.CompletionChunk](../../models/components/completionchunk.md) | :heavy_check_mark:                                                       | N/A                                                                      |