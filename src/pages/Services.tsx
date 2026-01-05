import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
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
        {/* Page Header */}
        <section className="bg-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Comprehensive IT solutions tailored to meet your business needs. 
              From security systems to network infrastructure, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden card-shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-secondary/50 rounded-xl p-5 mb-6">
                      <h4 className="font-heading font-semibold text-foreground mb-3">
                        Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="gold" size="lg" asChild>
                      <a href="#contact">
                        Get a Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our IT consultants can help design a solution tailored specifically 
              for your business requirements. Contact us for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+96892166874">
                  Call Us Now
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="mailto:legendstarsales@gmail.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
