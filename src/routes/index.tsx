import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Views } from "@/components/site/Views";
import { Rooms } from "@/components/site/Rooms";
import { Facilities } from "@/components/site/Facilities";
import { Dining } from "@/components/site/Dining";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Views />
        <Rooms />
        <Facilities />
        <Dining />
        <Gallery />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
