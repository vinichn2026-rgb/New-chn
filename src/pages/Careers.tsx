import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Careers = () => (
  <div className="pt-[60px]">
    <section className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-bold text-primary-foreground">Careers at CHN</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto">
          Join a team that values structured growth and meaningful impact.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-muted-foreground text-lg mb-8">
          We're always looking for talented professionals who share our commitment to quality, accountability, and continuous improvement.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
          Send Your Application <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Careers;
