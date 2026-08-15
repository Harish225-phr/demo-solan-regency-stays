import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import sunrise from "@/assets/view-sunrise.png";
import roomFamily from "@/assets/room-family.png";
import exterior from "@/assets/hotel-exterior.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import bathroom from "@/assets/bathroom.png";
import dining from "@/assets/dining.png";
import mountainView from "@/assets/mountain-view.png";
import roomDouble from "@/assets/room-double.png";
import terrace from "@/assets/terrace-night.png";
import roomClassic from "@/assets/room-classic.png";
import { SectionHeading } from "./Reveal";

const images = [
  { src: sunrise, alt: "Sunrise over the Himalayan ranges near Solan", span: "lg:col-span-2 lg:row-span-2" },
  { src: roomFamily, alt: "Family room with wooden headboard at Hotel Solan Regency", span: "" },
  { src: exterior, alt: "Terrace view over the hillside town of Solan", span: "" },
  { src: roomDeluxe, alt: "Double room with decorative wall at Hotel Solan Regency", span: "" },
  { src: bathroom, alt: "Modern bathroom with walk-in shower at Hotel Solan Regency", span: "" },
  { src: dining, alt: "Indian dishes served at Hotel Solan Regency", span: "lg:col-span-2" },
  { src: mountainView, alt: "Panorama of Solan city against the mountains", span: "lg:col-span-2" },
  { src: roomDouble, alt: "Double bedroom with accent wall at Hotel Solan Regency", span: "" },
  { src: terrace, alt: "Rooftop terrace at night overlooking Solan city lights", span: "" },
  { src: roomClassic, alt: "Room with patterned duvet and warm lighting", span: "lg:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the Hotel."
          align="center"
          intro="Real photographs of our rooms, terrace, dining and the views that surround us."
        />
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-forest-deep/0 transition-colors duration-500 group-hover:bg-forest-deep/25" />
            </motion.button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button aria-label="Close" className="absolute right-6 top-6 text-ivory">
            <X className="h-7 w-7" />
          </button>
          <motion.img
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[active]!.src}
            alt={images[active]!.alt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
