# OpenApiUrlSource

## Example Usage

```typescript
import { OpenApiUrlSource } from "@mistralai/mistralai/models/components";

let value: OpenApiUrlSource = {
  type: "url",
  url: "https://majestic-repeat.org",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"url"*                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The URL the spec was downloaded from, without its userinfo, query string and fragment. |