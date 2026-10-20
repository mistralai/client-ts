# TransferTarget

One allowed hand-off, chosen by the model through `id` alone.

The address never reaches the model: it only sees `id` and `condition`, so it
cannot dial a near-miss of a real number.

## Example Usage

```typescript
import { TransferTarget } from "@mistralai/mistralai/models/components";

let value: TransferTarget = {
  id: "<id>",
  condition: "<value>",
  destination: {
    type: "sip",
    uri: "https://unconscious-slipper.name",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `condition`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `destination`            | *components.Destination* | :heavy_check_mark:       | N/A                      |