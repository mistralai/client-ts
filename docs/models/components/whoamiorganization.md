# WhoamiOrganization

Organization identity and context for the authenticated caller.

## Example Usage

```typescript
import { WhoamiOrganization } from "@mistralai/mistralai/models/components";

let value: WhoamiOrganization = {
  id: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
  name: "Acme Corp",
  orgTier: "E",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The organization's unique identifier.                                            | 1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d                                             |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The organization's display name.                                                 | Acme Corp                                                                        |
| `orgTier`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | The organization's billing tier (e.g. 'E' for Enterprise). Null when not set.    | E                                                                                |
| `internal`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether this is a Mistral-internal organization.                                 | **Example 1:** false<br/>**Example 2:** true                                     |
| `kind`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The organization kind (e.g. 'S' standard, 'C' company internal, 'D' dogfooding). | **Example 1:** S<br/>**Example 2:** C                                            |