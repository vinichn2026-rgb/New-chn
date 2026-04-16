import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Code, BarChart,
  ArrowRight, Server, CheckCircle2, Award, Zap, Users,
  Mail, Phone, Send, Target, Rocket, PenTool, Layout, LineChart
} from 'lucide-react';

const Careers = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [isSearching, setIsSearching] = useState(false);

  const categoriesRef = useRef<HTMLElement>(null);
  const applyRef = useRef<HTMLElement>(null);

  const handleSearch = () => {
    if (!jobTitle) {
      alert("Please enter a job title to search.");
      return;
    }

    setIsSearching(true);

    // Smooth transition delay to enjoy the "sending" animation
    setTimeout(() => {
      navigate(`/contact?interest=Careers&job=${encodeURIComponent(jobTitle)}#contact-form`);
    }, 2500);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="CR_WRAPPER">
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#002e5b]/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{
                scale: [0.5, 1.2, 1],
                y: [100, -50, -500],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.4, 1],
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-50" />
              <Send size={120} className="text-white relative z-10 filter drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
              className="mt-12 text-center"
            >
              <h3 className="text-3xl font-black text-white tracking-tight mb-3">Connecting to CHN Technologies</h3>
              <p className="text-blue-200 font-medium text-lg">Routing your career interest to our strategic team...</p>
            </motion.div>

            {/* Animated particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: (i - 2.5) * 150,
                  y: -400
                }}
                transition={{
                  duration: 2,
                  delay: 0.5 + (i * 0.1),
                  repeat: Infinity
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[2px]"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .CR_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO (REFINED BANNER) --- */
        .CR_Hero {
          position: relative;
          background: #f1f6ff;
          min-height: 80vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 5% 60px;
        }

        .CR_Hero_Navy_Shape {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 45%;
          background: linear-gradient(135deg, #1e3a8a 0%, #002e5b 100%);
          z-index: 0;
          clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .CR_Hero_Navy_Shape::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 100%;
          background: linear-gradient(180deg, transparent, #3b82f6, transparent);
          opacity: 0.5;
        }

        .CR_Graphic_Orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
          filter: blur(80px);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .CR_Dot_Pattern {
          position: absolute;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(rgba(59,130,246,0.2) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 0;
          opacity: 0.6;
        }

        .CR_Vertical_Label {
          position: absolute;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: rgba(59,130,246,0.4);
          writing-mode: vertical-rl;
          z-index: 10;
          pointer-events: none;
        }

        .CR_Floating_Box {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(5px);
          border-radius: 20px;
          z-index: 15;
          pointer-events: none;
        }

        .CR_Hero_Content {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .CR_Hero { padding-top: 140px; }
          .CR_Hero_Content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .CR_Hero_Navy_Shape { display: none; }
          .CR_Hero_Right { order: -1; width: 100%; display: flex; justify-content: center; }
          .CR_Hero_Right .relative { width: 100%; max-width: 400px; height: 500px; margin: 0 auto; }
          .CR_Hero_P { margin-bottom: 30px; }
        }

        .CR_Hero_H1 {
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 20px;
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          text-transform:capitalize;
        }

        .CR_Hero_P {
          font-size: 1.1rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 40px;
        }

        .CR_Search_Bar {
          background: white;
          padding: 8px;
          border-radius: 100px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 5px;
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          border: 1px solid #e2e8f0;
        }

        @media (max-width: 640px) {
          .CR_Search_Bar { flex-direction: column; border-radius: 30px; padding: 20px; }
          .CR_Input_Group { border-right: none !important; margin-bottom: 10px; width: 100%; }
          .CR_Location_Group { display: none; }
        }

        .CR_Input_Group {
          flex: 1;
          padding-left: 20px;
          display: flex;
          align-items: center;
          border-right: 1px solid #f1f5f9;
        }

        .CR_Search_Btn {
          background: #3b82f6;
          color: white;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        .CR_Search_Btn:hover { background: #1e3a8a; transform: scale(1.05); }

        /* --- SECTION 2: STREAMS --- */
        .CR_Streams { padding: 100px 5%; background: #ffffff; text-align: center; }
        .CR_Streams_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 30px; 
          margin-top: 80px; 
          max-width: 1300px; 
          margin-left: auto; 
          margin-right: auto;
        }
        @media (min-width: 768px) { .CR_Streams_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .CR_Streams_Grid { grid-template-columns: repeat(3, 1fr); } }

        .CR_Stream_Card {
          background: #f8fafc; padding: 60px 40px; border-radius: 40px; text-align: left;
          position: relative; overflow: hidden; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9; z-index: 1;
        }

        .CR_Stream_Card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 0;
   background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .CR_Stream_Card:hover::before { height: 100%; }
        .CR_Stream_Card:hover h3, .CR_Stream_Card:hover p, .CR_Stream_Icon { color: #3b82f6; transition: 0.3s; }
        .CR_Stream_Card:hover h3, .CR_Stream_Card:hover p { color: #fff !important; }
        .CR_Stream_Card:hover .CR_Icon_Box { background: rgba(255,255,255,0.1); color: #fff }

        .CR_Icon_Box { 
          width: 70px; height: 70px; background: #fff; color: #3b82f6; border-radius: 20px; 
          display: flex; align-items: center; justify-content: center; margin-bottom: 30px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s;
        }

        .CR_Stream_H { font-size: 1.6rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; }

        /* --- SECTION 3: ENVIRONMENT --- */
        .CR_Env { padding: 50px 5%; background: #22314f; color: #fff; }
        .CR_Env_Container { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: center; }

        @media (max-width: 1024px) {
          .CR_Env_Container { grid-template-columns: 1fr; text-align: center; }
          .CR_Env_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .CR_Pros_Grid { justify-content: center; }
        }

        .CR_Env_Img { position: relative; }
        .CR_Env_Img img { width: 100%; border-radius: 50px; border: 15px solid #2a3a5a; box-shadow: 0 40px 100px rgba(0,0,0,0.4); }

        .CR_Badge { color: #3b82f6; font-weight: 800; letter-spacing: 2px;  font-size: 0.85rem; margin-bottom: 20px; display: block; }
        .CR_Env_H { line-height: 1.2; margin-bottom: 40px; color:white;}
        
        .CR_Pros_Grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        @media (max-width: 640px) { .CR_Pros_Grid { grid-template-columns: 1fr; text-align: left; } }
        .CR_Pro_Item { display: flex; align-items: center; gap: 15px; }
        .CR_Pro_Check { color: #3b82f6; display: flex; }

        /* --- SECTION 4: FINAL CTA --- */
        .CR_Final { padding: 100px 5%; text-align: center; background: #fff; }
        .CR_Final_Max { max-width: 800px; margin: 0 auto; }
        .CR_Final_H { color: #1a2b4b; line-height: 1.1; margin-bottom: 30px; text-transform:capitalize;}
        .CR_Final_P { font-size: 1.2rem; color: #64748b; margin-bottom: 50px; font-weight: 500; }
        .CR_Btn { 
          background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
          font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;
        }
        .CR_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="CR_Hero">
        <div className="CR_Hero_Navy_Shape" />

        {/* Background Graphics */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="CR_Graphic_Orb top-[-10%] right-[-10%]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="CR_Graphic_Orb bottom-[-20%] left-[10%]"
        />
        <div className="CR_Dot_Pattern top-40 right-[25%]" />
        <div className="CR_Dot_Pattern bottom-20 left-[5%]" />
        {/* <div className="CR_Vertical_Label top-20 left-10">CAREER.ECOSYSTEM.v2.0</div>
        <div className="CR_Vertical_Label bottom-40 right-10">CHN.GLOBAL.TALENT</div> */}

        <div className="CR_Hero_Content">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="CR_Hero_Left"
          >
            <span className="CR_Badge uppercase">Join Our Professional Team</span>
            <h2 className="CR_Hero_H1 NET_Hero_H1">find the perfect <br /> <span className="text-blue-500">job for you</span></h2>
            <p className="CR_Hero_P">Explore core career opportunities across technology and consulting domains with CHN Technologies.</p>

            <div className="CR_Search_Bar">
              <div className="CR_Input_Group">
                <Search size={18} className="text-blue-400 mr-3" />
                <input
                  type="text" placeholder="Job Title / Domain..."
                  className="w-full bg-transparent border-none outline-none font-bold text-slate-800"
                  value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center px-6 text-slate-400 font-bold border-r border-slate-100 hidden md:flex CR_Location_Group">
                <MapPin size={16} className="mr-2" /> Remote / India
              </div>
              <button className="CR_Search_Btn" onClick={handleSearch}><ArrowRight size={22} /></button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="CR_Hero_Right flex justify-center lg:justify-end"
          >
            <div className="relative w-[340px] h-[460px]">
              {/* Floating tech boxes */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="CR_Floating_Box w-24 h-24 -top-8 -right-8 flex items-center justify-center"
              >
                <Rocket className="text-blue-500" size={32} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="CR_Floating_Box w-20 h-20 -bottom-6 -left-10 flex items-center justify-center border-blue-500/30"
              >
                <Target className="text-blue-400" size={28} />
              </motion.div>

              <div className="absolute top-[8%] -right-7 w-full h-full bg-blue-100/10 rounded-[3rem] rotate-6 border border-white/20" />
              <div className="absolute top-[5%] -right-3 w-full h-full bg-blue-500/10 rounded-[3rem] rotate-3 border border-blue-500/20 shadow-xl" />
              <img src="/images/careers-hero.png" alt="Career Excellence" className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CAREER STREAMS */}
      <section className="CR_Streams">
        <span className="CR_Badge">Career Domains</span>
        <h2 className="NET_Hero_H1 capitalize" style={{ color: '#1a2b4b' }}>areas you can work in</h2>
        <div className="CR_Streams_Grid">
          {[
            { title: "Technology Services", icon: <Server size={30} />, desc: "Structured management of networks, cloud infrastructure, and enterprise security ecosystems." },
            { title: "Software & Digital", icon: <Code size={30} />, desc: "Advanced web application development, data analytics, and operational automation solutions." },
            { title: "Consulting & Advisory", icon: <Users size={30} />, desc: "Expert workforce management, statutory compliance, and corporate developmental training." }
          ].map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="CR_Stream_Card"
            >
              <div className="CR_Icon_Box">{stream.icon}</div>
              <h3 className="CR_Stream_H">{stream.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{stream.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ENVIRONMENT */}
      <section className="CR_Env">
        <div className="CR_Env_Container">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="CR_Env_Content"
          >
            <span className="CR_Badge ">Professional Ecosystem</span>
            <h2 className="NET_Hero_H1 CR_Env_H capitalize">a professional  environment built <br></br><span className="text-blue-500">for growth</span></h2>
            <div className="CR_Pros_Grid">
              {[
                { title: "Clear Expectations", icon: <CheckCircle2 size={24} /> },
                { title: "Supportive Mentorship", icon: <Users size={24} /> },
                { title: "Real World Impact", icon: <Zap size={24} /> },
                { title: "Career Stability", icon: <Award size={24} /> }
              ].map((pro, i) => (
                <div key={i} className="CR_Pro_Item">
                  <div className="CR_Pro_Check">{pro.icon}</div>
                  <span className="font-bold text-lg">{pro.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="CR_Env_Img"
          >
            <img src="/images/careers-env.png" alt="Professional Environment" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="CR_Final">
        <div className="CR_Final_Max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="NET_Hero_H1 CR_Final_H">start your career <span className="text-blue-500">with purpose</span></h2>
            <p className="CR_Final_P">Apply now to explore current and upcoming structured career opportunities at CHN Technologies.</p>
            <button className="CR_Btn" onClick={() => navigate('/contact?interest=Careers')}>
              Apply Now <Send size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;