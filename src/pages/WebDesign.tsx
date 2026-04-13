import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Settings,
  Code2,
  Layout,
  Search,
  PenTool,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Globe,
  Zap,
  MousePointer2,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local assets
import workspaceLaptop from '../assets/workspace_laptop.png';
import workspaceImg from '../assets/workspace.jpg';

const WebDesignDevelopment = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  const capabilities = [
    {
      title: "Business Website Design",
      desc: "Design of professional, brand-aligned websites that clearly communicate offerings and value propositions.",
      icon: <Layout size={24} />
    },
    {
      title: "Custom Web Development",
      desc: "Development of scalable, secure, and maintainable web applications tailored to business needs.",
      icon: <Code2 size={24} />
    },
    {
      title: "Responsive & Mobile-First",
      desc: "Web experiences optimised for performance and usability across all devices and screen sizes.",
      icon: <Smartphone size={24} />
    },
    {
      title: "CMS Implementation",
      desc: "Structured Content Management Systems for easy updates, allowing you full control over your digital narrative.",
      icon: <Settings size={24} />
    },
    {
      title: "Performance & Security",
      desc: "Rigorous optimisation of site speed, security controls, and technical stability to ensure long-term value.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      <style>{`
        .web-gradient-bg {
          background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.05), transparent 40%);
        }
        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover-effect:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.15);
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="relative web-gradient-bg pt-24 pb-20 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                Software Solutions
              </span>
            </div>
            <h1 className="font-black mb-8 leading-[1.1] text-slate-900 tracking-tight">
              WEB DESIGN & <br />
              <span className="">DEVELOPMENT</span>
            </h1>
            <p className="font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle">
              <Zap size={24} className="text-blue-600" />
              Built for performance, scale, and results.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-xl">
              CHN Technologies delivers professional web design and development services focused on usability, performance, and long-term maintainability. Our solutions support business objectives and digital growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95">
                  Start Your Project
                </button>
              </Link>

            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2.5rem] blur opacity-20"></div>
              <img
                src={workspaceLaptop}
                alt="Web Development Workspace"
                className="relative rounded-[2rem] shadow-2xl border-[12px] border-white object-cover w-full h-[400px] lg:h-[550px]"
              />

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden xl:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Performance</p>
                    <p className="text-xl font-black text-slate-900">99+ Score</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeIn}>
            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-sm mb-6 block">Strategic Impact</span>
            <h2 className="mb-10 leading-tight text-slate-200">
              YOUR WEBSITE IS A BUSINESS ASSET, <br />
              <span className="text-slate-200">NOT JUST A DIGITAL PRESENCE</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>
            <p className="text-slate-400 leading-relaxed mb-8 subtitle">
              A website often forms the first point of interaction between a business and its customers. Poorly designed or unstructured websites can affect credibility, user experience, and conversion potential.
            </p>
            <p className="text-slate-200 font-medium border-t border-slate-800 pt-10 max-w-2xl mx-auto">
              CHN Technologies helps organisations develop web platforms that align with business goals, support user journeys, and adapt to evolving digital requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black tracking-tight text-slate-900 uppercase">WHAT OUR WEB SERVICES COVER</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-3 xl:gap-6 max-w-[1600px] mx-auto">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-3 lg:p-5 xl:p-8 border border-slate-200 rounded-[1.5rem] md:rounded-xl lg:rounded-[2rem] bg-white card-hover-effect group flex flex-col h-full"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-blue-50 text-blue-600 rounded-xl md:rounded-lg lg:rounded-2xl flex items-center justify-center mb-4 md:mb-3 xl:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm shrink-0">
                  <div className="transform md:scale-75 lg:scale-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-[1.15rem] md:text-[11px] lg:text-base xl:text-xl font-black mb-3 md:mb-2 xl:mb-4 text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-[9.5px] md:leading-tight lg:text-xs xl:text-sm lg:leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto">
            <motion.div className="lg:w-1/2" {...fadeIn}>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Measurable Results</span>
              <h2 className="font-black mb-10 text-slate-900 leading-tight">BUSINESS BENEFITS OF <br />STRUCTURED WEB SOLUTIONS</h2>
              <div className="grid gap-8">
                {[
                  { label: "Stronger Brand Credibility", text: "Well-designed websites reinforce professionalism and trust.", icon: <Globe size={20} /> },
                  { label: "Improved User Engagement", text: "Clear navigation and intuitive interfaces support better user interaction.", icon: <MousePointer2 size={20} /> },
                  { label: "Higher Conversion Potential", text: "Structured layouts and content flows support lead generation and enquiries.", icon: <Rocket size={20} /> },
                  { label: "Scalable Digital Foundation", text: "Web platforms designed to evolve with business growth and digital initiatives.", icon: <Layers size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="bg-blue-600 rounded-xl p-3 shadow-lg shadow-blue-100 shrink-0 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg mb-2">{item.label}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] rotate-3 opacity-5"></div>
              <img
                src={workspaceImg}
                className="relative rounded-[2.5rem] shadow-3xl z-10 w-full h-[600px] object-cover"
                alt="Business Growth Illustration"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LAYOUT 5 – OUR APPROACH */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-white uppercase tracking-tight">OUR DESIGN & DEVELOPMENT APPROACH</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative max-w-7xl mx-auto">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block text-white absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

            {[
              { step: "01", label: "Discover & Assess", icon: <Search size={32} />, desc: "Understand business objectives and audience expectations." },
              { step: "02", label: "Design & Structure", icon: <PenTool size={32} />, desc: "Create user-focused designs and information architecture." },
              { step: "03", label: "Develop & Integrate", icon: <Code2 size={32} />, desc: "Build secure platforms and integrate functionalities." },
              { step: "04", label: "Test & Launch", icon: <Rocket size={32} />, desc: "Thorough testing, deployment, and ongoing support." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative text-center group z-10"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-24 h-24 bg-slate-800 text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2 duration-500">
                  {item.icon}
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-blue-900">
                  Stage {item.step}
                </div>
                <h4 className="text-xl font-black mt-2 mb-4 tracking-tight text-white">{item.label}</h4>
                <p className="text-white/70 text-sm leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ padding: '100px 5%', textAlign: 'center', background: '#22314f', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>BUILD A WEBSITE THAT WORKS FOR YOUR BUSINESS</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '20px auto 40px', fontWeight: 450 }} className="subtitle">
            Connect with CHN Technologies to understand how structured web design and development solutions can support brand growth, user engagement, and business objectives.
          </p>
          <Link to="/contact">
            <button style={{
              background: '#3b82f6', color: '#fff', padding: '20px 40px', borderRadius: '100px',
              fontWeight: 800, fontSize: '1.05rem', border: 'none', cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)', transition: 'all 0.4s',
              display: 'inline-flex', alignItems: 'center', gap: '10px'
            }}>Get Your Free Consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDesignDevelopment;