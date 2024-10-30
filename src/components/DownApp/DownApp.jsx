"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function DownApp() {
  const n = useTranslations("navigation");
  const t = useTranslations("home.downApp");
  const locale = useLocale();
  return (
    <div className="downApp-container">
      <div className="flex flex-col overflow-hidden my-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black ">
                <Link
                  target="_blank"
                  href={
                    "https://play.google.com/store/apps/details?id=com.bopbd.bopbd"
                  }
                >
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      {n("downBtn")}
                    </span>
                  </button>
                </Link>
                <br />
                <span
                  className={`text-4xl md:text-[6rem] font-bold mt-1 leading-none ${
                    locale === "bn" && "bn-font"
                  }`}
                >
                  {t("title")}
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/myPhone.png`}
            alt="hero"
            height={300}
            width={400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            //   className="max-h-[90%] max-w-[90%] object-contain"
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
