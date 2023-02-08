import React from "react";
import Image from "next/image";

import keyboard from "../../../public/keyboard.jpeg";

export interface AboutmeProps {}

const Aboutme: React.FC<AboutmeProps> = () => {
  return (
    <section
      className="min-h-screen border-b border-line pt-[40px] pb-[80px]"
      id="about-me"
    >
      <div>
        <h1 className="mb-8 text-left text-4xl font-semibold">about me</h1>
        <div className="grid grid-cols-2 gap-[80px] text-gray-500">
          <div>
            <Image
              src={keyboard}
              alt="Ladder"
              width={500}
              height={0}
              className="mb-[60px]"
            />
            <p className="mb-3 font-semibold">
              I am a <span className="text-black">minimalist</span>
            </p>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div>
            <p className="mb-3 font-semibold">
              I am a <span className="text-black">minimalist</span>
            </p>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr className="mt-4 mb-4" />

            <p className="mb-3 font-semibold">
              I build <span className="text-black">application frameworks</span>
            </p>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr className="mt-4 mb-4" />

            <p className="mb-3 font-semibold">
              I am a <span className="text-black">minimalist</span>
            </p>
            <p className="font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
