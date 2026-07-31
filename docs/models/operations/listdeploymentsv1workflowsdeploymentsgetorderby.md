# ListDeploymentsV1WorkflowsDeploymentsGetOrderBy

Field to sort by. When omitted, active and managed deployments are grouped first, then sorted by created_at. When set, results are sorted purely by the specified field with no grouping.

## Example Usage

```typescript
import { ListDeploymentsV1WorkflowsDeploymentsGetOrderBy } from "@mistralai/mistralai/models/operations";

let value: ListDeploymentsV1WorkflowsDeploymentsGetOrderBy = "updated_at";
```

## Values

```typescript
"updated_at" | "created_at"
```