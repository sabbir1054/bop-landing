import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      'To reset your password, click on "Forgot Password" on the login page and follow the instructions.',
  },
  {
    question: "How do I update my billing information?",
    answer:
      "To update your billing information, go to your account settings and select the billing section.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support via the help section or by emailing support@example.com.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account, please contact our support team. They will guide you through the process.",
  },
];
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-all duration-500 ${
        isOpen ? "bg-indigo-50 border-indigo-600" : ""
      }`}
    >
      <button
        onClick={toggleOpen}
        className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 focus:outline-none"
      >
        <h5
          className={`font-normal ${
            isOpen ? "text-indigo-600 font-medium" : ""
          }`}
        >
          {question}
        </h5>
        <svg
          className={`w-6 h-6 transition-transform duration-500 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-base text-gray-900 font-normal leading-6">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const locale = useLocale();
  const t = useTranslations("home.faq");
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2
            className={`text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] ${locale==="bn"&&"bn-font"}`}
          >
            {t("title")}
          </h2>
        </div>
        <div className="accordion-group">
          {faqs?.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
