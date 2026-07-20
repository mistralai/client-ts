import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey: apiKey });

const chatResponse = await client.chat.complete({
  model: "pixtral-12b",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What's in this image?" },
        {
          type: "image_url",
          imageUrl:
            "https://raw.githubusercontent.com/mistralai/mistral-common/7edf6f651b3579135f44686e345d51b7e19a536a/docs/assets/logo_favicon.png",
        },
      ],
    },
  ],
});

console.log("JSON:", chatResponse.choices[0].message.content);
