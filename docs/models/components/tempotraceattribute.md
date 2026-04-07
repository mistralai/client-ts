# TempoTraceAttribute

## Example Usage

```typescript
import { TempoTraceAttribute } from "@mistralai/mistralai/models/components";

let value: TempoTraceAttribute = {
  key: "<key>",
  value: {
    stringValue: "<value>",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `key`                                 | *string*                              | :heavy_check_mark:                    | The key of the attribute              |
| `value`                               | *components.TempoTraceAttributeValue* | :heavy_check_mark:                    | The value of the attribute            |