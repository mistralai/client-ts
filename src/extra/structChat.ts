import { z } from 'zod';
import { z as zv4 } from 'zod/v4';
import { zodToJsonSchema } from "zod-to-json-schema";
import { ResponseFormat } from "../models/components/responseformat.js";
import * as components from "../models/components/index.js";

/**
 * Recursively makes a JSON schema strict-mode compatible:
 * - Sets additionalProperties: false on all objects
 * - Makes optional properties required with nullable type
 * Mirrors Python SDK's rec_strict_json_schema + optional handling.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- operating on raw JSON schema objects
function makeStrictJsonSchema(node: any): any {
  if (typeof node !== 'object' || node === null) return node;
  const result = { ...node };

  if (result.type === 'object' && result.properties && typeof result.properties === 'object') {
    const required = new Set<string>(Array.isArray(result.required) ? result.required : []);
    const props: Record<string, any> = {};

    for (const [key, value] of Object.entries(result.properties)) {
      const processed = makeStrictJsonSchema(value);
      if (!required.has(key)) {
        required.add(key);
        if (Array.isArray(processed.type)) {
          if (!processed.type.includes('null')) props[key] = { ...processed, type: [...processed.type, 'null'] };
          else props[key] = processed;
        } else if (Array.isArray(processed.anyOf)) {
          if (!processed.anyOf.some((s: any) => s.type === 'null'))
            props[key] = { ...processed, anyOf: [...processed.anyOf, { type: 'null' }] };
          else props[key] = processed;
        } else if (processed.type) {
          props[key] = { ...processed, type: [processed.type, 'null'] };
        } else {
          props[key] = processed;
        }
      } else {
        props[key] = processed;
      }
    }

    result.properties = props;
    result.required = [...required];
    result.additionalProperties = false;
  }

  if (result.items) result.items = makeStrictJsonSchema(result.items);
  for (const key of ['anyOf', 'oneOf', 'allOf']) {
    if (Array.isArray(result[key]))
      result[key] = result[key].map(makeStrictJsonSchema);
  }
  for (const key of ['$defs', 'definitions']) {
    if (result[key] && typeof result[key] === 'object') {
      const defs: Record<string, any> = {};
      for (const [k, v] of Object.entries(result[key]))
        defs[k] = makeStrictJsonSchema(v);
      result[key] = defs;
    }
  }

  return result;
}

function toJsonSchema(schema: z.ZodTypeAny): Record<string, unknown> {
  let jsonSchema: Record<string, unknown>;

  // Detect Zod v4 schemas by checking for _zod property (v3 schemas have _def only)
  if ('_zod' in schema) {
    jsonSchema = zv4.toJSONSchema(schema as any) as Record<string, unknown>;
  } else {
    jsonSchema = zodToJsonSchema(schema, { target: "openAi" }) as Record<string, unknown>;
  }

  delete jsonSchema['$schema'];
  return makeStrictJsonSchema(jsonSchema);
}

export function transformToChatCompletionRequest<T extends z.ZodTypeAny>(
  parsedRequest: ParsedChatCompletionRequest<T>
): components.ChatCompletionRequest {
  const { responseFormat, ...rest } = parsedRequest;

  // Transform responseFormat from z.ZodType to ResponseFormat
  const transformedResponseFormat: ResponseFormat | undefined = responseFormatFromZodObject(responseFormat);

  return {
    ...rest,
    ...(transformedResponseFormat ? { responseFormat: transformedResponseFormat } : {}),
  } as components.ChatCompletionRequest;
}

export type ParsedChatCompletionRequest<T extends z.ZodTypeAny> = Omit<components.ChatCompletionRequest, 'responseFormat'> & {
  responseFormat: T;
};

export type ParsedAssistantMessage<T extends z.ZodTypeAny> = components.AssistantMessage & {
  parsed?: z.infer<T> | undefined;
}

export type ParsedChatCompletionChoice<T extends z.ZodTypeAny> = Omit<components.ChatCompletionChoice, 'message'> & {
  message?: ParsedAssistantMessage<T> | undefined;
};

export type ParsedChatCompletionResponse<T extends z.ZodTypeAny> = Omit<components.ChatCompletionResponse, 'choices'> & {
  choices?: Array<ParsedChatCompletionChoice<T>> | undefined;
};


export function convertToParsedChatCompletionResponse<T extends z.ZodTypeAny>(response: components.ChatCompletionResponse, responseFormat: T): ParsedChatCompletionResponse<T> {
  if (response.choices === undefined || response.choices.length === 0) {
    return {
      ...response,
      choices: response.choices === undefined ? undefined : [],
    };
  }
  const parsedChoices: Array<ParsedChatCompletionChoice<T>> = [];
  for (const _choice of response.choices) {
    if (_choice.message === null || typeof _choice.message === 'undefined') {
      parsedChoices.push({..._choice, message: undefined});
    } else {
      if (_choice.message.content !== null && typeof _choice.message.content !== 'undefined' && !Array.isArray(_choice.message.content)) {
      parsedChoices.push({
        ..._choice,
        message: {
          ..._choice.message,
          parsed: responseFormat.safeParse(JSON.parse(_choice.message.content)).data,
        }
      });
      }
    }
  }
  return {
    ...response,
    choices: parsedChoices,
  };

}

  // Function to convert Zod schema to strict JSON schema
export function responseFormatFromZodObject<T extends z.ZodTypeAny>(responseFormat: T): ResponseFormat {
  const responseJsonSchema = toJsonSchema(responseFormat);
  // It is not possible to get the variable name of a Zod object at runtime in TypeScript so we're using a placeholder name.
  // This has not impact on the parsing as the initial Zod object is used to parse the response.
  const placeholderName = "placeholderName"
  return {
    type: "json_schema",
    jsonSchema: {
      name: placeholderName,
      schemaDefinition: responseJsonSchema,
      strict: true,
    },
  };
}
