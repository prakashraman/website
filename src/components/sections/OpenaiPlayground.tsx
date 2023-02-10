import React from "react";

import Chat from "../Chat";

const OpenAIPlayground: React.FC = () => {
  return (
    <section className="flex min-h-screen pt-[40px] font-light" id="try">
      <div>
        <h1 className="mb-8 text-left text-4xl font-semibold">
          OpenAI playground
        </h1>
        <Chat />
      </div>
    </section>
  );
};

export default OpenAIPlayground;
