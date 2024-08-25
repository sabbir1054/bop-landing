"use client";
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          quibusdam asperiores quas vero. Enim ducimus cum maiores quam. Ipsum
          commodi tempore, suscipit dolorum hic a id laboriosam ullam obcaecati
          ab ipsam doloremque, saepe labore adipisci non officia quos quae. Non
          reprehenderit architecto molestias quos unde tempora vero, dignissimos
          cupiditate. Culpa adipisci recusandae eos qui commodi, corporis
          veritatis nulla amet facere eius id quis voluptas optio eaque! Eum
          aspernatur ducimus provident ipsam suscipit perspiciatis repudiandae
          laborum quidem, iste fugiat, animi quibusdam quasi. Corrupti quod
          deleniti praesentium. Deleniti corrupti dolorum voluptatibus! Labore
          ut quidem placeat ipsum libero deserunt repudiandae doloremque!
          Dolores repudiandae debitis eaque voluptas saepe culpa repellat nobis,
          eum rem accusantium doloribus, nemo maxime recusandae nesciunt a sunt
          vero, possimus veritatis? Nam veritatis qui doloribus assumenda
          voluptatibus amet laudantium ad. Dolore aut possimus amet deleniti ex
          sapiente recusandae, exercitationem maxime. Alias laudantium, ad sequi
          suscipit corrupti neque aperiam id eos aspernatur assumenda harum
          eveniet aliquid voluptatem asperiores, dicta mollitia officiis animi
          ducimus? Quidem, ullam! Illum iusto architecto quia ex veritatis!
          Repellat hic omnis voluptates quidem alias maiores quam aperiam
          dolorum deleniti fuga, eos inventore architecto nulla minus nam
          exercitationem sed deserunt excepturi. Quod facere error recusandae
          harum tenetur numquam consectetur dolore omnis asperiores eveniet
          autem ipsum quae esse, maxime eligendi incidunt repudiandae nobis
          blanditiis corrupti tempora minus. Vitae repellendus harum dignissimos
          consectetur quae id tempora. Corporis amet harum consequuntur.
          Quisquam, harum ea culpa velit ullam unde, odit nihil id quibusdam
          reiciendis ratione iure aliquam similique excepturi delectus quaerat
          quo nam quas fugit? Molestiae inventore laboriosam corrupti cumque
          magni quos, tempore porro, illo, reprehenderit repudiandae fugit eos
          quis quam. Culpa, deleniti repudiandae magnam aspernatur voluptate nam
          repellendus, voluptatum a maxime id dolorem. Nostrum, enim labore, hic
          molestiae quibusdam fugiat natus quae, non qui facilis repudiandae
          voluptatum quas minus aperiam omnis eius! Repellat nisi aperiam quia
          ex, dignissimos eaque recusandae possimus, velit sequi, eligendi
          ratione molestias temporibus sapiente consectetur repellendus!
          Praesentium necessitatibus dolore libero facere, a aspernatur est sed
          eius voluptatem eaque quidem incidunt error fuga sunt, sint tenetur
          ipsam voluptate harum laborum. Eaque sit itaque repellat architecto,
          illum, cum, laborum nisi quo debitis magnam non. Maxime necessitatibus
          quos molestiae sint obcaecati atque iusto veritatis itaque? Fuga quo
          aperiam illum possimus atque veniam numquam rem non eos similique hic
          reiciendis ea dicta, nostrum placeat, cum consequuntur quod voluptatum
          sint modi? Numquam, reiciendis! Eaque nesciunt rem quisquam cupiditate
          nam enim accusamus, voluptatibus nostrum beatae officiis ratione est
          illum quidem ipsam consequuntur repellendus officia dolorum libero
          ipsa exercitationem corrupti minus voluptate esse. Ea inventore
          nesciunt facere fuga ab exercitationem amet libero maxime veritatis
          eos repellendus omnis atque, totam explicabo laboriosam nisi. Deserunt
          quos illo ut consequatur ea similique rem, sapiente sunt temporibus
          optio facere provident qui vel possimus, beatae veritatis repellendus
          quas velit! Est, error quia! Aliquid, aspernatur. Animi facere itaque
          sit iste sint. Quia ab rem fuga explicabo eum ipsum inventore quasi?
          Perspiciatis cumque eaque sint rerum ad asperiores corrupti enim,
          voluptatum alias architecto sed odio ut dolorum nihil? Nostrum nobis
          placeat illum necessitatibus.
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
