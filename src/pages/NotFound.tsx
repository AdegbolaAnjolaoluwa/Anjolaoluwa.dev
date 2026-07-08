import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/FuzzyText";

/**
 * The <canvas> inside FuzzyText can't resolve CSS custom properties, so we
 * read the computed --foreground triplet and hand it a concrete hsl() string,
 * re-reading whenever the theme class on <html> flips.
 */
const readForeground = () => {
  if (typeof window === "undefined") return "#ffffff";
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--foreground")
    .trim();
  return raw ? `hsl(${raw})` : "#ffffff";
};

const NotFoundContent = () => {
  const [foreground, setForeground] = useState(readForeground);

  useEffect(() => {
    const update = () => setForeground(readForeground());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow, matching the rest of the site */}
      <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Fuzzy 404, hover it */}
        <div className="mb-8 flex justify-center">
          <FuzzyText
            fontSize="clamp(5rem, 22vw, 13rem)"
            fontWeight={800}
            color={foreground}
            baseIntensity={0.16}
            hoverIntensity={0.5}
            enableHover
          >
            404
          </FuzzyText>
        </div>

        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
          Page not found
        </p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          This page wandered off.
        </h1>
        <p className="text-muted-foreground max-w-md mb-8">
          The link may be broken, or the page may have moved. Let&apos;s get you
          back to something that exists.
        </p>

        <Button asChild className="rounded-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <NotFoundContent />
    </ThemeProvider>
  );
};

export default NotFound;
