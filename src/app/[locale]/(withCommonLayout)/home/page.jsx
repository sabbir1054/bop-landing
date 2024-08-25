"use client";
import Features from "@/components/Features/Features";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const { default: Hero } = require("@/components/Hero/hero");

const HomePage = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this duration to the transition duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Hero />
          <Features />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur autem sit fugit obcaecati enim doloremque illo minima quis vero, incidunt perferendis vitae quas. Placeat consequatur perspiciatis magnam. Adipisci aut aliquam, nihil voluptatibus repudiandae tempora quae, nesciunt quibusdam accusamus voluptates in fuga architecto perferendis ex voluptatem, possimus labore ducimus perspiciatis necessitatibus recusandae. Quisquam, magni sit eveniet rem adipisci nemo dolores doloribus, hic officiis omnis non fuga ad soluta quam similique? Dolor adipisci totam perspiciatis repellendus soluta itaque, quibusdam esse eveniet animi aperiam voluptatem magnam voluptates fugiat? Expedita dolorum aspernatur magnam ex quaerat sint, harum in officia eveniet pariatur voluptates odit quibusdam atque architecto iste, modi magni temporibus, dolores ea nisi quis id consectetur mollitia. Fugiat, qui. Possimus accusantium veniam asperiores perspiciatis impedit nostrum, facere voluptate eos quod corrupti nulla sequi sunt quia ab natus optio excepturi ratione inventore labore officiis quaerat modi ad fugit. Soluta placeat cupiditate accusamus voluptatum nobis animi obcaecati ad et quos totam, deleniti illo blanditiis ducimus ipsa modi consectetur culpa voluptate eum, quae hic quibusdam sint? Labore sunt modi non! Tenetur similique corrupti esse repudiandae ex aut reiciendis unde accusantium vero ducimus aliquid molestiae itaque voluptatibus, voluptas blanditiis. Necessitatibus cum, officia ipsa vero numquam asperiores atque dolore officiis eaque itaque voluptates sed aspernatur dicta ad inventore eligendi, sunt beatae tempora ab reprehenderit iusto fugiat. Nulla recusandae mollitia omnis sit quas doloribus accusantium deleniti porro. Animi non, voluptatum quia numquam blanditiis ullam pariatur odit sint, commodi beatae consectetur minus quas facilis nobis maiores! Quibusdam placeat consequuntur, fugit ullam officiis voluptate delectus eaque veniam nostrum ad iure repudiandae nihil? Architecto sed vel consequuntur vitae possimus commodi soluta, inventore exercitationem rem. Odit tempore distinctio ea itaque porro similique quis id, sunt unde illo atque laboriosam totam a optio minus quos eum repellendus error praesentium quidem in placeat. Provident, cumque.
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
