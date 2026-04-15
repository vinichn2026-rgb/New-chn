import React from 'react';
import { motion } from 'framer-motion';
import {
  Network, ShieldCheck, Activity, Users, Zap, CheckCircle,
  ArrowRight, Shield, Globe, Server, Database, BarChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Replace with your local assets if needed
import heroTeam from '../assets/network_management_hero.png';
import networkDashboard from '../assets/network_dashboard.png';

const NetworkManagementPage = () => {
  return (
    <div className="NET_WRAPPER">
      <style>{`
        .NET_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;


          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .NET_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
          min-height: 85vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .NET_Hero { padding-top: 140px; }
        }

        .NET_Hero_Inner {
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
          .NET_Hero_Inner { flex-direction: column; text-align: center; }
          .NET_Hero_Content { max-width: 100%; order: 1; }
          .NET_Hero_Img { order: -1; width: 100%; margin-bottom: 40px; }
          .NET_Hero_Img img { max-width: 320px; border-width: 10px; }
        }

        .NET_Hero_Content { flex: 1.2; max-width: 700px; }
        .NET_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: capitalize; 
          font-size: 0.85rem; margin-bottom: 20px; display: inline-block;
          background: rgba(59, 130, 246, 0.06); padding: 6px 16px; border-radius: 100px;
        }
        .NET_Hero_H1 { 
          margin-bottom: 25px; 
        }
        .NET_Tagline { font-size: 1rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; text-transform: capitalize;}
        .NET_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .NET_Btn_Group { display: flex; gap: 20px; }
        .NET_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
        }
        .NET_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .NET_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .NET_Hero_Img img { 
          width: 100%; 
          max-width: 500px; 
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 500px; 
          border: 15px solid #fff; 
          box-shadow: 0 40px 100px rgba(59,130,246,0.1); 
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .NET_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .NET_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }

        .NET_Cap_Card {
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

        .NET_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .NET_Cap_Card:hover::before { height: 100%; }

        .NET_Cap_Card:hover h3, 
        .NET_Cap_Card:hover p,
        .NET_Cap_Card:hover .NET_Cap_Icon { color: #ffffff !important; }
        
        .NET_Cap_Icon { width: 50px; height: 50px; background: #eff6ff; color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: 0.3s; }
        .NET_Cap_Card:hover .NET_Cap_Icon { background: rgba(255,255,255,0.15); }
        .NET_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .NET_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        @media (min-width: 640px) {
          .NET_Cap_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .NET_Cap_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
          .NET_Cap_Card { padding: 45px 35px; border-radius: 30px; }
          .NET_Cap_Icon { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 25px; }
          .NET_Cap_Icon svg { width: 28px; height: 28px; }
        }

        /* --- SECTION 3: OUTCOMES --- */
        .NET_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: #fff;
        }
        .NET_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Outcome_Content { flex: 1.2; }
        .NET_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .NET_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.06); border: 1px solid #f1f5f9; }
        
        @media (max-width: 1024px) {
          .NET_Outcome_Inner { flex-direction: column; text-align: center; }
          .NET_Outcome_Img { order: -1; width: 100%; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; text-align: left; }
        .Outcome_Check { background: #3b82f6; color: white; border-radius: 50%; padding: 6px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.15rem; margin-bottom: 4px; }
        .Outcome_Desc { color: #64748b; font-size: 1rem; line-height: 1.6; }

        /* --- SECTION 4: FLOW (STEPS) --- */
        .NET_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center; 
          display: flex;
          justify-content: center;
        }
        .NET_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 80px; 
          width: 100%;
          font-size:1.5rem;
        }

        .NET_Step_Card {
          background: white;
          border-radius: 20px;
          padding: 60px 30px 40px;
          position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.04);
          border: 1px solid #f1f5f9;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .NET_Step_Card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.08);
          border-color: #3b82f6;
        }

        @media (min-width: 640px) {
          .NET_Flow_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .NET_Flow_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
        }

        .NET_Step_Header {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          padding: 8px 30px;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 1px;
          border-radius: 8px;
          min-width: 140px;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
          background: #1d4ed8;
        }

        .NET_Step_Icon {
          color: #3b82f6;
          margin-bottom: 25px;
          background: #eff6ff;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        .NET_Step_H {
          font-size: 1.25rem;
          font-weight: 800;
          color: #22314f;
          margin-bottom: 15px;
        }

        .NET_Step_P {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .NET_Step_Footer {
          width: 40px;
          height: 4px;
          background: #3b82f6;
          border-radius: 10px;
          margin-top: 25px;
          opacity: 0.3;
        }

        .NET_Trust {
          padding: 50px 5%;
          text-align: center;
          background: #fff;
          display: flex;
          justify-content: center;
        }
        .NET_Trust_Inner {
          max-width: 800px;
          width: 100%;
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="NET_Hero">
        <div className="NET_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="NET_Hero_Content"
          >
            <span className="NET_Badge">Technology Services</span>
            {/* <h2 className="NET_Hero_H1 font-bold tracking-tight text-3xl md:text-4xl capitalize">network management services</h2> */}
            <h2 className="NET_Hero_H1 capitalize">
              network management services
            </h2>

            <p className="NET_Tagline">Reliable, secure, and high-performance networks.</p>
            <p className="NET_Hero_P">
              CHN Technologies provides structured network management services that ensure stable connectivity,
              controlled access, and continuous performance across business environments.
            </p>
            <Link to="/contact">
              <button className="NET_Primary_Btn">Talk to a Specialist</button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="NET_Hero_Img"
          >
            <img src={heroTeam} alt="Network Experts" />
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="NET_Cap_Section">
        <div className="NET_Cap_Inner">
          <span className="NET_Badge">What Our Network Management Covers</span>
          <h2 className="NET_Hero_H1 capitalize">structured connectivity  for business continuity</h2>

          <div className="NET_Cap_Grid">
            {[
              {
                title: "Monitoring & Performance",
                icon: <Activity size={28} />,
                desc: "Continuous monitoring to detect issues early and maintain optimal network performance."
              },
              {
                title: "Security & Access Control",
                icon: <Shield size={28} />,
                desc: "Implementation of secure access policies, firewalls, and segmentation to reduce risk."
              },
              {
                title: "Infrastructure Maintenance",
                icon: <Server size={28} />,
                desc: "Structured configuration and maintenance of routers, switches, and components."
              },
              {
                title: "Incident Management",
                icon: <Zap size={28} />,
                desc: "Rapid identification and resolution of network disruptions to minimise downtime."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="NET_Cap_Card"
              >
                <div className="NET_Cap_Icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="NET_Outcome">
        <div className="NET_Outcome_Inner">
          <div className="NET_Outcome_Img">
            <img src={networkDashboard} alt="Network Dashboard" />
          </div>
          <div className="NET_Outcome_Content" style={{ textAlign: 'left' }}>
            <span className="NET_Badge">Business Benefits</span>
            <h2 className="NET_Hero_H1 capitalize">outcomes of structured management</h2>

            <div className="Outcome_List">
              {[
                { title: "Improved Network Stability", desc: "Reduced disruptions and consistent connectivity across systems." },
                { title: "Enhanced Security Posture", desc: "Controlled access and monitored traffic reduce exposure to threats." },
                { title: "Operational Efficiency", desc: "Reliable networks support productivity and reduce IT firefighting." },
                { title: "Scalable Architecture", desc: "Network designs that grow alongside business requirements." }
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

      {/* LAYOUT 5 – HOW WE MANAGE NETWORKS (Step Infographic) */}
      <section className="NET_Flow">
        <div className="NET_Flow_Inner">
          <span className="NET_Badge">Execution Model</span>
          <h2 className="NET_Hero_H1 capitalize">our network management approach</h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="NET_Flow_Grid"
          >
            {[
              { num: "01", h: "Assess", icon: <BarChart size={32} />, p: "Review existing architecture, performance gaps, and security risks.", class: "Step_01" },
              { num: "02", h: "Design", icon: <Database size={32} />, p: "Define structured network policies and monitoring standards.", class: "Step_02" },
              { num: "03", h: "Implement", icon: <Server size={32} />, p: "Deploy and configure components with minimal disruption.", class: "Step_03" },
              { num: "04", h: "Monitor", icon: <Activity size={32} />, p: "Ongoing performance tracking and continuous improvement.", class: "Step_04" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
                }}
                className="NET_Step_Card"
              >
                <div className={`NET_Step_Header ${item.class}`}>
                  STEP {item.num}
                </div>
                <div className="NET_Step_Icon">
                  {item.icon}
                </div>
                <h3 className="NET_Step_H">{item.h}</h3>
                <p className="NET_Step_P">{item.p}</p>
                <div className="NET_Step_Footer"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & ASSURANCE */}
      <section className="NET_Trust">
        <div className="NET_Trust_Inner">
          <h2 className="NET_Hero_H1 capitalize">built for reliability and control</h2>
          <p className="NET_Hero_P">
            CHN Technologies manages networks with a focus on predictability, accountability, and long-term stability.
            Our services align with operational requirements and compliance needs.
          </p>
          <Link to="/contact">
            <button className="NET_Primary_Btn" style={{ marginTop: '20px' }}>Contact a Network Specialist</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkManagementPage;