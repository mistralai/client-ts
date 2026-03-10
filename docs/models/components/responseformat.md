# ResponseFormat

Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.

## Example Usage

```typescript
import { ResponseFormat } from "@mistralai/mistralai-gcp/models/components";

let value: ResponseFormat = {
  type: "text",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.ResponseFormats](../../models/components/responseformats.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `jsonSchema`                                                             | [components.JsonSchema](../../models/components/jsonschema.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |