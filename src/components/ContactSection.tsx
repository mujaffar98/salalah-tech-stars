import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+968 92166874", "+968 78086223"],
    href: "tel:+96892166874",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["legendstarsales@gmail.com"],
    href: "mailto:legendstarsales@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Salalah, Oman"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Sat - Thu: 8:00 AM - 6:00 PM"],
  },
];

const ContactSection = () => {
  return (
    <section className="section-padding bg-primary" id="contact">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Contact us today for a free consultation. Our team of experts is ready 
              to help you find the perfect IT solutions for your business needs.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                  </div>
                  {item.lines.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="text-primary-foreground/80 text-sm"
                    >
                      {item.href ? (
                        <a href={item.href} className="hover:text-gold transition-colors">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="+968 XXXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all">
                  <option value="">Select a service</option>
                  <option value="cctv">CCTV Systems</option>
                  <option value="networking">Networking Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="access-control">Access Control</option>
                  <option value="pa-systems">PA Systems</option>
                  <option value="ip-pabx">IP PABX</option>
                  <option value="gate-barriers">Gate Barriers</option>
                  <option value="gate-motors">Gate Motors</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
