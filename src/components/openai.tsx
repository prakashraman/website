import React, { useCallback } from "react";

export interface OpenAIProps {}

/** Trims <br> from the string */
const removeBreaks = (x: string) =>
  x.replace(/^( |<br \/>)*(.*?)( |<br \/>)*$/, "$2");

const OpenAI: React.FC<OpenAIProps> = () => {
  const textRef = React.useRef<HTMLInputElement>(null);
  const [chat, setChat] = React.useState<string>("");
  const [loading, setloading] = React.useState<boolean>(false);

  const onSubmit = useCallback(() => {
    setloading(true);
    setChat("");
    const listen = new EventSource(`/api/chat?q=${textRef.current?.value}`);
    listen.onmessage = (event) => {
      const token = event.data.replace("\n\n", "<br/>");

      if (token == "[DONE]") {
        listen.close();
        setloading(false);
        return;
      }

      setChat((chat) => `${chat}${token}`);
    };
    listen.onerror = (event) => {
      setloading(false);
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
          ref={textRef}
        />
        <button
          className="text-l ml-5 h-full rounded-full bg-gray-800 pl-10 pr-10 text-white disabled:bg-gray-200"
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
      {chat && (
        <div className="mt-6 bg-gray-800 p-3 font-light text-white">
          <span dangerouslySetInnerHTML={{ __html: removeBreaks(chat) }}></span>
          {loading && <span className="animate-ping">&#9608;</span>}
        </div>
      )}
    </div>
  );
};

export default OpenAI;
