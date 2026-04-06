import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Lock, Eye, ShieldAlert,
  CheckCircle, ArrowRight, Fingerprint,
  Network, FileSearch, Shield, Activity, Search, PenTool, Settings, Key, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import specialized security assets
import heroCyber from '../assets/hero_team_cyber.png';
import dashboardCyber from '../assets/dashboard_cyber.png';

const CyberSecurityPage = () => {
  return (
    <div className="CS_WRAPPER">
      <style>{`
        .CS_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .CS_Hero {
          padding: 120px 5% 80px;
          display: flex;
          align-items: center;
          gap: 60px;
          background: radial-gradient(circle at 10% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }

        .CS_Hero_Content { flex: 1.2; max-width: 700px; z-index: 10; }
        .CS_Badge { 
          color: #dc2626; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(220, 38, 38, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .CS_Hero_H1 { font-size: clamp(3rem, 6vw, 5rem); font-weight: 900; line-height: 1.05; color: #0f172a; margin-bottom: 30px; letter-spacing: -0.02em; }
        .CS_Tagline { font-size: 1.5rem; color: #dc2626; font-weight: 700; margin-bottom: 25px; line-height: 1.3; }
        .CS_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 45px; font-weight: 450; }

        .CS_Btn_Group { display: flex; gap: 20px; align-items: center; }
        .CS_Primary_Btn { 
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); 
          color: white; padding: 20px 40px; border-radius: 100px; 
          font-weight: 800; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .CS_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(220, 38, 38, 0.35); }

        .CS_Secondary_Btn { 
          font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 10px; 
          transition: all 0.3s; text-decoration: none; font-size: 1.05rem;
          padding: 10px 20px; border-radius: 100px;
        }
        .CS_Secondary_Btn:hover { background: rgba(0,0,0,0.03); gap: 15px; }

        .CS_Hero_Img { flex: 1; position: relative; z-index: 5; }
        .CS_Hero_Img img { 
            width: 100%; 
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .CS_Hero_Floating_Card {
          position: absolute; top: 40px; right: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .CS_Cap_Section { padding: 140px 5%; background: #f8fafc; text-align: left; }
        .CS_Cap_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 35px; margin-top: 80px; max-width: 1400px; margin-left: auto; margin-right: auto;
        }

        .CS_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .CS_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(135deg, #991b1b 0%, #450a0a 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .CS_Cap_Card:hover::before { height: 100%; }
        .CS_Cap_Card:hover h3, 
        .CS_Cap_Card:hover p,
        .CS_Cap_Card:hover .CS_Cap_Icon { color: #ffffff !important; }
        
        .CS_Cap_Icon { width: 70px; height: 70px; background: #fef2f2; color: #dc2626; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .CS_Cap_Card:hover .CS_Cap_Icon { background: rgba(255,255,255,0.1); }
        .CS_Cap_Card h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .CS_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .CS_Outcome { padding: 140px 5%; display: flex; align-items: center; gap: 100px; background: white; }
        .CS_Outcome_Content { flex: 1; text-align: left; }
        .CS_Outcome_Img { flex: 1; position: relative; }
        .CS_Outcome_Img img { width: 100%; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        .Outcome_List { margin-top: 50px; }
        .Outcome_Item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .Outcome_Check { background: #dc2626; color: white; border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2); }
        .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.25rem; margin-bottom: 5px; letter-spacing: -0.01em; }
        .Outcome_Desc { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

        /* --- SECTION 4: APPROACH --- */
        .CS_Flow { padding: 140px 5%; background: #fdfdfd; text-align: center; }
        .CS_Flow_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 30px; margin-top: 80px; max-width: 1400px; margin: 80px auto 0;
        }
        .CS_Step_Card {
          background: white; border-radius: 30px; padding: 60px 40px; position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .CS_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #dc2626; }
        .CS_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .CS_Step_Icon { color: #dc2626; margin-bottom: 30px; }
        .CS_Step_H { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; }
        .CS_Step_P { color: #64748b; font-size: 1rem; line-height: 1.7; font-weight: 450; }

        @media (max-width: 1024px) {
          .CS_Hero, .CS_Outcome { flex-direction: column; text-align: center; padding-top: 140px; }
          .CS_Hero_Content { text-align: center; }
          .CS_Badge { margin-bottom: 30px; }
          .CS_Btn_Group { justify-content: center; }
          .Outcome_Item { text-align: left; }
          .CS_Hero_Img img { max-width: 100%; border-radius: 40px; }
          .CS_Hero_Floating_Card { left: 50%; transform: translateX(-50%); top: -20px; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="CS_Hero">
        <motion.div
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
          className="CS_Hero_Content"
        >
          <span className="CS_Badge">Digital Fortress</span>
          <h1 className="CS_Hero_H1">ELITE CYBER <br /> RESILIENCE</h1>
          <p className="CS_Tagline">Safeguarding enterprise intelligence with proactive defense ecosystems.</p>
          <p className="CS_Hero_P">
            CHN Technologies engineers structured security frameworks that neutralize threats before they materialize.
            Our Zero-Trust architecture ensures your operations remain immutable, compliant, and consistently secure.
          </p>
          <div className="CS_Btn_Group">
            <Link to="/contact">
              <button className="CS_Primary_Btn">Consult a Defender <ShieldCheck size={20} /></button>
            </Link>
            <Link to="/network" className="CS_Secondary_Btn">
              Network Hardening <Activity size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
          className="CS_Hero_Img"
        >
          <img src={heroCyber} alt="Cyber Security Experts" />
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
            className="CS_Hero_Floating_Card"
          >
            <div className="bg-red-100 p-3 rounded-xl"><Lock className="text-red-600" /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Threat Level</p>
              <p className="text-xl font-black text-slate-800">MITIGATED</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="CS_Cap_Section">
        <div style={{ maxWidth: '900px', marginBottom: '100px' }}>
          <span className="CS_Badge">Defensive Authority</span>
          <h2 className="CS_Hero_H1" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Built for Absolute Immunity</h2>
          <p className="CS_Hero_P" style={{ fontSize: '1.25rem' }}>
            In a digital-first economy, proximity to risk is constant. CHN Technologies 
            eliminates vulnerability by implementing multi-layered security protocols, 
            continuous monitoring, and rapid identification systems across your enterprise.
          </p>
        </div>

        <div className="CS_Cap_Grid">
          {[
            {
              title: "Unified Threat Mgmt",
              icon: <Activity size={32} />,
              desc: "Predictive threat hunting and real-time monitoring to neutralize advanced persistent threats before they enter your perimeter."
            },
            {
              title: "Zero-Trust Architecture",
              icon: <Fingerprint size={32} />,
              desc: "Never trust, always verify. We implement granular access controls and identity protection for every single user and device."
            },
            {
              title: "Endpoint Orchestration",
              icon: <Network size={32} />,
              desc: "Hardening every point of entry—from mobile devices to global servers—ensuring your entire surface is under active protection."
            },
            {
              title: "Rapid Countermeasures",
              icon: <Zap size={32} />,
              desc: "Automated incident response protocols that contain and isolate threats in milliseconds, preserving core operational integrity."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
              className="CS_Cap_Card"
            >
              <div className="CS_Cap_Icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="CS_Outcome">
        <motion.div 
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="CS_Outcome_Img"
        >
          <img src={dashboardCyber} alt="Security Dashboard" />
        </motion.div>
        <div className="CS_Outcome_Content">
          <span className="CS_Badge">Digital Impact</span>
          <h2 className="CS_Hero_H1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>Strategic Outcomes of Secure Governance</h2>

          <div className="Outcome_List">
            {[
              { title: "Immutable Data Privacy", desc: "Enterprise-grade encryption and privacy controls ensure your proprietary intelligence remains yours alone." },
              { title: "Operational Continuity", desc: "Eliminate downtime caused by security breaches, ransomware, or unauthorized access attempts." },
              { title: "Regulatory Superiority", desc: "Seamlessly meet and exceed ISO, SOC2, and GDPR requirements with pre-configured compliance frameworks." },
              { title: "Brand Authority", desc: "Build unshakeable trust with clients and partners by demonstrating the highest level of security discipline." }
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

      {/* LAYOUT 5 – HOW WE DEFEND (INFOGRAPHIC STYLE) */}
      <section className="CS_Flow">
        <span className="CS_Badge">Security Lifecycle</span>
        <h2 className="CS_Hero_H1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>The CHN Guardian Framework</h2>

        <div className="CS_Flow_Grid">
          {[
            { num: "PHASE 01", h: "Vulnerability Audit", icon: <Search size={35} />, p: "Exposing invisible weaknesses through ethical hacking, stress tests, and environmental audits." },
            { num: "PHASE 02", h: "Hardened Design", icon: <PenTool size={35} />, p: "Drafting a bespoke security architecture that integrates with your existing business flows." },
            { num: "PHASE 03", h: "Active Deployment", icon: <Settings size={35} />, p: "Implementing the firewall, encryption, and access controls with precision calibration." },
            { num: "PHASE 04", h: "Infinite Watch", icon: <Eye size={35} />, p: "24/7 global SOC monitoring, threat intel sharing, and continuous defense evolution." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
              className="CS_Step_Card"
            >
              <div className="CS_Step_Num">{step.num}</div>
              <div className="CS_Step_Icon">{step.icon}</div>
              <h3 className="CS_Step_H">{step.h}</h3>
              <p className="CS_Step_P">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section style={{ padding: '140px 5%', textAlign: 'center', background: '#450a0a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="SA_Hero_H1" style={{ color: '#fff' }}>IS YOUR ENTERPRISE <br /> TRULY SECURE?</h2>
            <p className="SA_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Don't wait for a breach to discover your weaknesses. Secure your future 
              with a structured defense ecosystem built by experts.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="CS_Primary_Btn">Launch Security Audit</button>
              </Link>
              <a href="tel:+91444555666" className="text-white font-bold hover:text-red-400 transition-colors flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Key size={20} /></div>
                Speak to a Defender
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityPage;