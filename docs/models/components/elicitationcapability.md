# ElicitationCapability

Capability for elicitation operations.

Clients must support at least one mode (form or url).

## Example Usage

```typescript
import { ElicitationCapability } from "@mistralai/mistralai/models/components";

let value: ElicitationCapability = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `form`                                                                                       | [components.FormElicitationCapability](../../models/components/formelicitationcapability.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `url`                                                                                        | [components.UrlElicitationCapability](../../models/components/urlelicitationcapability.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |