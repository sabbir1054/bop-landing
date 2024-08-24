import { NavigationBar } from "@/components/Navigationbar/NavigationBar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default CommonLayout;
