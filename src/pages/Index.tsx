import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Server, Code,
  BarChart3, Users, Shield, Network, Monitor, Settings,
  Target,
} from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import aboutOffice from "@/assets/about-office.jpg";

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ── Counter Hook ── */
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
};

const CounterCard = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const { count, ref } = useCounter(value);
  return (
    <motion.div ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
      className="text-center py-8"
    >
      <div className="text-5xl md:text-6xl font-bold text-foreground">
        +{count}{suffix}
      </div>
      <div className="text-muted-foreground mt-2 text-sm">{label}</div>
    </motion.div>
  );
};

/* ── Hero Slides (CHN content) ── */
const slides = [
  {
    bg: heroBg1,
    subtitle: "Integrated Technology & Consulting",
    title: <>Run Technology Like<br /><strong>A Business System.</strong></>,
    desc: "Integrated technology and consulting services built for stability, security, and scalable growth. We help you reduce risk and maintain control.",
  },
  {
    bg: heroBg2,
    subtitle: "We Are Dedicated",
    title: <>Inspired And Passionate<br /><strong>About Innovation.</strong></>,
    desc: "End-to-end management of IT infrastructure, software solutions, digital analytics, and workforce consulting — all under one roof.",
  },
];

/* ── Services Data ── */
const services = [
  { icon: <Network className="w-8 h-8" />, title: "Network Management", desc: "End-to-end network design, deployment, and management ensuring reliable connectivity.", link: "/network" },
  { icon: <Monitor className="w-8 h-8" />, title: "End User Computing", desc: "Desktop provisioning, VDI, device lifecycle management, and help desk services.", link: "/enduser" },
  { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", desc: "Proactive cybersecurity services to protect against evolving threats.", link: "/cybersecurity" },
  { icon: <Server className="w-8 h-8" />, title: "Server Administration", desc: "Expert server administration ensuring reliable, secure, and peak performance.", link: "/server" },
  { icon: <Code className="w-8 h-8" />, title: "Web Design & Development", desc: "Custom web solutions designed to represent your brand and drive engagement.", link: "/webdesign" },
  { icon: <BarChart3 className="w-8 h-8" />, title: "Data Analytics", desc: "Data-driven insights and analytics capabilities for operational efficiency.", link: "/dataanalytics" },
  { icon: <Settings className="w-8 h-8" />, title: "Automation", desc: "Process automation to improve efficiency, reduce errors, and free resources.", link: "/automation" },
  { icon: <Users className="w-8 h-8" />, title: "Workforce Management", desc: "Build high-performing teams and reduce hiring overhead.", link: "/workforce" },
  { icon: <Target className="w-8 h-8" />, title: "Payroll & Compliance", desc: "Error-free payroll processing with expert support and compliance.", link: "/payroll" },
];

/* ── Why Choose Cards ── */
const whyCards = [
  { title: "Structured Delivery", desc: "Clear ownership and phased execution for minimal disruption." },
  { title: "Business Alignment", desc: "Solutions aligned with your business constraints and goals." },
  { title: "Ongoing Support", desc: "Continuous monitoring, optimisation, and strategic advisory." },
  { title: "Security First", desc: "Focus on stability, security, and scalability at every step." },
  { title: "Measurable Outcomes", desc: "Track performance indicators and drive continuous improvement." },
  { title: "Expert Teams", desc: "Certified professionals with deep domain expertise." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (dir: number) => {
    setSlideDirection(dir);
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div>
      {/* ═══════════ HERO SLIDER ═══════════ */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background */}
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={slide.bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </motion.div>

        {/* Large watermark text */}
        <div className="absolute bottom-10 right-10 text-[10vw] font-black text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block">
          CHN
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 mb-4"
            >
              {slide.subtitle}
            </motion.p>

            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] max-w-3xl font-light"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed"
            >
              {slide.desc}
            </motion.p>

            <motion.div
              key={`btn-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center gap-5"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all duration-300 group"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => goToSlide(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goToSlide(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setSlideDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-primary w-8" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Services</motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Comprehensive Solutions For Your Business Growth
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i % 3}
              >
                <Link
                  to={svc.link}
                  className="group block p-7 rounded-sm border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={aboutOffice}
                  alt="CHN Technologies office"
                  className="w-full rounded-sm object-cover aspect-[4/3]"
                  loading="lazy" width={800} height={600}
                />
                {/* Dotted decoration */}
                <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }} />
              </div>
            </motion.div>

            {/* Text Side */}
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                That's Why We're Your Trusted Technology Partner.
              </motion.h2>

              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="mt-5 text-muted-foreground leading-relaxed">
                CHN Technologies does not approach challenges as isolated technology or people issues.
                We focus on how systems, processes, and teams interact in real operational environments.
              </motion.p>

              {/* Progress Bar */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
                className="mt-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Work Success</span>
                  <span className="text-sm font-semibold text-primary">95%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="bg-primary h-2.5 rounded-full"
                  />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
                className="mt-6 space-y-3">
                {[
                  "Structured delivery with clear ownership",
                  "Solutions aligned with your business constraints",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* Mini stat cards */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                className="mt-8 flex gap-6">
                <div className="flex items-center gap-3 bg-card rounded-sm border border-border px-4 py-3">
                  <Server className="w-10 h-10 text-primary/30" />
                  <div>
                    <div className="text-sm font-bold text-foreground">IT Solutions</div>
                    <div className="text-xs text-muted-foreground uppercase">12+ Services</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card rounded-sm border border-border px-4 py-3">
                  <Users className="w-10 h-10 text-primary/30" />
                  <div>
                    <div className="text-sm font-bold text-foreground">Consulting</div>
                    <div className="text-xs text-muted-foreground uppercase">3+ Domains</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS COUNTER ═══════════ */}
      <section className="py-16 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border">
            <CounterCard value={50} suffix="+" label="Clients Served" />
            <CounterCard value={100} suffix="+" label="Projects Completed" />
            <CounterCard value={12} suffix="+" label="Services Offered" />
            <CounterCard value={10} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Our Delivery Approach
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i % 3}
                className="group p-7 border border-border rounded-sm bg-card hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  <span className="text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-white transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/70 transition-colors">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-3xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="mt-5 text-lg text-white/70">
              Let's discuss how CHN Technologies can support your operational goals with integrated technology and consulting services.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-navy font-bold rounded-sm hover:bg-white/90 transition-all group"
              >
                Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS / DELIVERY MODEL ═══════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Process</motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A Clear Path From Assessment To Results
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "Understand existing systems, processes, risks, and operational challenges." },
              { step: "02", title: "Design", desc: "Create a structured roadmap aligned with business objectives and scalability." },
              { step: "03", title: "Implement", desc: "Execute solutions using a phased approach to minimise disruption." },
              { step: "04", title: "Support", desc: "Ongoing monitoring, support, and optimisation as business needs evolve." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="relative text-center p-7 bg-card border border-border rounded-sm group hover:border-primary/30 transition-all"
              >
                <div className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-border">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
