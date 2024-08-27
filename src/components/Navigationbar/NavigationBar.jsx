"use client";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { motion } from "framer-motion";
export function NavigationBar() {
  const [isNavVisible, setNavVisible] = useState(false);
  const locale = useLocale();
  const t = useTranslations("navigation");

  const navItems = [
    {
      name: t("nav1"),
      link: `/${locale}/home`,
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: t("nav2"),
      link: `/${locale}/about`,
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: t("nav3"),
      link: `/${locale}/contact`,
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Bar icon for small screens */}
      <div className="fixed top-0 left-0 p-4 md:hidden z-40">
        <motion.div
          className="border-2 border-transparent rounded-full overflow-hidden bg-black bg-opacity-50 px-3 py-2 cursor-pointer"
        
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => setNavVisible(!isNavVisible)}
            className="text-pink-600"
          >
            {isNavVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      {/* Floating navigation bar */}

      {/* Floating navigation bar for larger screens */}
      <div
        className={`${
          isNavVisible ? "nav-show md:block" : "nav-hide md:block"
        }`}
      >
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
}
