# ConnectorProtocol

## Example Usage

```typescript
import { ConnectorProtocol } from "@mistralai/mistralai/models/components";

let value: ConnectorProtocol = "turbine";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"mcp" | "http" | "turbine" | Unrecognized<string>
```