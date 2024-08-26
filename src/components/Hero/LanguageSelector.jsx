"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSelector() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const urlPath = pathname.split(`/${locale}`)[1];

  const nextLocale = locale === "bn" ? "en" : "bn";

  const handleClick = () => {
    startTransition(() => {
      router.replace(`/${nextLocale + urlPath}`);
    });
  };

  const flagSrc = locale === "bn" ? "/assets/en.png" : "/assets/bn.png";
  const altText = locale === "bn" ? "English flag" : "Bangladesh flag";

  return (
    <motion.div
      className="border-2 border-transparent rounded-full overflow-hidden bg-black bg-opacity-50 p-2 cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={flagSrc}
        width={40}
        height={40}
        alt={altText}
        className="rounded-full"
      />
    </motion.div>
  );
}
