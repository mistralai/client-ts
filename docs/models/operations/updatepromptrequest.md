# UpdatePromptRequest

## Example Usage

```typescript
import { UpdatePromptRequest } from "@mistralai/mistralai/models/operations";

let value: UpdatePromptRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `title`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Display title.                                                                     |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Display description.                                                               |
| `sharingScope`                                                                     | [components.RegistrySharingScope](../../models/components/registrysharingscope.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `workspaceRelation`                                                                | [components.ShareRelation](../../models/components/sharerelation.md)               | :heavy_minus_sign:                                                                 | Relation a subject holds on a shared registry object.                              |