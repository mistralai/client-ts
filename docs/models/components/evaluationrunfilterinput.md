# EvaluationRunFilterInput

## Example Usage

```typescript
import { EvaluationRunFilterInput } from "@mistralai/mistralai/models/components";

let value: EvaluationRunFilterInput = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `runIds`                                                                             | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `evaluationIds`                                                                      | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `creatorIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `projectIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ownership`                                                                          | [components.RunOwnershipFilter](../../models/components/runownershipfilter.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tags`                                                                               | [components.TagFilter](../../models/components/tagfilter.md)                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `scoreFilters`                                                                       | [components.ScoreFilterGroup](../../models/components/scorefiltergroup.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `goalFilters`                                                                        | [components.GoalStatusFilterGroup](../../models/components/goalstatusfiltergroup.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `system`                                                                             | [components.SystemFilter](../../models/components/systemfilter.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [components.MetadataFilterGroup](../../models/components/metadatafiltergroup.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |