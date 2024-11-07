# ChatClassificationRequest

## Example Usage

```typescript
import { ChatClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ChatClassificationRequest = {
  inputs: [
    {},
  ],
  model: "Alpine",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `inputs`                                     | *components.ChatClassificationRequestInputs* | :heavy_check_mark:                           | Chat to classify                             |
| `model`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |