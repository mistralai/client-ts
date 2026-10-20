# TransferCallTool

## Example Usage

```typescript
import { TransferCallTool } from "@mistralai/mistralai/models/components";

let value: TransferCallTool = {
  type: "transfer_call",
  destinations: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"transfer_call"*                                                          | :heavy_check_mark:                                                         | N/A                                                                        |
| `destinations`                                                             | [components.TransferTarget](../../models/components/transfertarget.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `filler`                                                                   | [components.StaticToolFiller](../../models/components/statictoolfiller.md) | :heavy_minus_sign:                                                         | N/A                                                                        |