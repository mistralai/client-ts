# InstructRequest

A valid request to be tokenized

## Example Usage

```typescript
import { InstructRequest } from "@mistralai/mistralai/models/components";

let value: InstructRequest = {
  messages: [],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `messages`                            | *components.InstructRequestMessage*[] | :heavy_check_mark:                    | N/A                                   |