"use client";
import { DownApp } from "@/components/DownApp/DownApp";
import Faq from "@/components/FAQ/Faq";
import Features from "@/components/Features/Features";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhoUR from "@/components/WhoUR/WhoUR";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const { default: Hero } = require("@/components/Hero/hero");

const HomePage = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this duration to the transition duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Hero />
          <Features />
          <WhoUR />
          <DownApp />
          <Testimonial />
          <Faq />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
