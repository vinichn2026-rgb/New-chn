import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Server, Code,
  BarChart3, Users, Shield, Network, Monitor, Settings, FileSignature,
  Target, MonitorSmartphone, UserCog, FileText, Play, Code2, X,
  ArrowUpRight, Quote, TrendingUp,
  ShieldCheck, Calendar, MessageSquare
} from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import { INFINITE_LOOP_DATA, CAPABILITIES_DATA } from "./Data";
import { ScanSearch, Workflow, Cpu, Activity } from "lucide-react";

import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  // Data for the 'Long-Term Partner' section
  const contentData = [
    {
      id: 1,
      title: "Structured Delivery",
      desc: "CHN Technologies works with organisations that value consistency, accountability, and structured execution.",
      image: "/images/partner-delivery.jpg",
    },
    {
      id: 2,
      title: "Business Alignment",
      desc: "Our solutions are aligned with real business constraints, ensuring practical and sustainable digital growth.",
      image: "/images/partner-alignment.jpg",
    },
    {
      id: 3,
      title: "Ongoing Support",
      desc: "Our approach is built around long-term partnerships rather than short-term engagements, offering support beyond implementation.",
      image: "/images/partner-support.jpg",
    },
    {
      id: 4,
      title: "Stability & Security",
      desc: "We focus on stability, security, and scalability to deliver solutions that are compliant and future-proof.",
      image: "/images/partner-security.jpg",
    },
  ];

  /* ── State & Refs ── */
  const [index, setIndex] = useState(0); // For Long-Term Partner section
  const [currentSlide, setCurrentSlide] = useState(0); // For Hero Slider
  const [rotationY, setRotationY] = useState(0); // For 3D Carousel
  const [activeCardIndex, setActiveCardIndex] = useState(0); // For Capabilities manual nav
  const [trackOffset, setTrackOffset] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);

  const constraintsRef = useRef(null);
  const cardStepSize = 344; // 320px width + 24px gap
  const extendedFeed = [...CAPABILITIES_DATA, ...CAPABILITIES_DATA, ...CAPABILITIES_DATA];

  /* ── Timers & Animations ── */

  // Auto-slide for Long-Term Partner
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contentData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [contentData.length]);

  const goToSlide = (dir: number) => {
    setSlideDirection(dir);
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  const shiftFeed = (direction: "left" | "right") => {
    let newIndex;
    if (direction === "left") {
      newIndex = Math.max(0, activeCardIndex - 1);
    } else {
      newIndex = Math.min(extendedFeed.length - 1, activeCardIndex + 1);
    }
    setTrackOffset(-(newIndex * cardStepSize));
    setActiveCardIndex(newIndex);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  /* ── Animation Variants ── */
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: [0, 0, 0.58, 1] as any }
    })
  };

  const slideUpAndFade = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: customDelay * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    }),
  } as any;

  /* ── Hero Slides ── */
  const slides = [
    {
      bg: heroBg1,
      subtitle: "Integrated Technology & Consulting",
      title: <>RUN TECHNOLOGY LIKE <br /><strong>A BUSINESS SYSTEM.</strong></>,
      desc: "Integrated technology and consulting services built for stability, security, and scalable growth. We help you reduce risk and maintain control.",
    },
    {
      bg: heroBg2,
      subtitle: "WE ARE DEDICATED",
      title: <>INSPIRED AND PASSIONATE<br /><strong>ABOUT INNOVATION.</strong></>,
      desc: "End-to-end management of IT infrastructure, software solutions, digital analytics, and workforce consulting — all under one roof.",
    },
    {
      bg: "/images/hero-excellence.jpg",
      subtitle: "OPERATIONAL EXCELLENCE",
      title: <>RELIABILITY BUILT ON<br /><strong>STRUCTURED EXCELLENCE.</strong></>,
      desc: "We align systems, people, and processes to ensure your business remains resilient in a changing digital landscape. Experience long-term stability.",
    },
  ];

  /* ── Data ── */
  const deliveryPhases = [
    {
      phaseNumber: "01",
      heading: "Assess Current State",
      description: "Evaluate existing systems and risks to establish a baseline and identify key priorities.",
      icon: ScanSearch,
    },
    {
      phaseNumber: "02",
      heading: "Design the Roadmap",
      description: "Develop a strategic roadmap aligned with business goals, compliance, and long-term scalability",
      icon: Workflow,
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

    const services = [
     {
       title: "GROWTH & SCALE",
       desc: "Businesses expanding operations while handling disconnected IT, software, and operational tools that require structure and consolidation.",
       icon: <TrendingUp strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
     },
     {
       title: "SECURITY & COMPLIANCE",
       desc: "Organisations operating in regulated or risk-sensitive environments that need stronger controls, visibility, and policy alignment.",
       icon: <ShieldCheck strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
     },
     {
       title: "MULTI-LOCATION OPERATIONS",
       desc: "Companies managing infrastructure, people, and processes across multiple offices or sites with a need for standardisation.",
       icon: <Network strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
     },
     {
       title: "LEADERSHIP VISIBILITY",
       desc: "Decision-makers seek clear insights into system performance, operational efficiency, and workforce effectiveness.",
       icon: <BarChart3 strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
     },
     {
       title: "TECHNOLOGY INTEGRATION",
       desc: "Seamless integration of legacy systems with modern technologies to create unified, future-ready IT ecosystems.",
       icon: <Settings strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
     },
   ];

  const caseStudies = [
    {
      id: 1,
      category: "ENTERPRISE SOLUTION",
      title: "CHN Technologies Cloud Migration",
      image: "/images/casestudy-cloud.jpg",
      link: "#",
    },
    {
      id: 2,
      category: "CYBER SECURITY",
      title: "Secure Data Infrastructure Build",
      image: "/images/casestudy-security.jpg",
      link: "#",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "CHN Technologies re-engineered our entire network for maximum resilience. Our uptime is at an all-time high, providing the stability we needed to scale confidently.",
      name: "Reliability Foundation",
      designation: "Infrastructure & Stability",
    },
    {
      id: 2,
      quote: "Partnering with them transformed our multi-site infrastructure from a source of friction into a resilient environment. We now focus on expansion, not repairs.",
      name: "Operational Excellence",
      designation: "Network Engineering",
    }
  ];

  /* ── Counter Hook ── */
  // const CounterCard = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  //   const [count, setCount] = useState(0);
  //   const ref = useRef<HTMLDivElement>(null);
  //   const inView = useInView(ref, { once: true });

  //   useEffect(() => {
  //     if (!inView) return;
  //     let start = 0;
  //     const duration = 2000;
  //     const step = value / (duration / 16);
  //     const timer = setInterval(() => {
  //       start += step;
  //       if (start >= value) { setCount(value); clearInterval(timer); }
  //       else setCount(Math.floor(start));
  //     }, 16);
  //     return () => clearInterval(timer);
  //   }, [inView, value]);

  //   return (
  //     <motion.div ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
  //       className="text-center py-8"
  //     >
  //       <div className="text-5xl md:text-6xl font-bold text-foreground">
  //         +{count}{suffix}
  //       </div>
  //       <div className="text-muted-foreground mt-2 text-sm">{label}</div>
  //     </motion.div>
  //   );
  // };

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth overflow-x-hidden">
      {/* ----------- HERO SLIDER ----------- */}
      <section className="relative h-screen snap-start pt-[65px]">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img src={slides[currentSlide].bg} alt="" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002e5b]/90 via-[#002e5b]/70 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="hero mx-auto px-4">
            <motion.p key={`sub-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 mb-4">
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] max-w-3xl font-light">
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p key={`desc-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              {slides[currentSlide].desc}
            </motion.p>
            <motion.div key={`btn-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center gap-6">
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0060ff] text-white font-semibold rounded-full hover:bg-[#0050d5] transition-all duration-300 group shadow-lg">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                Read More
              </Link>
            </motion.div>
          </div>
        </div>

        <button onClick={() => goToSlide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0060ff] text-white flex items-center justify-center hover:bg-opacity-80 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => goToSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0060ff] text-white flex items-center justify-center hover:bg-opacity-80 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* ----------- SERVICES ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-[#fafafa] scroll-mt-[90px] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <span className="text-[#0060ff] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">OPERATIONAL CAPACITY</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#002e5b] uppercase tracking-tight">DESIGNED TO SUPPORT SYSTEMS</h2>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
      {services.map((service, i) => (
        <div key={i} className="group relative bg-white border border-gray-100 p-8 text-center transition-all hover:-translate-y-3 hover:shadow-2xl rounded-xl overflow-hidden cursor-pointer">
                {/* SLIDING BACKGROUND SHADE */}
                <div className="absolute top-0 left-0 h-full w-0 bg-[#f4f5f7] group-hover:w-full transition-all duration-500 ease-in-out z-0 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  <div className="w-[100px] h-[100px] rounded-full border border-gray-100 flex items-center justify-center mx-auto mb-6 bg-transparent group-hover:bg-white group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                    <div className="transition-transform duration-500 ease-out group-hover:scale-125">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>

                  <button className="w-12 h-12 mt-auto rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 group-hover:bg-[#0060ff] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transition-colors duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- ABOUT ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-white scroll-mt-[90px] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/images/about-main.jpg" alt="About CHN" className="rounded-2xl shadow-2xl" />
            {/* <div className="absolute top-10 left-10">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div> */}
          </div>
          <div>
            <span className="text-[#0060ff] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">MEASURABLE OUTCOMES</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#002e5b] mb-6 uppercase tracking-tight">OUTCOMES THAT MATTER</h2>
            <p className="text-lg text-blue-600 italic mb-6">Delivering measurable outcomes that improve stability and reliability.</p>
            <p className="text-gray-500 leading-relaxed mb-8">We engineer resilient environments that evolve alongside your business, ensuring sustainable impact.</p>
            <div className="bg-gray-100 h-12 rounded-lg overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5 }} className="bg-[#0060ff] h-full flex items-center px-4 text-white font-bold text-sm">
                95.00% Work Success
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- STATS ----------- */}
      {/* <section className="min-h-screen snap-start flex flex-col justify-center bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterCard value={50} suffix="+" label="Clients Served" />
          <CounterCard value={100} suffix="+" label="Projects Completed" />
          <CounterCard value={12} suffix="+" label="Services Offered" />
          <CounterCard value={5} suffix="+" label="Global Locations" />
        </div>
      </section> */}

      {/* ----------- CAPABILITIES (Auto-Scroll) ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-[#22314f] py-20 overflow-hidden">
        <style>{`
          .CHN_Marquee_Track {
            display: flex;
            gap: 24px;
            animation: CHN_Marquee_Scroll 60s linear infinite;
            width: fit-content;
          }
          .CHN_Marquee_Track:hover { animation-play-state: paused; }
          @keyframes CHN_Marquee_Scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
        <div className="text-center mb-16 px-4">
          <span className="text-[#0060ff] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">INNOVATION STREAM</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">CAPABILITIES <span className="text-[#0060ff]">OVERVIEW</span></h2>
        </div>
        <div className="flex overflow-hidden">
          <div className="CHN_Marquee_Track">
            {extendedFeed.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] bg-white rounded-2xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- DELIVERY MODEL ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0060ff] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">OPERATIONAL EXCELLENCE</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#002e5b] uppercase tracking-tight">A STRUCTURED DELIVERY MODEL</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {deliveryPhases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={i} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-default">
                  {/* THE "ZOOM INSIDE" LAYER */}
                  <div className="absolute inset-1.5 rounded-[calc(0.75rem-6px)] overflow-hidden z-0">
                    <div className="absolute inset-0 bg-[#002e5b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </div>

                  {/* CONTENT WRAPPER */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#002e5b] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-300">
                        {phase.phaseNumber}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">
                      {phase.heading}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed group-hover:text-blue-50/80 transition-colors duration-300 uppercase text-xs font-bold tracking-widest">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------- LONG-TERM PARTNER (Auto-Animate) ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-white py-20 relative overflow-hidden">
        {/* Header Section */}
        <div className="w-full px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#22314f] mb-6 uppercase tracking-tighter">
            Technology & Consulting Partner
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 leading-relaxed">
            Consistency, accountability, and structured execution delivered at scale.
          </p>
        </div>

        {/* Expanded Carousel Area */}
        <div className="relative w-full overflow-visible h-[450px] flex items-center justify-center">
          <div className="flex gap-6 px-[5%]">
            <AnimatePresence mode="popLayout" initial={false}>
              {[-2, -1, 0, 1, 2].map((offset) => {
                const itemIndex = (index + offset + contentData.length) % contentData.length;
                const item = contentData[itemIndex];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${item.id}-${offset}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: Math.abs(offset) > 1 ? 0.1 : (isActive ? 1 : 0.5),
                      scale: isActive ? 1.05 : 0.85,
                      zIndex: isActive ? 30 : 10 - Math.abs(offset),
                      filter: isActive ? "blur(0px)" : "blur(2px)"
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25
                    }}
                    // Reduced width from 450px to 380px for a more compact look
                    className={`relative flex-shrink-0 w-[260px] md:w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-gray-100`}
                  >
                    {/* Image */}
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                    {/* Content Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>

                      {/* Title with Brand Color #22314f and clean white background tag style */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-white self-start px-4 py-1 rounded-lg mb-3 shadow-lg"
                      >
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#22314f]">
                          {item.title}
                        </h3>
                      </motion.div>

                      {/* Description in Pure White */}
                      <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-white font-medium leading-snug"
                      >
                        {item.desc}
                      </motion.p>
                    </div>

                    {/* Reflection Shine */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-20" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 w-full h-[250px] -translate-y-1/2 bg-[#22314f]/5 -skew-y-2 pointer-events-none" />
      </section>

      {/* ----------- TESTIMONIALS ----------- */}
      <section className="min-h-screen snap-start flex flex-col justify-center bg-[#fafafa] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-16 h-16 text-[#0060ff] mx-auto mb-8 opacity-20" />
          <AnimatePresence mode="wait">
            <motion.p key={activeTestimonial} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="text-2xl md:text-3xl text-navy font-medium italic leading-relaxed mb-10">
              "{testimonials[activeTestimonial].quote}"
            </motion.p>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-6">
            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all"><ChevronLeft size={20} /></button>
            <div>
              <h4 className="font-bold text-navy">{testimonials[activeTestimonial].name}</h4>
              <p className="text-xs text-[#0060ff] uppercase font-bold tracking-widest">{testimonials[activeTestimonial].designation}</p>
            </div>
            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* ----------- FOOTER ----------- */}
      <section className="snap-end">
        <SiteFooter />
      </section>

      {/* ----------- VIDEO MODAL ----------- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
              <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 text-white z-10"><X size={32} /></button>
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" frameBorder="0" allowFullScreen></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
