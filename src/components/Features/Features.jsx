import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { bnFeatures, enFeatures } from "../../../data/featuresData";

const Features = () => {
  const locale = useLocale();
  const [data, setdata] = useState(locale === "bn" ? bnFeatures : enFeatures);

  useEffect(() => {
    if (locale === "bn") {
      setdata(bnFeatures);
    } else {
      setdata(enFeatures);
    }
  }, [locale]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:my-16 my-10 mx-5">
      {data.map((card) => (
        <motion.div
          key={card.title}
          className="
         features-card p-3 border rounded-lg hover:border-4 hover:rounded-lg border-pink-400 cursor-pointer transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={`${card.icon}`} alt={card.title} width={40} height={40} />
          <div className="p-4">
            <h2
              className={`${
                locale === "bn" && "bn-font"
              } text-lg font-bold mb-2`}
            >
              {card.title}
            </h2>
            <p className={`text-gray-700 ${locale === "bn" && "bn-font"}`}>
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
