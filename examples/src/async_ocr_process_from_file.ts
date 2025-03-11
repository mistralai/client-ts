import { Mistral } from '@mistralai/mistralai';
import fs from 'fs';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });


const file_path = "/path/to/uploaded_file.pdf"
const uploaded_file = fs.readFileSync(file_path);
const uploaded_pdf = await client.files.upload({
    file: {
        fileName: "uploaded_file.pdf",
        content: uploaded_file,
    },
    purpose: "ocr"
});

client.files.retrieve({ fileId: uploaded_pdf.id })

const ocrResponse = await client.ocr.process({
    model: "mistral-ocr-latest",
    document: {
        type: "document_url",
        documentUrl: "https://arxiv.org/pdf/2201.04234"
    },
    includeImageBase64: true
});
console.log("OCR ", ocrResponse);