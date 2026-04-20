import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Braces, Layers, Smartphone, ShieldCheck, GitBranch,
  RefreshCw, Search, PenTool, Settings, Activity, CheckCircle,
  ArrowRight, Database, Layout, Smartphone as MobileIcon, Box, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import appDevHero from '../assets/application_development_hero.png';

const ApplicationDevelopmentPage = () => {
  return (
    <div className="AD_WRAPPER">
      <style>{`
        .AD_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .AD_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .AD_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .AD_Hero { padding-top: 140px; }
          .AD_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AD_Hero_Content { max-width: 100%; }
          .AD_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .AD_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .AD_Hero_Content { flex: 1.2; max-width: 650px; }
        .AD_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .AD_Hero_H1 {
         margin-bottom: 5px; }
        .AD_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .AD_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .AD_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .AD_Btn_Group { justify-content: center; } }
        .AD_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .AD_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .AD_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .AD_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .AD_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .AD_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .AD_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .AD_Context_H1 { font-weight: 900; margin-bottom: 30px; color: #fff; }
        .AD_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .AD_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AD_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }

        .AD_Cap_Card {
          background: white;
          padding: 30px 20px;
          border-radius: 20px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .AD_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .AD_Cap_Card:hover::before { height: 100%; }
        .AD_Cap_Card:hover h3, 
        .AD_Cap_Card:hover p,
        .AD_Cap_Card:hover .AD_Cap_Icon { color: #ffffff !important; }
        
        .AD_Cap_Icon { width: 50px; height: 50px; background: #eff6ff; color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: 0.3s; }
        .AD_Cap_Card:hover .AD_Cap_Icon { background: rgba(255,255,255,0.1); }
        .AD_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .AD_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        @media (min-width: 640px) {
          .AD_Cap_Grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
        }
        @media (min-width: 1024px) {
          .AD_Cap_Grid { grid-template-columns: repeat(5, 1fr); gap: 30px; }
          .AD_Cap_Card { padding: 45px 35px; border-radius: 30px; }
          .AD_Cap_Icon { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 25px; }
          .AD_Cap_Icon svg { width: 28px; height: 28px; }
          .AD_Cap_Card h3 { font-size: 1.4rem; margin-bottom: 15px; }
          .AD_Cap_Card p { font-size: 0.95rem; line-height: 1.6; }
        }

        /* --- SECTION 4: OUTCOMES --- */
        .AD_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .AD_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .AD_Outcome_Content { flex: 1.2; text-align: left; }
        .AD_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .AD_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .AD_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AD_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .AD_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AD_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }
        .AD_Step_Card {
          background: white; border-radius: 20px; padding: 40px 20px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .AD_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .AD_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem; white-space: nowrap;
        }
        .AD_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .AD_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .AD_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        @media (min-width: 640px) {
          .AD_Flow_Grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1024px) {
          .AD_Flow_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
          .AD_Step_Card { padding: 50px 30px; border-radius: 20px; }
          .AD_Step_Icon svg { width: 30px; height: 30px; }
        }


        
        .AD_Trust {
          padding: 50px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .AD_Trust_Inner { max-width: 900px; width: 100%; }

        @media (max-width: 1024px) {
          .AD_Hero, .AD_Outcome { flex-direction: column; text-align: center; }
          .AD_Btn_Group { justify-content: center; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="AD_Hero">
        <div className="AD_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="AD_Hero_Content"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                Application Development
              </span>
            </div>
            <h2 className="AD_Hero_H1 NET_Hero_H1">Application Development</h2>
            <p className="font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle" style={{ fontSize: '1.4rem', color: '#3b82f6' }}>
              <Zap size={24} className="text-blue-600" />
              Custom software built for scale and efficiency
            </p>
            <p className="AD_Hero_P">
              CHN Technologies delivers professional application development services focused on performance,
              security, and scalability. Our software solutions support mission-critical workflows and
              organisational growth through structured engineering.
            </p>
            <div className="AD_Btn_Group">
              <Link to="/contact">
                <button className="AD_Primary_Btn">Start your application project</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="AD_Hero_Img"
          >
            <img src={appDevHero} alt="Premium Application Development Architecture" />
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="AD_Hero_Floating_Card bg-white/90 backdrop-blur-md"
            >
              <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0">
                <Code2 className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  Architecture Score
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-black text-slate-800 tracking-tight">
                    HIGH PERFORMANCE
                  </p>
                  <div className="h-4 w-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="AD_Context">
        <div className="AD_Context_Inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 AD_Context_H1">Applications are Core to Business Operations</h2>
            <p className="AD_Context_P">
              Modern organisations rely on applications to manage processes, data, and customer interactions. Off-the-shelf tools often fail to align fully with unique workflows, leading to inefficiencies and limitations.
              CHN Technologies helps organisations design and develop custom applications that fit operational needs, improve productivity, and support digital transformation initiatives with clarity and control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="AD_Cap_Section">
        <div className="AD_Cap_Inner">
          <span className="AD_Badge">Core Capabilities</span>
          <h2 className="NET_Hero_H1"> Our Application Development Services Cover</h2>

          <div className="AD_Cap_Grid">
            {[
              {
                title: "Custom Business Apps",
                icon: <Braces size={28} />,
                desc: "Design and development of applications tailored to specific operational and business requirements."
              },
              {
                title: "Enterprise Solutions",
                icon: <Box size={28} />,
                desc: "Development of scalable applications that support complex workflows and multi-user environments."
              },
              {
                title: "System Integration & APIs",
                icon: <GitBranch size={28} />,
                desc: "Integration of applications with existing systems, databases, and third-party platforms."
              },
              {
                title: "Application Modernisation",
                icon: <RefreshCw size={28} />,
                desc: "Enhancement or re-engineering of legacy applications to improve performance and usability."
              },
              {
                title: "Testing & Quality Assurance",
                icon: <ShieldCheck size={28} />,
                desc: "Structured testing to ensure reliability, security, and functional accuracy across all units."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="AD_Cap_Card"
              >
                <div className="AD_Cap_Icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="AD_Outcome">
        <div className="AD_Outcome_Inner">
          <div className="AD_Outcome_Img">
            <img src="/images/appdev-team.jpg" alt="Software Development Team" />
          </div>
          <div className="AD_Outcome_Content">
            <span className="AD_Badge">Business Benefits</span>
            <h2 className="NET_Hero_H1">Benefits of Structured Application Development</h2>

            <div className="Outcome_List">
              {[
                { title: "Operational Efficiency", desc: "Applications designed around workflows reduce manual effort and process gaps." },
                { title: "Improved Data Accuracy", desc: "Centralised applications ensure consistent data handling and reporting." },
                { title: "Scalable Digital Capabilities", desc: "Applications that grow with business needs and system complexity." },
                { title: "Long-Term Cost Effectiveness", desc: "Well-architected applications reduce maintenance and rework costs." }
              ].map((item, i) => (
                <div key={i} className="Outcome_Item">
                  <div className="Outcome_Check"><CheckCircle size={16} /></div>
                  <div>
                    <span className="Outcome_Title">{item.title}</span>
                    <p className="Outcome_Desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LAYOUT 5 – OUR APPROACH */}
      <section className="AD_Flow">
        <div className="AD_Flow_Inner">
          <span className="AD_Badge">Strategic Approach</span>
          <h2 className="NET_Hero_H1">How We Build Applications</h2>

          <div className="AD_Flow_Grid">
            {[
              { num: "01", h: "Discover & Assess", icon: <Search size={30} />, p: "Understand business processes, technical requirements, and integration needs." },
              { num: "02", h: "Design & Architect", icon: <PenTool size={30} />, p: "Define application architecture, data models, and user flows." },
              { num: "03", h: "Develop & Integrate", icon: <Settings size={30} />, p: "Build secure applications and integrate with required systems and services." },
              { num: "04", h: "Test & Deploy", icon: <Activity size={30} />, p: "Comprehensive testing, deployment, and ongoing optimisation support." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="AD_Step_Card"
              >
                <div className="AD_Step_Num">STAGE {step.num}</div>
                <div className="AD_Step_Icon">{step.icon}</div>
                <h3 className="AD_Step_H">{step.h}</h3>
                <p className="AD_Step_P">{step.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section className="AD_Trust">
        <div className="AD_Trust_Inner">
          <h2 className="NET_Hero_H1 text-white">Build Applications That Support Your Business</h2>
          <p className="AD_Hero_P" style={{ margin: '20px auto 40px', color: 'rgba(255,255,255,0.7)' }}>
            Connect with CHN Technologies to understand how structured application development solutions
            can support operational efficiency and digital growth.
          </p>
          <Link to="/contact">
            <button className="AD_Primary_Btn" style={{ background: '#3b82f6', color: '#fff' }}>Request a consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDevelopmentPage;
