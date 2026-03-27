import {
  transformToChatCompletionRequest,
  convertToParsedChatCompletionResponse,
  responseFormatFromZodObject,
  ParsedChatCompletionRequest,
  ParsedChatCompletionResponse,
} from "../../src/extra/structChat.js";
import { ResponseFormat } from "../../src/models/components/responseformat.js";
import { z } from "zod";
import * as components from "../../src/models/components/index.js";

const Explanation = z.object({
  explanation: z.string(),
  output: z.string(),
});

const MathDemonstration = z.object({
  steps: z.array(Explanation),
  final_answer: z.string(),
});

const raw_request: ParsedChatCompletionRequest<typeof MathDemonstration> = {
  model: "mistral-tiny-latest",
  messages: [
    {
      role: "system",
      content:
        "You are a helpful math tutor. You will be provided with a math problem, and your goal will be to output a step by step solution, along with a final answer. For each step, just provide the output as an equation use the explanation field to detail the reasoning.",
    },
    { role: "user", content: "How can I solve 8x + 7 = -23" },
  ],
  responseFormat: MathDemonstration,
};

const transformedResponseFormat: ResponseFormat = {
  type: "json_schema",
  jsonSchema: {
    name: "placeholderName",
    schemaDefinition: {
      type: "object",
      properties: {
        steps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              explanation: { type: "string" },
              output: { type: "string" },
            },
            required: ["explanation", "output"],
            additionalProperties: false,
          },
        },
        final_answer: { type: "string" },
      },
      required: ["steps", "final_answer"],
      additionalProperties: false,
      $schema: "http://json-schema.org/draft-07/schema#",
    },
    strict: true,
  },
};

const ccr_request: components.ChatCompletionRequest = {
  model: "mistral-tiny-latest",
  messages: [
    {
      role: "system",
      content:
        "You are a helpful math tutor. You will be provided with a math problem, and your goal will be to output a step by step solution, along with a final answer. For each step, just provide the output as an equation use the explanation field to detail the reasoning.",
    },
    { role: "user", content: "How can I solve 8x + 7 = -23" },
  ],
  responseFormat: transformedResponseFormat,
};

const raw_response: components.ChatCompletionResponse = {
  id: "df9c5af85d0a4474b2e8392ee52dd883",
  object: "chat.completion",
  model: "mistral-tiny-latest",
  usage: { promptTokens: 71, completionTokens: 140, totalTokens: 211 },
  created: 1737982851,
  choices: [
    {
      index: 0,
      message: {
        content: `
{
  "steps": [
    {
      "explanation": "Subtract 7 from both sides to isolate the term with x.",
      "output": "8x + 7 - 7 = -23 - 7"
    },
    {
      "explanation": "Simplify both sides to get the equation in standard form.",
      "output": "8x = -30"
    },
    {
      "explanation": "Divide both sides by 8 to solve for x.",
      "output": "8x / 8 = -30 / 8"
    }
  ],
  "final_answer": "-3.75"
}
`,
        toolCalls: null,
        prefix: false,
        role: "assistant",
      },
      finishReason: "stop",
    },
  ],
};

const ccr_response: ParsedChatCompletionResponse<typeof MathDemonstration> = {
  id: "df9c5af85d0a4474b2e8392ee52dd883",
  object: "chat.completion",
  model: "mistral-tiny-latest",
  usage: { promptTokens: 71, completionTokens: 140, totalTokens: 211 },
  created: 1737982851,
  choices: [
    {
      index: 0,
      message: {
        content: `
{
  "steps": [
    {
      "explanation": "Subtract 7 from both sides to isolate the term with x.",
      "output": "8x + 7 - 7 = -23 - 7"
    },
    {
      "explanation": "Simplify both sides to get the equation in standard form.",
      "output": "8x = -30"
    },
    {
      "explanation": "Divide both sides by 8 to solve for x.",
      "output": "8x / 8 = -30 / 8"
    }
  ],
  "final_answer": "-3.75"
}
`,
        toolCalls: null,
        prefix: false,
        role: "assistant",
        parsed: {
          steps: [
            {
              explanation:
                "Subtract 7 from both sides to isolate the term with x.",
              output: "8x + 7 - 7 = -23 - 7",
            },
            {
              explanation:
                "Simplify both sides to get the equation in standard form.",
              output: "8x = -30",
            },
            {
              explanation: "Divide both sides by 8 to solve for x.",
              output: "8x / 8 = -30 / 8",
            },
          ],
          final_answer: "-3.75",
        },
      },
      finishReason: "stop",
    },
  ],
};

describe("transformToChatCompletionRequest", () => {
  it("should return a valid ChatCompletionRequest", () => {
    const result = transformToChatCompletionRequest(raw_request);
    const expected = structuredClone(ccr_request);
    // $schema URL differs between Zod 3 (draft-07) and Zod 4 (draft/2020-12)
    const resultSchema = (result.responseFormat as any)?.jsonSchema?.schemaDefinition;
    const expectedSchema = (expected.responseFormat as any)?.jsonSchema?.schemaDefinition;
    if (resultSchema) delete resultSchema.$schema;
    if (expectedSchema) delete expectedSchema.$schema;
    expect(result).toStrictEqual(expected);
  });
});

describe("convertToParsedChatCompletionResponse", () => {
  it("should return a valid ParsedChatCompletionResponse", () => {
    expect(
      convertToParsedChatCompletionResponse(raw_response, MathDemonstration)
    ).toStrictEqual(ccr_response);
  });

  it("should set parsed to undefined when content is malformed JSON", () => {
    const truncatedResponse: components.ChatCompletionResponse = {
      id: "test-malformed",
      object: "chat.completion",
      model: "mistral-tiny-latest",
      usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      created: 1700000000,
      choices: [
        {
          index: 0,
          message: {
            content: '{"steps": [{"explanation": "truncated',
            toolCalls: null,
            prefix: false,
            role: "assistant",
          },
          finishReason: "length",
        },
      ],
    };

    const result = convertToParsedChatCompletionResponse(
      truncatedResponse,
      MathDemonstration,
    );

    expect(result.choices).toHaveLength(1);
    expect(result.choices![0].message).toBeDefined();
    expect(result.choices![0].message!.parsed).toBeUndefined();
    expect(result.choices![0].message!.content).toBe(
      '{"steps": [{"explanation": "truncated',
    );
  });

  it("should set parsed to undefined when content is valid JSON but fails schema validation", () => {
    const wrongShapeResponse: components.ChatCompletionResponse = {
      id: "test-wrong-shape",
      object: "chat.completion",
      model: "mistral-tiny-latest",
      usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      created: 1700000000,
      choices: [
        {
          index: 0,
          message: {
            content: '{"wrong_field": "not matching schema"}',
            toolCalls: null,
            prefix: false,
            role: "assistant",
          },
          finishReason: "stop",
        },
      ],
    };

    const result = convertToParsedChatCompletionResponse(
      wrongShapeResponse,
      MathDemonstration,
    );

    expect(result.choices).toHaveLength(1);
    expect(result.choices![0].message).toBeDefined();
    expect(result.choices![0].message!.parsed).toBeUndefined();
  });

  it("should preserve choices when content is null", () => {
    const nullContentResponse: components.ChatCompletionResponse = {
      id: "test-null-content",
      object: "chat.completion",
      model: "mistral-tiny-latest",
      usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      created: 1700000000,
      choices: [
        {
          index: 0,
          message: {
            content: null,
            toolCalls: null,
            prefix: false,
            role: "assistant",
          },
          finishReason: "stop",
        },
      ],
    };

    const result = convertToParsedChatCompletionResponse(
      nullContentResponse,
      MathDemonstration,
    );

    expect(result.choices).toHaveLength(1);
    expect(result.choices![0].message).toBeDefined();
    expect(result.choices![0].message!.parsed).toBeUndefined();
  });

  it("should return empty choices array for empty choices", () => {
    const emptyChoicesResponse: components.ChatCompletionResponse = {
      id: "test-empty",
      object: "chat.completion",
      model: "mistral-tiny-latest",
      usage: { promptTokens: 10, completionTokens: 0, totalTokens: 10 },
      created: 1700000000,
      choices: [],
    };

    const result = convertToParsedChatCompletionResponse(
      emptyChoicesResponse,
      MathDemonstration,
    );

    expect(result.choices).toEqual([]);
  });

  it("should return undefined choices when choices is undefined", () => {
    const noChoicesResponse: components.ChatCompletionResponse = {
      id: "test-undefined",
      object: "chat.completion",
      model: "mistral-tiny-latest",
      usage: { promptTokens: 10, completionTokens: 0, totalTokens: 10 },
      created: 1700000000,
    };

    const result = convertToParsedChatCompletionResponse(
      noChoicesResponse,
      MathDemonstration,
    );

    expect(result.choices).toBeUndefined();
  });
});

describe("responseFormatFromZodObject", () => {
  it("should return a valid response format", () => {
    const result = responseFormatFromZodObject(MathDemonstration);
    const expected = structuredClone(transformedResponseFormat);
    // $schema URL differs between Zod 3 (draft-07) and Zod 4 (draft/2020-12)
    const resultSchema = (result as any)?.jsonSchema?.schemaDefinition;
    const expectedSchema = (expected as any)?.jsonSchema?.schemaDefinition;
    if (resultSchema) delete resultSchema.$schema;
    if (expectedSchema) delete expectedSchema.$schema;
    expect(result).toStrictEqual(expected);
  });
});
