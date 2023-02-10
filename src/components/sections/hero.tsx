import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex h-screen items-center border-b border-line">
      <div className="relative flex h-full flex-col justify-center">
        <h1 className="mb-7 text-left text-7xl font-semibold">Prakash Raman</h1>
        <h3 className="max-w-2xl text-2xl font-extralight text-gray-500">
          I am the VP of Application Development at{" "}
          <a
            href="https://www.sentiance.com"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            Sentiance
          </a>
          , I bring a unique blend of technical proficiency and leadership to
          the table. I excel at directing engineering teams in building complex
          applications.
          <br />
          <br />I live in Toronto, Canada
        </h3>

        <div className="absolute bottom-[80px]">
          <a className="underline" href="#about-me">
            about me
          </a>
          <a className="ml-5 underline" href="#try">
            OpenAI playground
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
