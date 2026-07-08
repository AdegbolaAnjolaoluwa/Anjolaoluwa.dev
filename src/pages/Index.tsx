import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PillTopNav } from "@/components/PillTopNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const { hash } = useLocation();

  // When arriving with a hash (e.g. navigating back from a case study to
  // /#projects), scroll to that section once the page has rendered.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        // Defer so layout is settled before scrolling.
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth" })
        );
      }
    }
  }, [hash]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <PillTopNav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
