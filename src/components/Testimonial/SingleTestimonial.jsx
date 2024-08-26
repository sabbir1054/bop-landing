import { useLocale } from "next-intl";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const items = [
  {
    image: "/assets/man.png",
    name: " Micheal Gough",
    designation: " CEO at Google",
    comment:
      "Flowbite is just awesome. It contains tons of pre designed components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
];
const SingleTestimonial = ({ data }) => {
  const locale = useLocale();
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
          <svg
            class="h-12 mx-auto mb-3 text-pink-400 dark:text-pink-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p
              class={`text-2xl font-medium text-gray-900  ${
                locale === "bn" && "bn-font"
              }`}
            >
              {data.comment}
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <AnimatedTooltip item={data} />
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default SingleTestimonial;