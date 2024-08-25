import Footer from "@/components/Footer/Footer";
import { NavigationBar } from "@/components/Navigationbar/NavigationBar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Head from "next/head";
import "../../globals.css";
// Load messages based on the locale

const CommonLayout = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className={`${locale === "bn" ? "bn-font" : ""}`}>
        <NextIntlClientProvider messages={messages}>
          <NavigationBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default CommonLayout;
