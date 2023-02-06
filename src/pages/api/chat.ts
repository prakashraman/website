import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";
import { env } from "../../env/server.mjs";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/event-stream;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("X-Accel-Buffering", "no");

  const openairesponse = await openai.createCompletion(
    {
      model: "text-davinci-003",
      prompt: `If I like the movie "Batman" can you suggest only 3 more movies I might like?`,
      temperature: 0,
      max_tokens: 200,
      stream: true,
    },
    { responseType: "stream" }
  );

  type ResponseStream = CreateCompletionResponse & { on: any };
  (openairesponse.data as ResponseStream).on("data", (chunk: any) => {
    const decoder = new TextDecoder("utf-8");
    const text = decoder.decode(chunk).replace("data: ", "");
    if (text == "[DONE]\n\n") {
      res.write("[DONE]\n\n");
      return;
    }

    try {
      const data: CreateCompletionResponse = JSON.parse(text);
      var message = data.choices[0]!.text;
      message = message?.replace("\n", "<BR>");
      console.log({ message });
      res.write(`data: ${message}\n\n`);
      console.log(message);
    } catch (e) {
      console.log({ text, e });
    }
  });
};

export default handler;
