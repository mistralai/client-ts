import { describe, it, expect } from "vitest";
import { BatchJob$inboundSchema } from "../../src/models/components/batchjob.js";

describe("BatchJob schema parsing", () => {
  it("parses a completed batch job with all timing fields", () => {
    const raw = {
      id: "batch-1",
      object: "batch",
      input_files: ["file-in"],
      endpoint: "/v1/chat/completions",
      model: "mistral-small-latest",
      output_file: "file-out",
      error_file: null,
      errors: [],
      status: "SUCCESS",
      created_at: 1700000000,
      started_at: 1700000100,
      completed_at: 1700000500,
      total_requests: 5,
      completed_requests: 5,
      succeeded_requests: 5,
      failed_requests: 0,
    };
    const parsed = BatchJob$inboundSchema.parse(raw);
    expect(parsed.status).toBe("SUCCESS");
    expect(parsed.outputFile).toBe("file-out");
    expect(parsed.completedRequests).toBe(5);
    expect(parsed.startedAt).toBe(1700000100);
    expect(parsed.completedAt).toBe(1700000500);
  });

  it("nullable fields: null vs omitted produce different SDK values", () => {
    const base = {
      id: "batch-2", object: "batch", input_files: [], endpoint: "/v1/chat/completions",
      errors: [], status: "QUEUED", created_at: 0,
      total_requests: 0, completed_requests: 0, succeeded_requests: 0, failed_requests: 0,
    };

    const withNull = BatchJob$inboundSchema.parse({ ...base, model: null, started_at: null });
    const withOmitted = BatchJob$inboundSchema.parse(base);

    // null means "explicitly absent", undefined means "not sent by API"
    expect(withNull.model).toBeNull();
    expect(withNull.startedAt).toBeNull();
    expect(withOmitted.model).toBeUndefined();
    expect(withOmitted.startedAt).toBeUndefined();
  });
});
