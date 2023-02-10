import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";
import { env } from "../../env/server.mjs";

/**
 * OpenAI API Configuration
 */
const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

/**
 * OpenAI API Client
 */
const openai = new OpenAIApi(configuration);

/**
 * Prompt for OpenAI API
 *
 * @param q
 * @returns
 */
const getPrompt = (q: string) => {
  return `If I like the movie "${q}" can you suggest only 6 more movies I might like?`;
};

/**
 * Adjusting NextApiRequest to define query as a string
 */
type ApiRequest = NextApiRequest & { query: { q: string } };

/**
 * Invokes OpenAI API to generate a response.
 *
 * Sets up an EventSource with
 * @param req
 * @param res
 * @returns
 */
const handler = async (req: ApiRequest, res: NextApiResponse) => {
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
      prompt: getPrompt(q),
      temperature: 0,
      max_tokens: 200,
      stream: true,
    },
    { responseType: "stream" }
  );

  type ResponseStream = CreateCompletionResponse & {
    on: (name: string, callback: (chunk: Buffer) => void) => void;
  };

  (openairesponse.data as ResponseStream).on("data", (chunk: Buffer) => {
    const decoder = new TextDecoder("utf-8");
    const text = decoder.decode(chunk).replace("data: ", "");

    /**
     * Denotes the end of the stream from OpenAI
     */
    if (text == "[DONE]\n\n") {
      res.write(`data: ${text}`);
      return;
    }

    try {
      /**
       * The OpenAI API returns a JSON string which contains a "choices" array.
       */
      const data = JSON.parse(text) as CreateCompletionResponse;
      if (data.choices[0] && data.choices[0].text) {
        const message = data.choices[0].text.replace("\n", "<br />");
        res.write(`data: ${message}\n\n`);
      }
    } catch (e) {
      console.log({ text, e });
    }
  });
};

export default handler;
