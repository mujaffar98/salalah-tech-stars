import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";

import cctvImg from "@/assets/service-cctv.jpg";
import networkingImg from "@/assets/service-networking.jpg";
import cybersecurityImg from "@/assets/service-cybersecurity.jpg";
import accessControlImg from "@/assets/service-access-control.jpg";
import paSystemImg from "@/assets/service-pa-system.jpg";
import ipPabxImg from "@/assets/service-ip-pabx.jpg";

const services = [
  {
    title: "CCTV Systems",
    description: "Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 recording. Secure your premises with cutting-edge video security technology.",
    image: cctvImg,
    slug: "cctv",
  },
  {
    title: "Networking Solutions",
    description: "Enterprise-grade network infrastructure design, implementation, and maintenance. Reliable connectivity that powers your business operations.",
    image: networkingImg,
    slug: "networking",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive protection against digital threats with firewalls, encryption, and security audits. Keep your data safe from cyber attacks.",
    image: cybersecurityImg,
    slug: "cybersecurity",
  },
  {
    title: "Access Control",
    description: "Biometric systems, card readers, and smart locks for secure facility access. Control who enters your premises with advanced technology.",
    image: accessControlImg,
    slug: "access-control",
  },
  {
    title: "PA Systems",
    description: "Public address and audio distribution systems for clear communication across your facility. Professional sound solutions for any space.",
    image: paSystemImg,
    slug: "pa-systems",
  },
  {
    title: "IP PABX",
    description: "Modern business telephone systems with VoIP integration. Streamline communications with cost-effective IP telephony solutions.",
    image: ipPabxImg,
    slug: "ip-pabx",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our IT Solutions & Services
          </h2>
          <p className="text-muted-foreground">
            We provide comprehensive technology solutions tailored to meet the unique 
            needs of businesses in Salalah and across Oman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} {...service} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
