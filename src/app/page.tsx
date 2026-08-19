import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConfiguratorTeaser from "@/components/ConfiguratorTeaser";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ConfiguratorTeaser />
        <WhyUs />
        <Process />
        <ContactCta />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
