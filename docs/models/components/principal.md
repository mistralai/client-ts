# Principal

The authenticated principal: either a user or a service account.


## Supported Types

### `components.WhoamiServiceAccountPrincipal`

```typescript
const value: components.WhoamiServiceAccountPrincipal = {
  principalType: "service_account",
  serviceAccountId: "3b241101-e2bb-4255-8caf-4136c566a962",
  name: "ci-deploy-bot",
};
```

### `components.WhoamiUserPrincipal`

```typescript
const value: components.WhoamiUserPrincipal = {
  principalType: "user",
  id: "8f14e45f-ceea-4e0a-9b0e-8f7d3c2a1b4e",
  email: "ada@example.com",
  firstName: "Ada",
  lastName: "Lovelace",
};
```

