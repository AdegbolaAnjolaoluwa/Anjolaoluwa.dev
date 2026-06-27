import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      icon: MessageCircle,
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
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-lg mx-auto">
            Available for freelance projects, collaborations, and exciting
            opportunities. I typically respond within 24–48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`group p-6 rounded-2xl border border-border/60 bg-card ${c.borderColor} hover:shadow-lg transition-all duration-300 text-left flex flex-col gap-4`}
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${c.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors break-all">
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
