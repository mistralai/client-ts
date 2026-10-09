# DeploymentLogType

Which log stream a deployment's logs come from.

`runtime` is what the workers themselves emit. `build` only exists for managed
deployments: it is the image build pipeline's output, which no worker reports.

## Example Usage

```typescript
import { DeploymentLogType } from "@mistralai/mistralai/models/components";

let value: DeploymentLogType = "build";
```

## Values

```typescript
"build" | "runtime"
```