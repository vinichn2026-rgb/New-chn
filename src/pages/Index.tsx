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
  const PARTNER_LOGOS = [

    { image: "/images/logo/logo1.png" }, { image: "/images/logo/logo2.png" }, { image: "/images/logo/logo3.png" },
    { image: "/images/logo/logo4.png" }, { image: "/images/logo/logo5.png" }, { image: "/images/logo/logo6.png" },
    { image: "/images/logo/logo7.png" }, { image: "/images/logo/logo8.png" }, { image: "/images/logo/logo9.png" },
    { image: "/images/logo/logo10.png" }, { image: "/images/logo/logo11.png" }, { image: "/images/logo/logo12.png" },
    { image: "/images/logo/logo13.png" }, { image: "/images/logo/logo14.png" }, { image: "/images/logo/logo15.png" },
    { image: "/images/logo/logo15_2.png" }, { image: "/images/logo/logo16.png" }, { image: "/images/logo/logo18.png" },
    { image: "/images/logo/logo19.png" }, { image: "/images/logo/logo20.png" }, { image: "/images/logo/logo21.png" },
    { image: "/images/logo/logo22.png" }, { image: "/images/logo/logo23.png" }, { image: "/images/logo/logo24.png" },
    { image: "/images/logo/logo25.png" }, { image: "/images/logo/logo26.png" }, { image: "/images/logo/logo27.png" },
    { image: "/images/logo/logo28.png" }, { image: "/images/logo/logo29.png" }, { image: "/images/logo/logo30.png" },
    { image: "/images/logo/logo31.png" }, { image: "/images/logo/logo32.png" }, { image: "/images/logo/logo33.png" },
    { image: "/images/logo/logo34.png" }, { image: "/images/logo/logo35.png" }, { image: "/images/logo/logo36.png" },
    { image: "/images/logo/logo37.png" }
  ];

  /* ── State & Refs ── */
  const [currentSlide, setCurrentSlide] = useState(0); // For Hero Slider
  const [rotationY, setRotationY] = useState(0); // For 3D Carousel
  const [activeCardIndex, setActiveCardIndex] = useState(0); // For Capabilities manual nav
  const [trackOffset, setTrackOffset] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);

  const constraintsRef = useRef(null);
  const cardStepSize = 344; // 320px width + 24px gap
  const extendedFeed = [...CAPABILITIES_DATA, ...CAPABILITIES_DATA, ...CAPABILITIES_DATA];

  /* ── Hero Slides ── */
  const slides = [
    {
      bg: heroBg1,
      subtitle: "Integrated technology & consulting",
      title: <>Run technology like <br />a business system</>,
      desc: "Integrated technology and consulting services built for stability, security, and scalable growth. We help you reduce risk and maintain control.",
    },
    {
      bg: heroBg2,
      subtitle: "We are dedicated",
      title: <>Inspired and passionate<br />about innovation</>,
      desc: "End-to-end management of IT infrastructure, software solutions, digital analytics, and workforce consulting — all under one roof.",
    },
    {
      bg: "/images/hero-excellence.jpg",
      subtitle: "Operational excellence",
      title: <>Reliability built on<br />structured excellence</>,
      desc: "We align systems, people, and processes to ensure your business remains resilient in a changing digital landscape. Experience long-term stability.",
    },
  ];

  /* ── Timers & Animations ── */


  // Auto-slide for Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-slide for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
      heading: "Run, Monitor and Improve",
      description: "Deliver continuous monitoring, support, and optimisation to keep systems aligned with evolving business needs.",
      icon: Activity,
    },
  ];

  const services = [
    {
      title: "Growth & Scale",
      desc: "Businesses expanding operations while handling disconnected IT, software, and operational tools that require structure and consolidation.",
      icon: <TrendingUp strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
    },
    {
      title: "Security & Compliance",
      desc: "Organisations operating in regulated or risk-sensitive environments that need stronger controls, visibility, and policy alignment.",
      icon: <ShieldCheck strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
    },
    {
      title: "Multi-Location Operations",
      desc: "Companies managing infrastructure, people, and processes across multiple offices or sites with a need for standardisation.",
      icon: <Network strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
    },
    {
      title: "Leadership Visibility",
      desc: "Decision-makers seek clear insights into system performance, operational efficiency, and workforce effectiveness.",
      icon: <BarChart3 strokeWidth={1} className="w-14 h-14 text-[#0060ff]" />,
    },
    {
      title: "Technology Integration",
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



  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth overflow-x-hidden">
      {/* ----------- HERO SLIDER ----------- */}
      <section className="relative h-screen pt-[65px] overflow-hidden">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img src={slides[currentSlide].bg} alt="" className="w-full h-full object-cover scale-105" />          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#002e5b]/90 via-[#002e5b]/70 to-transparent" /> */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="hero mx-auto px-4">
            <motion.p key={`sub-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base font-bold text-white/80 mb-4">
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white leading-[1.15] max-w-3xl font-light">
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p key={`desc-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-white/70 max-w-2xl leading-relaxed subtitle">
              {slides[currentSlide].desc}
            </motion.p>
            <motion.div key={`btn-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center gap-6">
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0060ff] text-white font-semibold rounded-full hover:bg-[#0050d5] transition-all duration-300 group shadow-lg">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                Read more
              </Link>
            </motion.div>
          </div>
        </div>

        <button onClick={() => goToSlide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => goToSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* ----------- SERVICES ----------- */}
      <section className="flex flex-col justify-center bg-[#fafafa] scroll-mt-[90px] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <span className="text-[#0060ff] uppercase text-md font-bold tracking-[0.10em] mb-4 block ">Operational Capacity</span>
            <h2 className="NET_Hero_H1 text-[#002e5b]">Designed to support systems</h2>
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

                  {/* <button className="w-12 h-12 mt-auto rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 group-hover:bg-[#0060ff] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transition-colors duration-300" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- ABOUT ----------- */}
      <section className="flex flex-col justify-center bg-white scroll-mt-[90px] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="relative">
            <img src="/images/about-main.jpg" alt="About CHN" className="rounded-2xl shadow-2xl" />
            {/* <div className="absolute top-10 left-10">
              <button onClick={() => setIsVideoOpen(true)} className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div> */}
          </div>
          <div>
            <span className="text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase">Measurable Outcomes</span>
            <h2 className="NET_Hero_H1 text-[#002e5b] mb-6">Outcomes that matter</h2>
            <p className="text-lg text-blue-600  mb-6">Delivering measurable outcomes that improve stability and reliability.</p>
            <p className="text-gray-500 leading-relaxed mb-8">We engineer resilient environments that evolve alongside your business, ensuring sustainable impact.</p>
            <div className="bg-gray-100 h-12 rounded-lg overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1.5 }} className="bg-[#0060ff] h-full flex items-center px-4 text-white font-bold text-sm">
                99.00% Work Success
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* ----------- CAPABILITIES (Stabilized Marquee) ----------- */}
      <section className="flex flex-col justify-center bg-[#22314f] py-20 overflow-hidden">
        <style>{`
          .CHN_Marquee_Track {
            display: flex;
            gap: 24px;
            animation: CHN_Marquee_Scroll 50s linear infinite;
            width: fit-content;
            will-change: transform;
          }
          .CHN_Marquee_Track:hover { animation-play-state: paused; }
          @keyframes CHN_Marquee_Scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
        <div className="text-center mb-16 px-4">
          <span className="text-[#ffffff] text-md font-bold tracking-[0.10em] mb-4 block uppercase">Innovation Stream</span>
          <h2 className="NET_Hero_H1 text-white">
            Capabilities <span className="">Overview</span>
          </h2>
        </div>
        <div className="flex overflow-hidden">
          <div className="CHN_Marquee_Track">
            {extendedFeed.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform [transition-duration:3000ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#22314f] mb-2 group-hover:text-[#0060ff] transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  {/* Decorative accent line */}
                  <div className="mt-auto h-[2.5px] w-0 bg-[#0060ff] group-hover:w-16 transition-all duration-700 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- DELIVERY MODEL ----------- */}
      <section className="flex flex-col justify-center bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase">Operational Excellence</span>
            <h2 className="NET_Hero_H1 text-[#002e5b]"> Structured delivery model</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {deliveryPhases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={i} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-default">
                  {/* THE "ZOOM INSIDE" LAYER */}
                  <div className="absolute inset-1.5 rounded-[calc(0.75rem-6px)] overflow-hidden z-0">
                    <div className="absolute inset-0  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ background: 'linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%)' }}></div>
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
                    <p className="text-base text-gray-600 leading-relaxed group-hover:text-blue-50/80 transition-colors duration-300  text-md font-medium tracking-widest">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------- PARTNER ECOSYSTEM (Lean Marquee) ----------- */}
      <section className="flex flex-col justify-center py-4 relative overflow-hidden bg-white">
        <style>{`
          .CHNP_Logo_Marquee_Track {
            display: flex;
            gap: 100px; 
            animation: CHNP_Logo_Scroll 160s linear infinite; 
            width: fit-content;
            align-items: center;
          }
          @keyframes CHNP_Logo_Scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .CHNP_Logo_Marquee_Track:hover { animation-play-state: paused; }
          
          .partner-logo-img {
            filter: none;
            opacity: 1;
            height: 60px; 
            width: auto;
            max-width: 300px; 
            object-fit: contain;
            transition: all 0.3s ease;
          }
          .partner-logo-img:hover {
            transform: scale(1.1);
          }

          .Logo_Row_1 { animation-duration: 180s; }
          .Logo_Row_2 { animation-duration: 140s; animation-direction: reverse; }
        `}</style>

        {/* Header Section */}
        <div className="w-full px-6 mb-16 text-center">
          <span className="text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase">
            Global partner network
          </span>
          <h2 className="NET_Hero_H1 text-[#002e5b]">
            Our partners
          </h2>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-8 pb-20">
          {/* Row 1: Forward */}
          <div className="flex overflow-hidden">
            <div className="CHNP_Logo_Marquee_Track Logo_Row_1">
              {[...PARTNER_LOGOS.slice(0, 19), ...PARTNER_LOGOS.slice(0, 19)].map((logo, i) => (
                <div key={`logo-r1-${i}`} className="flex-shrink-0">
                  <img src={logo.image} alt="Partner" className="partner-logo-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Reverse */}
          <div className="flex overflow-hidden">
            <div className="CHNP_Logo_Marquee_Track Logo_Row_2">
              {[...PARTNER_LOGOS.slice(19), ...PARTNER_LOGOS.slice(19)].map((logo, i) => (
                <div key={`logo-r2-${i}`} className="flex-shrink-0">
                  <img src={logo.image} alt="Partner" className="partner-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <Quote className="w-16 h-16 text-[#0060ff] mx-auto mb-8 opacity-20" />
          <AnimatePresence mode="wait">
            <motion.p key={activeTestimonial} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="md:text-2xl text-2xl text-navy font-medium  leading-relaxed mb-10">
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
