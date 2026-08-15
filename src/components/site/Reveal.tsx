import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-gold-soft" : "text-gold"}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl ${
          light ? "text-ivory" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-px w-14 ${light ? "bg-gold-soft/70" : "bg-gold"} ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {intro && (
        <p
          className={`mt-5 text-[0.95rem] leading-relaxed ${
            light ? "text-ivory/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
