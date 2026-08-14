# OAuthMetadataSource

How a connector's OAuth server metadata was obtained.

## Example Usage

```typescript
import { OAuthMetadataSource } from "@mistralai/mistralai/models/components";

let value: OAuthMetadataSource = "autodiscovery";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"autodiscovery" | "provided" | Unrecognized<string>
```