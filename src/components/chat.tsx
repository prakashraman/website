import React, { ChangeEvent, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { api } from "../utils/api";
import useEventSource from "../hooks/useEventSource";

export interface ChatProps {}

/** Trims <br> from the string */
const removeBreaks = (x: string) =>
  x.replace(/^( |<br \/>)*(.*?)( |<br \/>)*$/, "$2");

const Chat: React.FC<ChatProps> = () => {
  const textRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = React.useState<string>("");
  const { data: chat, reset: resetEventSource, done, run } = useEventSource();
  const { refetch, data: options } = api.movies.search.useQuery(
    { text },
    { enabled: false }
  );

  /** on text change handlers */
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  /**
   * Reset
   */
  const reset = () => {
    resetEventSource();
    textRef.current!.value = "";
  };

  /**
   * Request the chat api for the recommendations
   */
  const onSubmit = useCallback(() => {
    resetEventSource();
    run(`/api/chat?q=${textRef.current?.value}`);
  }, []);

  /**
   * Requests for movies matching the text
   */
  useEffect(() => {
    if (text.length < 3) return;
    refetch();
  }, [text]);

  return (
    <div className="">
      <p className="mb-3 font-extralight text-gray-800">
        This is basic application built on top of openai which recommends movies
        based on what you like. Let's say you how OpenAI suggests!
      </p>

      <p className="mb-10 font-extralight text-gray-800">
        In the textfield below enter a popular movie you like and click "ask
        openai"
      </p>

      <div className="h-[56px]">
        <input
          className="text-l h-full w-[500px] rounded-full border border-gray-300 pl-8 outline-none focus:border-gray-800"
          placeholder="Enter a movie name"
          onChange={debouncedChangeHandler}
          ref={textRef}
        />
        <button
          disabled={text.length < 3}
          className="text-l ml-5 h-full rounded-full bg-gray-800 pl-10 pr-10 text-white disabled:bg-gray-200 disabled:text-gray-500"
          onClick={onSubmit}
        >
          Ask OpenAI
        </button>
      </div>

      {/* options */}
      {options && options.length > 0 && (
        <div className="mt-4 ml-4 text-gray-600">
          <span className="text-sm">
            Tap one to view the recommendation or hit "ask openai"
          </span>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {options &&
          options.length > 0 &&
          options.map((x, i) => (
            <span
              className="cursor-pointer rounded-full bg-gray-200 pl-4 pr-4 pt-2 pb-2 text-sm hover:bg-gray-300"
              key={`${x}-${i}`}
              onClick={() => {
                textRef.current!.value = x;
                setText(x);
                onSubmit();
              }}
            >
              {x}
            </span>
          ))}
      </div>
      <div className="mt-6 bg-gray-800 p-3 font-light text-white">
        <span dangerouslySetInnerHTML={{ __html: removeBreaks(chat) }}></span>
        {!done && <span className="animate-ping">&#9608;</span>}
      </div>

      {done && (
        <span className="mt-4 block cursor-pointer underline" onClick={reset}>
          Want to try it again?
        </span>
      )}
    </div>
  );
};

export default Chat;
