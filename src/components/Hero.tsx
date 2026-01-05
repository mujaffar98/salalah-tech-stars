import { ArrowRight, Shield, Network, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative container-custom py-20">
        <div className="max-w-3xl animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted IT Partner in Salalah, Oman</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Empowering Your Business with{" "}
            <span className="gradient-text">Innovative Technology</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Legend Star International Trading LLC delivers cutting-edge IT solutions 
            including networking, CCTV, cybersecurity, and access control systems. 
            Transform your business with technology that drives success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Network, label: "Network Solutions" },
              { icon: Camera, label: "CCTV Systems" },
              { icon: Shield, label: "Cybersecurity" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-primary-foreground/90"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
