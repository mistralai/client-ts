# DeploymentWorkerSpecResponseBackendSpec

Backend-specific configuration. The arm's 'type' says where the worker runs: 'koyeb' or 'kubernetes'.


## Supported Types

### `components.DeploymentKoyebBackendSpec`

```typescript
const value: components.DeploymentKoyebBackendSpec = {
  type: "koyeb",
};
```

### `components.DeploymentK8sBackendSpec`

```typescript
const value: components.DeploymentK8sBackendSpec = {
  type: "kubernetes",
};
```

