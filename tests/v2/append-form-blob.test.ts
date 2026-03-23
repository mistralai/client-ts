import { describe, it, expect } from "vitest";
import { appendForm } from "../../src/lib/encodings.js";

describe("appendForm — Blob and File handling", () => {
  it("appends a real File without an explicit fileName, preserving the file's own name", () => {
    const fd = new FormData();
    const file = new File(["pdf content"], "document.pdf", { type: "application/pdf" });

    appendForm(fd, "file", file);

    const value = fd.get("file");
    expect(value).toBeInstanceOf(File);
    expect((value as File).name).toBe("document.pdf");
  });

  it("appends a real File with an explicit fileName, using the explicit name", () => {
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
