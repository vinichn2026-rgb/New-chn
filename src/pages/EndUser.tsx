import React from 'react';
import { motion } from 'framer-motion';
import {
    Monitor, ShieldCheck, Users, CheckCircle,
    ArrowRight, Laptop, Smartphone, UserCheck,
    Settings, Search, PenTool, Activity, HardDrive, Layout, RefreshCw, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import specialized computing assets

const EndUserComputingPage = () => {
    return (
        <div className="EUC_WRAPPER">
            <style>{`
        .EUC_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .EUC_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .EUC_Hero { padding-top: 140px; }
        }

        .EUC_Hero_Inner {
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
          .EUC_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .EUC_Hero_Content { max-width: 100%; order: 1; }
          .EUC_Hero_Img { order: -1; width: 100%; margin-bottom: 40px; }
          .EUC_Hero_Img img { max-width: 380px; border-width: 10px; border-radius: 30px; }
          .EUC_Hero_Floating_Card { display: none; }
        }

        .EUC_Hero_Content { flex: 1.2; max-width: 700px; }
        .EUC_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: capitalize; 
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .EUC_Hero_H1 
        { 
         margin-bottom: 30px;
        }
        .EUC_Tagline { font-size: 1.2rem; color: #2563eb; font-weight: 700; margin-bottom: 25px; line-height: 1.0; }
        .EUC_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.7; margin-bottom: 45px; font-weight: 450; }

        .EUC_Btn_Group { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        @media (max-width: 1024px) { .EUC_Btn_Group { justify-content: center; } }
        
        .EUC_Primary_Btn { 
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
          color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 800; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .EUC_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(37, 99, 235, 0.35); }

        .EUC_Hero_Img { height:450px; flex: 1; position: relative; display: flex; justify-content: center; }
        .EUC_Hero_Img img { 
            width: 100%; 
            max-width: 500px;
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .EUC_Hero_Floating_Card {
          position: absolute; bottom: 40px; left: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .EUC_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: left;
          display: flex;
          justify-content: center;
        }
        .EUC_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Cap_Grid { 
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-top: 80px;
          width: 100%;
        }
        @media (min-width: 768px) { .EUC_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .EUC_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .EUC_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .EUC_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .EUC_Cap_Card:hover::before { height: 100%; }
        .EUC_Cap_Card:hover h3, 
        .EUC_Cap_Card:hover p,
        .EUC_Cap_Card:hover .EUC_Cap_Icon { color: #ffffff !important; }
        
        .EUC_Cap_Icon { width: 70px; height: 70px; background: #eff6ff; color: #2563eb; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .EUC_Cap_Card:hover .EUC_Cap_Icon { background: rgba(255,255,255,0.1); }
        .EUC_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .EUC_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .EUC_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          justify-content: center;
          background: white; 
        }
        .EUC_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Outcome_Content { flex: 1.2; text-align: left; }
        .EUC_Outcome_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .EUC_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        @media (max-width: 1024px) {
          .EUC_Outcome_Inner { flex-direction: column; text-align: center; gap: 60px; }
          .EUC_Outcome_Img { order: -1; width: 100%; }
        }
        
         .Outcome_List { display: flex; flex-direction: column; gap: 40px; margin-top: 50px; }
         .Outcome_Item { display: flex; gap: 20px; align-items: flex-start; text-align: left; }
         .Outcome_Check { 
            background: #2563eb; color: white; border-radius: 12px; width: 44px; height: 44px; min-width: 44px;
            display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); 
            margin-top: 4px;
         }
         .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.3rem; margin-bottom: 8px; letter-spacing: -0.01em; }
         .Outcome_Desc { color: #64748b; font-size: 1.1rem; line-height: 1.7; font-weight: 450; margin: 0; }

        /* --- SECTION 4: APPROACH --- */
        .EUC_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .EUC_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Flow_Grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 30px; 
          margin-top: 80px; 
          width: 100%;
        }
        
        .EUC_Step_Card {
          background: white; border-radius: 30px;           padding: 60px 30px 40px;
 position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .EUC_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #2563eb; }
        .EUC_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .EUC_Step_Icon { color: #2563eb; margin-bottom: 30px; }
        .EUC_Step_H { font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; 
        // text-transform: capitalize;
        }
        .EUC_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.7; font-weight: 450; }

        @media (max-width: 1024px) {
          .EUC_Hero, .EUC_Outcome { flex-direction: column; text-align: center; padding-top: 140px; }
          .EUC_Hero_Content { text-align: center; }
          .EUC_Badge { margin-bottom: 30px; }
          .EUC_Btn_Group { justify-content: center; }
          .Outcome_Item { text-align: left; }
          .EUC_Hero_Img img { max-width: 100%; border-radius: 40px; }
          .EUC_Hero_Floating_Card { left: 50%; transform: translateX(-50%); bottom: -20px; }
        }
      `}</style>

            {/* LAYOUT 1 – PAGE HERO */}
            <section className="EUC_Hero">
                <div className="EUC_Hero_Inner">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
                        className="EUC_Hero_Content"
                    >
                        <span className="EUC_Badge">Cognitive Workspace</span>
                        <h2 className="EUC_Hero_H1 NET_Hero_H1 capitalize">seamless user computing</h2>
                        <p className="EUC_Tagline">Frictionless productivity through elite endpoint orchestration.</p>
                        <p className="EUC_Hero_P">
                            CHN Technologies delivers structured end-user computing services that ensure your workforce
                            stays agile, secure, and consistently productive across any device, anywhere in the world.
                        </p>
                        <div className="EUC_Btn_Group">
                            <Link to="/contact">
                                <button className="EUC_Primary_Btn">Talk to an EUC Expert <ArrowRight size={20} /></button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
                        className="EUC_Hero_Img"
                    >
                        <img src="/images/enduser-hero.png" alt="Modern End-User Workspace" />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                            className="EUC_Hero_Floating_Card"
                        >
                            <div className="bg-blue-100 p-3 rounded-xl"><UserCheck className="text-blue-600" /></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">User Efficiency</p>
                                <p className="text-xl font-black text-slate-800">+40% GROWTH</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
            <section className="EUC_Cap_Section">
                <div className="EUC_Cap_Inner">
                    <div style={{ marginBottom: '100px' }}>
                        <span className="EUC_Badge">Operational Freedom</span>
                        <h2 className="NET_Hero_H1 capitalize">modernizing the human-system interface</h2>
                        <p className="EUC_Hero_P" style={{ fontSize: '1.25rem' }}>
                            The bottleneck of enterprise growth is often the endpoint. CHN Technologies
                            standardizes the user experience, eliminating technical debt and support
                            firefighting with automated lifecycle management.
                        </p>
                    </div>

                    <div className="EUC_Cap_Grid">
                        {[
                            {
                                title: "Unified Device Lifecycle",
                                icon: <Laptop size={32} />,
                                desc: "Zero-touch provisioning and automated decommissioning, ensuring your hardware fleet is always current, patched, and performing."
                            },
                            {
                                title: "Virtualized Desktops",
                                icon: <Monitor size={32} />,
                                desc: "High-performance VDI solutions that deliver secure corporate environments to any machine, reducing hardware dependency."
                            },
                            {
                                title: "Cognitive Application Hub",
                                icon: <Layout size={32} />,
                                desc: "Centralized application management with automated updates and role-based delivery, keeping teams in a flow-state."
                            },
                            {
                                title: "Identity Protection",
                                icon: <ShieldCheck size={32} />,
                                desc: "Biometric authentication and multi-factor identity governance that moves with the user, not just the machine."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
                                className="EUC_Cap_Card"
                            >
                                <div className="EUC_Cap_Icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LAYOUT 4 – BUSINESS OUTCOMES */}
            <section className="EUC_Outcome">
                <div className="EUC_Outcome_Inner">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                        className="EUC_Outcome_Img"
                    >
                        <img src="/images/elite_endpoint_outcomes.png" alt="Productivity Operations" />
                    </motion.div>
                    <div className="EUC_Outcome_Content">
                        <span className="EUC_Badge">Workforce Impact</span>
                        <h2 className="NET_Hero_H1 capitalize">strategic outcomes of elite endpoint management</h2>

                        <div className="Outcome_List">
                            {[
                                { title: "Universal Consistency", desc: "A unified user experience across mobile, tablet, and desktop, reducing learning curves and support tickets." },
                                { title: "Peak Workforce Mobility", desc: "Empower remote and hybrid teams with secure, high-speed access to every corporate asset from any location." },
                                { title: "Aggressive Cost Reduction", desc: "Consolidate hardware spend and automate L1 support tasks, redirecting IT budget toward innovation." },
                                { title: "Absolute Compliance", desc: "Automated auditing and remote-wipe capabilities ensure corporate data never leaves your control plane." }
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

            {/* LAYOUT 5 – HOW WE MANAGE (INFOGRAPHIC STYLE) */}
            <section className="EUC_Flow">
                <div className="EUC_Flow_Inner">
                    <span className="EUC_Badge">Transformation Lifecycle</span>
                    <h2 className="NET_Hero_H1 capitalize">the chn productivity framework</h2>

                    <div className="EUC_Flow_Grid">
                        {[
                            { num: "PHASE 01", h: "User Analytics", icon: <Search size={35} />, p: "Mapping user personas and application dependencies to identify friction points in your current workflow." },
                            { num: "PHASE 02", h: "Experience Design", icon: <PenTool size={35} />, p: "Drafting a unified computing architecture that balances absolute security with maximum usability." },
                            { num: "PHASE 03", h: "Global Rollout", icon: <Settings size={35} />, p: "Rapid integration of new endpoint standards with zero-touch configuration and migration." },
                            { num: "PHASE 04", h: "Adaptive Tuning", icon: <RefreshCw size={35} />, p: "Continuous performance monitoring and proactive UX refinements to keep your workforce ahead." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }}
                                className="EUC_Step_Card"
                            >
                                <div className="EUC_Step_Num">{step.num}</div>
                                <div className="EUC_Step_Icon">{step.icon}</div>
                                <h3 className="EUC_Step_H">{step.h}</h3>
                                <p className="EUC_Step_P">{step.p}</p>
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
                        <h2 className="NET_Hero_H1 text-white capitalize">ready to liberate  your workforce?</h2>
                        <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
                            Stop managing devices. Start empowering people. Join the enterprises
                            shifting to elite end-user computing with CHN Technologies.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link to="/contact">
                                <button className="EUC_Primary_Btn">Launch Workforce Audit</button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EndUserComputingPage;