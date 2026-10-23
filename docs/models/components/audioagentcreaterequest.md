# AudioAgentCreateRequest

## Example Usage

```typescript
import { AudioAgentCreateRequest } from "@mistralai/mistralai/models/components";

let value: AudioAgentCreateRequest = {
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