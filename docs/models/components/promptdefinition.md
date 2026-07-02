# PromptDefinition

Versioned prompt content.

## Example Usage

```typescript
import { PromptDefinition } from "@mistralai/mistralai/models/components";

let value: PromptDefinition = {
  content: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `content`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Prompt template content.                                                 |
| `variables`                                                              | [components.PromptVariable](../../models/components/promptvariable.md)[] | :heavy_minus_sign:                                                       | Variables used by the prompt.                                            |