# ResponsesGrammar

## Example Usage

```typescript
import { ResponsesGrammar } from "@mistralai/mistralai/models/components";

let value: ResponsesGrammar = {
  definition: "<value>",
  syntax: "regex",
  type: "grammar",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `definition`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `syntax`                                               | [components.Syntax](../../models/components/syntax.md) | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | *"grammar"*                                            | :heavy_check_mark:                                     | N/A                                                    |
| `additionalProperties`                                 | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |