"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const router = useRouter();
  const supportedLanguages = ["en", "bn"];
  const handleLanguageChange = (language) => {
    router.push(router.pathname, null, { locale: language });
  };

  return (
    <div>
      {supportedLanguages.map((language) => (
        <button key={language} onClick={() => handleLanguageChange(language)}>
          {/* Render your flag icon here */}
          <Image src={`/assets/${language}.png`} alt={language} width={30} height={10} />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
