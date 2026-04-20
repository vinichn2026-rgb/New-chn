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
  Activity,
  ArrowRight,
  Zap,
  MousePointer2,
  Layers,
  CheckCircle
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

        .WD_Step_H{
        font-size: 1.3rem;
    font-weight: 800;
    color: #22314f;
    color: #22314f;
    margin-bottom: 12px;
        }

        .WD_Marquee_Container {
          width: 100%;
          overflow: hidden;
          padding: 20px 0 60px;
        }
        .WD_Marquee_Track {
          display: flex;
          gap: 30px;
          width: fit-content;
          animation: WD_Scroll 50s linear infinite;
        }
        .WD_Marquee_Track:hover {
          animation-play-state: paused;
        }
        @keyframes WD_Scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 15px)); }
        }
        .WD_Card {
          min-width: 320px;
          max-width: 320px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .WD_Card_Title {
          height: 4.5rem;
          display: flex;
          align-items: flex-start;
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
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest border border-blue-100 uppercase">
                Design & Development
              </span>
            </div>
            <h2 className="font-black mb-8 leading-[1.1] text-slate-900 tracking-tight NET_Hero_H1">
              Web Design & Development
            </h2>
            <p className="font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle">
              <Zap size={24} className="text-blue-600" />
              Built for Performance, Scale, and Results
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-xl">
              CHN Technologies delivers professional web design and development services focused on usability, performance, and long-term maintainability. Our solutions support business objectives and digital growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95">
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
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <p className="text-xs text-slate-500 font-bold tracking-wider">Performance</p>
                    </div>
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
            <div className="text-left">
              <span className="text-blue-400 font-black tracking-[0.3em] text-sm mb-6 block uppercase text-center">Strategic Impact</span>
              <h2 className="NET_Hero_H1 text-white text-center">Scale Beyond Aesthetics</h2>
            </div>
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
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="NET_Hero_H1 text-slate-900">What Our Web Services Cover</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
        </div>

        <div className="WD_Marquee_Container">
          <div className="WD_Marquee_Track">
            {/* Double the capabilities to create a seamless loop */}
            {[...capabilities, ...capabilities].map((item, i) => (
              <motion.div
                key={i}
                className="WD_Card p-10 border border-slate-200 rounded-[2.5rem] bg-white card-hover-effect group flex flex-col"
                {...fadeIn}
                transition={{ delay: (i % capabilities.length) * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div className="WD_Card_Title mb-2">
                  <h3 className="text-xl font-black text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed min-h-[4.5rem]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto">
            <motion.div className="lg:w-1/2" {...fadeIn}>
              <div className="text-center mb-16">
                <span className="text-blue-600 font-bold tracking-widest text-sm mb-4 block uppercase">Measurable Results</span>
                <h2 className="NET_Hero_H1">Business Outcomes</h2>
              </div>
              <div className="grid gap-8">
                {[
                  { label: "Stronger Brand Credibility", text: "Well-designed websites reinforce professionalism and trust.", icon: <CheckCircle size={16} /> },
                  { label: "Improved User Engagement", text: "Clear navigation and intuitive interfaces support better user interaction.", icon: <CheckCircle size={16} /> },
                  { label: "Higher Conversion Potential", text: "Structured layouts and content flows support lead generation and enquiries.", icon: <CheckCircle size={16} /> },
                  { label: "Scalable Digital Foundation", text: "Web platforms designed to evolve with business growth and digital initiatives.", icon: <CheckCircle size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="bg-blue-600 text-white rounded-full p-1 flex items-center justify-center shrink-0 w-7 h-7 mt-1">
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
      <section className="py-24 bg-[#fafafc] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-blue-600 font-bold tracking-[0.1em] mb-4 block text-sm uppercase">How We Design & Develop Web Platforms</span>
            <h2 className="NET_Hero_H1 mb-16">The Web Design Lifecycle</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-7xl mx-auto text-left">
            {[
              { step: "01", label: "Discover & Assess", icon: <Search size={36} strokeWidth={1.5} />, desc: "Understand business objectives, audience expectations, and existing digital assets." },
              { step: "02", label: "Design & Structure", icon: <PenTool size={36} strokeWidth={1.5} />, desc: "Create user-focused designs, information architecture, and visual systems." },
              { step: "03", label: "Develop & Integrate", icon: <Settings size={36} strokeWidth={1.5} />, desc: "Build secure, scalable web platforms and integrate required functionalities." },
              { step: "04", label: "Test, Launch & Support", icon: <Activity size={36} strokeWidth={1.5} />, desc: "Thorough testing, deployment, and ongoing optimisation support." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group z-10 flex flex-col h-full"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -top-3 left-8 bg-[#1e293b] text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-wider shadow-lg">
                  Phase {i + 1}
                </div>
                <div className="text-blue-600 mb-8 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="h-[3.5rem] flex items-start mb-2">
                  <h3 className="WD_Step_H" style={{ marginBottom: 0 }}>{item.label}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 text-white">Build a Website That Works for Your Business</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Connect with CHN Technologies to understand how structured web design and development solutions can support brand growth, user engagement, and business objectives.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button style={{
                  background: '#3b82f6', color: '#fff', padding: '10px 20px', borderRadius: '100px',
                  fontWeight: 800, fontSize: '1.05rem', border: 'none', cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)', transition: 'all 0.4s',
                  display: 'inline-flex', alignItems: 'center', gap: '10px'
                }}>Get Your Free Consultation</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WebDesignDevelopment;