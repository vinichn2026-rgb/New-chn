import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Braces, Layers, Smartphone, ShieldCheck, GitBranch,
  RefreshCw, Search, PenTool, Settings, Activity, CheckCircle,
  ArrowRight, Database, Layout, Smartphone as MobileIcon, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationDevelopmentPage = () => {
  return (
    <div className="AD_WRAPPER">
      <style>{`
        .AD_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .AD_Hero {
          padding: 100px 5%;
          display: flex;
          align-items: center;
          gap: 50px;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .AD_Hero_Content { flex: 1; max-width: 650px; }
        .AD_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .AD_Hero_H1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1.1; color: #22314f; margin-bottom: 25px; }
        .AD_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .AD_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .AD_Btn_Group { display: flex; gap: 20px; }
        .AD_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 700; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .AD_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .AD_Secondary_Btn { font-weight: 700; color: #22314f; display: flex; align-items: center; gap: 8px; transition: 0.3s; text-decoration: none;}
        .AD_Secondary_Btn:hover { color: #3b82f6; gap: 12px; }

        .AD_Hero_Img { flex: 1; position: relative; }
        .AD_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CONTEXT --- */
        .AD_Context { padding: 100px 5%; background: #0f172a; color: #fff; text-align: center; }
        .AD_Context_H1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; color: #fff; text-transform: uppercase; }
        .AD_Context_P { max-width: 900px; margin: 0 auto; color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .AD_Cap_Section { padding: 100px 5%; background: #f8fafc; text-align: center; }
        .AD_Cap_Grid { 
          display: grid; 
          grid-template-columns: repeat(5, 1fr); 
          gap: 20px; 
          margin-top: 60px; 
          max-width: 1400px; 
          margin-left: auto; 
          margin-right: auto;
        }

        @media (max-width: 1280px) {
          .AD_Cap_Grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .AD_Cap_Grid { grid-template-columns: repeat(2, 1fr); }
        }

        .AD_Cap_Card {
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

        .AD_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .AD_Cap_Card:hover::before { height: 100%; }
        .AD_Cap_Card:hover h3, 
        .AD_Cap_Card:hover p,
        .AD_Cap_Card:hover .AD_Cap_Icon { color: #ffffff !important; }
        
        .AD_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .AD_Cap_Card:hover .AD_Cap_Icon { background: rgba(255,255,255,0.1); }
        .AD_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .AD_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .AD_Outcome { padding: 100px 5%; display: flex; align-items: center; gap: 80px; }
        .AD_Outcome_Content { flex: 1; }
        .AD_Outcome_Img { flex: 1; }
        .AD_Outcome_Img img { width: 100%; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .AD_Flow { padding: 100px 5%; background: #fdfdfd; text-align: center; }
        .AD_Flow_Grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
          gap: 30px; margin-top: 60px; max-width: 1300px; margin: 60px auto 0;
        }
        .AD_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .AD_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .AD_Step_Num { 
          position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .AD_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .AD_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .AD_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        @media (max-width: 1024px) {
          .AD_Hero, .AD_Outcome { flex-direction: column; text-align: center; }
          .AD_Btn_Group { justify-content: center; }
        }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="AD_Hero">
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="AD_Hero_Content"
        >
          <span className="AD_Badge">Software Solutions</span>
          <h1 className="AD_Hero_H1">APPLICATION DEVELOPMENT SERVICES</h1>
          <p className="AD_Tagline">Custom-built applications designed to support business workflows, performance, and scalability.</p>
          <p className="AD_Hero_P">
            CHN Technologies delivers application development services focused on building secure, scalable, and maintainable software solutions aligned with business objectives. Our applications are designed to support operational workflows and adapt to evolving requirements.
          </p>
          <div className="AD_Btn_Group">
            <Link to="/contact">
              <button className="AD_Primary_Btn">Talk to an Application Specialist</button>
            </Link>
            {/* <Link to="/services" className="AD_Secondary_Btn">
              Explore Software Solutions <ArrowRight size={18} />
            </Link> */}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="AD_Hero_Img"
        >
          <img src="/images/appdev-code.jpg" alt="Code Development Architecture" />
        </motion.div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="AD_Context">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="AD_Context_H1">APPLICATIONS ARE CORE TO BUSINESS OPERATIONS</h2>
          <p className="AD_Context_P">
            Modern organisations rely on applications to manage processes, data, and customer interactions. Off-the-shelf tools often fail to align fully with unique workflows, leading to inefficiencies and limitations. 
            CHN Technologies helps organisations design and develop custom applications that fit operational needs, improve productivity, and support digital transformation initiatives with clarity and control.
          </p>
        </motion.div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="AD_Cap_Section">
        <span className="AD_Badge">Core Capabilities</span>
        <h2 className="AD_Hero_H1" style={{ fontSize: '2.5rem' }}>What Our Application <br /> Development Services Cover</h2>

        <div className="AD_Cap_Grid">
          {[
            {
              title: "Custom Business Apps",
              icon: <Braces size={28} />,
              desc: "Design and development of applications tailored to specific operational and business requirements."
            },
            {
              title: "Enterprise Solutions",
              icon: <Box size={28} />,
              desc: "Development of scalable applications that support complex workflows and multi-user environments."
            },
            {
              title: "System Integration & APIs",
              icon: <GitBranch size={28} />,
              desc: "Integration of applications with existing systems, databases, and third-party platforms."
            },
            {
              title: "Application Modernisation",
              icon: <RefreshCw size={28} />,
              desc: "Enhancement or re-engineering of legacy applications to improve performance and usability."
            },
            {
              title: "Testing & Quality Assurance",
              icon: <ShieldCheck size={28} />,
              desc: "Structured testing to ensure reliability, security, and functional accuracy across all units."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="AD_Cap_Card"
            >
              <div className="AD_Cap_Icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="AD_Outcome">
        <div className="AD_Outcome_Img">
          <img src="/images/appdev-team.jpg" alt="Software Development Team" />
        </div>
        <div className="AD_Outcome_Content">
          <span className="AD_Badge">Business Benefits</span>
          <h2 className="AD_Hero_H1" style={{ fontSize: '2.5rem' }}>Benefits of Structured <br /> Application Development</h2>

          <div className="Outcome_List">
            {[
              { title: "Operational Efficiency", desc: "Applications designed around workflows reduce manual effort and process gaps." },
              { title: "Improved Data Accuracy", desc: "Centralised applications ensure consistent data handling and reporting." },
              { title: "Scalable Digital Capabilities", desc: "Applications that grow with business needs and system complexity." },
              { title: "Long-Term Cost Effectiveness", desc: "Well-architected applications reduce maintenance and rework costs." }
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
      <section className="AD_Flow">
        <span className="AD_Badge">Strategic Approach</span>
        <h2 className="AD_Hero_H1" style={{ fontSize: '2.5rem' }}>How We Build Applications</h2>

        <div className="AD_Flow_Grid">
          {[
            { num: "01", h: "Discover & Assess", icon: <Search size={30} />, p: "Understand business processes, technical requirements, and integration needs." },
            { num: "02", h: "Design & Architect", icon: <PenTool size={30} />, p: "Define application architecture, data models, and user flows." },
            { num: "03", h: "Develop & Integrate", icon: <Settings size={30} />, p: "Build secure applications and integrate with required systems and services." },
            { num: "04", h: "Test & Deploy", icon: <Activity size={30} />, p: "Comprehensive testing, deployment, and ongoing optimisation support." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="AD_Step_Card"
            >
              <div className="AD_Step_Num">STAGE {step.num}</div>
              <div className="AD_Step_Icon">{step.icon}</div>
              <h3 className="AD_Step_H">{step.h}</h3>
              <p className="AD_Step_P">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAYOUT 6 – TRUST & FINAL CTA */}
      <section style={{ padding: '100px 5%', textAlign: 'center', background: '#22314f', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="AD_Hero_H1" style={{ fontSize: '2.5rem', color: '#fff' }}>BUILD APPLICATIONS THAT SUPPORT YOUR BUSINESS</h2>
          <p className="AD_Hero_P" style={{ margin: '20px auto 40px', color: 'rgba(255,255,255,0.7)' }}>
            Connect with CHN Technologies to understand how structured application development solutions 
            can support operational efficiency and digital growth.
          </p>
          <Link to="/contact">
            <button className="AD_Primary_Btn" style={{ background: '#3b82f6', color: '#fff' }}>Request a Consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDevelopmentPage;
