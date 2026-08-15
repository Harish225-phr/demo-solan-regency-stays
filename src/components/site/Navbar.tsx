import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { telHref, waLink } from "@/lib/hotel";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="group flex flex-col leading-none">
          <span
            className={`font-display text-lg tracking-[0.18em] transition-colors sm:text-xl ${
              scrolled ? "text-primary" : "text-ivory"
            }`}
          >
            HOTEL SOLAN REGENCY
          </span>
          <span
            className={`eyebrow mt-1 text-[0.55rem] transition-colors ${
              scrolled ? "text-muted-foreground" : "text-gold-soft/80"
            }`}
          >
            The Mall Road · Solan
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[0.78rem] uppercase tracking-[0.14em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-ivory/85 hover:text-ivory"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="border border-gold bg-gold/10 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-forest-deep"
          >
            Book Your Stay
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? "text-primary" : "text-ivory"}`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-deep/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display tracking-[0.18em] text-ivory">HOTEL SOLAN REGENCY</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ivory">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-ivory/10 py-4 font-display text-2xl text-ivory"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 grid grid-cols-3 gap-3 px-6">
              <a
                href={telHref}
                className="flex flex-col items-center gap-2 border border-ivory/20 py-4 text-[0.65rem] uppercase tracking-widest text-ivory"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 border border-ivory/20 py-4 text-[0.65rem] uppercase tracking-widest text-ivory"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="flex flex-col items-center justify-center gap-2 bg-gold py-4 text-[0.65rem] uppercase tracking-widest text-forest-deep"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
