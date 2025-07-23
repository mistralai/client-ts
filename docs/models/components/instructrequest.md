# InstructRequest

## Example Usage

```typescript
import { InstructRequest } from "@mistralai/mistralai/models/components";

let value: InstructRequest = {
  messages: [
    {
      prefix: false,
      role: "assistant",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `messages`                             | *components.InstructRequestMessages*[] | :heavy_check_mark:                     | N/A                                    |