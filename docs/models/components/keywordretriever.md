# KeywordRetriever

Retrieve document chunks with similar keywords to the given query.

Uses the default settings for the index on the field.

## Example Usage

```typescript
import { KeywordRetriever } from "@mistralai/mistralai/models/components";

let value: KeywordRetriever = {
  type: "keyword",
  query: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `topK`                                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | *"keyword"*                                                | :heavy_check_mark:                                         | N/A                                                        |
| `query`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `operator`                                                 | [components.Operator](../../models/components/operator.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `filter`                                                   | *components.KeywordRetrieverFilter*                        | :heavy_minus_sign:                                         | N/A                                                        |
| `field`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |