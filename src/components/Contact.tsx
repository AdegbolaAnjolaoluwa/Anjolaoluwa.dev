import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappNumber = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_WHATSAPP_NUMBER as
    | string
    | undefined;
  const cleanNumber = whatsappNumber?.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent("Hello Anjolaoluwa, I'd like to get in touch from your portfolio.");
  const whatsappHref = cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${whatsappText}`
    : `https://wa.me/?text=${whatsappText}`;


  const socialLinks = [
    {
      name: "Call 07073315998",
      icon: Phone,
      url: "tel:07073315998",
      color: "hover:text-primary",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: whatsappHref,
      color: "text-[#25D366] hover:text-[#1EA955]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:Anjeesax@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>

                  <div className="space-y-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 text-foreground/80 transition-colors ${link.color}`}
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium">{link.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Response Time:
                    </span>{" "}
                    I typically respond within 24-48 hours on weekdays.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
