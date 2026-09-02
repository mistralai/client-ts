# ExportDefinition

## Example Usage

```typescript
import { ExportDefinition } from "@mistralai/mistralai/models/components";

let value: ExportDefinition = {
  destination: {
    protocol: "<value>",
    endpoint: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `destination`                                                            | [components.OTLPDestination](../../models/components/otlpdestination.md) | :heavy_check_mark:                                                       | N/A                                                                      |