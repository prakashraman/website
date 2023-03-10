import React from "react";
import Image from "next/image";

import keyboard from "../../../public/keyboard.jpeg";

/**
 * ======================== Component ========================
 */

const Aboutme: React.FC = () => {
  return (
    <section
      className="min-h-screen border-b border-line pt-[40px] pb-[80px]"
      id="about-me"
    >
      <div>
        <h1 className="mb-8 text-left text-4xl font-semibold">about me</h1>
        <div className="grid grid-cols-1 gap-[40px] text-gray-500 lg:grid-cols-2 lg:gap-[80px]">
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
              I direct <span className="text-black">engineering teams</span> and
              build <span className="text-black">application frameworks</span>
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
              my <span className="text-black">life in Belgium</span>
            </p>
            <p className="font-extralight">
              I lived in Belgium for 2.5 years and it has been an amazing
              experience. One of my favorite things to do here is to go for
              morning runs beside the water. Not only do I get to breathe clean
              air in the morning , but I have also met some wonderful people
              during my runs. The locals here are very friendly and welcoming,
              which has made my stay even more enjoyable. I have to admit that I
              was never a big fan of beer until I lived there. The variety of
              beer available is simply mind-blowing, and the taste is so unique.
              I was fortunate enough to live in the city centre and every day
              felt like I was living in a movie. All in all, my life in Belgium
              has been a wonderful experience and I am grateful for the
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
