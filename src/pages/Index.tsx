import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { History } from "@/components/site/History";
import { Numbers } from "@/components/site/Numbers";
import { Experience } from "@/components/site/Experience";
import { Kids } from "@/components/site/Kids";
import { Competitions } from "@/components/site/Competitions";
import { Gallery } from "@/components/site/Gallery";
import { Sponsorship } from "@/components/site/Sponsorship";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <History />
        <Numbers />
        <Experience />
        <Kids />
        <Competitions />
        <Gallery />
        <Sponsorship />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
