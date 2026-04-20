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
          font-size: 0.85rem;
          margin-bottom: 25px;
          display: block;
        }

        .ABOUT_Hero_H1 {
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 25px;
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
        .ABOUT_Focus { background: #fdfdfd; padding: 50px 5%; }
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

        .ABOUT_Approach { padding: 100px 5%; background: #0f1e3c; color: #fff; position: relative; overflow: hidden; }
        .ABOUT_Approach::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(0,96,255,0.06) 0%, transparent 50%);
          pointer-events: none;
        }
        .ABOUT_Approach_Container { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; position: relative; z-index: 1; }

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
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="ABOUT_Hero_H1 NET_Hero_H1">About CHN <br /> <span className="text-blue-500">Technologies</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="ABOUT_Hero_P">We build the resilient foundations that empower global enterprises to navigate the complexities of technology, people, and digital change.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 mt-10"
          >
            <a href="#chn-overview" style={{
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
              Read more
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section id="chn-overview" className="ABOUT_Identity">
        <div className="ABOUT_Identity_Grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ABOUT_Identity_Img">
            <img src="/images/corporate-flagship.jpg" alt="Corporate Flagship" />
            <div className="ABOUT_Identity_Badge">
              <h4 className="text-3xl font-black">10+</h4>
              <p className="text-[10px] font-bold tracking-widest text-blue-100">Years of Discipline</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ABOUT_Identity_Content text-left">
            <span className="ABOUT_Badge">OVERVIEW</span>
            <h2 className="NET_Hero_H1 ABOUT_Identity_H2">Strengthening operations through structured solutions</h2>
            <p className="ABOUT_Identity_P">CHN Technologies helps businesses strengthen operations through structured technology services, digital solutions, and workforce-focused consulting. Our work is centred on creating stable systems and long-term operational confidence.</p>

            <div className="ABOUT_Feature_Box">
              <div className="ABOUT_Feature_Icon"><Shield size={30} /></div>
              <div className="text-left">
                <h4 className="text-xl font-black text-[#1a2b4b]">Long-Term Operational Confidence</h4>
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
          <h2 className="NET_Hero_H1 ABOUT_Identity_H2" style={{ marginBottom: 0 }}>What we work on</h2>
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
                <div className="absolute bottom-4 left-4 z-10 bg-white/95 px-4 py-2 rounded-xl flex items-center gap-2 text-[#3b82f6] shadow-lg font-black text-[10px] tracking-widest">
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left ABOUT_Approach_Left"
          >
            <span className="ABOUT_Badge">OUR APPROACH</span>
            <h2 className="NET_Hero_H1 ABOUT_Approach_H">
              How CHN Approaches <span className="text-white">Business Problems</span>
            </h2>
            <p className="text-blue-100/50 text-lg font-medium leading-relaxed mb-10 max-w-lg">
              We focus on how systems, processes, and teams interact in real operational environments rather than isolated issues.
            </p>

            {/* REFINED SMALLER IMAGE CONTAINER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
                marginTop: '8px',
                width: '100%',
                aspectRatio: '16 / 9'
              }}
            >
              <img
                src="/images/about-main.jpg"
                alt="CHN Approach"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
              />

              {/* Overlays */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,30,60,0.75) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #3b82f6, #0060ff)' }} />

              <div style={{ position: 'absolute', bottom: '18px', left: '20px' }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.12em',
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  People · Process · Technology
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Grid */}
          <div className="ABOUT_Philosophy_Grid">
            {[
              { title: "Delivery Philosophy", icon: <Layers />, desc: "Understand the environment, define ownership, and execute with control." },
              { title: "Accountability", icon: <Shield />, desc: "Clear ownership and responsibility in every single engagement." },
              { title: "Practical Execution", icon: <Zap />, desc: "Prioritising practical results over theory and long-term stability." },
              { title: "Reliability", icon: <CheckCircle />, desc: "Stable solutions that perform over time and evolve with needs." }
            ].map((phil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="ABOUT_Phil_Card"
              >
                <div className="ABOUT_Phil_Icon">{React.cloneElement(phil.icon as React.ReactElement, { size: 24 })}</div>
                <h4 className="text-xl font-bold text-blue-500 mb-3">{phil.title}</h4>
                <p className="text-md font-black tracking-widest text-blue-100/50 leading-relaxed">
                  {phil.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ABOUT_Final">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 ABOUT_Final_H">Work With a Partner That Values <br /> Structure and Stability</h2>
            <p className="ABOUT_Identity_P text-center mb-12">Connect with CHN Technologies to learn how our capabilities <br /> can support your organisation's long-term objectives.</p>
            <Link to="/contact">
              <button className="ABOUT_Btn">Contact our team <ArrowRight size={24} /></button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;