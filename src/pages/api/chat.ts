import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";
import { env } from "../../env/server.mjs";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/event-stream;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("X-Accel-Buffering", "no");

  const q = req.query.q;
  if (!q || q.length < 3) {
    res.status(400).send("Missing query parameter q or the query is too short");
    return;
  }

  const openairesponse = await openai.createCompletion(
    {
      model: "text-davinci-003",
      prompt: `If I like the movie "${q}" can you suggest only 6 more movies I might like?`,
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
      res.write(`data: ${text}`);
      return;
    }

    try {
      const data: CreateCompletionResponse = JSON.parse(text);
      var message = data.choices[0]!.text;
      message = message?.replace("\n", "<br />");
      res.write(`data: ${message}\n\n`);
    } catch (e) {
      console.log({ text, e });
    }
  });
};

export default handler;
