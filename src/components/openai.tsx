import React from "react";

export interface OpenAIProps {}

const OpenAI: React.FC<OpenAIProps> = () => {
  return (
    <div>
      <p className="mb-3">
        I've built a tiny application on top of openai to demonstrate the power
        of openai and how easy to build applications on top it. The
        possibilities are endless.
      </p>

      <p className="mb-10">
        Enter a popular movie you like, the application will give you three
        other movies which you other similar movies.
      </p>

      <div className="h-[56px]">
        <input
          className="text-l h-full w-[500px] rounded-full border border-gray-300 pl-8"
          placeholder="Enter a movie name"
        />
        <button className="text-l ml-5 h-full rounded-full bg-gray-800 pl-10 pr-10 text-white">
          Submit
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
    </div>
  );
};

export default OpenAI;
