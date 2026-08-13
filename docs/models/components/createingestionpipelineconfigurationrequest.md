# CreateIngestionPipelineConfigurationRequest

## Example Usage

```typescript
import { CreateIngestionPipelineConfigurationRequest } from "@mistralai/mistralai/models/components";

let value: CreateIngestionPipelineConfigurationRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pipelineComposition`                                                                                      | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `targetIndexes`                                                                                            | [components.IngestionPipelineTargetIndexRef](../../models/components/ingestionpipelinetargetindexref.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |