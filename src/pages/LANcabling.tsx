import React from 'react';
import { motion } from 'framer-motion';
import {
  Network, Eye, Shield, Link as LinkIcon,
  CheckCircle, ArrowRight, Activity,
  Search, PenTool, Settings, Wrench,
  Layers, Video
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local assets
import serversImg from '../assets/servers.jpg';
import networkDashboardImg from '../assets/network_dashboard.png';

const LanCablingSurveillancePage = () => {
  return (
    <div className="LCS_WRAPPER">
      <style>{`
        .LCS_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .LCS_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .LCS_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .LCS_Hero { padding-top: 140px; }
          .LCS_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .LCS_Hero_Content { max-width: 100%; order: 1; }
          .LCS_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .LCS_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .LCS_Hero_Content { flex: 1.2; max-width: 650px; }
        .LCS_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: capitalize; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .LCS_Hero_H1 { 
      
        margin-bottom: 25px;
         }
        .LCS_Tagline { font-size: 1.2rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .LCS_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .LCS_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .LCS_Btn_Group { justify-content: center; } }

        .LCS_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .LCS_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .LCS_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .LCS_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .LCS_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .LCS_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .LCS_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .LCS_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .LCS_Cap_Card {
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

        .LCS_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .LCS_Cap_Card:hover::before { height: 100%; }
        .LCS_Cap_Card:hover h3, 
        .LCS_Cap_Card:hover p,
        .LCS_Cap_Card:hover .LCS_Cap_Icon { color: #ffffff !important; }
        
        .LCS_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .LCS_Cap_Card:hover .LCS_Cap_Icon { background: rgba(255,255,255,0.1); }
        .LCS_Cap_Card h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .LCS_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 3: OUTCOMES --- */
        .LCS_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .LCS_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Outcome_Content { flex: 1.2; text-align: left; }
        .LCS_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .LCS_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .LCS_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .LCS_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #3b82f6; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 4: APPROACH --- */
        .LCS_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .LCS_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .LCS_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .LCS_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .LCS_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally */
  text-align: center;    /* Centers text */
        }
          

.LCS_Step_Icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: #0060ff; /* Matches your brand blue */
}
        .LCS_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .LCS_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        // .LCS_Step_Icon { color: #3b82f6; margin-bottom: 20px;}
        .LCS_Step_H {
         font-size: 1.25rem; font-weight: 800; 
         color: #22314f;
        //  text-transform: capitalize;
         text-align:center;
          margin-bottom: 12px; }
        .LCS_Step_P { color: #64748b; text-align:center; font-size: 0.95rem; line-height: 1.6; }

        .LCS_Trust {
          padding: 140px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .LCS_Trust_Inner {
          max-width: 900px; width: 100%;
        }

        @media (max-width: 1024px) {
          .LCS_Hero, .LCS_Outcome { flex-direction: column; text-align: center; }
          .LCS_Btn_Group { justify-content: center; }
        }

        .LAN_Badge{
         color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: capitalize; 
          font-size: 0.85rem; margin-bottom: 20px; display: inline-block;
          background: rgba(59, 130, 246, 0.06); padding: 6px 16px; border-radius: 100px;
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="LCS_Hero">
        <div className="LCS_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="LCS_Hero_Content"
          >

            <div className="LAN_Badge">
              Physical Infrastructure
            </div>
            <h2 className="LCS_Hero_H1  capitalize">lan cabling & surveillance</h2>
            <p className="LCS_Tagline">Structured cabling and intelligent surveillance systems built for secure and reliable operations.</p>
            <p className="LCS_Hero_P">
              CHN Technologies delivers professional LAN cabling and surveillance solutions that support stable
              connectivity, visibility, and physical security across business environments. Our services ensure
              organised infrastructure and long-term reliability.
            </p>
            <div className="LCS_Btn_Group">
              <Link to="/contact">
                <button className="LCS_Primary_Btn">Talk to an Infrastructure Specialist</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="LCS_Hero_Img"
          >
            <img src={serversImg} alt="Structured LAN Cabling" />
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 & 3 – SERVICE CONTEXT & CORE CAPABILITIES */}
      <section className="LCS_Cap_Section">
        <div className="LCS_Cap_Inner">
          <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 className="NET_Hero_H1 capitalize">physical infrastructure plays a critical role</h2>
            <p className="LCS_Hero_P">
              Network performance and security depend heavily on physical infrastructure quality.
              Poor cabling and unstructured surveillance lead to connectivity issues and security blind spots.
              We help implement systems that support dependable operations and scalability.
            </p>
          </div>

          <span className="LCS_Badge">Core Capabilities</span>
          <h2 className="NET_Hero_H1 capitalize">what our services cover</h2>

          <div className="LCS_Cap_Grid">
            {[
              {
                title: "Structured LAN Cabling",
                icon: <Network size={28} />,
                desc: "Design and implementation of organised cabling frameworks for high-speed data and network connectivity."
              },
              {
                title: "Rack & Patch Management",
                icon: <Layers size={28} />,
                desc: "Clean and standardised rack layouts that simplify ongoing maintenance and future hardware expansion."
              },
              {
                title: "CCTV & Surveillance",
                icon: <Video size={28} />,
                desc: "Deployment of intelligent surveillance systems to monitor facilities and enhance physical premises security."
              },
              {
                title: "Monitoring & Support",
                icon: <Activity size={28} />,
                desc: "Ongoing support to ensure cabling integrity and the continuous reliability of surveillance hardware."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="LCS_Cap_Card"
              >
                <div className="LCS_Cap_Icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="LCS_Outcome">
        <div className="LCS_Outcome_Inner">
          <div className="LCS_Outcome_Img">
            <img src={networkDashboardImg} alt="Surveillance Monitoring Center" />
          </div>
          <div className="LCS_Outcome_Content">
            <span className="LCS_Badge">Operational Outcomes</span>
            <h2 className="NET_Hero_H1 capitalize">benefits of structured physical infrastructure</h2>

            <div className="Outcome_List">
              {[
                { title: "Improved Connectivity Stability", desc: "Reliable physical infrastructure significantly reduces network interruptions and drops." },
                { title: "Enhanced Facility Security", desc: "Clear visibility across your premises improves safety and enables rapid incident response." },
                { title: "Simplified Maintenance", desc: "Structured layouts reduce troubleshooting time and prevent operational disruptions." },
                { title: "Infrastructure Scalability", desc: "Cabling and surveillance systems designed to grow seamlessly with your business needs." }
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

      {/* LAYOUT 5 – HOW WE DELIVER (INFOGRAPHIC STYLE) */}
      <section className="LCS_Flow">
        <div className="LCS_Flow_Inner">
          <span className="LCS_Badge">Delivery Model</span>
          <h2 className="NET_Hero_H1 capitalize">our delivery approach</h2>

          <div className="LCS_Flow_Grid">
            {[
              { num: "01", h: "Assess", icon: <Search size={30} />, p: "Review site layout, physical infrastructure requirements, and security objectives." },
              { num: "02", h: "Design", icon: <PenTool size={30} />, p: "Create structured cabling plans and surveillance layouts aligned with needs." },
              { num: "03", h: "Implement", icon: <Settings size={30} />, p: "Install cabling and surveillance systems with minimal business disruption." },
              { num: "04", h: "Test & Support", icon: <Wrench size={30} />, p: "Validate performance and provide ongoing professional maintenance support." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                // Added: flex flex-col items-center text-center
                className="LCS_Step_Card flex flex-col items-center text-center"
              >
                <div className="LCS_Step_Num">STAGE {step.num}</div>

                {/* Added: flex justify-center items-center to the icon wrapper */}
                <div className="LCS_Step_Icon flex justify-center items-center w-full mb-4">
                  {step.icon}
                </div>

                <h3 className="LCS_Step_H font-bold text-[#1a2840]">{step.h}</h3>
                <p className="LCS_Step_P">{step.p}</p>
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
            <h2 className="NET_Hero_H1 text-white capitalize">build a strong physical foundation</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Connect with CHN Technologies to understand how structured cabling and surveillance solutions
              can support secure, reliable, and scalable business environments. Built for order, visibility, and control.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="LCS_Primary_Btn" style={{ background: '#3b82f6', color: '#fff' }}>Request a Consultation</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default LanCablingSurveillancePage;