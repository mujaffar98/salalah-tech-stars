import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+968 92166874", "+968 78086223"], link: "tel:+96892166874" },
  { icon: Mail, title: "Email", details: ["legendstarsales@gmail.com"], link: "mailto:legendstarsales@gmail.com" },
  { icon: MapPin, title: "Location", details: ["Salalah, Oman"], link: "#" },
  { icon: Clock, title: "Working Hours", details: ["Sat - Thu: 8:00 AM - 6:00 PM"], link: "#" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/5 to-background" />
      
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.05) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full mb-6"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Let's Start a <span className="text-gold">Conversation</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-start gap-5 bg-card p-6 rounded-2xl transition-all"
                style={{ boxShadow: "0 8px 30px -10px hsl(var(--navy) / 0.1)" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1 group-hover:text-gold transition-colors">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
                <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 ml-auto self-center transition-opacity" />
              </motion.a>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy to-navy-dark p-8 rounded-2xl text-center"
              style={{ boxShadow: "0 15px 40px -10px hsl(var(--navy) / 0.4)" }}
            >
              <h4 className="font-heading text-xl font-bold text-white mb-3">Need Immediate Assistance?</h4>
              <p className="text-white/70 text-sm mb-6">Call us directly for urgent inquiries</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold w-full py-6 rounded-xl" asChild>
                  <a href="tel:+96892166874"><Phone className="w-5 h-5 mr-2" />Call Now</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-3"
          >
            <div 
              className="bg-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
              style={{ boxShadow: "0 20px 60px -20px hsl(var(--navy) / 0.15)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <Input type="text" placeholder="John Doe" className="h-14 rounded-xl" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+968 XXXXXXXX" className="h-14 rounded-xl" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-14 rounded-xl" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                  <select 
                    className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="cctv">CCTV Systems</option>
                    <option value="networking">Networking Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="access-control">Access Control</option>
                    <option value="pa-systems">PA Systems</option>
                    <option value="ip-pabx">IP PABX</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={5} className="rounded-xl resize-none" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                </div>
                <motion.div whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }}>
                  <Button type="submit" className="w-full bg-gradient-to-r from-gold to-gold-light text-navy-dark font-bold h-14 text-lg rounded-xl shadow-xl shadow-gold/20">
                    Send Message<Send className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
