import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText, ShieldCheck, Scale, Calculator, CheckCircle,
  ArrowRight, Lock, Search, PenTool, Activity, Users,
  Database, Layout, Globe, Box, Shield, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
          padding-top: 80px;
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
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .PC_Hero_Content { grid-template-columns: 1fr; text-align: center; }
          .PC_Hero_Shape { display: none; }
          .PC_Hero_Right { display: none; }
        }

        .PC_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 25px; display: block;
        }

        .PC_Hero_H1 {  line-height: 1.1; color: #1a1a1a; margin-bottom: 30px; text-transform: uppercase; }
        .PC_Hero_P { font-size: 1.2rem; color: #64748b; font-weight: 500; line-height: 1.6; margin-bottom: 50px; }

        .PC_Btn { 
          background: #3b82f6; color: white; padding: 22px 50px; border-radius: 100px; 
          font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 15px;
        }
        .PC_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }

        .PC_Hero_Img_Box { 
          position: relative; width: 450px; height: 580px; margin-left: auto;
        }
        .PC_Hero_Img_Box img { width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 50px 100px rgba(0,0,0,0.2); border: 4px solid #fff; }

        /* --- SECTION 2: CONTEXT --- */
        .PC_Context { padding: 80px 3%; background: #22314f; color: #fff; }
        .PC_Context_Grid { 
          max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 1fr; gap: 100px; align-items: center; 
        }

        @media (max-width: 1024px) {
          .PC_Context_Grid { grid-template-columns: 1fr; text-align: center; }
        }

        .PC_Context_H { font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; line-height: 1.2; margin-bottom: 40px; text-transform: uppercase; color:#ffffff;}
        .PC_Context_P { font-size: 1.15rem; color: #b9d1ff; line-height: 1.8; margin-bottom: 0; }
        .PC_Context_Img img { width: 100%; border-radius: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.3); border: 12px solid #2a3a5a; }

        /* --- SECTION 3: DOMAINS --- */
        .PC_Domains { padding: 120px 5%; background: #ffffff; text-align: center; }
        .PC_Domains_Grid { 
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; max-width: 1300px; margin: 80px auto 0;
        }

        @media (max-width: 1024px) {
          .PC_Domains_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .PC_Domains_Grid { grid-template-columns: 1fr; }
        }

        .PC_Card {
          background: #f8fafc; padding: 60px 35px; border-radius: 40px; text-align: left;
          position: relative; overflow: hidden; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9; z-index: 1;
        }

        .PC_Card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #22314f 100%); z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .PC_Card:hover::before { height: 100%; }
        .PC_Card:hover h3, .PC_Card:hover p, .PC_Card_Icon { color: #3b82f6; transition: 0.3s; }
        .PC_Card:hover h3, .PC_Card:hover p { color: #fff !important; }
        .PC_Card:hover .PC_Card_Icon_Box { background: rgba(255,255,255,0.1); }

        .PC_Card_Icon_Box { 
          width: 70px; height: 70px; background: #fff; color: #3b82f6; border-radius: 22px; 
          display: flex; align-items: center; justify-content: center; margin-bottom: 35px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s;
        }
        .PC_Card_H { font-size: 1.5rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; }

        /* --- SECTION 4: OUTCOMES --- */
        .PC_Outcome { padding: 120px 5%; background: #fdfdfd; }
        .PC_Outcome_Grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 100px; align-items: center; }

        @media (max-width: 1024px) {
          .PC_Outcome_Grid { grid-template-columns: 1fr; text-align: center; }
        }

        .PC_Check_Item { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px; }
        .PC_Check_Icon { min-width: 30px; height: 30px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .PC_Check_H { font-size: 1.25rem; font-weight: 900; color: #1a2b4b; display: block; margin-bottom: 5px; }
        .PC_Check_P { color: #64748b; font-size: 1rem; line-height: 1.6; }

        /* --- SECTION 5: FRAMEWORK --- */
        .PC_Framework { padding: 120px 5%; background: #ffffff; text-align: center; }
        .PC_Framework_Grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; max-width: 1300px; margin: 80px auto 0; }

        @media (max-width: 1024px) {
          .PC_Framework_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .PC_Framework_Grid { grid-template-columns: 1fr; }
        }

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
        padding: 80px 5%; 
        background: #002e5b; color: #ffffff; text-align: center; }
        .PC_Final_H
         { font-weight: 900; line-height: 1.1; margin-bottom: 50px; text-transform: uppercase; color:#ffffff; }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="PC_Hero">
        <div className="PC_Hero_Shape" />
        <div className="PC_Hero_Content text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="PC_Badge">Compliance Excellence</span>
            <h1 className="PC_Hero_H1">PAYROLL & COMPLIANCE <br /> <span className="text-blue-500">SERVICES</span></h1>
            <p className="PC_Hero_P">FINANCIAL INTEGRITY AND CORPORATE CONTROL <br /> BUILT ON SECURE, ZERO-ERROR PROCESSING ECOSYSTEMS.</p>
            <Link to="/contact">
              <button className="PC_Btn">Request A Consultation <ArrowRight size={24} /></button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="PC_Hero_Right">
            <div className="PC_Hero_Img_Box">
              <img src="/images/payroll-compliance.jpg" alt="Financial Compliance" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="PC_Context">
        <div className="PC_Context_Grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="PC_Badge">Strategic Foundation</span>
            <h2 className="PC_Context_H">FINANCIAL ACCURACY PROTECTS <br /> CORPORATE ASSETS</h2>
            <p className="PC_Context_P text-left">
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
        <h2 className="PC_Hero_H1" style={{ fontSize: '3rem', color: '#1a2b4b' }}>Consolidated <br /> Management</h2>

        <div className="PC_Domains_Grid">
          {[
            { title: "End-to-End Payroll", icon: <Calculator size={30} />, desc: "Structured management of payroll processes that ensure financial integrity and timely execution." },
            { title: "Statutory Compliance", icon: <Scale size={30} />, desc: "Comprehensive oversight of labor regulations and regional standards to minimize organisational risk." },
            { title: "Secure Data Governance", icon: <ShieldCheck size={30} />, desc: "High-integrity management of sensitive financial data with state-of-the-art encryption protocols." },
            { title: "Audit Readiness", icon: <FileText size={30} />, desc: "Continuous internal monitoring to ensure your ecosystem is always audit-ready and legally secure." }
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
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/images/analytics-viz.jpg" alt="Outcomes" style={{ borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
            <span className="PC_Badge">Business Impact</span>
            <h2 className="PC_Hero_H1" style={{ fontSize: '3rem', color: '#1a2b4b' }}>Benefits of <br /> Structured Control</h2>
            <div className="mt-12">
              {[
                { title: "Predictable Tax Management", desc: "Error-free tax processing and institutional institutional health." },
                { title: "Optimal Resource Efficiency", desc: "Automated systems allowing workforce to focus on primary work." },
                { title: "Reduced Internal Risk", desc: "Frameworks that minimize exposure to regional legal penalty." },
                { title: "Scalable Architecture", desc: "Systems designed to grow with workforce and organizational complexity." }
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
        <h2 className="PC_Hero_H1" style={{ fontSize: '3rem', color: '#1a2b4b' }}>Strategic Stages</h2>
        <div className="PC_Framework_Grid">
          {[
            { num: "01", h: "Audit & Scoping", icon: <Search size={30} />, p: "Review existing payroll logs, compliance status, and obligations." },
            { num: "02", h: "Process Design", icon: <PenTool size={30} />, p: "Structuring zero-error processing models and reporting hierarchies." },
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
      <section className="PC_Final">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <h2 className="PC_Final_H">ENSURE FINANCIAL INTEGRITY <br /> AND CORPORATE CONTROL</h2>
          <p className="text-blue-100/70 text-xl font-medium mb-12">Connect with us to understand how structured systems <br /> support long-term financial scalability.</p>
          <Link to="/contact">
            <button className="PC_Btn" style={{ margin: '0 auto' }}>Contact For Strategy <ArrowRight size={24} /></button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default PayrollAndCompliancePage;
