# ConnectorOpenApiSpec

## Example Usage

```typescript
import { ConnectorOpenApiSpec } from "@mistralai/mistralai/models/components";

let value: ConnectorOpenApiSpec = {
  source: {
    type: "url",
    url: "https://cloudy-co-producer.net",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                                 | *components.OpenApiSpecSource*                                                                                           | :heavy_check_mark:                                                                                                       | Where the spec came from. Null when unknown, e.g. a file uploaded without a name, or hidden, e.g. on Mistral connectors. |