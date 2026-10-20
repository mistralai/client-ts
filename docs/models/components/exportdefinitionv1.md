# ExportDefinitionV1

## Example Usage

```typescript
import { ExportDefinitionV1 } from "@mistralai/mistralai/models/components";

let value: ExportDefinitionV1 = {
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