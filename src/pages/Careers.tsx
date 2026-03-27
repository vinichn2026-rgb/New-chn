import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, UserCheck, GraduationCap, TrendingUp, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Careers = () => (
  <div>
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Careers</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">Careers</span>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Professional Environment Built For <em className="text-primary not-italic">Growth</em>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "01", title: "Defined Roles", desc: "Clear roles and expectations.", icon: <Briefcase className="w-6 h-6" /> },
            { id: "02", title: "Live Projects", desc: "Hands-on learning through real projects.", icon: <Sprout className="w-6 h-6" /> },
            { id: "03", title: "Direct Mentorship", desc: "Supportive mentorship and guidance.", icon: <GraduationCap className="w-6 h-6" /> },
            { id: "04", title: "Maturity Path", desc: "Structured long-term career growth.", icon: <TrendingUp className="w-6 h-6" /> },
          ].map((p, i) => (
            <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-7 border border-border rounded-sm bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
              <div className="text-3xl font-black text-primary/20 mb-3">{p.id}</div>
              <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">{p.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">Who Thrives at CHN Technologies</h2>
        <p className="text-muted-foreground text-center mb-10">We look for individuals who are curious, responsible, and willing to learn.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: "Willingness to Learn", desc: "Adaptability to evolving technologies." },
            { title: "Ownership", desc: "Responsibility for quality outcomes." },
            { title: "Structured Thinking", desc: "Approaching problems with clarity." },
            { title: "Collaboration", desc: "Working effectively across teams." },
          ].map((attr, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm">
              <UserCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div><h4 className="font-semibold text-foreground">{attr.title}</h4><p className="text-sm text-muted-foreground">{attr.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Interested in Joining Us?</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">We're always looking for people who share our commitment to quality and continuous improvement.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-navy font-bold rounded-sm hover:bg-white/90 transition-all group">
          Get In Touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default Careers;
