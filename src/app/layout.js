import "./globals.css";

export const metadata = {
  title: "BopBd - Largest B2B business platform",
  description: "",
  generator: "BopBd - Largest B2B business platform",
  alternates: {
    canonical: `https://www.bopbd.com`,
  },
  applicationName: "BOPBD",
  referrer: "https://bopbd.com",
  keywords: [
    "Largest B2B business platform Bangladesh - BopBd",
    "Biggest online b2b e commerce platform -BopBd",
    "Online Wholesale shopping mall -BopBd",
  ],

  authors: [{ name: "Md Rasel" }, { name: "BOPBD", url: "https://bopbd.com" }],
  creator: "mdsabbir.dev",
  publisher: "https://bopbd.com",

  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {children}
    </html>
  );
}
