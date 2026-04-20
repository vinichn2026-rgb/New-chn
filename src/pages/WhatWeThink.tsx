import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Users,
  Shield,
  TrendingUp,
  Handshake,
  ArrowRight,
  Zap,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeThink = () => {
  const coreValues = [
    {
      title: "Integrity",
      desc: "Acting with complete transparency, ensuring clients' interests are always protected through structured accountability.",
      icon: <Shield size={28} />
    },
    {
      title: "Innovation",
      desc: "Embracing change and thinking ahead to deliver future-ready solutions that solve complex business challenges.",
      icon: <Lightbulb size={28} />
    },
    {
      title: "Client-Centricity",
      desc: "Your goals are our mission. We build every solution with your unique business constraints and objectives in mind.",
      icon: <Target size={28} />
    },
    {
      title: "Accountability",
      desc: "Owning our outcomes and promises, delivering consistency that builds long-term institutional trust.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Collaboration",
      desc: "Working as a unified force with clients and partners to ensure shared success and operational harmony.",
      icon: <Handshake size={28} />
    },
    {
      title: "People-First",
      desc: "Prioritising workforce empowerment and human-centric design in every technology-driven solution we deploy.",
      icon: <Users size={28} />
    }
  ];

  return (
    <div className="WT_WRAPPER">
      <style>{`
        .WT_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .WT_Hero {
          position: relative;
          height: 75vh;
          min-height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #002e5b;
          padding: 100px 5% 60px;
        }

        .WT_Hero_Bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/corporate-flagship.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          transform: scale(1.1);
        }

        .WT_Hero_Overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,46,91,0.9) 0%, rgba(0,46,91,0.7) 100%);
        }

        .WT_Hero_Content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
        }

        .WT_Badge {
          display: inline-block;
          color: #3b82f6;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 25px;
        }

        .WT_Hero_H1 {
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 30px;
          font-size: clamp(2.5rem, 6vw, 5rem);
        }

        .WT_Hero_P {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          font-weight: 500;
        }

        /* --- SECTION 2: CONTEXT --- */
        .WT_Context {
          padding: 100px 5%;
          background: #22314f;
          color: #fff;
          text-align: center;
        }

        .WT_Context_H1 {
          margin-bottom: 30px;
          color: #fff;
        }

        .WT_Context_P {
          max-width: 950px;
          margin: 0 auto;
          color: rgba(255,255,255,0.7);
          font-size: 1.2rem;
          line-height: 1.8;
          font-weight: 400;
        }

        /* --- SECTION 3: VALUES GRID --- */
        .WT_Values {
          padding: 100px 5%;
          background: #f8fafc;
          text-align: center;
        }

        .WT_Values_Grid {
          display: grid;
          grid-template_columns: 1fr;
          gap: 30px;
          margin-top: 80px;
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) { .WT_Values_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WT_Values_Grid { grid-template-columns: repeat(3, 1fr); } }

        .WT_Value_Card {
          background: white;
          padding: 60px 40px;
          border-radius: 40px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .WT_Value_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #22314f 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .WT_Value_Card:hover::before { height: 100%; }
        .WT_Value_Card:hover h3, 
        .WT_Value_Card:hover p,
        .WT_Value_Card:hover .WT_Icon { color: #ffffff !important; }

        .WT_Icon {
          width: 70px;
          height: 70px;
          background: #eff6ff;
          color: #3b82f6;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: 0.3s;
        }

        .WT_Value_Card:hover .WT_Icon { background: rgba(255,255,255,0.1); }
        .WT_Value_Card h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 15px; color: #1a2b4b; transition: 0.3s; letter-spacing: 0.5px; }
        .WT_Value_Card p { color: #64748b; line-height: 1.7; font-size: 1.05rem; transition: 0.3s; }

        /* --- SECTION 4: STRATEGIC FRAMEWORK --- */
        .WT_Framework {
          padding: 100px 5%;
          display: flex;
          align-items: center;
          gap: 60px;
          background: #ffffff;
        }

        .WT_Framework_Content { flex: 1; }
        .WT_Framework_Img { flex: 1; position: relative; }
        .WT_Framework_Img img { 
          width: 100%; border-radius: 50px; 
          box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
          border: 15px solid #fff;
        }

        @media (max-width: 1024px) {
          .WT_Framework { flex-direction: column; text-align: center; gap: 40px; }
          .WT_Framework_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .WT_Block_Title { justify-content: center; }
          .WT_Block_P { margin-left: 0; }
          .WT_Framework_Content button { margin: 0 auto; }
        }

        .WT_Block { margin-bottom: 60px; }
        .WT_Block_Title { font-size: 2rem; font-weight: 900; color: #1a2b4b; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .WT_Block_Circle { width: 45px; height: 45px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; min-width: 45px; }
        .WT_Block_P { color: #64748b; font-size: 1.1rem; line-height: 1.8; margin-left: 60px; }

        @media (max-width: 1024px) {
           .WT_Hero { height: auto; min-height: 400px; }
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="WT_Hero">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="WT_Hero_Bg"
        />
        <div className="WT_Hero_Overlay" />
        <div className="WT_Hero_Content">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="WT_Badge"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="WT_Hero_H1 NET_Hero_H1"
          >
            Empowering enterprises with <span className="text-blue-500">smart tech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="WT_Hero_P"
          >
            A consistent, accountability-driven approach to solving complex business challenges
            through structured technology and strategy.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="WT_Context">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="NET_Hero_H1 WT_Context_H1">Simplifying operations, driving measurable growth</h2>
          <p className="WT_Context_P">
            At CHN Technologies, we believe that clear thinking leads to better results.
            We combine innovation, strategy, and execution to bridge the gap between technical potential
            and real-world business success. We focus on long-term stability and people-first solutions.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="WT_Values">
        <span className="WT_Badge" style={{ marginBottom: '15px' }}>Foundational Pillars</span>
        <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b', margin: 0 }}>Values that drive us</h2>

        <div className="WT_Values_Grid">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="WT_Value_Card"
            >
              <div className="WT_Icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: STRATEGIC FRAMEWORK */}
      <section className="WT_Framework">
        <div className="WT_Framework_Img">
          <img src="/images/blog-collaboration.jpg" alt="Strategic Collaboration" />
        </div>
        <div className="WT_Framework_Content">
          <span className="WT_Badge">OUR VISION & MISSION</span>
          <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b' }}>Strategic long-term <br /> objectives</h2>

          <div className="WT_Block">
            <h3 className="WT_Block_Title">
              <div className="WT_Block_Circle"><Target size={22} /></div>
              Our mission
            </h3>
            <p className="WT_Block_P">
              To simplify operations, enrich workforce capabilities, and drive organisational growth
              by offering tailored consulting and tech solutions that deliver real-world impact
              and measurable financial clarity.
            </p>
          </div>

          <div className="WT_Block">
            <h3 className="WT_Block_Title">
              <div className="WT_Block_Circle"><Lightbulb size={22} /></div>
              Our vision
            </h3>
            <p className="WT_Block_P">
              To become a leading force in empowering businesses through people-first consulting
              and technology-driven solutions that allow organisations to focus on expansion
              rather than technical friction.
            </p>
          </div>

          <Link to="/contact">
            <button className="bg-[#3b82f6] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#1a2b4b] transition-all flex items-center gap-3">
              Explore our services <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeThink;