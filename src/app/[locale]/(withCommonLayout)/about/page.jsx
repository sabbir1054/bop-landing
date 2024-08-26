"use client";
import LanguageSelector from "@/components/Hero/LanguageSelector";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div
        className=" flex justify-center flex-col"
        style={{
          height: "40vh",
          backgroundColor: "black",
          backgroundImage: `url("/assets/rsz_about-banner.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h2 className="text-5xl text-center text-slate-100 font-semibold">
          About us
        </h2>
        <p className="text-slate-500 text-center text-xl">Explore Our Galaxy</p>
        <motion.div
          className="absolute top-4 right-4 z-20"
          initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Slide in and fade in
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        >
          <LanguageSelector />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
