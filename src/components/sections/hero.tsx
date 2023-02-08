import React from "react";

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="flex h-screen items-center border-b border-line">
      <div className="relative flex h-full flex-col justify-center">
        <h1 className="mb-7 text-left text-7xl font-semibold">Prakash Raman</h1>
        <h3 className="max-w-2xl text-2xl font-extralight text-gray-500">
          As the VP of Application Development at Sentiance, my role encompasses
          both architectural planning and hands-on development of applications{" "}
          <br />
          <br />I live in Toronto, Canada
        </h3>

        <div className="absolute bottom-[80px]">
          <a className="underline" href="#about-me">
            about me
          </a>
          <a className="ml-5 underline" href="#try">
            try OpenAI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
