import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const words = "";
const Hero = () => {
  const words = `BOP BD is Bangladesh's online wholesale marketplace. When the world has become digital based on online, why should we Bangladesh lag behind in business and trade, so we are working through BOP BD to introduce Bangladesh to business and trade in the whole world. We are on the BOP BD path to bring all the businesses and trades of Bangladesh on one platform and enable traders to source all products easily and at low prices.`;
  const flipWords = ["BOP BD", " B2B Platform "];

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        src="/assets/bg_background.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <Image
          alt="bopbd-logo"
          src="/assets/bopbdlogo.png"
          width={100}
          height={50}
          className="shadow-lg"
        />
        <h1 className="text-6xl font-bold">
          Welcome to <FlipWords words={flipWords} />{" "}
        </h1>{" "}
        <div className=" md:w-3/5 w-full">
          <TextGenerateEffect words={words} />
        </div>
        <div className="flex">
          <Link href={"/"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Download App
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
