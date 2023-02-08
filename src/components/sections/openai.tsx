import React from "react";

import Chat from "../chat";

export interface OpenAIProps {}

const OpenAI: React.FC<OpenAIProps> = () => {
  return (
    <section className="flex min-h-screen pt-[40px] font-light" id="try">
      <div>
        <h1 className="mb-8 text-left text-4xl font-semibold">try chatgpt</h1>

        <Chat />
      </div>
    </section>
  );
};

export default OpenAI;
