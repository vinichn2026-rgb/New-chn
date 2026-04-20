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
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(0, 96, 255, 0.03) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .CS_Hero { padding-top: 140px; }
        }

        .CS_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .CS_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .CS_Hero_Content { max-width: 100%; order: 1; }
          .CS_Hero_Img { height:450px; order: -1; width: 100%; margin-bottom: 40px; }
          .CS_Hero_Img img { max-width: 380px; border-width: 10px; border-radius: 30px; }
          .CS_Hero_Floating_Card { display: none; }
        }

        .CS_Hero_Content { flex: 1.2; max-width: 700px; }
        .CS_Badge { 
          font-weight: 800; letter-spacing: 3px; 
          color: #2563eb;
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(0, 96, 255, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .CS_Hero_H1 { line-height: 1.05; color: #0f172a; margin-bottom: 30px; letter-spacing: -0.02em; }
        .CS_Tagline { font-size: 1.2rem; color: #0060ff; font-weight: 700; margin-bottom: 25px; line-height: 1.3; }
        .CS_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 45px; font-weight: 450; }

        .CS_Btn_Group { display: flex; gap: 20px; align-items: center; }
        @media (max-width: 1024px) { .CS_Btn_Group { justify-content: center; } }
        
        .CS_Primary_Btn { 
          background: linear-gradient(135deg, #0060ff 0%, #0044cc 100%); 
          color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(0, 96, 255, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .CS_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(0, 96, 255, 0.35); }
.CS_Secondary_Btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
padding: 10px 20px;  border-radius: 9999px; /* Rounded pill shape */
  border: 2px solid #e2e8f0; /* Light border */
  background-color: #ffffff;
  color: #1a2840; /* Deep slate/blue */
          font-weight: 800; font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.CS_Secondary_Btn:hover {
  border-color: #0060ff;
  color: #0060ff;
  box-shadow: 0 10px 15px -3px rgba(0, 96, 255, 0.1);
}
        .CS_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; height:450px;}
        .CS_Hero_Img img { 
            width: 500px; 
            max-width: 500px;
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
        .CS_Cap_Section {
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: left;
          display: flex;
          justify-content: center;
        }
        .CS_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .CS_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .CS_Cap_Grid { grid-template-columns: repeat(4, 1fr); gap: 35px; } }

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
          background: linear-gradient(135deg, #0060ff 0%, #002e5b 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .CS_Cap_Card:hover::before { height: 100%; }
        .CS_Cap_Card:hover h3, 
        .CS_Cap_Card:hover p,
        .CS_Cap_Card:hover .CS_Cap_Icon { color: #ffffff !important; }
        
        .CS_Cap_Icon { width: 70px; height: 70px; background: #f0f7ff; color: #0060ff; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .CS_Cap_Card:hover .CS_Cap_Icon { background: rgba(255,255,255,0.1); }
        .CS_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .CS_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .CS_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white; 
        }
        .CS_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 100px;
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Outcome_Content { flex: 1.2; text-align: left; }
        .CS_Outcome_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .CS_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        .Outcome_List { margin-top: 50px; }
        .Outcome_Item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .Outcome_Check { background: #0060ff; color: white; border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(0, 96, 255, 0.2); }
        .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.25rem; margin-bottom: 5px; letter-spacing: -0.01em; }
        .Outcome_Desc { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

        @media (max-width: 1024px) {
          .CS_Outcome_Inner { flex-direction: column; text-align: center; gap: 60px; }
          .CS_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .CS_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .CS_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 80px; 
          width: 100%;
        }
        @media (min-width: 768px) { .CS_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .CS_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }
        
        .CS_Step_Card {
           background: white; border-radius: 30px;           padding: 60px 30px 40px;
 position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .CS_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #0060ff; }
        .CS_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .CS_Step_Icon { color: #0060ff; margin-bottom: 30px; }
        .CS_Step_H {  font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; }
        .CS_Step_P { color: #64748b; font-size: 1rem; line-height: 1.7; font-weight: 450; }

        .CS_Trust {
          padding: 50px 5%; text-align: center; background: #002e5b; color: #fff; position: relative; overflow: hidden;
          display: flex; justify-content: center;
        }
        .CS_Trust_Inner {
          max-width: 1000px; width: 100%; position: relative; z-index: 10;
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="CS_Hero">
        <div className="CS_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="CS_Hero_Content"
          >
            <span className="CS_Badge uppercase">Digital Fortress</span>
            <h2 className="CS_Hero_H1 NET_Hero_H1">Elite cyber resilience</h2>
            <p className="CS_Tagline">Safeguarding enterprise intelligence with proactive defense ecosystems.</p>
            <p className="CS_Hero_P">
              CHN Technologies engineers structured security frameworks that neutralize threats before they materialize.
              Our Zero-Trust architecture ensures your operations remain immutable, compliant, and consistently secure.
            </p>

            <div className="CS_Btn_Group">
              {/* Fixed: Both buttons now share the same motion logic for consistency */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="CS_Primary_Btn flex items-center gap-2"
                >
                  Consult a defender <ShieldCheck size={20} />
                </motion.button>
              </Link>

              <Link to="/network">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="CS_Secondary_Btn flex items-center gap-2"
                >
                  Network hardening <Activity size={18} className="text-[#0060ff]" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="CS_Hero_Img"
          >
            {/* Ensure heroCyber is imported: import heroCyber from '../assets/...' */}
            <img src={heroCyber} alt="Cyber Security Infrastructure" />

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                y: [0, -10, 0] // Creates a continuous floating bobbing effect
              }}
              transition={{
                opacity: { delay: 0.8, duration: 0.5 },
                x: { delay: 0.8, duration: 0.5 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" } // Floating loop
              }}
              className="CS_Hero_Floating_Card flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 relative"
            >
              {/* Pulsing Icon Background */}
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-blue-400 rounded-xl blur-md"
                />
                <div className="relative bg-blue-100 p-3 rounded-xl z-10">
                  <Lock size={24} className="text-[#0060ff]" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Threat Level</p>
                <motion.p
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-lg font-black text-slate-900 tracking-tight"
                >
                  NEUTRALIZED
                </motion.p>
              </div>

              {/* Tiny Success Dot */}
              <div className="absolute top-3 right-3 h-2 w-2 bg-blue-500 rounded-full animate-ping" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="CS_Cap_Section">
        <div className="CS_Cap_Inner">
          <div style={{ marginBottom: '100px' }}>
            <span className="CS_Badge uppercase">Defensive Authority</span>
            <h2 className="NET_Hero_H1">Built for absolute immunity</h2>
            <p className="CS_Hero_P" style={{ fontSize: '1.25rem' }}>
              In a digital-first economy, proximity to risk is constant. CHN Technologies
              eliminates vulnerability by implementing multi-layered security protocols,
              continuous monitoring, and rapid identification systems across your enterprise.
            </p>
          </div>

          <div className="CS_Cap_Grid">
            {[
              {
                title: "Unified threat mgmt",
                icon: <Activity size={32} />,
                desc: "Predictive threat hunting and real-time monitoring to neutralize advanced persistent threats before they enter your perimeter."
              },
              {
                title: "Zero-trust architecture",
                icon: <Fingerprint size={32} />,
                desc: "Never trust, always verify. We implement granular access controls and identity protection for every single user and device."
              },
              {
                title: "Endpoint orchestration",
                icon: <Network size={32} />,
                desc: "Hardening every point of entry—from mobile devices to global servers—ensuring your entire surface is under active protection."
              },
              {
                title: "Rapid countermeasures",
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
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="CS_Outcome">
        <div className="CS_Outcome_Inner">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="CS_Outcome_Img"
          >
            <img src={dashboardCyber} alt="Security Dashboard" />
          </motion.div>
          <div className="CS_Outcome_Content">
            <span className="CS_Badge uppercase">Digital Impact</span>
            <h2 className="NET_Hero_H1">Strategic outcomes of secure governance</h2>

            <div className="Outcome_List">
              {[
                { title: "Immutable data privacy", desc: "Enterprise-grade encryption and privacy controls ensure your proprietary intelligence remains yours alone." },
                { title: "Operational continuity", desc: "Eliminate downtime caused by security breaches, ransomware, or unauthorized access attempts." },
                { title: "Regulatory superiority", desc: "Seamlessly meet and exceed ISO, SOC2, and GDPR requirements with pre-configured compliance frameworks." },
                { title: "Brand authority", desc: "Build unshakeable trust with clients and partners by demonstrating the highest level of security discipline." }
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
        </div>
      </section>

      {/* LAYOUT 5 – HOW WE DEFEND (INFOGRAPHIC STYLE) */}
      <section className="CS_Flow">
        <div className="CS_Flow_Inner">
          <span className="CS_Badge uppercase">Security Lifecycle</span>
          <h2 className="NET_Hero_H1">The CHN guardian framework</h2>

          <div className="CS_Flow_Grid">
            {[
              { num: "PHASE 01", h: "Vulnerability audit", icon: <Search size={35} />, p: "Exposing invisible weaknesses through ethical hacking, stress tests, and environmental audits." },
              { num: "PHASE 02", h: "Hardened design", icon: <PenTool size={35} />, p: "Drafting a bespoke security architecture that integrates with your existing business flows." },
              { num: "PHASE 03", h: "Active deployment", icon: <Settings size={35} />, p: "Implementing the firewall, encryption, and access controls with precision calibration." },
              { num: "PHASE 04", h: "Infinite watch", icon: <Eye size={35} />, p: "24/7 global SOC monitoring, threat intel sharing, and continuous defense evolution." }
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
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}


      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 text-white">Is your enterprise truly secure?</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Don't wait for a breach to discover your weaknesses. Secure your future
              with a structured defense ecosystem built by experts.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="CS_Primary_Btn">Launch security audit</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityPage;