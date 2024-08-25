import { redirect } from "next/navigation";

const page = ({ params }) => {
  const { locale } = params;
  redirect(`/${locale}/home`);
};

export default page;
