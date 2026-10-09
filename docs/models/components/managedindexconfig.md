# ManagedIndexConfig

## Example Usage

```typescript
import { ManagedIndexConfig } from "@mistralai/mistralai/models/components";

let value: ManagedIndexConfig = {
  embedding: {
    type: "mistral",
    name: "<value>",
    dimensions: 338284,
  },
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `embedding`            | *components.Embedding* | :heavy_check_mark:     | N/A                    |