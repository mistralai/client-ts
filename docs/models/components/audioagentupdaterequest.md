# AudioAgentUpdateRequest

## Example Usage

```typescript
import { AudioAgentUpdateRequest } from "@mistralai/mistralai/models/components";

let value: AudioAgentUpdateRequest = {
  name: "<value>",
  configuration: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `configuration`                                                                                        | [components.AudioAgentConfigurationRequest](../../models/components/audioagentconfigurationrequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |