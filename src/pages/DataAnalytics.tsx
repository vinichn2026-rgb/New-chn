import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, PieChart, TrendingUp, Database, CheckCircle,
  ArrowRight, Lock, Search, PenTool, Activity, Users,
  Layers, Cpu, Layout, Globe, Box, Shield, LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalyticsPage = () => {
  return (
    <div className="DA_WRAPPER">
      <style>{`
        .DA_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .DA_Hero {
          padding: 100px 5%;
          display: flex;
          align-items: center;
          gap: 50px;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .DA_Hero_Content { flex: 1; max-width: 650px; }
        .DA_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .DA_Hero_H1 { font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 900; line-height: 1.1; color: #22314f; margin-bottom: 25px; }
        .DA_Tagline { font-size: clamp(1.1rem, 2vw, 1.4rem); color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .DA_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .DA_Btn_Group { display: flex; gap: 20px; }
        .DA_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .DA_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .DA_Hero_Img { flex: 1; position: relative; }
        .DA_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CONTEXT --- */
        .DA_Context { padding: 100px 5%; background: #0f172a; color: #fff; text-align: center; }
        .DA_Context_H1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; color: #fff; text-transform: uppercase; }
        .DA_Context_P { max-width: 900px; margin: 0 auto; color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .DA_Cap_Section { padding: 100px 5%; background: #f8fafc; text-align: center; }
        .DA_Cap_Grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 25px; 
          margin-top: 60px; 
          max-width: 1400px; 
          margin-left: auto; 
          margin-right: auto;
        }

        @media (max-width: 1200px) {
          .DA_Cap_Grid { grid-template-columns: repeat(2, 1fr); }
        }

        .DA_Cap_Card {
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

        .DA_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .DA_Cap_Card:hover::before { height: 100%; }
        .DA_Cap_Card:hover h3, 
        .DA_Cap_Card:hover p,
        .DA_Cap_Card:hover .DA_Cap_Icon { color: #ffffff !important; }
        
        .DA_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .DA_Cap_Card:hover .DA_Cap_Icon { background: rgba(255,255,255,0.1); }
        .DA_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .DA_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .DA_Outcome { padding: 100px 5%; display: flex; align-items: center; gap: 80px; }
        .DA_Outcome_Content { flex: 1; }
        .DA_Outcome_Img { flex: 1; }
        .DA_Outcome_Img img { width: 100%; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .DA_Flow { padding: 100px 5%; background: #fdfdfd; text-align: center; }
        .DA_Flow_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
          gap: 30px; margin-top: 60px; max-width: 1300px; margin: 60px auto 0;
        }
        .DA_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .DA_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .DA_Step_Num { 
          position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .DA_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .DA_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .DA_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        @media (max-width: 1024px) {
          .DA_Hero, .DA_Outcome { flex-direction: column; text-align: center; }
          .DA_Btn_Group { justify-content: center; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="DA_Hero">
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="DA_Hero_Content"
        >
          <span className="DA_Badge">Digital Intelligence</span>
          <h1 className="DA_Hero_H1">DATA ANALYTICS SERVICES</h1>
          <p className="DA_Tagline">Mission-critical insights driven by high-fidelity data and predictable modeling.</p>
          <p className="DA_Hero_P">
            CHN Technologies provides structured data analytics services that ensure visibility,
            accountability, and strategic oversight across business environments. Our approach
            focuses on data integrity, scalable modeling, and real-world impact.
          </p>
          <div className="DA_Btn_Group">
            <Link to="/contact">
              <button className="DA_Primary_Btn">Consult a Data Strategist</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="DA_Hero_Img"
        >
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data Visualization Dashboard" />
        </motion.div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="DA_Context">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="DA_Context_H1">DATA IS THE PRIMARY DRIVER OF STRATEGIC COMPETITIVE ADVANTAGE</h2>
          <p className="DA_Context_P">
            Business growth depends on how predictably you can model your operational environment.
            Poorly analyzed or siloed data leads to strategic debt, misaligned investment, and reduced efficiency.
            CHN Technologies helps organisations maintain structured, secure, and highly visible data ecosystems.
          </p>
        </motion.div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="DA_Cap_Section">
        <span className="DA_Badge">Analytical Domains</span>
        <h2 className="DA_Hero_H1" style={{ fontSize: '2.5rem' }}>Full-Cycle Analytical <br /> Capabilities</h2>

        <div className="DA_Cap_Grid">
          {[
            {
              title: "Predictive Analytics",
              icon: <TrendingUp size={28} />,
              desc: "Using historical data and AI models to forecast business trends and operational shifts."
            },
            {
              title: "Business Intelligence",
              icon: <BarChart3 size={28} />,
              desc: "Customized dashboarding and reporting systems for real-time visibility into mission-critical KPIs."
            },
            {
              title: "Data Warehousing",
              icon: <Database size={28} />,
              desc: "Structured data storage and management that ensures large-scale information remains accessible."
            },
            {
              title: "Integration Services",
              icon: <Layers size={28} />,
              desc: "Consolidating data from disparate business systems to provide a single, unified source of truth."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="DA_Cap_Card"
            >
              <div className="DA_Cap_Icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="DA_Outcome">
        <div className="DA_Outcome_Img">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Strategic Insight" />
        </div>
        <div className="DA_Outcome_Content">
          <span className="DA_Badge">Strategic Benefits</span>
          <h2 className="DA_Hero_H1" style={{ fontSize: '2.5rem' }}>Improved Decision <br /> Precision and Velocity</h2>

          <div className="Outcome_List">
            {[
              { title: "Improved Decision Precision", desc: "Empirical insights that reduce reliance on intuition and drive predictable outcomes." },
              { title: "Optimal Strategic Scaling", desc: "Data-driven models that group operational growth with measurable market opportunities." },
              { title: "Enhanced Real-Time Visibility", desc: "Dashboarding systems that provide continuous oversight across mission-critical systems." },
              { title: "Predictable Future Modeling", desc: "Forecasting methods that ensure organisations are ready for evolving business cycles." }
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
      <section className="DA_Flow">
        <span className="DA_Badge">Insight Framework</span>
        <h2 className="DA_Hero_H1" style={{ fontSize: '2.5rem' }}>Data-to-Insight Journey</h2>

        <div className="DA_Flow_Grid">
          {[
            { num: "01", h: "Data Ingestion", icon: <Database size={30} />, p: "Consolidating raw data from disparate business sources into a unified hub." },
            { num: "02", h: "Strategic Modeling", icon: <LineChart size={30} />, p: "Creating mathematical models that represent your operational business logic." },
            { num: "03", h: "Visualization", icon: <PieChart size={30} />, p: "Building high-fidelity dashboards that translate data into human-readable insight." },
            { num: "04", h: "Decision Support", icon: <TrendingUp size={30} />, p: "Continuous analytical refinement to support mission-critical decision making." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="DA_Step_Card"
            >
              <div className="DA_Step_Num">STAGE {step.num}</div>
              <div className="DA_Step_Icon">{step.icon}</div>
              <h3 className="DA_Step_H">{step.h}</h3>
              <p className="DA_Step_P">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section style={{ padding: '100px 5%', textAlign: 'center', background: '#22314f', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="DA_Hero_H1" style={{ fontSize: '2.5rem', color: '#fff' }}>CONVERT YOUR DATA INTO STRATEGIC REVENUE</h2>
          <p className="DA_Hero_P" style={{ margin: '20px auto 40px', color: 'rgba(255,255,255,0.7)' }}>
            Connect with CHN Technologies to understand how high-fidelity analytical models 
            can optimize your enterprise decision-making and operational growth.
          </p>
          <Link to="/contact">
            <button className="DA_Primary_Btn" style={{ background: '#3b82f6', color: '#fff' }}>Contact a Data Strategist</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;
