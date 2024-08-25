import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 justify-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={"/"}
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-pink-600/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.role}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  const locale = useLocale();
  return (
    <h3
      className={cn(
        `text-zinc-100 font-bold tracking-wide mt-4 ${
          locale === "bn" && "bn-font"
        }`,
        className
      )}
    >
      {children}
    </h3>
  );
};
export const CardDescription = ({ className, children }) => {
  const locale = useLocale();
  return (
    <p
      className={cn(
        `mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ${
          locale === "bn" && "bn-font"
        }`,
        className
      )}
    >
      {children}
    </p>
  );
};
