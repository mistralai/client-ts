# MessageTokens

Information on a single message included in a tokenized prompt as part of an InstructRequest.

## Example Usage

```typescript
import { MessageTokens } from "@mistralai/mistralai/models/components";

let value: MessageTokens = {
  role: "user",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `role`                                               | [components.Roles](../../models/components/roles.md) | :heavy_check_mark:                                   | N/A                                                  |
| `totalTokens`                                        | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `truncated`                                          | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `usageCount`                                         | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |