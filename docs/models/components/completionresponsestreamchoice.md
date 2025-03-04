# CompletionResponseStreamChoice

## Example Usage

```typescript
import { CompletionResponseStreamChoice } from "@mistralai/mistralai/models/components";

let value: CompletionResponseStreamChoice = {
  index: 187131,
  delta: {},
  finishReason: "tool_calls",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `index`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `delta`                                                                                                                        | [components.DeltaMessage](../../models/components/deltamessage.md)                                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `finishReason`                                                                                                                 | [components.CompletionResponseStreamChoiceFinishReason](../../models/components/completionresponsestreamchoicefinishreason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |