"use client";
import ContactForm from "@/components/ContactForm/ContactForm";
import LanguageSelector from "@/components/Hero/LanguageSelector";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
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
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="flex flex-col justify-center bg-gray-100">
          <section className=" px-4 about-sec2">
            <div className="container mx-auto max-w-4xl">
              <div>
                <h2
                  className={`text-2xl md:text-3xl font-semibold mb-4 ${
                    locale === "bn" && "bn-font"
                  }`}
                >
                  {t("sec1.title")}
                </h2>
                <ul className="text-lg py-5">
                  <li className={`my-2 ${locale === "bn" && "bn-font"}`}>
                    <strong className={`${locale === "bn" && "bn-font"}`}>
                      {t("sec1.addName")}
                    </strong>{" "}
                    {t("sec1.addValue")}
                  </li>
                  <li className={`my-2 `}>
                    <strong className={`${locale === "bn" && "bn-font"}`}>
                      {t("sec1.phnName")}
                    </strong>{" "}
                    +880 1969669908
                  </li>
                  <li className={`my-2 `}>
                    <strong className={`${locale === "bn" && "bn-font"}`}>
                      {t("sec1.emailName")}
                    </strong>{" "}
                    support@bopbd.com
                  </li>
                </ul>

                <div className="mt-6">
                  <h3
                    className={`text-2xl md:text-3xl font-semibold mb-2 ${
                      locale === "bn" && "bn-font"
                    }`}
                  >
                    {t("sec1.socialName")}
                  </h3>
                  <div className="flex space-x-4">
                    {/* Social Media Icons */}
                    <Link
                      href="https://www.facebook.com/bopbd.com.bd?mibextid=ZbWKwL"
                      target="blank"
                    >
                      <Image
                        src="/assets/facebook.svg"
                        alt="Facebook"
                        width={50}
                        height={50}
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/assets/twitter.svg"
                        alt="Twitter"
                        width={50}
                        height={50}
                      />
                    </Link>

                    <Link href="https://youtube.com/@bopbd5294?feature">
                      <Image
                        src="/assets/youtube.svg"
                        alt="YouTube"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <motion.div
          className="min-h-screen md:min-h-full"
          initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Slide in and fade in
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.983005313934!2d90.39755038601828!3d23.712300923766865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90035d679ef%3A0x8abb3993db412deb!2sHADI%20TEX%20CHEM!5e0!3m2!1sen!2sbd!4v1724729218978!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg shadow-lg"
          ></iframe>
        </motion.div>
      </div>
      <div className="py-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
