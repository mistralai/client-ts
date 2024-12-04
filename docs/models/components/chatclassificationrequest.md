# ChatClassificationRequest

## Example Usage

```typescript
import { ChatClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ChatClassificationRequest = {
  inputs: [
    [
      {
        content: "<value>",
      },
    ],
  ],
  model: "Corvette",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `inputs`                                     | *components.ChatClassificationRequestInputs* | :heavy_check_mark:                           | Chat to classify                             |
| `model`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |