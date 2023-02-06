import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Encoding", "identity");

  // Stream data in chunks every 1 second
  let i = 0;
  res.write(JSON.stringify({ data: -1 }));
  const interval = setInterval(() => {
    console.log("Sending data chunk", i);
    res.write(JSON.stringify({ data: i++ }));

    if (i > 3) {
      console.log("Closing connection");
      res.end();
    }
  }, 1000);

  // Clean up the interval when the response is finished
  res.on("finish", () => {
    clearInterval(interval);
  });
}
