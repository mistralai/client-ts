# JSONPatch


## Supported Types

### `components.JSONPatchAddJSONPatch`

```typescript
const value: components.JSONPatchAddJSONPatch = {
  path: "/root",
  value: "<value>",
  op: "add",
};
```

### `components.JSONPatchAppendJSONPatch`

```typescript
const value: components.JSONPatchAppendJSONPatch = {
  path: "/sbin",
  value: "<value>",
  op: "append",
};
```

### `components.JSONPatchRemoveJSONPatch`

```typescript
const value: components.JSONPatchRemoveJSONPatch = {
  path: "/usr/ports",
  value: "<value>",
  op: "remove",
};
```

### `components.JSONPatchReplaceJSONPatch`

```typescript
const value: components.JSONPatchReplaceJSONPatch = {
  path: "/usr/lib",
  value: "<value>",
  op: "replace",
};
```

