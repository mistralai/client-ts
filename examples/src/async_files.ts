import * as fs from "fs";
import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey: apiKey });

// Create a new file
const blob = new Blob([fs.readFileSync("./src/file.jsonl")], {
  type: "application/json",
});
const createdFile = await client.files.upload({ file: blob, });
// const createdFile = await client.files.upload(
//   {
//     file: {
//       fileName: "./src/file.jsonl",
//       content: fs.readFileSync("./src/file.jsonl")
//     },
//   });

console.log(createdFile);

// List files
const files = await client.files.list();
console.log(files);

// Retrieve a file
const retrievedFile = await client.files.retrieve({ fileId: createdFile.id });
console.log(retrievedFile);

// Delete a file
const deletedFile = await client.files.delete({ fileId: createdFile.id });
console.log(deletedFile);
