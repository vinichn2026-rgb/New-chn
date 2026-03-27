import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <div>
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us</motion.h1>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">Contact</span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Business Enquiries", desc: "Technology, digital, and infrastructure discussions.", info: "+91 XXXXXXXXXX" },
              { icon: <Mail className="w-6 h-6" />, title: "Consulting & Advisory", desc: "Workforce, payroll & compliance, and training.", info: "info@chntechnologies.com" },
              { icon: <MapPin className="w-6 h-6" />, title: "Office Location", desc: "Visit us for in-person discussions.", info: "Hyderabad, India" },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-7 bg-card border border-border rounded-sm text-center hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <span className="text-sm font-semibold text-primary">{item.info}</span>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Share Your Requirement</h2>
            </div>
            <form className="grid md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-5 py-3.5 bg-muted/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-5 py-3.5 bg-muted/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-5 py-3.5 bg-muted/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="px-5 py-3.5 bg-muted/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="md:col-span-2 px-5 py-3.5 bg-muted/50 border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              <div className="md:col-span-2 text-center">
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all group">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
