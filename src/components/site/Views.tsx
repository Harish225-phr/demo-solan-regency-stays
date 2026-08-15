import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mountainView from "@/assets/mountain-view.png";
import { SectionHeading } from "./Reveal";

export function Views() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest-deep py-28 lg:py-40">
      <motion.img
        src={mountainView}
        alt="Panoramic view of Solan city against the Himalayan mountains"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Mountain & City Views"
          title="Wake Up to the Hills of Solan."
          intro="Selected rooms and the rooftop terrace open onto sweeping views of the surrounding mountains and the town below — the quiet luxury of Himachal, right outside your window."
          light
        />
        <div className="mt-14 grid max-w-3xl gap-px border border-ivory/15 bg-ivory/10 sm:grid-cols-3">
          {[
            { t: "Mountain View", d: "Layered Himalayan ridgelines at sunrise." },
            { t: "City View", d: "Solan's hillside rooftops and evening lights." },
            { t: "Terrace", d: "Open-air seating for morning tea." },
          ].map((i) => (
            <div key={i.t} className="bg-forest-deep/50 p-7 backdrop-blur-sm">
              <p className="font-display text-xl text-gold-soft">{i.t}</p>
              <p className="mt-2 text-sm text-ivory/70">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
