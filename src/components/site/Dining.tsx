import dining from "@/assets/dining.png";
import { Reveal, SectionHeading } from "./Reveal";
import { waLink } from "@/lib/hotel";

const points = [
  "Freshly prepared Indian dishes",
  "In-room dining available",
  "Vegetarian options",
  "Local Himachali flavours on request",
];

export function Dining() {
  return (
    <section id="dining" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Dining"
            title="Warm Meals, Made Fresh."
            intro="Enjoy home-style Indian meals served hot — from hearty curries and fresh naan to simple comfort food after a day exploring Solan."
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="border-b border-border pb-3 text-sm text-foreground/80">
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={waLink("Hello Hotel Solan Regency, I would like to know more about your dining options.")}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block border border-primary px-7 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ask About Dining
            </a>
          </Reveal>
        </div>
        <Reveal className="order-1 lg:order-2">
          <img
            src={dining}
            alt="Indian meal with curry and naan served at Hotel Solan Regency"
            loading="lazy"
            className="h-[380px] w-full object-cover lg:h-[540px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
