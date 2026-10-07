# EvaluationRunRecordV2Response

## Example Usage

```typescript
import { EvaluationRunRecordV2Response } from "@mistralai/mistralai/models/components";

let value: EvaluationRunRecordV2Response = {
  id: "3f850a97-4c02-43f9-97a0-39b5f544e93d",
  createdAt: new Date("2024-12-15T10:05:11.426Z"),
  updatedAt: new Date("2024-12-08T00:38:14.978Z"),
  deletedAt: new Date("2025-03-30T02:57:30.702Z"),
  input: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deletedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `input`                                                                                          | *any*                                                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `datasetRecordId`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `outputRecord`                                                                                   | [components.EvaluationRunOutputRecordV2](../../models/components/evaluationrunoutputrecordv2.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |