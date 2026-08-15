import { Check, Star, MapPin, Mountain, BedDouble, Wifi, Car } from "lucide-react";
import { motion } from "framer-motion";
import exterior from "@/assets/hotel-exterior.png";
import terrace from "@/assets/terrace-night.png";
import { Reveal, SectionHeading } from "./Reveal";
import { waLink } from "@/lib/hotel";

const highlights = [
  "Comfortable rooms",
  "Mountain-view balconies",
  "Free Wi-Fi",
  "Free parking",
  "24-hour front desk",
  "Daily housekeeping",
  "Family-friendly rooms",
  "Convenient Mall Road location",
];

const cards = [
  { icon: Star, title: "4.9 / 5", text: "Highly rated by guests." },
  { icon: MapPin, title: "The Mall Road", text: "Centrally located in Solan." },
  { icon: Mountain, title: "Mountain Views", text: "Scenic views from selected balconies and terraces." },
  { icon: BedDouble, title: "Comfortable Rooms", text: "Family and double room options." },
  { icon: Wifi, title: "Free Wi-Fi", text: "High-speed connectivity." },
  { icon: Car, title: "Free Parking", text: "On-site guest parking." },
];

export function Intro() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal className="relative">
          <div className="overflow-hidden">
            <motion.img
              src={exterior}
              alt="Hotel Solan Regency terrace overlooking the hills of Solan"
              loading="lazy"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-[420px] w-full object-cover lg:h-[560px]"
            />
          </div>
          <img
            src={terrace}
            alt="Rooftop terrace seating at Hotel Solan Regency at dusk"
            loading="lazy"
            className="absolute -bottom-10 -right-4 hidden h-48 w-64 border-8 border-background object-cover shadow-2xl lg:block"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Welcome"
            title="Your Comfortable Base in Solan."
            intro="Hotel Solan Regency is a centrally located 3-star budget stay on The Mall in Solan, offering comfortable accommodation, convenient city access and beautiful mountain and landmark views."
          />
          <Reveal delay={0.1}>
            <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block border border-primary px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Discover the Hotel
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-5 lg:px-10">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group h-full bg-card p-9 transition-colors duration-500 hover:bg-secondary">
                <c.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-6 text-xl text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
