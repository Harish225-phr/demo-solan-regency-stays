import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/view-sunrise.png";
import { telHref, waLink } from "@/lib/hotel";

const badges = [
  { value: "4.9 / 5", label: "Guest Rating" },
  { value: "3★", label: "Hotel" },
  { value: "Mall Road", label: "Prime Location" },
  { value: "₹1,900+", label: "Starting From" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-forest-deep">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunrise over the Himalayan hills seen from Hotel Solan Regency in Solan"
          className="h-full w-full animate-slow-zoom object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/45 to-forest-deep/92" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-36 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="eyebrow text-gold-soft"
        >
          The Mall Road • Solan • Himachal Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-[2.5rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          A Comfortable Stay in the Heart of Solan.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-ivory/80"
        >
          Stay at Hotel Solan Regency on The Mall Road, with comfortable rooms, scenic Himalayan
          views and convenient access to the city's key attractions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#booking"
            className="bg-gold px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-forest-deep transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book Your Stay
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-ivory/40 px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-ivory hover:text-forest-deep"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href={telHref}
            className="flex items-center gap-2 border border-ivory/40 px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-ivory hover:text-forest-deep"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-ivory/15 bg-ivory/10 sm:grid-cols-4"
        >
          {badges.map((b) => (
            <div key={b.label} className="bg-forest-deep/40 px-5 py-6 backdrop-blur-sm">
              <p className="font-display text-2xl text-gold-soft">{b.value}</p>
              <p className="eyebrow mt-2 text-[0.6rem] text-ivory/65">{b.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-ivory/70"
      >
        <span className="eyebrow text-[0.6rem]">Scroll to discover</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
