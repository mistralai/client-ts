# ResponsesStreamFrame

## Example Usage

```typescript
import { ResponsesStreamFrame } from "@mistralai/mistralai/models/components";

let value: ResponsesStreamFrame = {
  event: "<value>",
  data: {
    contentIndex: 932230,
    delta: "<value>",
    itemId: "<id>",
    logprobs: [],
    outputIndex: 513754,
    sequenceNumber: 282712,
    type: "response.output_text.delta",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `event`                               | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `data`                                | *components.ResponsesStreamFrameData* | :heavy_check_mark:                    | N/A                                   |