# ChatClassificationRequest

## Example Usage

```typescript
import { ChatClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ChatClassificationRequest = {
  model: "Escalade",
  inputs: [
    {
      messages: [
        {
          content: [
            {
              thinking: [
                {
                  referenceIds: [
                    310195,
                  ],
                  type: "reference",
                },
              ],
              type: "thinking",
            },
          ],
          role: "user",
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