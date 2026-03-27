import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Users, Scale, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const WhatWeThink = () => (
  <div>
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">What We Think</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">What We Think</span>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="p-10 bg-card border border-border rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Executive Insight</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mt-3">The Paradox of Choice in Digital Infrastructure</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Complexity is a silent tax on innovation. We dismantle the myth that "more is better," proving that high-fidelity, minimalist architectures are the ultimate competitive advantage for the modern enterprise.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:underline group">
            Read Full Analysis <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Core Domains</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Cpu className="w-7 h-7" />, title: "Systems", desc: "Security-first infrastructure DNA." },
            { icon: <Users className="w-7 h-7" />, title: "Workforce", desc: "Human-technology interface optimisation." },
            { icon: <Scale className="w-7 h-7" />, title: "Governance", desc: "Structural integrity and compliance." },
            { icon: <TrendingUp className="w-7 h-7" />, title: "Maturity", desc: "Process-driven business scaling." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-7 border border-border rounded-sm bg-card hover:border-primary/30 hover:shadow-sm transition-all text-center group">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">{item.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready for a Strategic Session?</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">Our thinking is the blueprint. Let's align your next operational milestone with a strategy designed for performance.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-navy font-bold rounded-sm hover:bg-white/90 transition-all group">
          Book Strategy Session <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default WhatWeThink;
