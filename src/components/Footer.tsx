import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    services: ["CCTV Systems", "Networking", "Cybersecurity", "Access Control", "PA Systems", "IP PABX"],
  };

  return (
    <footer className="relative bg-gradient-to-b from-navy-dark to-navy text-primary-foreground overflow-hidden">
      {/* Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
      />

      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.1) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.img src={logo} alt="Legend Star Logo" className="h-14 w-auto brightness-0 invert" whileHover={{ rotate: [0, -5, 5, 0] }} />
              <div>
                <h3 className="font-heading font-bold text-lg group-hover:text-gold transition-colors">Legend Star</h3>
                <p className="text-xs text-primary-foreground/60">International Trading LLC</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8">Leading IT solutions provider in Salalah, Oman.</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold text-primary-foreground hover:text-navy-dark transition-all" whileHover={{ y: -3, scale: 1.05 }}>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="group flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold group-hover:scale-125 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="group flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold group-hover:scale-125 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-transparent rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+96892166874" className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><Phone className="w-4 h-4" /></div>
                  <div className="text-sm"><p>+968 92166874</p><p>+968 78086223</p></div>
                </a>
              </li>
              <li>
                <a href="mailto:legendstarsales@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><Mail className="w-4 h-4" /></div>
                  <span className="text-sm">legendstarsales@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                <span className="text-sm">Salalah, Oman</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">© {currentYear} Legend Star International Trading LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-primary-foreground/50 text-sm">IT Solutions Provider in Salalah, Oman</span>
            <motion.button onClick={scrollToTop} className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all" whileHover={{ y: -3 }}>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
