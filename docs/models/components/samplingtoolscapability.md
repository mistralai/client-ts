# SamplingToolsCapability

Capability indicating support for tool calling during sampling.

When present in ClientCapabilities.sampling, indicates that the client
supports the tools and toolChoice parameters in sampling requests.

## Example Usage

```typescript
import { SamplingToolsCapability } from "@mistralai/mistralai/models/components";

let value: SamplingToolsCapability = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |