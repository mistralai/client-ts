# ResponsesOutputText

## Example Usage

```typescript
import { ResponsesOutputText } from "@mistralai/mistralai/models/components";

let value: ResponsesOutputText = {
  annotations: [
    {
      fileId: "<id>",
      index: 481556,
      type: "file_path",
    },
  ],
  text: "<value>",
  type: "output_text",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `annotations`                                                                                    | *components.Annotation*[]                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `text`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *"output_text"*                                                                                  | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `logprobs`                                                                                       | [components.ResponsesOutputTextLogprob](../../models/components/responsesoutputtextlogprob.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `additionalProperties`                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |