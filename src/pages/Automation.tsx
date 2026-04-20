import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Cpu, RefreshCw, Repeat, CheckCircle, ArrowRight,
  Bot, Cog, Workflow, Layers, PenTool, Activity, Search,
  Database, Layout, Globe, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomationPage = () => {
  return (
    <div className="AU_WRAPPER">
      <style>{`
        .AU_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .AU_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .AU_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .AU_Hero { padding-top: 140px; }
          .AU_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AU_Hero_Content { max-width: 100%; }
          .AU_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .AU_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .AU_Hero_Content { flex: 1.2; max-width: 650px; }
        .AU_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .AU_Hero_H1 {  margin-bottom: 25px; }
        .AU_Tagline { font-size: clamp(1.1rem, 2vw, 1.4rem); color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .AU_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .AU_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .AU_Btn_Group { justify-content: center; } }
        .AU_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .AU_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .AU_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .AU_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CONTEXT --- */
        .AU_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .AU_Context_H1 { color: #fff; }
        .AU_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .AU_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AU_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .AU_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .AU_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .AU_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .AU_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .AU_Cap_Card:hover::before { height: 100%; }
        .AU_Cap_Card:hover h3, 
        .AU_Cap_Card:hover p,
        .AU_Cap_Card:hover .AU_Cap_Icon { color: #ffffff !important; }
        
        .AU_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .AU_Cap_Card:hover .AU_Cap_Icon { background: rgba(255,255,255,0.1); }
        .AU_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .AU_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .AU_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .AU_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .AU_Outcome_Content { flex: 1.2; text-align: left; }
        .AU_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .AU_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .AU_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AU_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .AU_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AU_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .AU_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .AU_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .AU_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .AU_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .AU_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .AU_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .AU_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .AU_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        .AU_Trust {
          padding: 120px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .AU_Trust_Inner { max-width: 900px; width: 100%; }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="AU_Hero">
        <div className="AU_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="AU_Hero_Content"
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest border border-blue-100 uppercase">
                Digital Transformation             </span>
            </div>
            <h2 className="AU_Hero_H1 NET_Hero_H1">Process automation services</h2>
            <p className="AU_Tagline">Eliminating operational friction through intelligent, high-fidelity automation.</p>
            {/* <p className="AU_Hero_P">
              CHN Technologies provides structured automation services that ensure speed,
              reliability, and resource optimization across business environments. Our approach
              focuses on process integrity, scalable logic, and measurable impact.
            </p> */}
            <div className="AU_Btn_Group">
              <Link to="/contact">
                <button className="AU_Primary_Btn">Consult an automation specialist</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="AU_Hero_Img"
          >
            <img src="/images/automation-process.jpg" alt="Process Automation Cog" />
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="AU_Context">
        <div className="AU_Context_Inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 AU_Context_H1">Repetitive manual work is a silent tax on enterprise growth</h2>
            <p className="AU_Context_P">
              Business productivity depends on how much of your resource capacity is focused on high-value strategy versus low-value manual processing.
              Poorly automated or manual workflows lead to operational debt, human error, and reduced organizational speed.
              CHN Technologies helps organisations maintain structured, secure, and highly autonomous business environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="AU_Cap_Section">
        <div className="AU_Cap_Inner">
          <span className="AU_Badge">Core Capabilities</span>
          <h2 className="NET_Hero_H1">Full-spectrum digital automation</h2>

          <div className="AU_Cap_Grid">
            {[
              {
                title: "RPA solutions",
                icon: <Bot size={28} />,
                desc: "Robotic Process Automation to handle repetitive, manual tasks with high speed and zero error."
              },
              {
                title: "Workflow automation",
                icon: <Workflow size={28} />,
                desc: "Streamlining end-to-end business processes through intelligent digital sequencing."
              },
              {
                title: "IT automation",
                icon: <RefreshCw size={28} />,
                desc: "Automating infrastructure management, scaling, and recovery for high-performance uptime."
              },
              {
                title: "AI-driven logic",
                icon: <Cpu size={28} />,
                desc: "Integrating machine learning models to provide semi-autonomous decision-making at scale."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="AU_Cap_Card"
              >
                <div className="AU_Cap_Icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="AU_Outcome">
        <div className="AU_Outcome_Inner">
          <div className="AU_Outcome_Img">
            <img src="/images/automation-robotic.jpg" alt="Robotic Precision" />
          </div>
          <div className="AU_Outcome_Content">
            <span className="AU_Badge">Strategic Outcomes</span>
            <h2 className="NET_Hero_H1">Benefits of high-fidelity automation</h2>

            <div className="Outcome_List">
              {[
                { title: "Improved process velocity", desc: "Drastic reduction in process completion times through parallel multi-thread automation." },
                { title: "Optimal resource reallocation", desc: "Free up workforce capacity for high-value strategic work rather than data entry." },
                { title: "Predictable operational accuracy", desc: "Systematic elimination of manual and human errors in mission-critical workflows." },
                { title: "Scalable task architecture", desc: "Automation environments that grow with your organizational complexity and volume." }
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
      <section className="AU_Flow">
        <div className="AU_Flow_Inner">
          <span className="AU_Badge">Productivity Framework</span>
          <h2 className="NET_Hero_H1">Strategic approach</h2>

          <div className="AU_Flow_Grid">
            {[
              { num: "01", h: "Discovery", icon: <Search size={30} />, p: "Mapping manual processes and identifying high-impact automation candidates." },
              { num: "02", h: "System design", icon: <PenTool size={30} />, p: "Creating the logic and sequencing models for autonomous execution." },
              { num: "03", h: "Build", icon: <Bot size={30} />, p: "Implementation of robotics and workflow scripts in a secure environment." },
              { num: "04", h: "Optimize", icon: <Activity size={30} />, p: "Continuous monitoring and refinement of automation threads for maximum ROI." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="AU_Step_Card"
              >
                <div className="AU_Step_Num">STAGE {step.num}</div>
                <div className="AU_Step_Icon">{step.icon}</div>
                <h3 className="AU_Step_H">{step.h}</h3>
                <p className="AU_Step_P">{step.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 text-white">Eliminate operational friction today</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Connect with CHN Technologies to understand how intelligent automation solutions
              can optimize your enterprise resource allocation and operational speed.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="AU_Primary_Btn" style={{ background: '#3b82f6', color: '#fff' }}>Contact an automation specialist</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AutomationPage;
