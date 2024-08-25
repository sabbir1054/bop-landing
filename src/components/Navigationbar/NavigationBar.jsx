"use client";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FloatingNav } from "../ui/floating-navbar";
export function NavigationBar() {
  const t = useTranslations("navigation");
  const navItems = [
    {
      name: t("nav1"),
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: t("nav2"),
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: t("nav3"),
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
