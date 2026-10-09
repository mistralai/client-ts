# DeploymentSecretBinding

Binds one env var to one platform secret; the value is resolved at boot, never stored.

## Example Usage

```typescript
import { DeploymentSecretBinding } from "@mistralai/mistralai/models/components";

let value: DeploymentSecretBinding = {
  envVarName: "<value>",
  reference: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `envVarName`                                                                                                                              | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Environment variable the worker process reads; the secret's name lives in 'reference'.                                                    |
| `reference`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Secret reference as 'secret:workspace:<NAME>'. Resolved at boot by the runtime-init container; the value never reaches the control plane. |