import { Mail, MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_WHATSAPP_NUMBER as
    | string
    | undefined;
  const cleanNumber = whatsappNumber?.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent("Hello Anjolaoluwa, I'd like to get in touch from your portfolio.");
  const whatsappHref = cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${whatsappText}`
    : `https://wa.me/?text=${whatsappText}`;

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container-custom px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-lg font-bold text-gradient">Anjolaoluwa</span>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Adegbola Anjolaloluwa Samuel. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:07073315998"
              className="w-8 h-8 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Phone"
            >
              <Phone className="h-3.5 w-3.5" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary/60 flex items-center justify-center text-[#25D366] hover:bg-green-500/10 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:Anjeesax@gmail.com"
              className="w-8 h-8 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/50">
            Looking forward to working with you!
          </p>
        </div>
      </div>
    </footer>
  );
};
