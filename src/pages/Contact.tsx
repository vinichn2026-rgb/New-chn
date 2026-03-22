import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const engagements = [
  "Strengthen technology or digital operations",
  "Improve workforce, payroll, or compliance processes",
  "Explore consulting or advisory support",
  "Discuss project requirements or long-term partnerships",
  "Enquire about career or collaboration opportunities",
];

const contactMethods = [
  { title: "Business Enquiries", desc: "Technology, digital, and infrastructure discussions.", email: "business@chntechnologies.com" },
  { title: "Consulting & Advisory", desc: "Workforce management, payroll & compliance, and training.", email: "consulting@chntechnologies.com" },
  { title: "Careers", desc: "Job applications, internships, and collaboration enquiries.", email: "careers@chntechnologies.com" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your enquiry. We will get back to you shortly.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="pt-[60px]">
      {/* Hero */}
      <section className="py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Contact Us
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto">
            We ensure every enquiry is reviewed with context and responded to appropriately.
          </motion.p>
        </div>
      </section>

      {/* Strategic Engagement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Strategic Engagement</h2>
          <p className="text-muted-foreground mb-8">You can contact CHN Technologies if you are looking to:</p>
          <div className="space-y-4">
            {engagements.map((e, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                  0{i + 1}
                </span>
                <span className="text-sm text-foreground">{e}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20" style={{ background: "var(--gradient-subtle)" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">How to Connect with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all">
                <h3 className="text-base font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
                <a href={`mailto:${m.email}`} className="text-xs font-semibold text-primary hover:underline">{m.email}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Share Your <span className="text-primary">Requirement</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text" placeholder="Full Name" required
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <input
                type="email" placeholder="Email Address" required
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <input
              type="text" placeholder="Company / Organisation"
              value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <textarea
              placeholder="Tell us about your requirement..." rows={5} required
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
