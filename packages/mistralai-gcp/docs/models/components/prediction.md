# Prediction

Enable users to specify an expected completion, optimizing response times by leveraging known or predictable content.

## Example Usage

```typescript
import { Prediction } from "@mistralai/mistralai-gcp/models/components";

let value: Prediction = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"content"*        | :heavy_minus_sign: | N/A                |
| `content`          | *string*           | :heavy_minus_sign: | N/A                |