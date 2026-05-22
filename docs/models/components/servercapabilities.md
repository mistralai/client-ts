# ServerCapabilities

Capabilities that a server may support.

## Example Usage

```typescript
import { ServerCapabilities } from "@mistralai/mistralai/models/components";

let value: ServerCapabilities = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `experimental`                                                                       | Record<string, Record<string, *any*>>                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `logging`                                                                            | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `prompts`                                                                            | [components.PromptsCapability](../../models/components/promptscapability.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `resources`                                                                          | [components.ResourcesCapability](../../models/components/resourcescapability.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tools`                                                                              | [components.ToolsCapability](../../models/components/toolscapability.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `completions`                                                                        | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tasks`                                                                              | [components.ServerTasksCapability](../../models/components/servertaskscapability.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |