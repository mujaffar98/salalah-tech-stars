import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
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

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
                Contact Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get In <span className="text-gold">Touch</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Contact Info */}
              <div>
                <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Reach Out
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Contact us today for a free consultation. Our team of experts is ready 
                  to help you find the perfect IT solutions for your business needs.
                </p>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="bg-secondary/50 rounded-xl p-5 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="font-heading font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      {item.lines.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-muted-foreground text-sm"
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

                {/* WhatsApp CTA */}
                <div className="mt-8 p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-foreground">Chat on WhatsApp</h4>
                      <p className="text-muted-foreground text-sm">Quick response guaranteed</p>
                    </div>
                    <a
                      href="https://wa.me/96892166874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-card rounded-2xl p-8 card-shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Send className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h3>
                </div>
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

        {/* Map Section */}
        <section className="h-80 bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.41338565056!2d54.0215542!3d17.0151151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd9423e99b5ebef%3A0xea8c6d4fe6ce1052!2sSalalah%2C%20Oman!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Legend Star Location"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
