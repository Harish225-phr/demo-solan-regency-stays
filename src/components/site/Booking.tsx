import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PHONE_DISPLAY, telHref, waLink } from "@/lib/hotel";

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "Double Room",
    notes: "",
  });

  const message = `Booking Request — Hotel Solan Regency
Name: ${form.name || "-"}
Phone: ${form.phone || "-"}
Check-in: ${form.checkIn || "-"}
Check-out: ${form.checkOut || "-"}
Guests: ${form.guests}
Room type: ${form.roomType}
Notes: ${form.notes || "-"}`;

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const field =
    "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold";
  const label = "eyebrow mb-2 block text-[0.6rem] text-muted-foreground";

  return (
    <section id="booking" className="bg-forest py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Direct Booking"
            title="Reserve Your Room."
            intro="Book directly with us — no commission, no middleman. Send your request and our front desk will confirm availability on WhatsApp within minutes."
            light
          />
          <div className="mt-10 space-y-4">
            <a
              href={telHref}
              className="flex items-center gap-4 border border-ivory/20 px-6 py-5 text-ivory transition-colors hover:bg-ivory/10"
            >
              <Phone className="h-5 w-5 text-gold-soft" />
              <span>
                <span className="eyebrow block text-[0.6rem] text-ivory/60">Call the hotel</span>
                <span className="text-base">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-ivory/20 px-6 py-5 text-ivory transition-colors hover:bg-ivory/10"
            >
              <MessageCircle className="h-5 w-5 text-gold-soft" />
              <span>
                <span className="eyebrow block text-[0.6rem] text-ivory/60">Chat with us</span>
                <span className="text-base">WhatsApp instantly</span>
              </span>
            </a>
          </div>
        </div>

        <Reveal delay={0.1}>
          <form
            className="bg-card p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink(message), "_blank");
            }}
          >
            <h3 className="text-2xl text-primary">Booking Request</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details — we'll open WhatsApp with your request ready to send.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={label} htmlFor="name">Full Name</label>
                <input id="name" required className={field} value={form.name} onChange={set("name")} placeholder="Your name" />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="phone">Phone Number</label>
                <input id="phone" required className={field} value={form.phone} onChange={set("phone")} placeholder="+91" />
              </div>
              <div>
                <label className={label} htmlFor="checkin">Check-in</label>
                <input id="checkin" type="date" required className={field} value={form.checkIn} onChange={set("checkIn")} />
              </div>
              <div>
                <label className={label} htmlFor="checkout">Check-out</label>
                <input id="checkout" type="date" required className={field} value={form.checkOut} onChange={set("checkOut")} />
              </div>
              <div>
                <label className={label} htmlFor="guests">Guests</label>
                <select id="guests" className={field} value={form.guests} onChange={set("guests")}>
                  {["1", "2", "3", "4", "5+"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="room">Room Type</label>
                <select id="room" className={field} value={form.roomType} onChange={set("roomType")}>
                  <option>Double Room</option>
                  <option>Family Room</option>
                  <option>Mountain View Room</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="notes">Special Requests</label>
                <textarea id="notes" rows={3} className={field} value={form.notes} onChange={set("notes")} placeholder="Early check-in, extra bed…" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 bg-gold py-4 text-[0.72rem] uppercase tracking-[0.2em] text-forest-deep transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Send Booking Request
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              No prepayment required · Confirmation by WhatsApp or phone
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
