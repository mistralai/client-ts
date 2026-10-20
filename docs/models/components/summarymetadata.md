# SummaryMetadata

Summary content. Expected to be the first value returned.

## Example Usage

```typescript
import { SummaryMetadata } from "@mistralai/mistralai/models/components";

let value: SummaryMetadata = {
  status: "generated_confirmed",
  translated: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `status`                                                                                 | [components.SummaryStatusDollarDefs](../../models/components/summarystatusdollardefs.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `translated`                                                                             | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |