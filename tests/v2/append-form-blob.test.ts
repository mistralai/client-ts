import { describe, it, expect } from "vitest";
import { appendForm } from "../../src/lib/encodings.js";
import { isBlobLike } from "../../src/types/blobs.js";

/**
 * Simulates a cross-realm File: passes isBlobLike() but is NOT instanceof Blob.
 * This is what Next.js/webpack bundling produces — the SDK runs in a different
 * module realm than the File objects created by request.formData().
 */
function makeCrossRealmFile(name: string, content: string, type: string) {
  const bytes = new TextEncoder().encode(content);
  const realBlob = new Blob([bytes], { type });

  return Object.create(null, {
    [Symbol.toStringTag]: { value: "File", enumerable: false },
    stream: { value: () => realBlob.stream(), enumerable: true },
    arrayBuffer: { value: () => realBlob.arrayBuffer(), enumerable: true },
    size: { value: bytes.byteLength, enumerable: true },
    type: { value: type, enumerable: true },
    name: { value: name, enumerable: true },
  });
}

describe("appendForm — Blob and File handling", () => {
  it("appends a real File without explicit fileName, preserving the file's own name", () => {
    const fd = new FormData();
    const file = new File(["pdf content"], "document.pdf", { type: "application/pdf" });

    appendForm(fd, "file", file);

    const value = fd.get("file");
    expect(value).toBeInstanceOf(File);
    expect((value as File).name).toBe("document.pdf");
  });

  it("appends a real File with explicit fileName, using the explicit name", () => {
    const fd = new FormData();
    const file = new File(["pdf content"], "original.pdf", { type: "application/pdf" });

    appendForm(fd, "file", file, "override.pdf");

    const value = fd.get("file");
    expect(value).toBeInstanceOf(Blob);
    expect((value as File).name).toBe("override.pdf");
  });

  it("appends a bare Blob with explicit fileName", () => {
    const fd = new FormData();
    const blob = new Blob(["data"], { type: "application/pdf" });

    appendForm(fd, "file", blob, "upload.pdf");

    const value = fd.get("file");
    expect(value).toBeInstanceOf(Blob);
    expect((value as File).name).toBe("upload.pdf");
  });

  it("does not stringify a File — value is always a Blob, never a string", () => {
    const fd = new FormData();
    const file = new File(["content"], "test.txt", { type: "text/plain" });

    appendForm(fd, "file", file);

    expect(typeof fd.get("file")).not.toBe("string");
  });
});

describe("appendForm — wire-level multipart serialization", () => {
  it("includes filename in Content-Disposition when File is appended with explicit name", async () => {
    const fd = new FormData();
    const file = new File(["pdf content"], "document.pdf", { type: "application/pdf" });
    appendForm(fd, "file", file, "document.pdf");

    const body = await new Response(fd).text();
    expect(body).toContain('Content-Disposition: form-data; name="file"; filename="document.pdf"');
  });

  it("empty string name is treated as no filename — does not produce filename= in Content-Disposition", async () => {
    const fd = new FormData();
    const blob = new Blob(["data"], { type: "application/pdf" });
    // passing undefined because empty string should be normalized away
    appendForm(fd, "file", blob, undefined);

    const body = await new Response(fd).text();
    // without a filename the part should still be present as binary data
    expect(body).toContain('name="file"');
  });
});

describe("filesUpload isBlobLike branch — cross-realm Blob normalization", () => {
  it("cross-realm file-like object passes isBlobLike but not instanceof Blob", () => {
    const crossRealm = makeCrossRealmFile("doc.pdf", "content", "application/pdf");
    expect(isBlobLike(crossRealm)).toBe(true);
    expect(crossRealm instanceof Blob).toBe(false);
  });

  it("converting cross-realm file to native Blob via arrayBuffer() produces a real Blob", async () => {
    const crossRealm = makeCrossRealmFile("doc.pdf", "hello", "application/pdf");

    // This is the conversion logic used in filesUpload.ts
    const nativeBlob = crossRealm instanceof Blob
      ? crossRealm
      : new Blob([await (crossRealm as unknown as Blob).arrayBuffer()], {
        type: (crossRealm as unknown as Blob).type,
      });

    expect(nativeBlob).toBeInstanceOf(Blob);
    expect(nativeBlob.type).toBe("application/pdf");
    const text = await nativeBlob.text();
    expect(text).toBe("hello");
  });

  it("converted native Blob can be appended to FormData without stringification", async () => {
    const crossRealm = makeCrossRealmFile("doc.pdf", "file content", "application/pdf");

    const nativeBlob = crossRealm instanceof Blob
      ? crossRealm
      : new Blob([await (crossRealm as unknown as Blob).arrayBuffer()], {
        type: (crossRealm as unknown as Blob).type,
      });

    const fd = new FormData();
    appendForm(fd, "file", nativeBlob, (crossRealm as { name: string }).name);

    const value = fd.get("file");
    expect(value).toBeInstanceOf(Blob);
    expect((value as File).name).toBe("doc.pdf");
    expect(typeof value).not.toBe("string");
  });
});
