import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import PillNav, { type PillNavItem } from "./PillNav";

/**
 * Site navigation built on PillNav, wired to preserve the behaviour of the
 * previous navbar: in-page smooth scroll, active-section highlight, theme
 * toggle, and WhatsApp contact.
 */

const navItems: PillNavItem[] = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "About", href: "#about", ariaLabel: "About" },
  { label: "Projects", href: "#projects", ariaLabel: "Projects" },
  { label: "Skills", href: "#skills", ariaLabel: "Skills" },
  { label: "Experience", href: "#experience", ariaLabel: "Experience" },
  { label: "Contact", href: "#contact", ariaLabel: "Contact" },
];

export const PillTopNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const whatsappNumber = (import.meta as unknown as { env?: Record<string, string> }).env
    ?.VITE_WHATSAPP_NUMBER as string | undefined;
  const cleanNumber = whatsappNumber?.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent(
    "Hello Anjolaoluwa, I'd like to get in touch from your portfolio."
  );
  const whatsappHref = cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${whatsappText}`
    : `https://wa.me/?text=${whatsappText}`;

  // Highlight the pill for whichever section is currently in view.
  useEffect(() => {
    const handleScroll = () => {
      const current = navItems
        .map((item) => item.href.substring(1))
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item: PillNavItem) => {
    const el = document.querySelector(item.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PillNav
      items={navItems}
      activeHref={`#${activeSection}`}
      onItemClick={handleItemClick}
      logo={<span className="text-gradient font-bold">Anjolaoluwa</span>}
      actions={
        <>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-icon-btn"
            aria-label="WhatsApp"
            style={{ color: "#25D366" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </>
      }
    />
  );
};
