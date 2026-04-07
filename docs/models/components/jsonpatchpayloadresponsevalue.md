# JSONPatchPayloadResponseValue


## Supported Types

### `components.JSONPatchAdd`

```typescript
const value: components.JSONPatchAdd = {
  path: "/home/user",
  value: "<value>",
  op: "add",
};
```

### `components.JSONPatchAppend`

```typescript
const value: components.JSONPatchAppend = {
  path: "/srv",
  value: "<value>",
  op: "append",
};
```

### `components.JSONPatchRemove`

```typescript
const value: components.JSONPatchRemove = {
  path: "/opt/share",
  value: "<value>",
  op: "remove",
};
```

### `components.JSONPatchReplace`

```typescript
const value: components.JSONPatchReplace = {
  path: "/usr/bin",
  value: "<value>",
  op: "replace",
};
```

