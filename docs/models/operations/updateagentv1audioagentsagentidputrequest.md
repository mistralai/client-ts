# UpdateAgentV1AudioAgentsAgentIdPutRequest

## Example Usage

```typescript
import { UpdateAgentV1AudioAgentsAgentIdPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateAgentV1AudioAgentsAgentIdPutRequest = {
  agentId: "e40e0357-9433-412b-a0aa-e017f7d7232c",
  audioAgentUpdateRequest: {
    name: "<value>",
    configuration: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `agentId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `audioAgentUpdateRequest`                                                                | [components.AudioAgentUpdateRequest](../../models/components/audioagentupdaterequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |