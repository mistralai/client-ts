# InstructRequestInputs

## Example Usage

```typescript
import { InstructRequestInputs } from "@mistralai/mistralai/models/components";

let value: InstructRequestInputs = {
  messages: [
    {
      content: [
        {
          text: "<value>",
          type: "text",
        },
      ],
      role: "system",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `messages`                                   | *components.InstructRequestInputsMessages*[] | :heavy_check_mark:                           | N/A                                          |