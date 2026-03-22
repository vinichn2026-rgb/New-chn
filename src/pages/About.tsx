import { motion } from "framer-motion";
import { Shield, Users, BarChart3, Building } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: <Shield className="w-6 h-6" />, title: "Security First", desc: "We prioritise stability and security in every solution we deliver." },
  { icon: <Users className="w-6 h-6" />, title: "Client Partnership", desc: "Long-term partnerships built on trust, transparency, and accountability." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Measurable Impact", desc: "Every engagement is guided by clear metrics and defined outcomes." },
  { icon: <Building className="w-6 h-6" />, title: "Enterprise Focus", desc: "Solutions designed for organisations operating at scale." },
];

const About = () => (
  <div className="pt-[60px]">
    <section className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-bold text-primary-foreground">About CHN Technologies</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto">
          Integrated technology and consulting services built for stability, security, and scalable growth.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>CHN Technologies is an integrated technology and consulting services company that works with organisations to strengthen their operational and digital capabilities. We combine technical expertise with business understanding to deliver solutions that are practical, compliant, and sustainable.</p>
          <p className="mt-4">Our approach is built around long-term partnerships. We believe in structured delivery, clear ownership, and measurable outcomes — not quick fixes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {values.map((v, i) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{v.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
