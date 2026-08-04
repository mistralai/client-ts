# UpdateDatasetRecordPayloadRequest

## Example Usage

```typescript
import { UpdateDatasetRecordPayloadRequest } from "@mistralai/mistralai/models/components";

let value: UpdateDatasetRecordPayloadRequest = {
  payload: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `payload`                                                | Record<string, *any*>                                    | :heavy_check_mark:                                       | Caller-authored input object stored on a dataset record. |