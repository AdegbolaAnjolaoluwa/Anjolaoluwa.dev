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
    <footer className="border-t border-border bg-muted/30">
      <div className="container-custom px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Adegbola Anjolaloluwa Samuel. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="tel:07073315998"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#1EA955] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="mailto:Anjeesax@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            Looking forward to Working with you!
          </p>
        </div>
      </div>
    </footer>
  );
};
