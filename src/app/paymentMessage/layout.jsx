
import Head from "next/head";

const PaymentLayout = async ({ children }) => {
  return (
    <html>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className={``}>{children}</body>
    </html>
  );
};

export default PaymentLayout;
