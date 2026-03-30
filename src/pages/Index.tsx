import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Server, Code,
  BarChart3, Users, Shield, Network, Monitor, Settings, FileSignature,
  Target, MonitorSmartphone, UserCog, FileText, Play, Code2, X,
  ArrowUpRight, Quote, TrendingUp, 
  ShieldCheck,Calendar, MessageSquare
} from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";

import { ScanSearch, Workflow, Cpu, Activity } from "lucide-react";
const capabilities = [
    {
      title: "Technology Services",
      desc: "End-to-end management of IT infrastructure, networks, systems, and security for operational continuity.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      date: "29 Mar 2026",
    },
    {
      title: "Software Solutions",
      desc: "Custom-built and scalable software designed to support business workflows and system integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      date: "29 Mar 2026",
    },
    {
      title: "Digital Solutions",
      desc: "Data-driven digital capabilities that enhance visibility, automate processes, and improve efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      date: "29 Mar 2026",
    },
    {
      title: "Consulting & Advisory",
      desc: "Operational consulting focused on workforce management, payroll compliance, and capability development.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      date: "29 Mar 2026",
    }
  ];

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: [0, 0, 0.58, 1] as any }
  })
};
// Semantic animation function names
const slideUpAndFade = {
  hidden: { opacity: 0, y: 40 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { delay: customDelay * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  }),
} as any;

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
const deliveryPhases = [
  {
    phaseNumber: "01",
    heading: "Assess Current State",
    description: "Evaluate existing systems and risks to establish a baseline and identify key priorities.",
    icon: ScanSearch, // Innovative scanning/assessment icon
  },
  {
    phaseNumber: "02",
    heading: "Design the Roadmap",
    description: "Develop a strategic roadmap aligned with business goals, compliance, and long-term scalability",
    icon: Workflow, // Innovative roadmap/architecture icon
  },
  {
    phaseNumber: "03",
    heading: "Implement with Control",
    description: "Deploy secure, high-performing solutions using a phased approach to minimize business disruption.",
    icon: Cpu,
  },
  {
    phaseNumber: "04",
    heading: "Run, Monitor, and Improve",
    description: "Deliver continuous monitoring, support, and optimisation to keep systems aligned with evolving business needs.",
    icon: Activity,
  },
];
/* ── Services Data ── */

const services = [
  {
    title: "GROWTH & SCALE",
    desc: "Businesses expanding operations while handling disconnected IT, software, and operational tools that require structure and consolidation.",
    // TrendingUp represents expansion and scaling perfectly.
    icon: <TrendingUp strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
  },
  {
    title: "SECURITY & COMPLIANCE",
    desc: "Organisations operating in regulated or risk-sensitive environments that need stronger controls, visibility, and policy alignment.",
    // ShieldCheck is the industry standard for security and regulation.
    icon: <ShieldCheck strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
  },
  {
    title: "MULTI-LOCATION OPERATIONS",
    desc: "Companies managing infrastructure, people, and processes across multiple offices or sites with a need for standardisation.",
    // Network represents connected nodes/locations.
    icon: <Network strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
  },
  {
    title: "LEADERSHIP VISIBILITY",
    desc: "Decision-makers seek clear insights into system performance, operational efficiency, and workforce effectiveness.",
    // BarChart3 represents insights, data, and performance visibility.
    icon: <BarChart3 strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
  },
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
const caseStudies = [
  {
    id: 1,
    category: "ENTERPRISE SOLUTION",
    title: "CHN Technologies Cloud Migration",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    category: "CYBER SECURITY",
    title: "Secure Data Infrastructure Build",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Before partnering with CHN Technologies, our multi-site infrastructure was a source of constant friction and unpredictable downtime. Their team didn't just 'fix' our problems; they re-engineered our entire network and server environment for maximum resilience. Today, our system uptime is at an all-time high, allowing our leadership to focus on expansion rather than emergency IT repairs. They have truly provided the operational stability we needed to scale confidently. ",
    name: "A Foundation of Absolute Reliability",
    designation: "Focus on Infrastructure & Stability",
  },
  {
    id: 2,
    quote: "Before partnering with CHN Technologies, our multi-site infrastructure was a source of constant friction and unpredictable downtime. Their team didn't just 'fix' our problems; they re-engineered our entire network and server environment for maximum resilience. Today, our system uptime is at an all-time high, allowing our leadership to focus on expansion rather than emergency IT repairs. They have truly provided the operational stability we needed to scale confidently. ",
    name: "A Foundation of Absolute Reliability",
    designation: "Focus on Infrastructure & Stability",
  },
  {
    id: 3,
    quote: "Before partnering with CHN Technologies, our multi-site infrastructure was a source of constant friction and unpredictable downtime. Their team didn't just 'fix' our problems; they re-engineered our entire network and server environment for maximum resilience. Today, our system uptime is at an all-time high, allowing our leadership to focus on expansion rather than emergency IT repairs. They have truly provided the operational stability we needed to scale confidently. ",
    name: "A Foundation of Absolute Reliability",
    designation: "Focus on Infrastructure & Stability",
  }
];

const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (

    <div>
      {/* ----------- HERO SLIDER ----------- */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden -mt-[65px]">
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
          <div className="hero mx-auto px-4">
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
  className="mt-8 flex items-center gap-6"
>
  {/* Read More Button */}
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 group"
  >
    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    Read More
  </Link>

  {/* 🔥 YouTube Play Button with Pulse */}
  <a
    href="https://www.youtube.com/"  // 🔁 replace with your video link
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center"
  >
    {/* Pulse Ring */}
    <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping"></span>

    {/* Outer Circle */}
    <span className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
      
      {/* Inner Circle */}
      <span className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center">
        ▶
      </span>
    </span>
  </a>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-8" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </section>

      {/* ----------- SERVICES ----------- */}
      <section className="service-section py-20 bg-[#fafafa] relative">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#0060ff] uppercase tracking-widest text-[13px] font-bold block mb-4">
              BUILT FOR ORGANISATIONS THAT NEED CONTROL, NOT COMPLEXITY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-[1.4]">
              Designed to support businesses operating across systems, teams, and locations.            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 px-8 py-8 flex flex-col items-center text-center transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                {/* SLIDING BACKGROUND SHADE: Starts at width 0, expands to full width on hover */}
                <div className="absolute top-0 left-0 h-full w-0 bg-[#f4f5f7] group-hover:w-full transition-all duration-500 ease-in-out z-0 pointer-events-none"></div>

                {/* Content Layer (z-10 keeps it above the sliding background) */}
                <div className="relative z-10 flex flex-col items-center h-full w-full">

                  {/* Icon Circle Container */}
                  <div className="w-[100px] h-[100px] rounded-full border border-gray-200 flex items-center justify-center mb-8 bg-transparent group-hover:bg-white group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500">

                    {/* ZOOM ANIMATION WRAPPER: Scales up the icon inside when the card is hovered */}
                    <div className="transition-transform duration-500 ease-out group-hover:scale-125">
                      {service.icon}
                    </div>

                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[280px]">
                    {service.desc}
                  </p>

                  {/* Spacer pushes the button to the bottom if text lengths vary */}
                  <div className=""></div>

                  {/* Animated Arrow Button */}
                  <button className="w-12 h-12 mt-4 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 group-hover:bg-[#0060ff] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transition-colors duration-300" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ----------- ABOUT SECTION ----------- */}
      <section className="py-20 md:py-28 bg-white overflow-hidden font-sans">
        <div className="about mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Image Side */}
            <div className="relative flex items-end gap-6 pl-4 md:pl-10">
              {/* Dotted pattern background */}
              <div
                className="absolute -top-10 -left-6 w-48 h-48 opacity-40 z-0"
                style={{
                  backgroundImage: "radial-gradient(#9ca3af 2px, transparent 2px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Decorative small slice image */}
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Office slice"
                className="w-20 h-[380px] object-cover rounded-sm shadow-sm z-10 hidden sm:block grayscale-[20%]"
              />

              {/* Main large image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional working"
                className="w-full max-w-[420px] h-[480px] object-cover rounded-sm shadow-xl z-10"
              />

              {/* Blinking Play Button */}
             <div className="absolute top-[10px] left-0 sm:left-[2.2rem] z-20">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="relative group flex items-center justify-center focus:outline-none"
                  aria-label="Play Video"
                >
                  <div className="absolute inset-0 rounded-full border border-black/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                  <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center play-ripple transition-transform group-hover:scale-105 z-10">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Text Side */}
            <div className="pr-4 lg:pr-8">
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight"
              >OUTCOMES THAT MATTER <br />TO YOUR BUSINESS
              </motion.h2>

              <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="text-lg text-blue-600 font-medium italic mb-4"
              >
                Partnering with CHN Technologies focuses on delivering measurable outcomes that improve stability, reliability, and long-term operational performance.
              </motion.p>

              <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
                className="text-gray-500 text-base leading-relaxed mb-8"
              >
We don’t just implement technology; we engineer environments that are resilient to disruptions. Our approach ensures your systems evolve alongside your business requirements, providing a foundation for sustainable, visible impact.              </motion.p>

              {/* Solid Progress Bar matching design */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
                className="w-full bg-gray-100 h-11 rounded-sm overflow-hidden mb-8"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-[#2b59c3] h-full flex items-center px-4"
                >
                  <span className="text-white text-sm font-semibold tracking-wide">95.00% Work Success</span>
                </motion.div>
              </motion.div>

              {/* Split Paragraphs */}
              {/* <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                className="grid sm:grid-cols-2 gap-8 mb-10 text-sm text-gray-500 leading-relaxed"
              >
                <p>Proin lobortis mauris vel dui egestas, non laoreet duolei hendrerit.</p>
                <p>Fusce maximus turpis in magna cursus, vehicula bibendum sem placerat.</p>
              </motion.div> */}

              {/* Features Bottom Row */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
                className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#2b59c3]">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-base mb-0.5">Operational Stability</h4>
                    <p className="text-gray-400 text-xs font-semibold tracking-widest">Maximize System Uptime</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#2b59c3]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-base mb-0.5">Measurable Outcomes</h4>
                    <p className="text-gray-400 text-xs font-semibold tracking-widest">Boost Team Productivity</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#2b59c3]">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold text-base mb-0.5">Long-Term Support</h4>
                    <p className="text-gray-400 text-xs font-semibold tracking-widest">Continuous Optimization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>

              {/* 16:9 Video Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------- STATS COUNTER ----------- */}
      <section className="py-16 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border">
            <CounterCard value={50} suffix="+" label="Clients Served" />
            <CounterCard value={100} suffix="+" label="Projects Completed" />
            <CounterCard value={12} suffix="+" label="Services Offered" />
            <CounterCard value={3} suffix="+" label="Years Innovation" />
          </div>
        </div>
      </section>
      {/* capbalities */}
<section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#0060ff] text-xs font-bold tracking-widest uppercase mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            CAPABILITIES THAT WORK TOGETHER
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[15px]">
            CHN Technologies delivers integrated capabilities
             across technology, software, digital, and consulting services, enabling organisations to operate with clarity, control, and scalability.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {capabilities.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="overflow-hidden rounded-sm mb-5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-gray-400 text-[12px] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {item.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare size={13} /> 0 Comments
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-[19px] font-bold text-[#1a1a1a] leading-tight mb-4 group-hover:text-[#0060ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* Read More Button (Styled exactly like image) */}
              <div className="mt-auto">
                <button className="flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#0060ff] hover:text-white text-[#1a1a1a] px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300">
                  <ArrowRight size={14} /> Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 bg-[#0060ff] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-200 rounded-full"></span>
        </div>

        {/* Primary CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#002e5b] text-white px-10 py-4 rounded-sm font-bold text-[15px] hover:bg-[#001a35] transition-all shadow-lg hover:-translate-y-1">
            Explore Our Services
          </button>
        </div>

      </div>
    </section>
      {/* ----------- WHY CHOOSE US ----------- */}
   <section className="py-24 bg-[#f8f9fa] overflow-hidden font-sans">
  <div className="container mx-auto px-4 max-w-6xl">
    
    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true }} 
        variants={slideUpAndFade} custom={0}
        className="text-sm font-bold text-[#002e5b] uppercase tracking-widest mb-4"
      >
        Supporting Description
      </motion.p>
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} 
        variants={slideUpAndFade} custom={1}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
      >
        A Clear and Structured Delivery Model
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} 
        variants={slideUpAndFade} custom={2}
        className="text-lg text-gray-600 leading-relaxed"
      >
        CHN Technologies follows a defined delivery approach that ensures clarity, accountability, and minimal disruption while implementing and managing technology and consulting solutions.
      </motion.p>
    </div>

    {/* DELIVERY PHASES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {deliveryPhases.map((phase, index) => {
        const PhaseIcon = phase.icon;
        
        return (
          <motion.div
            key={phase.heading}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={slideUpAndFade} custom={index + 2}
            className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-default"
          >
            {/* THE "ZOOM INSIDE" LAYER 
                This div creates the white border effect by having a margin (inset-1.5) 
                and handles the dark blue zoom animation.
            */}
            <div className="absolute inset-1.5 rounded-[calc(0.75rem-6px)] overflow-hidden z-0">
               <div className="absolute inset-0 bg-[#002e5b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </div>

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex flex-col h-full p-10">
              
              {/* ICON BLOCK */}
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center 
                                group-hover:bg-white/10 transition-colors duration-300">
                  <PhaseIcon className="w-8 h-8 text-[#002e5b] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-300">
                  {phase.phaseNumber}
                </span>
              </div>
              
              {/* TEXT BLOCK */}
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">
                {phase.heading}
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed group-hover:text-blue-50/80 transition-colors duration-300">
                {phase.description}
              </p>

            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* ----------- CTA BANNER ----------- */}
      <section className="relative w-full py-32 md:py-48 lg:py-56 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE & DARK OVERLAY */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Replace this URL with your actual background image
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")' 
        }}
      >
        {/* The dark overlay that makes the white text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        
        {/* Heading Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center leading-tight mb-12 drop-shadow-md"
        >
          We Are Top IT Solutions <br className="hidden md:block" /> Video And History
        </motion.h2>

        {/* 3. THE BLINKING PLAY BUTTON */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a 
            href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID" // <-- PUT YOUR YOUTUBE LINK HERE
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center focus:outline-none"
            aria-label="Watch our video on YouTube"
          >
            {/* The outer pulsing ring (The "Blink" effect) */}
            <div className="absolute w-24 h-24 bg-white/40 rounded-full animate-ping"></div>
            
            {/* A secondary larger, slower pulsing ring for a premium feel */}
            <div className="absolute w-32 h-32 border border-white/20 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>

            {/* The actual solid white button */}
            <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110">
              {/* The Blue Play Icon (ml-2 pushes it slightly right so it looks perfectly centered visually) */}
              <Play className="w-10 h-10 text-blue-600 ml-2 fill-current" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
<section className="py-20 md:py-28 bg-[#fdfdfd] overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* =========================================
            PART 1: CASE STUDIES SECTION
        ============================================= */}
        
        {/* Header Area */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              Our Case Study
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our CHN Technologies Special Case Studies.
            </h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <p className="text-gray-500 leading-relaxed border-l-2 border-blue-600 pl-6">
              Discover how CHN Technologies delivers innovative solutions. We analyze complex operational challenges and implement robust, scalable technology architectures that drive measurable business growth and efficiency.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {caseStudies.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}
              className="group cursor-pointer"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative overflow-hidden rounded-md mb-6 aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* The Blue Hover Overlay (Matches Video exactly) */}
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {/* The Circular Arrow */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <a href={item.link} className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            PART 2: TESTIMONIAL SECTION
        ============================================= */}
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Large Quote Icon */}
          <div className="mb-8">
            <Quote className="w-16 h-16 text-blue-700 fill-current rotate-180" />
          </div>

          {/* Slider Layout (Arrows + Text) */}
          <div className="flex items-center justify-between w-full mb-8">
            {/* Left Arrow */}
            <button className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 text-white items-center justify-center hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Quote Text */}
            <div className="px-4 md:px-12">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                {testimonials[activeTestimonial].quote}
              </p>
            </div>

            {/* Right Arrow */}
            <button className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 text-white items-center justify-center hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex space-x-2 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          </div>

          {/* Author Info */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              {testimonials[activeTestimonial].name}
            </h4>
            <p className="text-sm text-blue-600 font-medium uppercase tracking-wider">
              {testimonials[activeTestimonial].designation}
            </p>
          </div>

          {/* Mobile Arrows (Visible only on small screens) */}
          <div className="flex md:hidden space-x-4 mt-8">
            <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
    
    </div>
  );
};

export default Index;
