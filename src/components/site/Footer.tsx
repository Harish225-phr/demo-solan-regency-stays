import { Phone, MessageCircle, MapPin } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, telHref, waLink } from "@/lib/hotel";

const links = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-forest-deep pt-20 pb-10 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.14em]">HOTEL SOLAN REGENCY</p>
          <span className="mt-4 block h-px w-14 bg-gold" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
            A centrally located 3-star stay on The Mall Road, Solan — comfortable rooms, mountain
            views and warm Himachali hospitality.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold-soft">Explore</p>
          <ul className="mt-6 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ivory/75 transition-colors hover:text-gold-soft">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-soft">Contact</p>
          <div className="mt-6 space-y-4 text-sm text-ivory/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{ADDRESS}</span>
            </p>
            <a href={telHref} className="flex gap-3 hover:text-gold-soft">
              <Phone className="h-4 w-4 shrink-0 text-gold" /> {PHONE_DISPLAY}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-gold-soft">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-ivory/10 px-5 pt-6 text-center text-xs text-ivory/50 lg:px-10">
        © {new Date().getFullYear()} Hotel Solan Regency, Solan, Himachal Pradesh. All rights reserved.
      </div>
    </footer>
  );
}
