# InstructRequest

## Example Usage

```typescript
import { InstructRequest } from "@mistralai/mistralai/models/components";

let value: InstructRequest = {
  messages: [
    {
      content: [
        {
          documentUrl: "https://powerless-guide.info",
          type: "document_url",
        },
      ],
      role: "tool",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `messages`                             | *components.InstructRequestMessages*[] | :heavy_check_mark:                     | N/A                                    |