import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const words = "";
const Hero = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
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
        <h1 className="text-5xl font-medium">
          Welcome to <FlipWords words={flipWords} />{" "}
        </h1>{" "}
        <div className=" md:w-3/5 w-full">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
