# ResourceLink

A resource that the server is capable of reading, included in a prompt or tool call result.

Note: resource links returned by tools are not guaranteed to appear in the results of `resources/list` requests.

## Example Usage

```typescript
import { ResourceLink } from "@mistralai/mistralai/models/components";

let value: ResourceLink = {
  name: "<value>",
  uri: "https://puzzled-steak.info/",
  type: "resource_link",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `title`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uri`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `mimeType`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `size`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `icons`                                                                | [components.MCPServerIcon](../../models/components/mcpservericon.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `annotations`                                                          | [components.Annotations](../../models/components/annotations.md)       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `meta`                                                                 | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *"resource_link"*                                                      | :heavy_check_mark:                                                     | N/A                                                                    |
| `additionalProperties`                                                 | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |