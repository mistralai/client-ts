# CompletionEvent

## Example Usage

```typescript
import { CompletionEvent } from "@mistralai/mistralai/models/components";

let value: CompletionEvent = {
  data: {
    id: "<id>",
    model: "Model S",
    choices: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.CompletionChunk](../../models/components/completionchunk.md) | :heavy_check_mark:                                                       | N/A                                                                      |