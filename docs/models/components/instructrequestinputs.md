# InstructRequestInputs

## Example Usage

```typescript
import { InstructRequestInputs } from "@mistralai/mistralai/models/components";

let value: InstructRequestInputs = {
  messages: [
    {
      prefix: false,
      role: "assistant",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `messages`                                   | *components.InstructRequestInputsMessages*[] | :heavy_check_mark:                           | N/A                                          |