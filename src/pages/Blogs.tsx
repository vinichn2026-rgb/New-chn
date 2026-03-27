import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, Code, Shield, Gavel, Lightbulb, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Blogs = () => (
  <div>
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Blog & Insights</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">Blogs</span>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What Our Blog Covers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Real operational questions faced by businesses.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Server className="w-7 h-7" />, title: "Technology Operations", desc: "Managing networks, systems, security, and infrastructure effectively." },
            { icon: <Code className="w-7 h-7" />, title: "Digital & Software", desc: "Web platforms, applications, analytics, and automation in business." },
            { icon: <Shield className="w-7 h-7" />, title: "Workforce & Compliance", desc: "Workforce structures, payroll, statutory compliance, and training." },
            { icon: <Gavel className="w-7 h-7" />, title: "Execution & Governance", desc: "Operational control, process maturity, and long-term stability." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-7 border border-border rounded-sm bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
              <div className="w-14 h-14 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">{item.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Content Structure</p>
            <h2 className="text-3xl font-bold text-foreground leading-tight mb-5">How Content Is Structured</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Each article is grounded in real operational scenarios, focused on understanding rather than short-lived trends.</p>
            <div className="space-y-3">
              {["Practical explanations", "Framework-based thinking", "Common mistakes and how to avoid them", "Contextual guidance for businesses"].map((item, i) => (
                <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Audience</p>
            <h2 className="text-3xl font-bold text-foreground leading-tight mb-5">Who Benefits</h2>
            <div className="space-y-3">
              {["Business owners and founders", "Operations and HR leaders", "IT and digital decision-makers", "Professionals seeking practical understanding"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-sm">
                  <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Blogs;
