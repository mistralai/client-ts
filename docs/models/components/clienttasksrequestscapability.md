# ClientTasksRequestsCapability

Specifies which request types the client can augment with tasks (2025-11-25 only).

## Example Usage

```typescript
import { ClientTasksRequestsCapability } from "@mistralai/mistralai/models/components";

let value: ClientTasksRequestsCapability = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sampling`                                                                                     | [components.TasksSamplingCapability](../../models/components/taskssamplingcapability.md)       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `elicitation`                                                                                  | [components.TasksElicitationCapability](../../models/components/taskselicitationcapability.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |