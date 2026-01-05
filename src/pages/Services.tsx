import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Sparkles, Shield, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import cctvImg from "@/assets/service-cctv.jpg";
import networkingImg from "@/assets/service-networking.jpg";
import cybersecurityImg from "@/assets/service-cybersecurity.jpg";
import accessControlImg from "@/assets/service-access-control.jpg";
import paSystemImg from "@/assets/service-pa-system.jpg";
import ipPabxImg from "@/assets/service-ip-pabx.jpg";
import gateBarrierImg from "@/assets/service-gate-barrier.jpg";
import gateMotorImg from "@/assets/service-gate-motor.jpg";

const services = [
  {
    id: "cctv",
    title: "CCTV Systems",
    subtitle: "Advanced Video Surveillance Solutions",
    icon: Shield,
    image: cctvImg,
    description: "Protect your property with our state-of-the-art CCTV surveillance systems. We offer comprehensive video security solutions that provide round-the-clock monitoring and recording capabilities for homes, offices, and commercial establishments.",
    features: [
      "High-definition IP cameras with night vision",
      "Remote viewing via mobile app and web browser",
      "24/7 continuous recording with cloud backup",
      "Motion detection and instant alerts",
      "Professional installation and setup",
      "PTZ cameras for wide-area coverage",
      "Integration with access control systems",
      "Maintenance and support services",
    ],
    benefits: [
      "Deter criminal activity and theft",
      "Monitor your premises from anywhere",
      "Gather evidence for investigations",
      "Improve employee productivity",
      "Peace of mind for business owners",
    ],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    subtitle: "Enterprise-Grade Network Infrastructure",
    icon: Zap,
    image: networkingImg,
    description: "Build a robust and reliable network infrastructure that powers your business operations. Our networking experts design, implement, and maintain enterprise-grade solutions that ensure seamless connectivity and optimal performance.",
    features: [
      "Structured cabling and network design",
      "Router and switch configuration",
      "Wireless network deployment (Wi-Fi 6)",
      "Network security implementation",
      "VPN setup for secure remote access",
      "Network monitoring and management",
      "Fiber optic installation",
      "Network troubleshooting and optimization",
    ],
    benefits: [
      "Fast and reliable connectivity",
      "Scalable infrastructure for growth",
      "Enhanced data security",
      "Reduced downtime and maintenance costs",
      "Support for modern business applications",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Comprehensive Digital Protection",
    icon: Shield,
    image: cybersecurityImg,
    description: "Safeguard your digital assets with our comprehensive cybersecurity solutions. We protect your business from evolving cyber threats with multi-layered security measures, ensuring your data remains secure and your operations uninterrupted.",
    features: [
      "Enterprise firewall implementation",
      "Antivirus and anti-malware protection",
      "Email security and spam filtering",
      "Security audits and vulnerability assessment",
      "Data encryption solutions",
      "Employee security awareness training",
      "Incident response planning",
      "Compliance and regulatory support",
    ],
    benefits: [
      "Protection against cyber attacks",
      "Secure sensitive business data",
      "Maintain customer trust",
      "Regulatory compliance",
      "Business continuity assurance",
    ],
  },
  {
    id: "access-control",
    title: "Access Control",
    subtitle: "Smart Entry Management Systems",
    icon: Shield,
    image: accessControlImg,
    description: "Control who enters your premises with our advanced access control systems. From biometric scanners to smart card readers, we provide secure and convenient solutions for managing facility access and tracking employee movement.",
    features: [
      "Biometric fingerprint and face recognition",
      "RFID card and key fob systems",
      "Mobile access credentials",
      "Time and attendance tracking",
      "Visitor management systems",
      "Integration with CCTV and alarms",
      "Multi-door controller systems",
      "Cloud-based access management",
    ],
    benefits: [
      "Enhanced physical security",
      "Eliminate unauthorized access",
      "Track employee attendance",
      "Detailed access logs and reports",
      "Flexible access scheduling",
    ],
  },
  {
    id: "pa-systems",
    title: "PA Systems",
    subtitle: "Public Address & Audio Solutions",
    icon: Sparkles,
    image: paSystemImg,
    description: "Ensure clear communication across your facility with our professional public address systems. Whether it's for announcements, background music, or emergency alerts, we design audio solutions that meet your specific needs.",
    features: [
      "Commercial-grade speakers and amplifiers",
      "Zone-based audio distribution",
      "Emergency announcement systems",
      "Background music integration",
      "Microphone and mixing equipment",
      "Paging and intercom systems",
      "Conference room audio solutions",
      "Outdoor PA system installation",
    ],
    benefits: [
      "Clear facility-wide communication",
      "Emergency alert capabilities",
      "Enhanced customer experience",
      "Flexible zoning options",
      "Professional audio quality",
    ],
  },
  {
    id: "ip-pabx",
    title: "IP PABX",
    subtitle: "Modern Business Telephony",
    icon: Zap,
    image: ipPabxImg,
    description: "Modernize your business communications with our IP PABX telephone systems. Leverage VoIP technology for cost-effective calling, advanced features, and seamless integration with your existing IT infrastructure.",
    features: [
      "VoIP-based telephone systems",
      "Auto-attendant and call routing",
      "Voicemail to email functionality",
      "Conference calling capabilities",
      "Call recording and analytics",
      "Mobile softphone integration",
      "CRM system integration",
      "Unified communications solutions",
    ],
    benefits: [
      "Reduced communication costs",
      "Advanced call management features",
      "Scalable for business growth",
      "Remote work support",
      "Professional customer experience",
    ],
  },
  {
    id: "gate-barriers",
    title: "Gate Barriers",
    subtitle: "Vehicle Access Control Systems",
    icon: Shield,
    image: gateBarrierImg,
    description: "Manage vehicle access efficiently with our automated gate barrier systems. Perfect for parking facilities, commercial properties, and residential communities, our barriers provide secure and convenient traffic control.",
    features: [
      "Automatic boom barriers",
      "High-speed gate operation",
      "Integration with access control",
      "License plate recognition (LPR)",
      "Ticket dispensers and payment systems",
      "Traffic lights and signage",
      "Remote management capabilities",
      "Anti-tailgating features",
    ],
    benefits: [
      "Control vehicle access",
      "Manage parking efficiently",
      "Enhanced property security",
      "Reduce unauthorized parking",
      "Revenue collection for parking",
    ],
  },
  {
    id: "gate-motors",
    title: "Gate Motors",
    subtitle: "Automated Gate Solutions",
    icon: Zap,
    image: gateMotorImg,
    description: "Automate your gates for convenience and security with our gate motor solutions. We install and maintain sliding and swing gate motors for residential and commercial properties, complete with remote and smart access options.",
    features: [
      "Sliding gate motor installation",
      "Swing gate automation",
      "Remote control operation",
      "Smartphone app integration",
      "Solar-powered options",
      "Battery backup systems",
      "Safety sensors and features",
      "Intercom integration",
    ],
    benefits: [
      "Convenient remote operation",
      "Enhanced property security",
      "Increased property value",
      "Weather protection for vehicles",
      "Customizable access options",
    ],
  },
];

const Services = () => {
  const location = useLocation();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header - Enhanced */}
        <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container-custom relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium IT Solutions</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive IT solutions tailored to meet your business needs. 
              From security systems to network infrastructure, we deliver excellence.
            </p>

            {/* Service Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {services.slice(0, 4).map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {service.title}
                </a>
              ))}
              <span className="px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium">
                +{services.length - 4} more
              </span>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Services List - Enhanced */}
        <section className="section-padding bg-background relative">
          {/* Background decoration */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32 transition-all duration-700 ${
                    visibleSections.has(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Image - Enhanced */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative group">
                      {/* Service Number Badge */}
                      <div className="number-badge text-primary-foreground shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Main Image Card */}
                      <div className="service-card-premium rounded-3xl overflow-hidden card-shadow-lg">
                        <div className="relative h-80 lg:h-[450px] overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover image-zoom"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-60" />
                          
                          {/* Floating Icon */}
                          <div className="absolute bottom-6 left-6 animate-float">
                            <div className="w-16 h-16 rounded-2xl bg-gold/90 backdrop-blur flex items-center justify-center shadow-lg">
                              <service.icon className="w-8 h-8 text-primary" />
                            </div>
                          </div>

                          {/* Title Overlay */}
                          <div className="absolute bottom-6 right-6 text-right">
                            <p className="text-gold text-sm font-semibold mb-1">{service.subtitle}</p>
                            <h3 className="text-primary-foreground text-2xl font-bold">{service.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-3xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
                    </div>
                  </div>

                  {/* Content - Enhanced */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                      <Star className="w-4 h-4 fill-gold" />
                      {service.subtitle}
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features - Enhanced as Pills */}
                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-8 h-1 bg-gold rounded-full" />
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3 stagger-animation">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="feature-pill">
                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits - Enhanced Card */}
                    <div className="benefits-card mb-8">
                      <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-gold" />
                        Why Choose This Solution
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-center gap-3 group">
                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                              <div className="w-2 h-2 rounded-full bg-gold group-hover:bg-primary transition-colors" />
                            </div>
                            <span className="text-foreground group-hover:text-gold transition-colors">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="gold" size="lg" className="group gold-glow" asChild>
                      <a href="#contact">
                        Get a Free Quote
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "150+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold font-heading text-gold mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="relative bg-primary py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Free Consultation</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Need a <span className="text-gold">Custom Solution?</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 leading-relaxed">
                Our IT consultants can help design a solution tailored specifically 
                for your business requirements. Contact us for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl" className="group shadow-xl" asChild>
                  <a href="tel:+96892166874">
                    <span className="relative z-10">Call Us Now</span>
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="group" asChild>
                  <a href="mailto:legendstarsales@gmail.com">
                    Email Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
