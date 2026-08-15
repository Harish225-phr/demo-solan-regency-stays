import { MapPin, Navigation, Clock } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ADDRESS, MAPS_DIRECTIONS } from "@/lib/hotel";

const nearby = [
  { name: "Mall Road, Solan", detail: "Right at the doorstep" },
  { name: "Solan Bus Stand", detail: "A short drive away" },
  { name: "Solan Railway Station", detail: "Kalka–Shimla toy train" },
  { name: "Shoolini Mata Temple", detail: "Local landmark" },
  { name: "Mohan Shakti Heritage Park", detail: "Day excursion" },
  { name: "Kasauli & Chail", detail: "Popular nearby hill escapes" },
];

export function Location() {
  return (
    <section id="location" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="In the Centre of Everything."
              intro="Set on The Mall in Solan, the hotel puts markets, cafés, temples and transport within easy reach — with the hills always in view."
            />
            <Reveal delay={0.1}>
              <div className="mt-9 flex gap-4 border-l-2 border-gold pl-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <address className="text-sm not-italic leading-relaxed text-foreground/80">
                  {ADDRESS}
                </address>
              </div>
              <div className="mt-6 flex gap-4 border-l-2 border-border pl-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-foreground/80">
                  Check-in from 12:00 · Check-out until 11:00 · 24-hour front desk
                </p>
              </div>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-primary px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>

              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {nearby.map((n) => (
                  <li key={n.name} className="border-b border-border pb-3">
                    <p className="text-sm text-primary">{n.name}</p>
                    <p className="text-xs text-muted-foreground">{n.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="h-[420px] w-full overflow-hidden border border-border lg:h-full lg:min-h-[560px]">
              <iframe
                title="Map showing Hotel Solan Regency on The Mall, Solan"
                src="https://www.google.com/maps?q=Hotel%20Solan%20Regency%20The%20Mall%20Bajoral%20Khurd%20Solan%20Himachal%20Pradesh%20173212&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
