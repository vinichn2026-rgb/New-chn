import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText, ShieldCheck, Scale, Calculator, CheckCircle,
  ArrowRight, Lock, Search, PenTool, Activity, Users,
  Database, Layout, Globe, Box, Shield, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import payrollHero from '../assets/payroll_compliance_hero.png';

const PayrollAndCompliancePage = () => {
  return (
    <div className="PC_WRAPPER">
      <style>{`
        .PC_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .PC_Hero {
          position: relative;
          background: #f1f6ff;
          min-height: 85vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 5% 60px;
        }

        .PC_Hero_Shape {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 40%;
          background: #002e5b;
          z-index: 0;
          clip-path: polygon(16% 0%, 100% 0%, 100% 100%, -6% 100%);
        }

        .PC_Hero_Content {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .PC_Hero { padding-top: 140px; }
          .PC_Hero_Content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .PC_Hero_Shape { display: none; }
          .PC_Hero_Right { order: -1; width: 100%; display: flex; justify-content: center; }
          .PC_Hero_Img_Box { width: 100%; max-width: 400px; height: auto; margin: 0 auto; }
          .PC_Hero_Img_Box img { aspect-ratio: 4/5; }
          .PC_Btn { margin: 0 auto;}
        }

        .PC_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 25px; display: block;
        }

        .PC_Hero_H1 { margin-bottom: 30px; }
        .PC_Hero_P { font-size: 1.2rem; color: #64748b; font-weight: 500; line-height: 1.6; margin-bottom: 50px; }

        .PC_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 15px;
          width: fit-content;
        }
        .PC_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }

        .PC_Hero_Img_Box { 
          position: relative; width: 450px; height: 580px; margin-left: auto;
        }
        .PC_Hero_Img_Box img { width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 50px 100px rgba(0,0,0,0.2); border: 4px solid #fff; }
        .PC_Hero_Floating_Card {
          position: absolute; bottom: 40px; left: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .PC_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .PC_Context { padding: 100px 5%; background: #22314f; color: #fff; }
        .PC_Context_Grid { 
          max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; 
        }

        @media (max-width: 1024px) {
          .PC_Context_Grid { grid-template-columns: 1fr; text-align: center; }
          .PC_Context_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
        }

        .PC_Context_H { font-weight: 900; line-height: 1.2; margin-bottom: 40px; color:#ffffff;}
        .PC_Context_P { font-size: 1.15rem; color: #b9d1ff; line-height: 1.8; margin-bottom: 0; }
        .PC_Context_Img img { width: 100%; border-radius: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.3); border: 12px solid #2a3a5a; }

        /* --- SECTION 3: DOMAINS --- */
        .PC_Domains { padding: 100px 5%; background: #ffffff; text-align: center; }
        .PC_Domains_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 25px; 
          max-width: 1300px; 
          margin: 80px auto 0;
        }
        @media (min-width: 768px) { .PC_Domains_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .PC_Domains_Grid { grid-template-columns: repeat(4, 1fr); } }

        .PC_Card {
          background: #f8fafc; padding: 60px 35px; border-radius: 40px; text-align: left;
          position: relative; overflow: hidden; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9; z-index: 1;
        }

        .PC_Card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 0;
 background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);           z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .PC_Card:hover::before { height: 100%; }
        .PC_Card:hover h3, .PC_Card:hover p, .PC_Card_Icon { color: #3b82f6; transition: 0.3s; }
        .PC_Card:hover h3, .PC_Card:hover p { color: #fff !important; }
        .PC_Card:hover .PC_Card_Icon_Box { background: rgba(255,255,255,0.1); color: #fff; }
 
        .PC_Card_Icon_Box { 
          width: 70px; height: 70px; background: #fff; color: #3b82f6; border-radius: 22px; 
          display: flex; align-items: center; justify-content: center; margin-bottom: 35px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s;
        }
        .PC_Card_H { font-size: 1.5rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; }

        /* --- SECTION 4: OUTCOMES --- */
        .PC_Outcome { padding: 50px 5%; background: #fdfdfd; }
        .PC_Outcome_Grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; }

        @media (max-width: 1024px) {
          .PC_Outcome_Grid { grid-template-columns: 1fr; text-align: center; }
          .PC_Outcome_Img_Container { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .PC_Check_Item { text-align: left; }
        }

        .PC_Check_Item { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px; }
        .PC_Check_Icon { min-width: 30px; height: 30px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .PC_Check_H { font-size: 1.25rem; font-weight: 900; color: #1a2b4b; display: block; margin-bottom: 5px; }
        .PC_Check_P { color: #64748b; font-size: 1rem; line-height: 1.6; }

        /* --- SECTION 5: FRAMEWORK --- */
        .PC_Framework { padding: 50px 5%; background: #ffffff; text-align: center; }
        .PC_Framework_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 30px; 
          max-width: 1300px; 
          margin: 80px auto 0; 
        }
        @media (min-width: 768px) { .PC_Framework_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .PC_Framework_Grid { grid-template-columns: repeat(4, 1fr); } }

        .PC_Step_Card {
          background: #f8fafc; padding: 60px 40px; border-radius: 40px; position: relative; border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .PC_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 40px 80px rgba(0,0,0,0.05); }
        .PC_Step_Stage { 
           background: #22314f; color: #fff; font-weight: 900; font-size: 0.75rem; 
           padding: 6px 15px; border-radius: 100px; margin-bottom: 30px; display: inline-block;
        }

        /* --- FINAL --- */
        .PC_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center; 
        }
        .PC_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 50px; color:#ffffff; }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="PC_Hero">
        <div className="PC_Hero_Shape" />
        <div className="PC_Hero_Content">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                Payroll & Compliance
              </span>
            </div>

            <h2 className="PC_Hero_H1 NET_Hero_H1">Payroll & compliance</h2>
            <p className="font-bold mb-6 flex items-center gap-2 subtitle" style={{ fontSize: '1.2rem', color: '#3b82f6' }}>
              <Zap size={24} className="text-blue-600" />
              Built for efficiency, scale, and results
            </p>
            <p className="PC_Hero_P">
              CHN Technologies delivers professional payroll and compliance services focused on financial integrity,
              regulatory accuracy, and long-term corporate stability. Our solutions support zero-error
              processing and organizational security through structured financial engineering.
            </p>
            <Link to="/contact">
              <button className="PC_Btn">Consult on payroll strategy <ArrowRight size={24} /></button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="PC_Hero_Right">
            <div className="PC_Hero_Img_Box">
              <img src={payrollHero} alt="Premium Financial Compliance Architecture" />
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.85, rotate: -2 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                  y: [0, -8, 0] // Smooth floating loop
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: "easeOut",
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut" } // Infinite float
                }}
                className="PC_Hero_Floating_Card flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 relative overflow-hidden"
              >
                <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                    Compliance Index
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-black text-slate-800 tracking-tight">
                      ZERO DEFECT
                    </p>
                    <div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="PC_Context">
        <div className="PC_Context_Grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="PC_Badge">Strategic Foundation</span>
            <h2 className="NET_Hero_H1 PC_Context_H">Financial accuracy protects corporate assets</h2>
            <p className="PC_Context_P">
              Business security and credibility depend on predictable management of regional labor laws and financial processing.
              Poorly managed systems lead to legal debt, financial penalty, and loss of trust. CHN helps maintain structured, secure, and highly accurate business environments.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="PC_Context_Img">
            <img src="/images/payroll-governance.jpg" alt="Governance" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: DOMAINS */}
      <section className="PC_Domains">
        <span className="PC_Badge">Core Domains</span>
        <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b' }}>Consolidated management</h2>

        <div className="PC_Domains_Grid">
          {[
            { title: "End-to-end payroll", icon: <Calculator size={30} />, desc: "Structured management of payroll processes that ensure financial integrity and timely execution." },
            { title: "Statutory compliance", icon: <Scale size={30} />, desc: "Comprehensive oversight of labor regulations and regional standards to minimize organisational risk." },
            { title: "Secure data governance", icon: <ShieldCheck size={30} />, desc: "High-integrity management of sensitive financial data with state-of-the-art encryption protocols." },
            { title: "Audit readiness", icon: <FileText size={30} />, desc: "Continuous internal monitoring to ensure your ecosystem is always audit-ready and legally secure." }
          ].map((item, i) => (
            <motion.div
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="PC_Card group"
            >
              <div className="PC_Card_Icon_Box">{item.icon}</div>
              <h3 className="PC_Card_H">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: OUTCOMES */}
      <section className="PC_Outcome">
        <div className="PC_Outcome_Grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="PC_Outcome_Img_Container">
            <img src="/images/analytics-viz.jpg" alt="Outcomes" style={{ borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', width: '100%' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
            <span className="PC_Badge">Business Impact</span>
            <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b' }}>Benefits of structured control</h2>
            <div className="mt-12">
              {[
                { title: "Predictable tax management", desc: "Error-free tax processing and institutional institutional health." },
                { title: "Optimal resource efficiency", desc: "Automated systems allowing workforce to focus on primary work." },
                { title: "Reduced internal risk", desc: "Frameworks that minimize exposure to regional legal penalty." },
                { title: "Scalable architecture", desc: "Systems designed to grow with workforce and organizational complexity." }
              ].map((item, i) => (
                <div key={i} className="PC_Check_Item">
                  <div className="PC_Check_Icon"><CheckCircle size={18} /></div>
                  <div className="text-left">
                    <span className="PC_Check_H">{item.title}</span>
                    <p className="PC_Check_P">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: FRAMEWORK */}
      <section className="PC_Framework">
        <span className="PC_Badge">Compliance Framework</span>
        <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b' }}>Strategic stages</h2>
        <div className="PC_Framework_Grid">
          {[
            { num: "01", h: "Audit & scoping", icon: <Search size={30} />, p: "Review existing payroll logs, compliance status, and obligations." },
            { num: "02", h: "Process design", icon: <PenTool size={30} />, p: "Structuring zero-error processing models and reporting hierarchies." },
            { num: "03", h: "Execution", icon: <Calculator size={30} />, p: "Implementation of recurring payroll processing and filing protocols." },
            { num: "04", h: "Governance", icon: <Shield size={30} />, p: "Continuous monitoring, internal audits, and regulatory updates." }
          ].map((step, i) => (
            <motion.div
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="PC_Step_Card"
            >
              <span className="PC_Step_Stage">STAGE {step.num}</span>
              <div className="text-blue-500 mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-black text-[#1a2b4b] mb-4">{step.h}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL */}
      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 text-white">Ensure financial integrity and corporate control</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Connect with us to understand how structured systems <br /> support long-term financial scalability.            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="PC_Btn" style={{ margin: '0 auto' }}>Contact for strategy <ArrowRight size={24} /></button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PayrollAndCompliancePage;
