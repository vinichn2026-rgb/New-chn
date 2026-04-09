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
          padding: 100px 5%;
          display: flex;
          align-items: center;
          gap: 50px;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
          min-height: 85vh;
        }

        .NET_Hero_Content { flex: 1; max-width: 650px; }
        .NET_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .NET_Hero_H1 { 
        // font-size: clamp(2.5rem, 5vw, 4rem); 
        font-weight: 900; line-height: 1.1; color: #22314f; margin-bottom: 25px; }
        .NET_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .NET_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .NET_Btn_Group { display: flex; gap: 20px; }
        .NET_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
        }
        .NET_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .NET_Secondary_Btn { font-weight: 700; color: #22314f; display: flex; align-items: center; gap: 8px; transition: 0.3s; }
        .NET_Secondary_Btn:hover { color: #3b82f6; gap: 12px; }

        .NET_Hero_Img { flex: 1; position: relative; }
        .NET_Hero_Img img { 
          width: 100%; 
          max-width: 500px; 
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 500px; 
          border: 15px solid #fff; 
          box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
        }

        /* --- SECTION 2: CAPABILITIES (The Blue Shade Hover Section) --- */
        .NET_Cap_Section { padding: 100px 5%; background: #f8fafc; text-align: center; }
        
        .NET_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          max-width: 1300px; 
          margin-left: auto; 
          margin-right: auto;
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

        /* The Blue Shade Animation Layer */
        .NET_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .NET_Cap_Card:hover::before { height: 100%; }

        /* Text & Icon color change on hover */
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

        @media (min-width: 768px) {
          .NET_Cap_Grid { grid-template-columns: repeat(4, 1fr); gap: 15px; }
          .NET_Cap_Card { padding: 15px 12px; border-radius: 15px; }
          .NET_Cap_Icon { width: 35px; height: 35px; border-radius: 8px; margin-bottom: 12px; }
          .NET_Cap_Icon svg { width: 18px; height: 18px; }
          .NET_Cap_Card h3 { font-size: 0.95rem; margin-bottom: 8px; }
          .NET_Cap_Card p { font-size: 0.75rem; line-height: 1.4; }
        }

        @media (min-width: 1024px) {
          .NET_Cap_Grid { gap: 30px; }
          .NET_Cap_Card { padding: 45px 35px; border-radius: 30px; }
          .NET_Cap_Icon { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 25px; }
          .NET_Cap_Icon svg { width: 28px; height: 28px; }
          .NET_Cap_Card h3 { font-size: 1.4rem; margin-bottom: 15px; }
          .NET_Cap_Card p { font-size: 0.95rem; line-height: 1.6; }
        }

        /* --- SECTION 3: OUTCOMES --- */
        .NET_Outcome { padding: 100px 5%; display: flex; align-items: center; gap: 80px; }
        .NET_Outcome_Content { flex: 1; }
        .NET_Outcome_Img { flex: 1; }
        .NET_Outcome_Img img { width: 100%; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        
        .Outcome_List { margin-top: 40px; space-y: 20px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-start; }
        .Outcome_Check { background: #3b82f6; color: white; border-radius: 50%; padding: 4px; shrink-0; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; }
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; }

        /* --- SECTION 4: FLOW (STEPS) --- */
        .NET_Flow { 
          padding: 5px 5%; 
          background: #fdfdfd; 
          color: #1e293b; 
          text-align: center; 
          position: relative;
        }
        
        .NET_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }

        .NET_Step_Card {
          background: white;
          border-radius: 12px;
          padding: 50px 30px 40px;
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
        }

        @media (min-width: 640px) {
          .NET_Flow_Grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }

        @media (min-width: 768px) {
          .NET_Flow_Grid { grid-template-columns: repeat(4, 1fr); gap: 10px; }
          .NET_Step_Card { padding: 35px 12px 25px; border-radius: 8px; }
          .NET_Step_Header { font-size: 0.65rem; padding: 5px 15px; min-width: 90px; top: -12px; }
          .NET_Step_Icon { margin-bottom: 12px; margin-top: 5px; }
          .NET_Step_Icon svg { width: 22px; height: 22px; }
          .NET_Step_H { font-size: 0.95rem; margin-bottom: 8px; }
          .NET_Step_P { font-size: 0.75rem; line-height: 1.4; }
        }

        @media (min-width: 1024px) {
          .NET_Flow_Grid { gap: 25px; }
          .NET_Step_Card { padding: 50px 30px 40px; border-radius: 12px; }
          .NET_Step_Header { font-size: 0.85rem; padding: 8px 30px; min-width: 140px; top: -15px; }
          .NET_Step_Icon { margin-bottom: 25px; margin-top: 10px; }
          .NET_Step_Icon svg { width: 32px; height: 32px; }
          .NET_Step_H { font-size: 1.25rem; margin-bottom: 15px; }
          .NET_Step_P { font-size: 0.95rem; line-height: 1.6; }
        }

        /* Top Ribbon/Tab */
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
          border-radius: 6px 6px 0 0;
          min-width: 140px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        /* Ribbon decorative wings */
        .NET_Step_Header::before, .NET_Step_Header::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 10px;
          height: 10px;
          z-index: -1;
        }
        .NET_Step_Header::before { left: -10px; border-radius: 0 0 10px 0; }
        .NET_Step_Header::after { right: -10px; border-radius: 0 0 0 10px; }

        .Step_01 {background: #1d4ed8;}
        .Step_01::before, .Step_01::after { background: #1d4ed8; }
        .Step_02 {background: #1d4ed8; }
        .Step_02::before, .Step_02::after { background: #1d4ed8; }
        .Step_03 { background: #1d4ed8; }
        .Step_03::before, .Step_03::after { background: #1d4ed8; }
        .Step_04 { background: #1d4ed8; }
        .Step_04::before, .Step_04::after {  background: #1d4ed8;}

        .NET_Step_Icon {
          color: #3b82f6;
          margin-bottom: 25px;
          margin-top: 10px;
        }

        .NET_Step_Label {
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          color: #3b82f6;
          letter-spacing: 2px;
          margin-bottom: 15px;
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

        /* Bottom accent bar */
        .NET_Step_Footer {
          width: 40px;
          height: 4px;
          background: #3b82f6;
          border-radius: 10px;
          margin-top: 25px;
        }

        @media (max-width: 1024px) {
          .NET_Hero, .NET_Outcome { flex-direction: column; text-align: center; }
          .NET_Btn_Group { justify-content: center; }
          .Outcome_Item { text-align: left; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="NET_Hero">
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="NET_Hero_Content"
        >
          <span className="NET_Badge">Technology Services</span>
          <h1 className="NET_Hero_H1">NETWORK MANAGEMENT SERVICES</h1>
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
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="NET_Cap_Section">
        <span className="NET_Badge">What Our Network Management Covers</span>
        <h2 className="NET_Hero_H1" style={{ fontSize: '2.5rem' }}>Structured Connectivity <br /> for Business Continuity</h2>

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
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="NET_Outcome">
        <div className="NET_Outcome_Img">
          <img src={networkDashboard} alt="Network Dashboard" />
        </div>
        <div className="NET_Outcome_Content">
          <span className="NET_Badge">Business Benefits</span>
          <h2 className="NET_Hero_H1" style={{ fontSize: '2.5rem' }}>Outcomes of Structured Management</h2>

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
      </section>

      {/* LAYOUT 5 – HOW WE MANAGE NETWORKS (Step Infographic) */}
      <section className="NET_Flow">
        <span className="NET_Badge">Execution Model</span>
        <h2 className="NET_Hero_H1" style={{ fontSize: '2.5rem' }}>Our Network Management Approach</h2>

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
              {/* <span className="NET_Step_Label">INFOGRAPHIC</span> */}
              <h3 className="NET_Step_H">{item.h}</h3>
              <p className="NET_Step_P">{item.p}</p>
              <div className="NET_Step_Footer"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LAYOUT 6 – TRUST & ASSURANCE */}
      <section style={{ padding: '80px 5%', textAlign: 'center' }}>
        <h2 className="NET_Hero_H1" style={{ fontSize: '2rem' }}>BUILT FOR RELIABILITY AND CONTROL</h2>
        <p className="NET_Hero_P" style={{ maxWidth: '800px', margin: '0 auto' }}>
          CHN Technologies manages networks with a focus on predictability, accountability, and long-term stability.
          Our services align with operational requirements and compliance needs.
        </p>
        <Link to="/contact">
          <button className="NET_Primary_Btn" style={{ marginTop: '40px' }}>Contact a Network Specialist</button>
        </Link>
      </section>
    </div>
  );
};

export default NetworkManagementPage;