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
          imageUrl: "https://tripfixers.com/wp-content/uploads/2019/11/eiffel-tower-with-snow.jpeg",
        },
      ]
    }
  ],
});


console.log('JSON:', chatResponse.choices[0].message.content)
