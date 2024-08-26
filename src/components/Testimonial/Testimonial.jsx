"use client";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useLocale, useTranslations } from "next-intl";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { userBn, usersEn } from "../../../data/testimonial";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  const t = useTranslations("home.testimonial");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const locale = useLocale();
  const [data, setData] = useState(locale === "bn" ? userBn : usersEn);
  useEffect(() => {
    if (locale === "bn") {
      setData(userBn);
    } else {
      setData(usersEn);
    }
  }, [locale]);

  return (
    <>
      <div className="w-full lg:w-2/4 md:w-3/4  mx-auto">
        <h2
          className={`text-center text-xl md:text-3xl font-semibold ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("title")}
        </h2>
        <p
          className={`text-center text-lg mt-4 md:mt-6 ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("description")}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {data?.map((user, idx) => (
              <SwiperSlide key={idx}>
                <SingleTestimonial data={user} />
              </SwiperSlide>
            ))}

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
