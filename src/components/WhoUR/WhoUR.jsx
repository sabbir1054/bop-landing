"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  rolesDescriptionsBn,
  rolesDescriptionsEn,
} from "../../../data/whoData";
import { HoverEffect } from "../ui/card-hover-effect";

const WhoUR = () => {
  const locale = useLocale();
  const t = useTranslations("home.who");
  const [data, setdata] = useState(
    locale === "bn" ? rolesDescriptionsBn : rolesDescriptionsEn
  );

  useEffect(() => {
    if (locale === "bn") {
      setdata(rolesDescriptionsBn);
    } else {
      setdata(rolesDescriptionsEn);
    }
  }, [locale]);
  return (
    <div className="my-10">
      <div className=" pt-10 text-center">
        <h2
          className={`md:text-5xl text-3xl font-semibold mb-6 ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("title")}
        </h2>
        <div className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <p className={`text-center ${locale === "bn" && "bn-font"} text-lg`}>
            {t("description")}
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={data} />
      </div>
    </div>
  );
};

export default WhoUR;
