import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Database, HardDrive, ShieldCheck,
  CheckCircle, ArrowRight, Activity,
  Search, PenTool, Settings, RefreshCw,
  Cpu, Layout, Cloud, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local assets
import serversImg from '../assets/servers.jpg';
import workspaceImg from '../assets/workspace.jpg';

const ServerAdministrationPage = () => {
  return (
    <div className="SA_WRAPPER">
      <style>{`
        .SA_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .SA_Hero {
          padding: 120px 5% 80px;
          display: flex;
          align-items: center;
          gap: 60px;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }

        .SA_Hero_Content { flex: 1.2; max-width: 700px; z-index: 10; }
        .SA_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .SA_Hero_H1 {
        //  font-size: clamp(3rem, 6vw, 5rem); 
         font-weight: 900; line-height: 1.05; color: #0f172a; margin-bottom: 30px; letter-spacing: -0.02em; }
        .SA_Tagline { font-size: 1.5rem; color: #2563eb; font-weight: 700; margin-bottom: 25px; line-height: 1.3; }
        .SA_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 45px; font-weight: 450; }

        .SA_Btn_Group { display: flex; gap: 20px; align-items: center; }
        .SA_Primary_Btn { 
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
          color: white; padding: 20px 40px; border-radius: 100px; 
          font-weight: 800; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .SA_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(37, 99, 235, 0.35); }

        .SA_Secondary_Btn { 
          font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 10px; 
          transition: all 0.3s; text-decoration: none; font-size: 1.05rem;
          padding: 10px 20px; border-radius: 100px;
        }
        .SA_Secondary_Btn:hover { background: rgba(0,0,0,0.03); gap: 15px; }

        .SA_Hero_Img { flex: 1; position: relative; z-index: 5; }
        .SA_Hero_Img img { 
            width: 100%; 
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .SA_Hero_Floating_Card {
          position: absolute; bottom: 40px; left: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .SA_Cap_Section { padding: 140px 5%; background: #f8fafc; text-align: left; }
        .SA_Cap_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 35px; margin-top: 80px; max-width: 1400px; margin-left: auto; margin-right: auto;
        }

        .SA_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .SA_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .SA_Cap_Card:hover::before { height: 100%; }
        .SA_Cap_Card:hover h3, 
        .SA_Cap_Card:hover p,
        .SA_Cap_Card:hover .SA_Cap_Icon { color: #ffffff !important; }
        
        .SA_Cap_Icon { width: 70px; height: 70px; background: #eff6ff; color: #2563eb; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .SA_Cap_Card:hover .SA_Cap_Icon { background: rgba(255,255,255,0.1); }
        .SA_Cap_Card h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .SA_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .SA_Outcome { padding: 140px 5%; display: flex; align-items: center; gap: 100px; background: white; }
        .SA_Outcome_Content { flex: 1; text-align: left; }
        .SA_Outcome_Img { flex: 1; position: relative; }
        .SA_Outcome_Img img { width: 100%; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        .Outcome_List { margin-top: 50px; }
        .Outcome_Item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .Outcome_Check { background: #2563eb; color: white; border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
        .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.25rem; margin-bottom: 5px; letter-spacing: -0.01em; }
        .Outcome_Desc { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

        /* --- SECTION 4: APPROACH --- */
        .SA_Flow { padding: 140px 5%; background: #fdfdfd; text-align: center; }
        .SA_Flow_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 30px; margin-top: 80px; max-width: 1400px; margin: 80px auto 0;
        }
        .SA_Step_Card {
          background: white; border-radius: 30px; padding: 60px 40px; position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .SA_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #2563eb; }
        .SA_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .SA_Step_Icon { color: #2563eb; margin-bottom: 30px; }
        .SA_Step_H { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; }
        .SA_Step_P { color: #64748b; font-size: 1rem; line-height: 1.7; font-weight: 450; }

        @media (max-width: 1024px) {
          .SA_Hero, .SA_Outcome { flex-direction: column; text-align: center; padding-top: 140px; }
          .SA_Hero_Content { text-align: center; }
          .SA_Badge { margin-bottom: 30px; }
          .SA_Btn_Group { justify-content: center; }
          .Outcome_Item { text-align: left; }
          .SA_Hero_Img img { max-width: 100%; border-radius: 40px; }
          .SA_Hero_Floating_Card { left: 50%; transform: translateX(-50%); bottom: -20px; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="SA_Hero">
        <motion.div
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
          className="SA_Hero_Content"
        >
          <span className="SA_Badge">Infrastructure Lifecycle</span>
          <h1 className="SA_Hero_H1">ELITE SERVER <br /> MANAGEMENT</h1>
          <p className="SA_Tagline">Stabilizing mission-critical environments with precision administration.</p>
          <p className="SA_Hero_P">
            CHN Technologies engineers resilient server frameworks designed for 99.9% availability,
            absolute security, and elastic global scalability. We manage the backbone so you can lead the business.
          </p>
          <div className="SA_Btn_Group">
            <Link to="/contact">
              <button className="SA_Primary_Btn">Consult an Architect <ArrowRight size={20} /></button>
            </Link>
            <Link to="/network" className="SA_Secondary_Btn">
              Network Services <Activity size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
          className="SA_Hero_Img"
        >
          <img src={serversImg} alt="Server Infrastructure" />
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
            className="SA_Hero_Floating_Card"
          >
            <div className="bg-blue-100 p-3 rounded-xl"><ShieldCheck className="text-blue-600" /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Security Index</p>
              <p className="text-xl font-black text-slate-800">ISO CERITIFIED</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="SA_Cap_Section">
        <div style={{ maxWidth: '900px', marginBottom: '100px' }}>
          <span className="SA_Badge">Technical Authority</span>
          <h2 className="SA_Hero_H1" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Engineered for Reliability</h2>
          <p className="SA_Hero_P" style={{ fontSize: '1.25rem' }}>
            A single minute of downtime costs an enterprise an average of $5,600. CHN Technologies
            eliminates fragility by implementing standardized, automated, and audited server
            governance models across hybrid-cloud ecosystems.
          </p>
        </div>

        <div className="SA_Cap_Grid">
          {[
            {
              title: "Performance Optimization",
              icon: <Activity size={32} />,
              desc: "Fine-tuning kernel parameters, I/O scheduling, and resource allocation to squeeze maximum performance from your hardware."
            },
            {
              title: "Hybrid-Cloud Governance",
              icon: <Cloud size={32} />,
              desc: "Seamless administration of on-premise iron and distributed cloud instances under a single, unified control plane."
            },
            {
              title: "Automated Continuity",
              icon: <RefreshCw size={32} />,
              desc: "Self-healing infrastructures with automated backup orchestration and zero-latency failover protocols."
            },
            {
              title: "Hardened Security",
              icon: <Shield size={32} />,
              desc: "Military-grade hardening of server OS, real-time threat detection, and continuous compliance auditing."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
              className="SA_Cap_Card"
            >
              <div className="SA_Cap_Icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="SA_Outcome">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="SA_Outcome_Img"
        >
          <img src={workspaceImg} alt="Technical Operations" />
        </motion.div>
        <div className="SA_Outcome_Content">
          <span className="SA_Badge">Value Delivery</span>
          <h2 className="SA_Hero_H1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>Strategic Outcomes of Elite Management</h2>

          <div className="Outcome_List">
            {[
              { title: "Zero-Lag Operations", desc: "Optimised server stacks ensure application response times remain consistent even under peak transactional loads." },
              { title: "Immutable Data Integrity", desc: "Enterprise-grade redundancy and encryption ensure your most valuable data assets are never compromised or lost." },
              { title: "Predictable Cost Scaling", desc: "Optimized resource utilization reduces cloud sprawl and hardware waste, aligning IT spend with literal business value." },
              { title: "Future-Proof Stability", desc: "Infrastructures designed with modularity, allowing for rapid adoption of new technologies without technical debt." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="Outcome_Item"
              >
                <div className="Outcome_Check"><CheckCircle size={22} /></div>
                <div>
                  <span className="Outcome_Title">{item.title}</span>
                  <p className="Outcome_Desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 5 – HOW WE MANAGE (INFOGRAPHIC STYLE) */}
      <section className="SA_Flow">
        <span className="SA_Badge">Operational Lifecycle</span>
        <h2 className="SA_Hero_H1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>The CHN Execution Framework</h2>

        <div className="SA_Flow_Grid">
          {[
            { num: "PHASE 01", h: "Audit & Assess", icon: <Search size={35} />, p: "A deep-dive analysis of your current iron and cloud footprint to identify bottlenecks and risk vectors." },
            { num: "PHASE 02", h: "Strategic Blueprint", icon: <PenTool size={35} />, p: "Drafting an architecture that aligns specialized server roles with high-availability business requirements." },
            { num: "PHASE 03", h: "Active Hardening", icon: <Settings size={35} />, p: "Deploying the stack with full automation, security hardening, and performance fine-tuning." },
            { num: "PHASE 04", h: "Infinite Loop", icon: <Cpu size={35} />, p: "24/7 proactive orchestration, predictive maintenance, and continuous resource optimization." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
              className="SA_Step_Card"
            >
              <div className="SA_Step_Num">{step.num}</div>
              <div className="SA_Step_Icon">{step.icon}</div>
              <h3 className="SA_Step_H">{step.h}</h3>
              <p className="SA_Step_P">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section style={{ padding: '140px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="SA_Hero_H1" style={{ color: '#fff' }}>READY FOR A MORE RELIABLE <br /> SERVER FOUNDATION?</h2>
            <p className="SA_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Stop reacting to server fires. Start driving enterprise growth with a managed
              infrastructure built for absolute predictability and performance.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="SA_Primary_Btn">Launch Your Consultation</button>
              </Link>
              <a href="tel:+91444555666" className="text-white font-bold hover:text-blue-400 transition-colors flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Activity size={20} /></div>
                Speak to Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServerAdministrationPage;