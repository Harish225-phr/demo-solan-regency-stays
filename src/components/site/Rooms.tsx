import { motion } from "framer-motion";
import { Check } from "lucide-react";
import roomDouble from "@/assets/room-double.png";
import roomFamily from "@/assets/room-family.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import roomClassic from "@/assets/room-classic.png";
import { Reveal, SectionHeading } from "./Reveal";
import { telHref, waLink } from "@/lib/hotel";

const features = [
  "Private bathroom",
  "Flat-screen satellite TV",
  "Free Wi-Fi",
  "Tea/Coffee maker",
  "Ironing facilities",
  "Safe",
  "Towels",
  "Complimentary toiletries",
  "Balcony/terrace in selected rooms",
  "Mountain/landmark views in selected rooms",
];

const rooms = [
  {
    name: "Double Room",
    image: roomDouble,
    alt: "Double room with wooden bed and warm decor at Hotel Solan Regency",
    text: "Comfortable accommodation with modern essentials.",
  },
  {
    name: "Family Room",
    image: roomFamily,
    alt: "Spacious family room with wooden headboard at Hotel Solan Regency, Solan",
    text: "Spacious options suitable for families and groups.",
  },
  {
    name: "Double Room · Window View",
    image: roomDeluxe,
    alt: "Double room with decorative wall and window at Hotel Solan Regency",
    text: "Comfortable accommodation with modern essentials.",
  },
  {
    name: "Family Room · Extra Space",
    image: roomClassic,
    alt: "Family room with large bed and seating at Hotel Solan Regency, Mall Road Solan",
    text: "Spacious options suitable for families and groups.",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Accommodation"
          title="Comfort Designed for Your Stay."
          intro="Double and family rooms, each kept clean, warm and ready for a restful night in the hills."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {rooms.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="hover-lift group h-full overflow-hidden bg-card">
                <div className="overflow-hidden">
                  <motion.img
                    src={r.image}
                    alt={r.alt}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 sm:h-80"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-primary">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#gallery"
                      className="border border-border px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      View Room
                    </a>
                    <a
                      href="#booking"
                      className="bg-primary px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Book Now
                    </a>
                    <a
                      href={waLink(
                        `Hello Hotel Solan Regency, I would like to enquire about the ${r.name}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-gold px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-forest-deep"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="border border-border bg-card p-9">
            <h3 className="eyebrow text-gold">In every room</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={telHref}
              className="mt-8 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-primary underline underline-offset-8"
            >
              Call the front desk
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
