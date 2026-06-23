# WorkflowUpdateRequest

## Example Usage

```typescript
import { WorkflowUpdateRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowUpdateRequest = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `displayName`                                                | *string*                                                     | :heavy_minus_sign:                                           | New display name value                                       |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | New description value                                        |
| `availableInChatAssistant`                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to make the workflow available in the chat assistant |
| `tags`                                                       | *string*[]                                                   | :heavy_minus_sign:                                           | New tags. Replaces the existing tag list.                    |