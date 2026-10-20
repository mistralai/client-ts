# WhoamiResponse

Principal-agnostic identity of the authenticated caller.

Supersedes the user-centric ``/v1/users/me`` and ``/api/users/v2/me`` by
resolving any principal (user or service account) through a single call. The
``principal`` field is a discriminated union; the remaining fields are the
shared session context and apply to either principal kind.

## Example Usage

```typescript
import { WhoamiResponse } from "@mistralai/mistralai/models/components";

let value: WhoamiResponse = {
  principal: {
    principalType: "user",
    id: "8f14e45f-ceea-4e0a-9b0e-8f7d3c2a1b4e",
  },
  organization: {
    id: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
    name: "Acme Corp",
    orgTier: "E",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `principal`                                                                          | *components.Principal*                                                               | :heavy_check_mark:                                                                   | The authenticated principal: either a user or a service account.                     |
| `organization`                                                                       | [components.WhoamiOrganization](../../models/components/whoamiorganization.md)       | :heavy_minus_sign:                                                                   | The organization the caller's session is scoped to, when set.                        |
| `workspace`                                                                          | [components.UserIdentityWorkspace](../../models/components/useridentityworkspace.md) | :heavy_minus_sign:                                                                   | The workspace the caller's session is scoped to, when set.                           |