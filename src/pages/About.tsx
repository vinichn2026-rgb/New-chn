import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code, Users, CheckCircle, ArrowRight, Activity, Zap, Layers, Target, BarChart, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="ABOUT_WRAPPER">
      <style>{`
        .ABOUT_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .ABOUT_Hero {
          position: relative;
          background: #002e5b;
          min-height: 70vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 140px 5% 60px;
        }

        .ABOUT_Hero_Bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/corporate-flagship.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transform: scale(1.1);
        }

        .ABOUT_Hero_Content {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }

        .ABOUT_Badge {
          color: #3b82f6;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 25px;
          display: block;
        }

        .ABOUT_Hero_H1 {
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 25px;
          text-transform: uppercase;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }

        .ABOUT_Hero_P {
          color: #b9d1ff;
          max-width: 700px;
          font-weight: 500;
          line-height: 1.4;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .ABOUT_Hero { padding-top: 140px; text-align: center; }
          .ABOUT_Hero_Content { display: flex; flex-direction: column; align-items: center; }
          .ABOUT_Hero_P { margin: 0 auto; }
        }

        /* --- SECTION 2: IDENTITY --- */
        .ABOUT_Identity { background: #ffffff; padding: 100px 5%; }
        .ABOUT_Identity_Grid { 
          max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; 
        }

        @media (max-width: 1024px) {
          .ABOUT_Identity_Grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .ABOUT_Identity_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .ABOUT_Identity_Badge { position: static !important; margin-top: 20px !important; padding: 30px !important; width: fit-content; margin: 20px auto 0 !important; }
        }

        .ABOUT_Identity_Img { position: relative; }
        .ABOUT_Identity_Img img { width: 100%; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.1); }
        .ABOUT_Identity_Badge { 
          position: absolute; bottom: -30px; right: -30px; 
          background: #3b82f6; color: #fff; padding: 30px; border-radius: 30px;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); text-align: center;
          z-index: 20;
        }

        .ABOUT_Identity_H2 { 
          line-height: 1.2; 
          color: #1a2b4b;
          margin-bottom: 25px;
        }
        .ABOUT_Identity_P { color: #64748b; line-height: 1.8; margin-bottom: 40px; font-size: 1.1rem; }

        .ABOUT_Feature_Box { 
          display: flex; align-items: center; gap: 25px; background: #f8fafc; 
          padding: 30px; border-radius: 30px; border-left: 8px solid #3b82f6; 
          text-align: left;
        }
        .ABOUT_Feature_Icon { width: 60px; height: 60px; background: #fff; color: #3b82f6; border-radius: 18px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(0,0,0,0.05); min-width: 60px; }

        /* --- SECTION 3: FOCUS GRID --- */
        .ABOUT_Focus { background: #fdfdfd; padding: 100px 5%; }
        .ABOUT_Focus_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 30px; 
          max-width: 1300px; 
          margin: 80px auto 0;
        }
        @media (min-width: 768px) { .ABOUT_Focus_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .ABOUT_Focus_Grid { grid-template-columns: repeat(3, 1fr); } }

        .ABOUT_Card {
          background: #ffffff; padding: 15px; border-radius: 40px; border: 1px solid #f1f5f9; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); text-align: left; position: relative; z-index: 10; overflow: hidden;
        }

        .ABOUT_Card_Inner { padding: 30px 25px; }
        .ABOUT_Card_Img { 
          height: 240px; border-radius: 30px; overflow: hidden; margin-bottom: 10px; position: relative; 
        }
        .ABOUT_Card_Img img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s; }
        .ABOUT_Card:hover .ABOUT_Card_Img img { transform: scale(1.1); }
        
        .ABOUT_Card_H { font-weight: 900; color: #1a2b4b; margin-bottom: 20px; transition: 0.3s; font-size: 1.5rem; }

        /* --- SECTION 4: APPROACH --- */
        .ABOUT_Approach { padding: 100px 5%; background: #22314f; color: #fff; }
        .ABOUT_Approach_Container { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

        @media (max-width: 1024px) {
          .ABOUT_Approach_Container { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .ABOUT_Approach_Left { order: -1; display: flex; flex-direction: column; align-items: center; }
          .ABOUT_Philosophy_Grid { justify-content: center; }
        }

        .ABOUT_Approach_H { line-height: 1.1; margin-bottom: 40px; color: #fff; }
        .ABOUT_Philosophy_Grid { display: grid; grid-template_columns: 1fr; gap: 20px; }
        @media (min-width: 640px) { .ABOUT_Philosophy_Grid { grid-template-columns: repeat(2, 1fr); } }

        .ABOUT_Phil_Card {
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); padding: 40px; border-radius: 40px; transition: 0.4s;
          text-align: left;
        }
        .ABOUT_Phil_Card:hover { background: rgba(255,255,255,0.06); transform: translateY(-5px); border-color: #3b82f6; }
        .ABOUT_Phil_Icon { width: 50px; height: 50px; background: #3b82f6; color: #fff; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; }

        /* --- FINAL --- */
        .ABOUT_Final { padding: 100px 5%; text-align: center; background: #fff; }
        .ABOUT_Final_H { line-height: 1.1; color: #1a2b4b; margin-bottom: 25px; }
        .ABOUT_Btn { 
          background: #3b82f6; color: #fff; padding: 10px 20px; border-radius: 100px; font-weight: 800; font-size: 1.2rem; display: inline-flex; align-items: center; gap: 15px; transition: 0.3s; box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4); border: none; cursor: pointer;
        }
        .ABOUT_Btn:hover { transform: translateY(-5px); background: #1e3a8a; }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="ABOUT_Hero">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.15 }} transition={{ duration: 1.5 }} className="ABOUT_Hero_Bg" />
        <div className="ABOUT_Hero_Content">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="ABOUT_Hero_H1 NET_Hero_H1">ABOUT CHN <br /> <span className="text-blue-500">TECHNOLOGIES</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="ABOUT_Hero_P">Technology, consulting, and digital execution work best when built on structure, clarity, and accountability.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 mt-10"
          >
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: '#0060ff',
              color: '#fff',
              padding: '16px 36px',
              borderRadius: 100,
              fontWeight: 800,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 12px 40px rgba(0,96,255,0.35)',
              transition: 'all 0.3s',
            }}>
              <ArrowRight size={18} />
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="ABOUT_Identity">
        <div className="ABOUT_Identity_Grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ABOUT_Identity_Img">
            <img src="/images/corporate-flagship.jpg" alt="Corporate Flagship" />
            <div className="ABOUT_Identity_Badge">
              <h4 className="text-3xl font-black">10+</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Years of Discipline</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ABOUT_Identity_Content text-left">
            <span className="ABOUT_Badge">OVERVIEW</span>
            <h2 className="NET_Hero_H1 ABOUT_Identity_H2">Strengthening Operations Through Structured Solutions</h2>
            <p className="ABOUT_Identity_P">CHN Technologies helps businesses strengthen operations through structured technology services, digital solutions, and workforce-focused consulting. Our work is centred on creating stable systems and long-term operational confidence.</p>

            <div className="ABOUT_Feature_Box">
              <div className="ABOUT_Feature_Icon"><Shield size={30} /></div>
              <div className="text-left">
                <h4 className="text-xl font-black text-[#1a2b4b]">Long-term Operational Confidence</h4>
                <p className="text-slate-500 font-medium">Supporting organisations as they scale, transform, and adapt.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FOCUS GRID */}
      <section className="ABOUT_Focus">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <span className="ABOUT_Badge">CORE ECOSYSTEM</span>
          <h2 className="NET_Hero_H1 ABOUT_Identity_H2" style={{ marginBottom: 0 }}>WHAT WE WORK ON</h2>
        </div>
        <div className="ABOUT_Focus_Grid">
          {[
            { title: "Technology Services", icon: <Cpu />, img: "/images/service-consulting.jpg", tag: "Enterprise IT", desc: "Network management, cyber security, and physical infrastructure for stable IT environments." },
            { title: "Software & Digital", icon: <Code />, img: "/images/service-software.jpg", tag: "Digital Dev", desc: "Developing scalable web platforms, applications, and automated business process solutions." },
            { title: "Consulting & Advisory", icon: <Users />, img: "/images/service-consulting.jpg", tag: "Advisory", desc: "Workforce management, payroll compliance, and structured operational governance." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="ABOUT_Card group">
              <div className="ABOUT_Card_Img">
                <img src={item.img} alt={item.title} />
                <div className="absolute bottom-4 left-4 z-10 bg-white/95 px-4 py-2 rounded-xl flex items-center gap-2 text-[#3b82f6] shadow-lg font-black text-[10px] uppercase tracking-widest">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 14 })} {item.tag}
                </div>
              </div>
              <div className="ABOUT_Card_Inner">
                <h3 className="ABOUT_Card_H">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: APPROACH */}
      <section className="ABOUT_Approach">
        <div className="ABOUT_Approach_Container">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left ABOUT_Approach_Left">
            <span className="ABOUT_Badge">OUR APPROACH</span>
            <h2 className="NET_Hero_H1 ABOUT_Approach_H">How CHN <br /> Approaches <br /> <span className="text-white">Business Problems</span></h2>
            <p className="text-blue-100/50 text-lg font-medium leading-relaxed mb-10 max-w-lg">We focus on how systems, processes, and teams interact in real operational environments rather than isolated issues.</p>
            <div className="relative w-fit">
              <img src="/images/partner-delivery.jpg" alt="Consultant" className="w-48 h-48 rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white/10" />
              <div className="absolute -bottom-4 -right-4 bg-blue-500 p-4 rounded-2xl shadow-xl"><Activity className="text-white" /></div>
            </div>
          </motion.div>

          <div className="ABOUT_Philosophy_Grid">
            {[
              { title: "Delivery Philosophy", icon: <Layers />, desc: "Understand the environment, define ownership, and execute with control." },
              { title: "Accountability", icon: <Shield />, desc: "Clear ownership and responsibility in every single engagement." },
              { title: "Practical Execution", icon: <Zap />, desc: "Prioritising practical results over theory and long-term stability." },
              { title: "Reliability", icon: <CheckCircle />, desc: "Stable solutions that perform over time and evolve with needs." }
            ].map((phil, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="ABOUT_Phil_Card">
                <div className="ABOUT_Phil_Icon">{React.cloneElement(phil.icon as React.ReactElement, { size: 24 })}</div>
                <h4 className="text-xl font-bold text-blue-500 mb-3">{phil.title}</h4>
                <p className="text-[11px] font-black uppercase tracking-widest text-blue-100/50 leading-relaxed">{phil.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ABOUT_Final">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 ABOUT_Final_H uppercase">Work with a Partner that Values <br /> Structure and Stability</h2>
            <p className="ABOUT_Identity_P text-center mb-12">Connect with CHN Technologies to learn how our capabilities <br /> can support your organisation's long-term objectives.</p>
            <Link to="/contact">
              <button className="ABOUT_Btn">Contact Our Team <ArrowRight size={24} /></button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;