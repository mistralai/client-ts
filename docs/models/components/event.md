# Event

## Example Usage

```typescript
import { Event } from "@mistralai/mistralai/models/components";

let value: Event = {
  name: "<value>",
  createdAt: 85057,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the event.                        |
| `data`                                        | Record<string, *any*>                         | :heavy_minus_sign:                            | N/A                                           |
| `createdAt`                                   | *number*                                      | :heavy_check_mark:                            | The UNIX timestamp (in seconds) of the event. |