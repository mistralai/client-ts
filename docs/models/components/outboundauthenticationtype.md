# OutboundAuthenticationType

## Example Usage

```typescript
import { OutboundAuthenticationType } from "@mistralai/mistralai/models/components";

let value: OutboundAuthenticationType = "github_app";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oauth2" | "bearer" | "none" | "github_app" | "slack_app" | Unrecognized<string>
```