import { type NextPage } from "next";
import Head from "next/head";
import { Outfit } from "@next/font/google";

import Hero from "../components/sections/Hero";
import Aboutme from "../components/sections/Aboutme";
import OpenAI from "../components/sections/OpenaiPlayground";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";

const font = Outfit({
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prakash Raman - Website</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <main className={[font.className].join(" ")}>
        <div className="relative">
          <div className="px-[40px] lg:mr-[300px] lg:px-[80px]">
            <Hero />
            <Aboutme />
            <OpenAI />
          </div>

          <RightPanel classNames="hidden lg:block" />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;
