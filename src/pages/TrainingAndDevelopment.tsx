import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, BookOpen, Award, Users, CheckCircle,
  ArrowRight, Search, PenTool, Activity, Target, Lightbulb,
  Globe, ShieldCheck, Zap, Layers, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingAndDevelopmentPage = () => {
  return (
    <div className="TD_WRAPPER">
      <style>{`
        .TD_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .TD_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .TD_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .TD_Hero { padding-top: 140px; }
          .TD_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .TD_Hero_Content { max-width: 100%; order: 1; }
          .TD_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .TD_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .TD_Hero_Content { flex: 1.2; max-width: 650px; }
        .TD_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .TD_Hero_H1 { 
         margin-bottom: 25px; }
        .TD_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .TD_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .TD_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .TD_Btn_Group { justify-content: center; } }
        .TD_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .TD_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .TD_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .TD_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .TD_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .TD_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .TD_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .TD_Context_H1 { color: #fff; }
        .TD_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .TD_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .TD_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .TD_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .TD_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .TD_Cap_Card {
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

        .TD_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .TD_Cap_Card:hover::before { height: 100%; }
        .TD_Cap_Card:hover h3, 
        .TD_Cap_Card:hover p,
        .TD_Cap_Card:hover .TD_Cap_Icon { color: #ffffff !important; }
        
        .TD_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .TD_Cap_Card:hover .TD_Cap_Icon { background: rgba(255,255,255,0.1); }
        .TD_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .TD_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .TD_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .TD_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .TD_Outcome_Content { flex: 1.2; text-align: left; }
        .TD_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .TD_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .TD_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .TD_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .TD_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .TD_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .TD_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .TD_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .TD_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .TD_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .TD_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .TD_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .TD_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .TD_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        /* --- FINAL --- */
        .TD_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Final_Inner { max-width: 900px; width: 100%; }
        .TD_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 30px; color:#ffffff; }
      `}</style>

      {/* LAYOUT 1 – PAGE HERO */}
      <section className="TD_Hero">
        <div className="TD_Hero_Inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="TD_Hero_Content"
          >


            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                Training & Development
              </span>
            </div>
            <h2 className="TD_Hero_H1 NET_Hero_H1">Training & development</h2>
            <p className="font-bold mb-6 flex items-center gap-2 subtitle" style={{ fontSize: '1.2rem', color: '#3b82f6' }}>
              <Zap size={24} className="text-blue-600" />
              Building a high-performance workforce through structured enterprise learning systems.
            </p>
            <p className="TD_Hero_P">
              CHN Technologies delivers professional training and development services focused on workforce performance,
              technical proficiency, and long-term organizational stability. Our solutions support
              institutional knowledge growth and operational reliability through structured learning paths.
            </p>
            <div className="TD_Btn_Group">
              <Link to="/contact">
                <button className="TD_Primary_Btn">Customize your learning plan</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="TD_Hero_Img"
          >
            <img src="/images/training-session.jpg" alt="Corporate Training Session" />
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="TD_Hero_Floating_Card bg-white/90 backdrop-blur-md"
            >
              <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  Technical Proficiency
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-black text-slate-800 tracking-tight">
                    GLOBAL STANDARDS
                  </p>
                  <div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 2 – SOLUTION CONTEXT */}
      <section className="TD_Context">
        <div className="TD_Context_Inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 TD_Context_H1">Reduced institutional knowledge is a silent tax on enterprise growth</h2>
            <p className="TD_Context_P">
              Business performance and innovation depend on how predictably you can manage and expand your institutional workforce knowledge.
              Poorly trained teams lead to technical debt, high turnover, and reduced organizational speed.
              CHN Technologies helps organisations maintain structured, secure, and highly skilled business environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LAYOUT 3 – CORE CAPABILITIES */}
      <section className="TD_Cap_Section">
        <div className="TD_Cap_Inner">
          <span className="TD_Badge">Core Domains</span>
          <h2 className="NET_Hero_H1">Strategic enterprise learning capabilities</h2>

          <div className="TD_Cap_Grid">
            {[
              {
                title: "Skills assessment",
                icon: <Target size={28} />,
                desc: "Identifying technical and soft skill gaps within your workforce to ensure targeted and high-impact training."
              },
              {
                title: "Custom learning paths",
                icon: <BookOpen size={28} />,
                desc: "Designing tailored curriculum modules aligned with your business technologies and organizational goals."
              },
              {
                title: "Leadership development",
                icon: <GraduationCap size={28} />,
                desc: "Structured programs designed to elevate high-potential employees into mission-critical management roles."
              },
              {
                title: "Technical certifications",
                icon: <Award size={28} />,
                desc: "Preparing your engineering and IT teams for globally recognized certifications to ensure technical excellence."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="TD_Cap_Card"
              >
                <div className="TD_Cap_Icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 4 – BUSINESS OUTCOMES */}
      <section className="TD_Outcome">
        <div className="TD_Outcome_Inner">
          <div className="TD_Outcome_Img">
            <img src="/images/blog-collaboration.jpg" alt="Workforce Collaboration" />
          </div>
          <div className="TD_Outcome_Content">
            <span className="TD_Badge">Business Benefits</span>
            <h2 className="NET_Hero_H1">Business benefits of structured enterprise learning</h2>

            <div className="Outcome_List">
              {[
                { title: "Optimal strategic scaling", desc: "Training systems that ensure institutional knowledge grows with organisational goals." },
                { title: "Reduced hiring overhead", desc: "Elevating internal workforce capacity reduces the need for external hiring." },
                { title: "Predictable performance growth", desc: "Structured learning outcomes ensure measurable improvement in workforce productivity." },
                { title: "High-stability workforce", desc: "Investing in employees increases retention and reduces institutional knowledge debt." }
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

      {/* LAYOUT 5 – OUR APPROACH */}
      <section className="TD_Flow">
        <div className="TD_Flow_Inner">
          <span className="TD_Badge">Strategic Framework</span>
          <h2 className="NET_Hero_H1">Our strategic approach</h2>

          <div className="TD_Flow_Grid">
            {[
              { num: "01", h: "Assess", icon: <Search size={30} />, p: "Review workforce capabilities, existing knowledge gaps, and enterprise learning objectives." },
              { num: "02", h: "Design", icon: <PenTool size={30} />, p: "Create tailored training paths, curriculum modules, and internal development policies." },
              { num: "03", h: "Deliver", icon: <Users size={30} />, p: "Implement high-fidelity training sessions and workshops with technical process integrity." },
              { num: "04", h: "Evaluate", icon: <Activity size={30} />, p: "Measurement of skill acquisition, workforce productivity, and long-term business impact." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="TD_Step_Card"
              >
                <div className="TD_Step_Num">STAGE {step.num}</div>
                <div className="TD_Step_Icon">{step.icon}</div>
                <h3 className="TD_Step_H">{step.h}</h3>
                <p className="TD_Step_P">{step.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT 6 – FINAL CTA */}
      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#0f172a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 text-white">Build a high-performance workforce</h2>
            <p className="EUC_Hero_P" style={{ margin: '30px auto 50px', color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
              Connect with CHN Technologies to understand how structured training and development consulting <br />
              can support workforce growth and operational reliability.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="TD_Primary_Btn" style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  Contact a training specialist <ArrowRight size={24} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TrainingAndDevelopmentPage;
