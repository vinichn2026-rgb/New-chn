import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Layers, RefreshCw, Settings } from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const About = () => (
  <div>
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About Us</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span><span className="text-white">About</span>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={aboutOffice} alt="CHN Technologies" className="w-full rounded-sm object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
          </motion.div>
          <div>
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-2 inline-block">01. Our Mindset</motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">
              How CHN Technologies Approaches Business Problems
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="mt-5 text-muted-foreground leading-relaxed">
              CHN Technologies does not approach challenges as isolated technology or people issues. We focus on how systems, processes, and teams interact in real operational environments. This mindset allows us to deliver solutions that remain relevant and reliable over time.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mt-6 space-y-3">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Practical execution over theory" },
                { icon: <Layers className="w-5 h-5" />, text: "Structure over short-term fixes" },
                { icon: <RefreshCw className="w-5 h-5" />, text: "Long-term stability over quick wins" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-sm">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 inline-block">02. Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">Core Focus Areas</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Technology Services", desc: "Supporting stable IT environments through network management, end-user computing, cyber security, server administration, and physical infrastructure." },
            { title: "Software Solutions", desc: "Designing and building web platforms and applications tailored to your internal and external needs." },
            { title: "Digital Solutions", desc: "Enabling data visibility, reporting, and process automation to improve operational control." },
            { title: "Consulting", desc: "Workforce management, payroll compliance, and professional development aligned with your business goals." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-7 border border-border rounded-sm bg-card hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Partner With Us</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">Whether you need technology support, consulting services, or workforce solutions — let's build something stable together.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-navy font-bold rounded-sm hover:bg-white/90 transition-all group">
          Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
