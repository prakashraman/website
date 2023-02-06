import { listenerCount } from "process";
import React, { useCallback, useEffect } from "react";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<any> = (url: string) =>
  fetch(url).then((res) => res.text());

export interface OpenAIProps {}

const OpenAI: React.FC<OpenAIProps> = () => {
  console.log("in openai component");

  const [chat, setChat] = React.useState<string[]>([]);

  const onSubmit = useCallback(() => {
    console.log("clicking submit");
    const listen = new EventSource("/api/chat");
    listen.onmessage = (event) => {
      const token = event.data.replace("\n\n", "<br/>");
      setChat((chat) => [...chat, token]);
    };
    listen.onerror = (event) => {
      listen.close();
      console.log(event);
    };
  }, []);

  return (
    <div>
      <p className="mb-3">
        This is basic application built on top of openai which recommends movies
        based on what you like. Let's say you how OpenAI suggests!
      </p>

      <p className="mb-10">
        In the textfield below enter a popular movie you like and click "ask
        openai"
      </p>

      <div className="h-[56px]">
        <input
          className="text-l h-full w-[500px] rounded-full border border-gray-300 pl-8"
          placeholder="Enter a movie name"
        />
        <button
          className="text-l ml-5 h-full rounded-full bg-gray-800 pl-10 pr-10 text-white"
          onClick={onSubmit}
        >
          Ask OpenAI
        </button>
      </div>

      {/* options */}
      <div className="mt-4 flex gap-4">
        {Array.from(
          ["Elizabeth Town", "The Dark Knight", "The Matrix"],
          (movie, i) => (
            <span
              className="cursor-pointer rounded-full bg-gray-200 pl-4 pr-4 pt-2 pb-2 text-sm hover:bg-gray-300"
              key={i}
            >
              {movie}
            </span>
          )
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: chat.join(" ") }}>{}</div>
    </div>
  );
};

export default OpenAI;
