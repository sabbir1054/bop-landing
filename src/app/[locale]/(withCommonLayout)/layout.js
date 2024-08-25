import { NavigationBar } from "@/components/Navigationbar/NavigationBar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../../globals.css";
// Load messages based on the locale

const CommonLayout = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${locale==="bn"?"bn-font":""}`}>
        <NextIntlClientProvider messages={messages}>
          <NavigationBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default CommonLayout;
