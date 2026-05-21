# UpdateDocumentRequest

## Example Usage

```typescript
import { UpdateDocumentRequest } from "@mistralai/mistralai/models/components";

let value: UpdateDocumentRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `attributes`                                                                                  | Record<string, *components.Attributes*>                                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | If set, the document will be automatically deleted after this date.                           |