import CategorySlider from "./CategorySilder";

const AllCategory = () => {
  return (
    <div className="my-10 ">
      <div className=" pt-10 flex flex-col md:flex-row items-center justify-between w-full px-4 py-8 md:px-8 lg:px-16 bg-white">
        {/* Left Section: Heading */}
        <div className="w-11/12 md:w-2/4 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Explore millions of offerings tailored to your business needs
          </h2>
        </div>

        {/* Right Section: Stats */}
        <div className="w-full md:w-1/3 flex flex-wrap items-center justify-center md:justify-end">
          <div className="w-1/2 md:w-auto text-center md:text-right mb-4 md:mb-0">
            <p className="text-pink-600 text-3xl font-bold">20M+</p>
            <p className="text-gray-600 text-lg">products</p>
          </div>
          <div className="w-1/2 md:w-auto text-center md:text-right mb-4 md:mb-0 md:ml-8">
            <p className="text-pink-600 text-3xl font-bold">200K+</p>
            <p className="text-gray-600 text-lg">suppliers</p>
          </div>
          <div className="w-1/2 md:w-auto text-center md:text-right mb-4 md:mb-0 md:ml-8">
            <p className="text-pink-600 text-3xl font-bold">1K+</p>
            <p className="text-gray-600 text-lg"> categories</p>
          </div>
          <div className="w-1/2 md:w-auto text-center md:text-right mb-4 md:mb-0 md:ml-8">
            <p className="text-pink-600 text-3xl font-bold">10+</p>
            <p className="text-gray-600 text-lg">countries </p>
          </div>
        </div>
      </div>
      <CategorySlider />
    </div>
  );
};

export default AllCategory;
