# ConnectorLocale

## Example Usage

```typescript
import { ConnectorLocale } from "@mistralai/mistralai/models/components";

let value: ConnectorLocale = {
  name: {
    "key": "<value>",
    "key1": "<value>",
  },
  description: {
    "key": "sans psst howl overload pfft",
  },
  usageSentence: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `description`            | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `usageSentence`          | Record<string, *string*> | :heavy_check_mark:       | N/A                      |