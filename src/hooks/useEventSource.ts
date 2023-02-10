import { useState } from "react";

/**
 * ["DONE"] is expected to be recieved from the event source
 * when the stream is complete
 */
const DONE = "[DONE]";
const NEWLINES = "\n\n";
const BR = "<br>";

type EventWithData = Event & { data: string };

/**
 * Custom Event Source Hook
 *
 * @param url
 * @returns
 */
const useEventSource = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const run = (url: string) => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const s = (event as EventWithData).data.replace(NEWLINES, BR);

      if (s == DONE) {
        eventSource.close();
        setLoading(false);
        setDone(true);
        return;
      }

      setData((data) => `${data}${s}`);
    };

    eventSource.onerror = (event) => {
      setError("unable to fetch data");
      setData("error: unable to interact with openai. please try again.");
      setLoading(false);
      setDone(true);
    };
  };

  const reset = () => {
    setDone(false);
    setData("");
    setError("");
  };

  return { data, error, loading, run, reset, done };
};

export default useEventSource;
