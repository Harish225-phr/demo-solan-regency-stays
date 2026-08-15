import {
  Wifi,
  Car,
  Clock,
  Sparkles,
  Snowflake,
  ShowerHead,
  Tv,
  Coffee,
  Shirt,
  Luggage,
  Sun,
  ShieldCheck,
} from "lucide-react";
import bathroom from "@/assets/bathroom.png";
import { Reveal, SectionHeading } from "./Reveal";

const facilities = [
  { icon: Wifi, t: "Free Wi-Fi", d: "High-speed internet throughout the hotel." },
  { icon: Car, t: "Free Parking", d: "Private on-site parking for guests." },
  { icon: Clock, t: "24-Hour Front Desk", d: "Assistance whenever you need it." },
  { icon: Sparkles, t: "Daily Housekeeping", d: "Rooms refreshed every day." },
  { icon: Snowflake, t: "Air Conditioning", d: "Climate control in the rooms." },
  { icon: ShowerHead, t: "Private Bathrooms", d: "Hot water and complimentary toiletries." },
  { icon: Tv, t: "Flat-Screen TV", d: "Satellite channels in every room." },
  { icon: Coffee, t: "Tea / Coffee Maker", d: "In-room refreshments." },
  { icon: Shirt, t: "Ironing Facilities", d: "Iron and board on request." },
  { icon: Luggage, t: "Luggage Storage", d: "Store your bags before check-in." },
  { icon: Sun, t: "Terrace", d: "Open rooftop with hillside views." },
  { icon: ShieldCheck, t: "In-Room Safe", d: "Keep valuables secure." },
];

export function Facilities() {
  return (
    <section id="facilities" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={bathroom}
              alt="Modern tiled bathroom with walk-in shower at Hotel Solan Regency"
              loading="lazy"
              className="h-[420px] w-full object-cover lg:h-[600px]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Facilities & Services"
              title="Everything You Need, Thoughtfully Provided."
              intro="From free parking to a 24-hour front desk, the essentials are taken care of so your time in Solan stays effortless."
            />
            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {facilities.map((f, i) => (
                <Reveal key={f.t} delay={i * 0.04}>
                  <div className="flex gap-4">
                    <f.icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-primary">{f.t}</p>
                      <p className="mt-1 text-[0.82rem] text-muted-foreground">{f.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
