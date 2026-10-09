# ProjectEvaluationSummary

A lightweight evaluation reference embedded in the projects listing, so the client can render a
project's evaluations without firing one request per project.

## Example Usage

```typescript
import { ProjectEvaluationSummary } from "@mistralai/mistralai/models/components";

let value: ProjectEvaluationSummary = {
  id: "4387c39b-41ae-473d-abd4-18f9076f3670",
  name: "<value>",
  slug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |