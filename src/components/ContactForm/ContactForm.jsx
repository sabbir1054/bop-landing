import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  /* ${locale==="bn"&&"bn-font"} */
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className={`mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("sec2.title")}
        </h2>
        <p
          className={`mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl ${
            locale === "bn" && "bn-font"
          }`}
        >
          {t("sec2.description")}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 ${
                locale === "bn" && "bn-font"
              }`}
            >
              {t("sec2.email")}
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: `${t("sec2.reqSms")}`,
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: `${t("sec2.inValidSms")}`,
                },
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@bopbd.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className={`block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 ${
                locale === "bn" && "bn-font"
              }`}
            >
              {t("sec2.emailSub")}
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: `${t("sec2.subReq")}` })}
              className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder={`${t("sec2.emailPlace")}`}
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className={`block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 ${
                locale === "bn" && "bn-font "
              }`}
            >
              {t("sec2.messageName")}
            </label>
            <textarea
              rows={10}
              id="message"
              {...register("message", {
                required: `${t("sec2.reqErrMssage")}`,
              })}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder={`${t("sec2.messagePlace")}`}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            {isSubmitting
              ? `${t("sec2.sendingBtn")}...`
              : `${t("sec2.sendBtn")}`}
          </button>
          {submissionStatus === "success" && (
            <p className="text-green-500">{t("sec2.success")}</p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500">{t("sec2.err")}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
