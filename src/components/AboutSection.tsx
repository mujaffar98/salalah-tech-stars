import { CheckCircle, Award, Users, Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Award, title: "Expert Team", description: "Certified professionals with years of experience." },
  { icon: Users, title: "Customer Focus", description: "Solutions tailored to your business requirements." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock technical support." },
];

const highlights = [
  "Trusted partner for businesses in Salalah",
  "Certified installation professionals",
  "Latest technology implementations",
  "Competitive pricing solutions",
  "Fast response time & support",
  "Quality products & equipment",
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase">About Us</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Your Trusted IT Partner in <span className="text-gold">Salalah, Oman</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-10 leading-relaxed text-lg"
            >
              Legend Star International Trading LLC is a leading IT solutions provider specializing in innovative technology services.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium group-hover:text-gold transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold px-8 py-6 rounded-xl shadow-lg shadow-gold/20" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index }}
                whileHover={{ x: 10 }}
                className="group bg-card p-8 rounded-2xl flex items-start gap-6 border border-transparent hover:border-gold/20 transition-all"
                style={{ boxShadow: "0 10px 40px -15px hsl(var(--navy) / 0.15)" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-navy to-navy-dark p-6 rounded-2xl text-center cursor-default"
                  style={{ boxShadow: "0 10px 30px -10px hsl(var(--navy) / 0.4)" }}
                >
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
