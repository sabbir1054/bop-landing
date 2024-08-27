"use client"
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import LanguageSelector from '@/components/Hero/LanguageSelector';
const ContactPage = () => {
    const locale = useLocale();
    const t = useTranslations("contact");
    return (
      <div className="min-h-screen ">
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
      </div>
    );
};

export default ContactPage;