# OptimizationTrialWithObservations

## Example Usage

```typescript
import { OptimizationTrialWithObservations } from "@mistralai/mistralai/models/components";

let value: OptimizationTrialWithObservations = {
  id: "38ec1349-14b0-410d-b2b1-147e6f6152df",
  createdAt: new Date("2026-08-05T06:01:14.282Z"),
  updatedAt: new Date("2024-06-18T16:18:08.505Z"),
  deletedAt: new Date("2024-03-13T20:30:28.754Z"),
  optimizationId: "d3909b8d-3f30-452c-af90-a83bce90dbd0",
  algorithmTrialKey: "<value>",
  status: "<value>",
  metadata: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `optimizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `algorithmTrialKey`                                                                                  | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `parentTrialId`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `hypothesis`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `resolution`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `observations`                                                                                       | [components.OptimizationTrialObservation](../../models/components/optimizationtrialobservation.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |