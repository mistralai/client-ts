# InstructRequestInputs

## Example Usage

```typescript
import { InstructRequestInputs } from "@mistralai/mistralai/models/components";

let value: InstructRequestInputs = {
  messages: [
    {
      content: [
        {
          documentUrl: "https://vibrant-legislature.biz",
          type: "document_url",
        },
      ],
      role: "user",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `messages`                                   | *components.InstructRequestInputsMessages*[] | :heavy_check_mark:                           | N/A                                          |