import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ServicePage = ({ title, subtitle, description, features }: ServicePageProps) => (
  <div className="pt-[60px]">
    <section className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="inline-block text-xs font-bold uppercase tracking-widest text-cyan mb-4">{subtitle}</motion.span>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="text-4xl md:text-5xl font-bold text-primary-foreground">{title}</motion.h1>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">{description}</p>
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ServicePage;
