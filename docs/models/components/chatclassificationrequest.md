# ChatClassificationRequest

## Example Usage

```typescript
import { ChatClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ChatClassificationRequest = {
  model: "Volt",
  inputs: [
    {
      messages: [
        {
          content: "<value>",
          role: "system",
        },
      ],
    },
  ],
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `model`             | *string*            | :heavy_check_mark:  | N/A                 |
| `inputs`            | *components.Inputs* | :heavy_check_mark:  | Chat to classify    |