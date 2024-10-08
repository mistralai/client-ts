/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  ImageURL,
  ImageURL$inboundSchema,
  ImageURL$Outbound,
  ImageURL$outboundSchema,
} from "./imageurl.js";

export const ImageURLChunkType = {
  ImageUrl: "image_url",
} as const;
export type ImageURLChunkType = ClosedEnum<typeof ImageURLChunkType>;

export type ImageURLChunkImageURL = ImageURL | string;

/**
 * {"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0
 */
export type ImageURLChunk = {
  type?: "image_url" | undefined;
  imageUrl: ImageURL | string;
};

/** @internal */
export const ImageURLChunkType$inboundSchema: z.ZodNativeEnum<
  typeof ImageURLChunkType
> = z.nativeEnum(ImageURLChunkType);

/** @internal */
export const ImageURLChunkType$outboundSchema: z.ZodNativeEnum<
  typeof ImageURLChunkType
> = ImageURLChunkType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageURLChunkType$ {
  /** @deprecated use `ImageURLChunkType$inboundSchema` instead. */
  export const inboundSchema = ImageURLChunkType$inboundSchema;
  /** @deprecated use `ImageURLChunkType$outboundSchema` instead. */
  export const outboundSchema = ImageURLChunkType$outboundSchema;
}

/** @internal */
export const ImageURLChunkImageURL$inboundSchema: z.ZodType<
  ImageURLChunkImageURL,
  z.ZodTypeDef,
  unknown
> = z.union([ImageURL$inboundSchema, z.string()]);

/** @internal */
export type ImageURLChunkImageURL$Outbound = ImageURL$Outbound | string;

/** @internal */
export const ImageURLChunkImageURL$outboundSchema: z.ZodType<
  ImageURLChunkImageURL$Outbound,
  z.ZodTypeDef,
  ImageURLChunkImageURL
> = z.union([ImageURL$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageURLChunkImageURL$ {
  /** @deprecated use `ImageURLChunkImageURL$inboundSchema` instead. */
  export const inboundSchema = ImageURLChunkImageURL$inboundSchema;
  /** @deprecated use `ImageURLChunkImageURL$outboundSchema` instead. */
  export const outboundSchema = ImageURLChunkImageURL$outboundSchema;
  /** @deprecated use `ImageURLChunkImageURL$Outbound` instead. */
  export type Outbound = ImageURLChunkImageURL$Outbound;
}

/** @internal */
export const ImageURLChunk$inboundSchema: z.ZodType<
  ImageURLChunk,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("image_url").default("image_url"),
  image_url: z.union([ImageURL$inboundSchema, z.string()]),
}).transform((v) => {
  return remap$(v, {
    "image_url": "imageUrl",
  });
});

/** @internal */
export type ImageURLChunk$Outbound = {
  type: "image_url";
  image_url: ImageURL$Outbound | string;
};

/** @internal */
export const ImageURLChunk$outboundSchema: z.ZodType<
  ImageURLChunk$Outbound,
  z.ZodTypeDef,
  ImageURLChunk
> = z.object({
  type: z.literal("image_url").default("image_url"),
  imageUrl: z.union([ImageURL$outboundSchema, z.string()]),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageURLChunk$ {
  /** @deprecated use `ImageURLChunk$inboundSchema` instead. */
  export const inboundSchema = ImageURLChunk$inboundSchema;
  /** @deprecated use `ImageURLChunk$outboundSchema` instead. */
  export const outboundSchema = ImageURLChunk$outboundSchema;
  /** @deprecated use `ImageURLChunk$Outbound` instead. */
  export type Outbound = ImageURLChunk$Outbound;
}
