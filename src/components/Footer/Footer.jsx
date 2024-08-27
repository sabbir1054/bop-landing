import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  /* ${locale === "bn" && "bn-font"} */
  return (
    <footer className={`bg-gray-900 `}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2
              className={`mb-6 text-sm font-semibold  uppercase text-white ${
                locale === "bn" && "footer-bn-font"
              }`}
            >
              {t("col1.l1")}
            </h2>
            <ul className=" text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href={`/${locale}/about`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col1.l2")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={`/${locale}/contact`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col1.l3")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={`/${locale}/home`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col1.l4")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2
              className={`mb-6 text-sm font-semibold  uppercase text-white ${
                locale === "bn" && "footer-bn-font"
              }`}
            >
              {t("col2.l1")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="https://x.com/BOPBD168336?t=BCDxImAXqt1ql8N34ov3Sw&s=09"
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col2.l2")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.facebook.com/bopbd.com.bd?mibextid=ZbWKwL"
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col2.l3")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={`/${locale}/contact`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col2.l4")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2
              className={`mb-6 text-sm font-semibold  uppercase text-white ${
                locale === "bn" && "footer-bn-font"
              }`}
            >
              {t("col3.l1")}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href={`https://www.termsfeed.com/live/a2031d6d-2528-48b6-9bd5-3aa6a6a40e61`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col3.l2")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={`https://www.termsfeed.com/live/a2031d6d-2528-48b6-9bd5-3aa6a6a40e61`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col3.l3")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={`https://www.termsfeed.com/live/a2031d6d-2528-48b6-9bd5-3aa6a6a40e61`}
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col3.l4")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2
              className={`mb-6 text-sm font-semibold  uppercase text-white ${
                locale === "bn" && "footer-bn-font"
              }`}
            >
              {t("col4.l1")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="#"
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col4.l2")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col4.l3")}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className={`hover:underline ${locale === "bn" && "bn-font"}`}
                >
                  {t("col4.l4")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-700 text-center">
          <span className="text-sm text-gray-300 text-center">
            © 2023 <Link href="https://bopbd.com/">BopBD™</Link>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
