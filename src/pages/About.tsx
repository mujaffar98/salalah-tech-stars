import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Headphones, Target, Shield, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Our certified professionals bring years of experience in IT solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We tailor solutions to match your specific business requirements.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support to keep your systems running.",
  },
];

const highlights = [
  "Trusted partner for businesses in Salalah",
  "Certified installation professionals",
  "Latest technology implementations",
  "Competitive pricing solutions",
  "Fast response time & support",
  "Quality products & equipment",
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower organizations through technology, providing reliable solutions that meet the unique challenges of modern business.",
  },
  {
    icon: Shield,
    title: "Our Vision",
    description: "To be the most trusted IT solutions provider in Oman, known for innovation, quality, and exceptional customer service.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously adopt cutting-edge technologies to deliver state-of-the-art solutions for our clients.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We follow international best practices and standards in all our installations and services.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Your Trusted IT Partner in{" "}
                <span className="text-gold">Salalah, Oman</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Legend Star International Trading LLC is a leading IT solutions provider 
                specializing in innovative technology services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gold">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Who We Are
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Leading IT Solutions Provider in Oman
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Legend Star International Trading LLC is a leading IT solutions provider 
                  specializing in innovative technology services. With our headquarters in 
                  Salalah, we serve businesses across Oman with cutting-edge solutions that 
                  drive efficiency, security, and growth.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our mission is to empower organizations through technology, providing 
                  reliable solutions that meet the unique challenges of modern business. 
                  From comprehensive CCTV systems to enterprise networking, we deliver 
                  excellence in every project.
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Feature Cards */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl card-shadow flex items-start gap-5 hover:card-shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Our Values
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Forward
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl card-shadow text-center hover:card-shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
