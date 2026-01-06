import { ArrowRight, Shield, Network, Camera, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const features = [
    { icon: Network, label: "Network Solutions", delay: 0.8 },
    { icon: Camera, label: "CCTV Systems", delay: 0.9 },
    { icon: Shield, label: "Cybersecurity", delay: 1.0 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/85" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.1) 0%, transparent 60%)" }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative container-custom py-20 z-10" style={{ opacity }}>
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-gold/10">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Trusted IT Partner in Salalah, Oman</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            Empowering Your Business with{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Innovative Technology
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            Legend Star International Trading LLC delivers cutting-edge IT solutions 
            including networking, CCTV, cybersecurity, and access control systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-5 mb-16"
          >
            <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="xl"
                className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold px-8 py-6 text-lg rounded-xl shadow-xl shadow-gold/30 hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="xl"
                className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-6 text-lg rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <div className="flex flex-wrap gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
