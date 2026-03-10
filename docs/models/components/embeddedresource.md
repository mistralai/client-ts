# EmbeddedResource

The contents of a resource, embedded into a prompt or tool call result.

It is up to the client how best to render embedded resources for the benefit
of the LLM and/or the user.

## Example Usage

```typescript
import { EmbeddedResource } from "@mistralai/mistralai/models/components";

let value: EmbeddedResource = {
  resource: {
    uri: "https://pointless-contractor.org/",
    text: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"resource"*                                                     | :heavy_check_mark:                                               | N/A                                                              |
| `resource`                                                       | *components.Resource*                                            | :heavy_check_mark:                                               | N/A                                                              |
| `annotations`                                                    | [components.Annotations](../../models/components/annotations.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `meta`                                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |