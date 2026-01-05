import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Legend Star Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-heading font-bold text-lg">Legend Star</h3>
                <p className="text-xs text-primary-foreground/70">International Trading LLC</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Leading IT solutions provider in Salalah, Oman. Empowering businesses 
              with innovative technology solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                "CCTV Systems",
                "Networking",
                "Cybersecurity",
                "Access Control",
                "PA Systems",
                "IP PABX",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+96892166874"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>+968 92166874</p>
                    <p>+968 78086223</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:legendstarsales@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  legendstarsales@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                Salalah, Oman
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} Legend Star International Trading LLC. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            IT Solutions Provider in Salalah, Oman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
