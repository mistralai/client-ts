# InstructRequestInputs

## Example Usage

```typescript
import { InstructRequestInputs } from "@mistralai/mistralai/models/components";

let value: InstructRequestInputs = {
  messages: [
    {
      content: "<value>",
      role: "tool",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `messages`                                   | *components.InstructRequestInputsMessages*[] | :heavy_check_mark:                           | N/A                                          |