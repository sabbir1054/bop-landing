import { NavigationBar } from "@/components/Navigationbar/NavigationBar";

const CommonLayout = ({ children, params }) => {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
};

export default CommonLayout;
