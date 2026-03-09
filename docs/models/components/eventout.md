# EventOut

## Example Usage

```typescript
import { EventOut } from "@mistralai/mistralai/models/components";

let value: EventOut = {
  name: "<value>",
  createdAt: 115062,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the event.                        |
| `data`                                        | Record<string, *any*>                         | :heavy_minus_sign:                            | N/A                                           |
| `createdAt`                                   | *number*                                      | :heavy_check_mark:                            | The UNIX timestamp (in seconds) of the event. |