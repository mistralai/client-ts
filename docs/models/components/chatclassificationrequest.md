# ChatClassificationRequest

## Example Usage

```typescript
import { ChatClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ChatClassificationRequest = {
  model: "Countach",
  inputs: [
    {
      messages: [
        {
          content: [
            {
              inputAudio: "<value>",
              type: "input_audio",
            },
          ],
          role: "tool",
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