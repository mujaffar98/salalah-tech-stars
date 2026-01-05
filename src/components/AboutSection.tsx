import { CheckCircle, Award, Users, Headphones } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted IT Partner in <span className="text-gold">Salalah, Oman</span>
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
  );
};

export default AboutSection;
