import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Mission } from "@/components/sections/mission";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Impressions } from "@/components/sections/impressions";
import { Locations } from "@/components/sections/locations";
import { Manifest } from "@/components/sections/manifest";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Mission />
        <Services />
        <Process />
        <Impressions />
        <Locations />
        <Manifest />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
