import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Blogs = () => (
  <div className="pt-[60px]">
    <section className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-bold text-primary-foreground">Industry Insights</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto">
          Insights and updates on the latest industry trends.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-muted-foreground text-lg">Blog posts coming soon. Stay tuned for insights on technology, consulting, and digital transformation.</p>
      </div>
    </section>
  </div>
);

export default Blogs;
