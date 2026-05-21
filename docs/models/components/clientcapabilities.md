# ClientCapabilities

Capabilities a client may support.

## Example Usage

```typescript
import { ClientCapabilities } from "@mistralai/mistralai/models/components";

let value: ClientCapabilities = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `experimental`                                                                       | Record<string, Record<string, *any*>>                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `sampling`                                                                           | [components.SamplingCapability](../../models/components/samplingcapability.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `elicitation`                                                                        | [components.ElicitationCapability](../../models/components/elicitationcapability.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `roots`                                                                              | [components.RootsCapability](../../models/components/rootscapability.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tasks`                                                                              | [components.ClientTasksCapability](../../models/components/clienttaskscapability.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |