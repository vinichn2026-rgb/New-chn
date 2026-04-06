import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const ServicePage = ({ title, subtitle, description, features }: ServicePageProps) => (
  <div>
    <section className="relative pt-[160px] pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 border border-white/20">{subtitle}</motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{title}</motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">{title}</span>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="text-lg text-muted-foreground leading-relaxed mb-12">{description}</motion.p>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i % 4}
              className="flex items-start gap-3 p-5 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all group">
            Discuss Your Requirements <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default ServicePage;
