import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import cctvImg from "@/assets/service-cctv.jpg";
import networkingImg from "@/assets/service-networking.jpg";
import cybersecurityImg from "@/assets/service-cybersecurity.jpg";
import accessControlImg from "@/assets/service-access-control.jpg";
import paSystemImg from "@/assets/service-pa-system.jpg";
import ipPabxImg from "@/assets/service-ip-pabx.jpg";

const services = [
  { title: "CCTV Systems", description: "Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 recording. Secure your premises with cutting-edge video security technology.", image: cctvImg, slug: "cctv" },
  { title: "Networking Solutions", description: "Enterprise-grade network infrastructure design, implementation, and maintenance. Reliable connectivity that powers your business operations.", image: networkingImg, slug: "networking" },
  { title: "Cybersecurity", description: "Comprehensive protection against digital threats with firewalls, encryption, and security audits. Keep your data safe from cyber attacks.", image: cybersecurityImg, slug: "cybersecurity" },
  { title: "Access Control", description: "Biometric systems, card readers, and smart locks for secure facility access. Control who enters your premises with advanced technology.", image: accessControlImg, slug: "access-control" },
  { title: "PA Systems", description: "Public address and audio distribution systems for clear communication across your facility. Professional sound solutions for any space.", image: paSystemImg, slug: "pa-systems" },
  { title: "IP PABX", description: "Modern business telephone systems with VoIP integration. Streamline communications with cost-effective IP telephony solutions.", image: ipPabxImg, slug: "ip-pabx" },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">What We Offer</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Our IT Solutions <span className="text-gold">& Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We provide comprehensive technology solutions tailored to meet the unique needs of businesses in Salalah and across Oman.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} {...service} index={index} />
          ))}
        </div>

        {/* Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-navy to-navy-dark text-white font-bold px-10 py-6 text-lg rounded-xl shadow-xl shadow-navy/20 hover:shadow-2xl transition-all"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
