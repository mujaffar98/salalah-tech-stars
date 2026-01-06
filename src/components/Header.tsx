import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -40, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="bg-gradient-to-r from-navy-dark to-navy text-primary-foreground py-2.5 hidden md:block relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <div className="container-custom flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-8">
            <motion.a href="tel:+96892166874" className="flex items-center gap-2 hover:text-gold transition-colors group" whileHover={{ x: 3 }}>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><Phone className="w-3.5 h-3.5" /></div>
              +968 92166874
            </motion.a>
            <motion.a href="mailto:legendstarsales@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors group" whileHover={{ x: 3 }}>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors"><Mail className="w-3.5 h-3.5" /></div>
              legendstarsales@gmail.com
            </motion.a>
          </div>
          <p className="text-primary-foreground/70 font-medium">Leading IT Solutions Provider in Salalah</p>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-card"}`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }} transition={{ duration: 0.4 }}>
                <img src={logo} alt="Legend Star Logo" className="h-14 w-auto" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-lg text-primary leading-tight group-hover:text-gold transition-colors">Legend Star</h1>
                <p className="text-xs text-muted-foreground">International Trading LLC</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
                  <Link to={link.href} className={`relative font-heading font-medium px-5 py-2.5 rounded-xl transition-all ${isActive(link.href) ? "text-gold" : "text-foreground hover:text-gold hover:bg-gold/5"}`}>
                    {link.label}
                    {isActive(link.href) && <motion.span layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold px-6 rounded-xl shadow-lg shadow-gold/20" asChild>
                  <a href="tel:+96892166874"><Phone className="w-4 h-4 mr-2" />Get a Quote</a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-6 h-6" /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu className="w-6 h-6" /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * index }}>
                    <Link to={link.href} className={`flex items-center justify-between font-heading font-medium py-4 px-5 rounded-xl ${isActive(link.href) ? "bg-gradient-to-r from-gold/10 to-transparent text-gold" : "text-foreground hover:bg-secondary"}`}>
                      {link.label}<ChevronRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-4 mt-2 border-t border-border">
                  <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold py-6 rounded-xl" asChild>
                    <a href="tel:+96892166874"><Phone className="w-4 h-4 mr-2" />Get a Quote</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
