/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "bn"],
    defaultLocale: "en-US",
    // domains: [
    //   {
    //     domain: "example.com",
    //     defaultLocale: "en-US",
    //   },
    //   {
    //     domain: "example.nl",
    //     defaultLocale: "nl-NL",
    //   },
    //   {
    //     domain: "example.fr",
    //     defaultLocale: "fr",
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
};

export default nextConfig;
