# ClientCapabilities

Capabilities a client may support.

Not a closed set: any client can define additional capabilities. Sent once in
`initialize` through 2025-11-25; per-request in `_meta` on 2026-07-28.

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
| `extensions`                                                                         | Record<string, Record<string, *any*>>                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tasks`                                                                              | [components.ClientTasksCapability](../../models/components/clienttaskscapability.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |