"use client";
import LanguageSelector from "@/components/Hero/LanguageSelector";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AboutPage = () => {
  const locale = useLocale();
  const t = useTranslations("about");
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
        <h2
          className={`text-5xl text-center text-slate-100 font-semibold ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("head.title")}
        </h2>
        <div className="pt-2 flex justify-center">
          <div className="w-11/12 md:w-3/4 lg:w-2/4 ">
            <p
              className={`text-slate-300 text-center text-xl ${
                locale === "bn" && "bn-font"
              }`}
            >
              {t("head.description")}
            </p>
          </div>
        </div>

        <motion.div
          className="absolute top-4 right-4 z-20"
          initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Slide in and fade in
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        >
          <LanguageSelector />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  py-2">
        <div className="flex flex-col justify-center">
          <section className="py-8 px-4 bg-gray-100">
            <div className="container mx-auto max-w-4xl">
              <motion.h2
                className={`text-3xl font-bold text-center text-blue-600 mb-6 ${
                  locale === "bn" ? "bn-font" : ""
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t("sec1.p1")}
              </motion.h2>
              <motion.p
                className={`text-lg text-gray-700 mb-4 ${
                  locale === "bn" ? "bn-font" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("sec1.p2")}
              </motion.p>
              <motion.p
                className={`text-lg text-gray-700 mb-4 ${
                  locale === "bn" ? "bn-font" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("sec1.p3")}
              </motion.p>
              <motion.p
                className={`text-lg text-gray-700 mb-4 ${
                  locale === "bn" ? "bn-font" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t("sec1.p4")}
              </motion.p>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center bg-pink-100">
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide in and fade in
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <Image
              src="/assets/bopbdlogo.png"
              width={200}
              height={150}
              alt="bopbd logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
