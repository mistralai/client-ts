# InstructRequest

## Example Usage

```typescript
import { InstructRequest } from "@mistralai/mistralai/models/components";

let value: InstructRequest = {
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `messages`                            | *components.InstructRequestMessage*[] | :heavy_check_mark:                    | N/A                                   |