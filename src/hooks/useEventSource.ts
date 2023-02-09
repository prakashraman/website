import { useState } from "react";

/**
 * ["DONE"] is expected to be recieved from the event source
 * when the stream is complete
 */
const DONE = "[DONE]";

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
      // replace new lines with <br> tags
      const token = event.data.replace("\n\n", "<br>");

      if (token == DONE) {
        eventSource.close();
        setLoading(false);
        setDone(true);
        return;
      }

      setData((data) => `${data}${token}`);
    };

    eventSource.onerror = (event) => {
      setError("unable to fetch data");
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
