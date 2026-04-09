import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Search, CheckCircle, ArrowRight, UserPlus,
  Briefcase, TrendingUp, ShieldCheck, Zap, Activity, PenTool,
  Layers, Database, Layout, Globe, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkforceManagementPage = () => {
  return (
    <div className="WM_WRAPPER">
      <style>{`
        .WM_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .WM_Hero {
          padding: 100px 5% 60px;
          display: flex;
          align-items: center;
          gap: 50px;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }
        @media (max-width: 1024px) {
          .WM_Hero { flex-direction: column; text-align: center; padding-top: 140px; }
          .WM_Hero_Content { max-width: 100%; order: 1; }
          .WM_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .WM_Hero_Img img { max-width: 400px; border-width: 10px; }
          .WM_Btn_Group { justify-content: center; }
        }

        .WM_Hero_Content { flex: 1; max-width: 650px; }
        .WM_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .WM_Hero_H1 { font-weight: 900; line-height: 1.1; color: #22314f; margin-bottom: 25px; font-size: clamp(2.5rem, 5vw, 4rem); }
        .WM_Tagline { font-size: clamp(1.1rem, 2vw, 1.4rem); color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .WM_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .WM_Btn_Group { display: flex; gap: 20px; }
        .WM_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .WM_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .WM_Hero_Img { flex: 1; position: relative; }
        .WM_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CONTEXT --- */
        .WM_Context { padding: 100px 5%; background: #0f172a; color: #fff; text-align: center; }
        .WM_Context_H1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; color: #fff; text-transform: uppercase; }
        .WM_Context_P { max-width: 900px; margin: 0 auto; color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .WM_Cap_Section { padding: 100px 5%; background: #f8fafc; text-align: center; }
        .WM_Cap_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 25px; 
          margin-top: 60px; 
          max-width: 1400px; 
          margin-left: auto; 
          margin-right: auto;
        }
        @media (min-width: 768px) { .WM_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WM_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .WM_Cap_Card {
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

        .WM_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .WM_Cap_Card:hover::before { height: 100%; }
        .WM_Cap_Card:hover h3, 
        .WM_Cap_Card:hover p,
        .WM_Cap_Card:hover .WM_Cap_Icon { color: #ffffff !important; }
        
        .WM_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .WM_Cap_Card:hover .WM_Cap_Icon { background: rgba(255,255,255,0.1); }
        .WM_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .WM_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .WM_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          align-items: center; 
          gap: 60px; 
        }
        .WM_Outcome_Content { flex: 1; }
        .WM_Outcome_Img { flex: 1; }
        .WM_Outcome_Img img { width: 100%; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .WM_Outcome { flex-direction: column; text-align: center; gap: 40px; }
          .WM_Outcome_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .WM_Flow { padding: 100px 5%; background: #fdfdfd; text-align: center; }
        .WM_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          max-width: 1300px; 
          margin: 60px auto 0;
        }
        @media (min-width: 768px) { .WM_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WM_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .WM_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .WM_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .WM_Step_Num { 
          position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem; white-space: nowrap;
        }
        .WM_Step_Icon { color: #3b82f6; margin-bottom: 20px; display: flex; justify-content: center; }
        .WM_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .WM_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        @media (max-width: 1024px) {
          .WM_Hero, .WM_Outcome { flex-direction: column; text-align: center; }
        }

        /* --- SECTION 6: FINAL --- */
        .WM_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center; 
        }
        .WM_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 30px; text-transform: uppercase; color:#ffffff; font-size: clamp(2rem, 5vw, 3.5rem); }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="WM_Hero">
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="WM_Hero_Content"
        >
          <span className="WM_Badge">Consulting Excellence</span>
          <h1 className="WM_Hero_H1">WORKFORCE MANAGEMENT SERVICES</h1>
          <p className="WM_Tagline">Building high-fidelity workforces through strategic acquisition and structural oversight.</p>
          <div className="WM_Btn_Group">
            <Link to="/contact">
              <button className="WM_Primary_Btn">Consult on Workforce Strategy</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="WM_Hero_Img"
        >
          <img src="/images/blog-featured.jpg" alt="Workforce Team Strategy" />
        </motion.div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="WM_Context">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="WM_Context_H1">YOUR WORKFORCE IS THE PRIMARY ARCHITECTURE OF OPERATIONAL SUCCESS</h2>
          <p className="WM_Context_P">
            Business performance depends on how consistently and predictably you can manage and expand your human capital.
            Poorly managed workforce environments lead to internal debt, high hiring overhead, and reduced organizational speed.
            CHN Technologies helps organisations maintain structured, secure, and highly productive business teams.
          </p>
        </motion.div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="WM_Cap_Section">
        <span className="WM_Badge">Core Domains</span>
        <h2 className="WM_Hero_H1" style={{ fontSize: '2.5rem' }}>Workforce Consulting <br /> Capabilities</h2>

        <div className="WM_Cap_Grid">
          {[
            {
              title: "Talent Acquisition",
              icon: <UserPlus size={28} />,
              desc: "Structured recruitment processes that focus on both technical proficiency and organizational fit."
            },
            {
              title: "Workforce Planning",
              icon: <Briefcase size={28} />,
              desc: "Strategic resource modeling for anticipating operational shifts and staffing requirements."
            },
            {
              title: "Performance Strategy",
              icon: <TrendingUp size={28} />,
              desc: "Developing frameworks that align individual workforce goals with enterprise business outcomes."
            },
            {
              title: "Compliance & Integrity",
              icon: <ShieldCheck size={28} />,
              desc: "Ensuring all workforce practices are aligned with regional labor laws and internal ethics standards."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="WM_Cap_Card"
            >
              <div className="WM_Cap_Icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="WM_Outcome">
        <div className="WM_Outcome_Img">
          <img src="/images/about-main.jpg" alt="Business Growth" />
        </div>
        <div className="WM_Outcome_Content">
          <span className="WM_Badge">Business Benefits</span>
          <h2 className="WM_Hero_H1" style={{ fontSize: '2.5rem' }}>Benefits of Structured <br /> Workforce Management</h2>

          <div className="Outcome_List">
            {[
              { title: "Predictable Retention Rates", desc: "Workforce strategies that ensure long-term stability and reduce institutional knowledge debt." },
              { title: "Optimal Resource Utilization", desc: "Balanced workforce loads that ensure maximum productivity from every team member." },
              { title: "Reduced Internal Overhead", desc: "Structured management environments that minimize friction and improve internal speed." },
              { title: "Scalable Talent Architecture", desc: "External and internal talent pipelines that grow smoothly with organisational cycle." }
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
      </section>

      {/* LAYOUT 5 – OUR APPROACH */}
      <section className="WM_Flow">
        <span className="WM_Badge">Consulting Framework</span>
        <h2 className="WM_Hero_H1" style={{ fontSize: '2.5rem' }}>Workforce Lifecycle Approach</h2>

        <div className="WM_Flow_Grid">
          {[
            { num: "01", h: "Talent Acquisition", icon: <UserPlus size={30} />, p: "Sourcing and evaluating human capital based on technical and cultural parameters." },
            { num: "02", h: "Strategic Planning", icon: <PenTool size={30} />, p: "Forecasting operational needs and structural staffing requirements." },
            { num: "03", h: "Performance Audit", icon: <Activity size={30} />, p: "Aalysing workforce output and aligning goals with digital outcomes." },
            { num: "04", h: "Policy Compliance", icon: <ShieldCheck size={30} />, p: "Stabilising legal and ethical integrity through structured workforce policy." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="WM_Step_Card"
            >
              <div className="WM_Step_Num">STAGE {step.num}</div>
              <div className="WM_Step_Icon">{step.icon}</div>
              <h3 className="WM_Step_H">{step.h}</h3>
              <p className="WM_Step_P">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 6 – FINAL CTA */}
      <section className="WM_Final">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <h2 className="WM_Final_H">OPTIMISE YOUR REVENUE THROUGH <br /> WORKFORCE STABILITY</h2>
          <p className="text-blue-100/70 text-xl font-medium mb-12">
            Connect with CHN Technologies to understand how structured workforce management solutions <br />
            can support operational efficiency and organizational scalability.
          </p>
          <Link to="/contact">
            <button className="WM_Primary_Btn" style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
              Contact a Workforce Specialist <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WorkforceManagementPage;
