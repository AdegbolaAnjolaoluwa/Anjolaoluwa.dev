import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { reveal, revealGroup, revealViewport } from "@/lib/motion";

export const Contact = () => {

  const whatsappNumber = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_WHATSAPP_NUMBER as
    | string
    | undefined;
  const cleanNumber = whatsappNumber?.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent("Hello Anjolaoluwa, I'd like to get in touch from your portfolio.");
  const whatsappHref = cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${whatsappText}`
    : `https://wa.me/?text=${whatsappText}`;

  const contacts = [
    {
      icon: Phone,
      label: "Call Me",
      value: "07073315998",
      href: "tel:07073315998",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "hover:border-blue-500/30",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Chat Now",
      href: whatsappHref,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "hover:border-green-500/30",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "Anjeesax@gmail.com",
      href: "mailto:Anjeesax@gmail.com",
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "hover:border-violet-500/30",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="text-center"
        >
          <motion.p variants={reveal} className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4">
            <span className="text-primary/50">05</span> &nbsp;/&nbsp; Contact
          </motion.p>
          <motion.h2 variants={reveal} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together.</span>
          </motion.h2>
          <motion.p variants={reveal} className="text-muted-foreground text-lg mb-16 max-w-lg mx-auto">
            Available for freelance projects, collaborations, and exciting
            opportunities. I typically respond within 24-48 hours.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-b from-background to-background/60 p-8 text-left flex flex-col gap-5 transition-colors duration-300 ${c.borderColor} hover:shadow-xl`}
                >
                  {/* Glow on hover */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${c.bgColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`relative w-16 h-16 rounded-2xl ${c.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${c.iconColor}`} />
                  </div>

                  <div className="relative">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      {c.label}
                    </p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
