import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Building, MapPin, BarChart3, Handshake, ChevronRight } from "lucide-react";
import { FaBuilding, FaShieldAlt, FaChartLine, FaSitemap } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.jpg";

const steps = [
  { num: "01", title: "GROWTH & SCALE", icon: "🎯" },
  { num: "02", title: "SECURITY & COMPLIANCE", icon: "👥" },
  { num: "03", title: "MULTI-LOCATION OPERATIONS", icon: "📊" },
  { num: "04", title: "LEADERSHIP VISIBILITY", icon: "📈" },
];

const outcomes = [
  {
    title: "Operational Stability",
    icon: <FaBuilding className="text-2xl text-primary" />,
    points: ["Increase system uptime", "Reduce operational interruptions", "Improve security controls"],
  },
  {
    title: "Measurable Outcomes",
    icon: <FaChartLine className="text-2xl text-primary" />,
    points: ["Improve efficiency and productivity", "Reduce avoidable costs", "Track performance indicators"],
  },
  {
    title: "Long-Term Support",
    icon: <FaShieldAlt className="text-2xl text-primary" />,
    points: ["Continuous optimisation", "Strategic advisory support", "Sustainable growth enablement"],
  },
];

const capabilities = [
  { title: "IT Infrastructure", icon: <FaSitemap />, points: ["Network management", "End User Computing", "Cyber Security", "Server Administration", "LAN Cabling & Surveillance"] },
  { title: "Software Solutions", icon: <FaBuilding />, points: ["Web design & development", "Application development"] },
  { title: "Digital Solutions", icon: <FaChartLine />, points: ["Digital analytics", "Process automation"] },
  { title: "Consulting & Advisory", icon: <FaShieldAlt />, points: ["Workforce consulting", "Training programs"] },
];

const deliverySteps = [
  { step: "STEP 1 – ASSESS", title: "Assess Current State", desc: "Understand existing systems, processes, risks, and operational challenges to establish a clear baseline and identify priority areas." },
  { step: "STEP 2 – DESIGN", title: "Design the Roadmap", desc: "Create a structured and realistic roadmap aligned with business objectives, compliance requirements, and long-term scalability." },
  { step: "STEP 3 – IMPLEMENT", title: "Implement with Control", desc: "Execute solutions using a phased and controlled approach to minimise disruption while ensuring accuracy, security, and performance." },
  { step: "STEP 4 – RUN & IMPROVE", title: "Run, Monitor, and Improve", desc: "Provide ongoing monitoring, support, and optimisation to ensure systems continue to perform effectively as business needs evolve." },
];

const partnerCards = [
  { title: "Structured Delivery", text: "Structured delivery and clear ownership" },
  { title: "Business Alignment", text: "Solutions aligned with business constraints" },
  { title: "Ongoing Support", text: "Ongoing support beyond implementation" },
  { title: "Secure & Scalable", text: "Focus on stability, security, and scalability" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  }),
};

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/70" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
        <div className="absolute bottom-32 left-16 w-56 h-56 rounded-full bg-cyan/15 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20 rounded-full mb-6">
              Innovation in Action
            </span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
          >
            Run Technology Like{" "}
            <span className="bg-gradient-to-r from-blue-light to-cyan bg-clip-text text-transparent">
              A Business System
            </span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
          >
            Integrated technology and consulting services built for stability,
            security, and scalable growth. We help you reduce risk and maintain control.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { label: "Clear Scope", num: "01" },
              { label: "Measurable Outcomes", num: "02" },
              { label: "24/7 Support", num: "03" },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-2xl font-bold text-cyan">{s.num}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ TARGET ORGANISATIONS ═══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Enterprise Excellence</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Built for Control, Not Complexity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Supporting businesses operating across systems, teams, and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-primary mb-2">{step.num}</div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">{step.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Discover Our Capabilities <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ OUTCOMES ═══════ */}
      <section className="py-24" style={{ background: "var(--gradient-subtle)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Integrated Ecosystem</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Outcomes <span className="text-primary">That Matter to Your Business</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Partnering with CHN Technologies focuses on delivering measurable outcomes that improve stability, reliability, and long-term operational performance.
            </p>
          </div>

          {/* Scrolling cards */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-marquee" style={{ width: "fit-content" }}>
              {[...outcomes, ...outcomes, ...outcomes, ...outcomes].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CAPABILITIES ═══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Capabilities <span className="text-primary">That Work Together</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              CHN Technologies delivers integrated capabilities across technology, software, digital, and consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">{cap.icon}</div>
                <div className="text-xs font-bold text-primary/60 mb-2">0{i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY MODEL ═══════ */}
      <section className="py-24" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              A Clear and Structured Delivery Model
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">
              A streamlined approach ensuring clarity, accountability, and seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deliverySteps.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-primary/40 transition-all"
              >
                <div className="text-xs font-bold text-cyan uppercase tracking-wider mb-3">{s.step}</div>
                <h3 className="text-lg font-bold text-primary-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline">
              Understand Our Approach <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ PARTNER ═══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A Long-Term Technology and Consulting Partner
            </h2>
            <p className="mt-4 text-muted-foreground">
              CHN Technologies works with organisations that value consistency, accountability, and structured execution. Our approach is built around long-term partnerships rather than short-term engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {partnerCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20" style={{ background: "var(--gradient-blue)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Start with Clarity</h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Move forward with confidence using structured and scalable capabilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-lg hover:bg-primary-foreground/90 transition-all shadow-lg"
          >
            Talk to CHN <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
