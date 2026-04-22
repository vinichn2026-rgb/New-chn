import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Monitor, Code, Users, ShieldCheck, ArrowRight, User, Search, Filter, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset Imports
import cloudCaseStudy from "@/assets/images/casestudy-cloud.jpg";
import officeBlog from "@/assets/images/blog-office.jpg";
import securityCaseStudy from "@/assets/images/casestudy-security.jpg";
import collaborationBlog from "@/assets/images/blog-collaboration.jpg";
import consultingService from "@/assets/images/service-consulting.jpg";
import featuredBlog from "@/assets/images/blog-featured.jpg";
import corporateFlagship from "@/assets/images/corporate-flagship.jpg";

interface Insight {
  id: number;
  image?: string;
  tag: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  iconCard?: boolean;
}

const CHNInsights = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const insightsRef = useRef<HTMLElement>(null);

  const categories = ['All', 'Operations', 'Software', 'Governance', 'Workforce', 'Strategy', 'Quality'];

  const allInsights: Insight[] = [
    {
      id: 1,
      image: cloudCaseStudy,
      tag: "Operations",
      title: "Technology Operations & Management",
      desc: "Deep-dives into managing enterprise networks, systems, security, and infrastructure effectively for long-term scalability and operational stability.",
      author: "IT Strategy Lead",
      date: "Oct 24, 2026"
    },
    {
      id: 2,
      image: officeBlog,
      tag: "Software",
      title: "Digital & Software Practices in Enterprise",
      desc: "Perspectives on modern web platforms, applications, analytics, and automation systems tailored for real-world business environments and high performance.",
      author: "Digital Architect",
      date: "Oct 15, 2026"
    },
    {
      id: 3,
      image: securityCaseStudy,
      tag: "Governance",
      title: "Execution & Governance for Modern Firm",
      desc: "Detailed articles focused on operational control, process maturity, and establishing reliable system structures to ensure corporate governance and asset protection.",
      author: "Compliance Director",
      date: "Sep 28, 2026"
    },
    {
      id: 4,
      image: collaborationBlog,
      tag: "Workforce",
      title: "Workforce & Global Compliance Standards",
      desc: "Understanding workforce structures, payroll practices, and statutory compliance for HR leaders managing complex multinational operations and regulatory shifts.",
      author: "HR Advisory Lead",
      date: "Sep 12, 2026"
    },
    {
      id: 5,
      image: consultingService,
      tag: "Strategy",
      title: "Sustainable Strategy and Future-Fit Growth",
      desc: "Analysing how business owners, IT decision-makers, and professionals can leverage practical technology strategies to drive sustainable organisational expansion.",
      author: "Operations Lead",
      date: "Aug 30, 2026"
    },
    {
      id: 6,
      image: featuredBlog,
      tag: "Quality",
      title: "Knowledge Over Frequency: An Editorial",
      desc: "Why we prioritise relevance and clarity over volume, ensuring every piece of content remains useful and actionable over long-term strategic horizons.",
      author: "Editorial Board",
      date: "Aug 22, 2026"
    }
  ];

  const filteredInsights = allInsights.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.tag === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="BLOG_WRAPPER">
      <style>{`
        .BLOG_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .BLOG_Hero {
          position: relative;
          height: 60vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #002e5b;
          overflow: hidden;
          padding: 100px 5% 60px;
        }

        .BLOG_Hero_Bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transform: scale(1.1);
        }

        .BLOG_Hero_Content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .BLOG_Badge {
          display: inline-block;
          color: #3b82f6;
          font-weight: 700;
          letter-spacing: 3px;
          font-size: 0.85rem;
          margin-bottom: 25px;
        }

        .BLOG_Hero_H1 {
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 35px;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }

        .BLOG_Search_Box {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          max-width: 650px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        @media (max-width: 640px) {
          .BLOG_Search_Box { 
            border-radius: 100px; 
            padding: 6px 8px; 
            gap: 10px;
          }
          .BLOG_Search_Box input { 
            font-size: 1rem;
            padding: 10px 5px;
            text-align: left;
          }
          .BLOG_Search_Btn { 
            width: 44px; 
            height: 44px;
            border-radius: 50%;
          }
          .BLOG_Search_Icon { width: 20px !important; height: 20px !important; margin-left: 10px !important; }
        }

        .BLOG_Search_Icon { margin-left: 15px; flex-shrink: 0; opacity: 0.5; }

        .BLOG_Search_Box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 1.1rem;
          padding: 10px 20px;
          font-weight: 500;
        }
        .BLOG_Search_Box input::placeholder { color: rgba(255,255,255,0.4); }

        .BLOG_Search_Btn {
           width: 50px; height: 50px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;
        }

        /* --- SECTION 2: FILTER --- */
        .BLOG_Filter_Bar {
          position: sticky;
          top: 80px;
          z-index: 50;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #f1f5f9;
          padding: 25px 5%;
        }

        @media (max-width: 768px) {
          .BLOG_Filter_Bar { position: relative; top: 0; padding: 15px 5%; }
        }

        .BLOG_Filter_Flex {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .BLOG_Filter_Flex::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .BLOG_Filter_Flex { flex-wrap: wrap; justify-content: center; }
          .BLOG_Filter_Btn { flex: 1 1 auto; min-width: 120px; text-align: center; }
        }

        @media (max-width: 480px) {
          .BLOG_Filter_Btn { width: 100%; flex: 1 0 100%; }
        }

        .BLOG_Filter_Btn {
          white-space: nowrap;
          padding: 12px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: 0.4s;
          border: 1px solid #f1f5f9;
          background: #fff;
          color: #1a2b4b;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .BLOG_Filter_Btn:hover { border-color: #3b82f6; color: #3b82f6; }
        .BLOG_Filter_Btn.active { 
          background: #3b82f6; color: white; border-color: #3b82f6; 
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        /* --- SECTION 3: INSIGHTS GRID --- */
        .BLOG_Grid_Section {
          padding: 100px 5%;
          background: #fdfdfd;
        }

        .BLOG_Grid_Container { max-width: 1300px; margin: 0 auto; }

        /* FEATURED SECTION */
        .BLOG_Featured_Card {
          background: #fff;
          border-radius: 50px;
          border: 1px solid #f1f5f9;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.03);
          overflow: hidden;
        }
.BLOG_Btn{
                  background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
                  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;

}
        @media (max-width: 1024px) {
          .BLOG_Featured_Card { grid-template-columns: 1fr; gap: 40px; padding: 40px; }
          .BLOG_Featured_Img { height: 350px; }
          .BLOG_Featured_H { font-size: 2.2rem; }
          .BLOG_Featured_Content { padding: 0; text-align: center; }
          .BLOG_Featured_Content .flex { justify-content: center; }
        }

        .BLOG_Featured_Img { border-radius: 40px; overflow: hidden; height: 500px; }
        .BLOG_Featured_Img img { width: 100%; height: 100%; object-fit: cover; }

        .BLOG_Featured_Content { padding: 40px; text-align: left; }
        .BLOG_Featured_H { line-height: 1.1; margin-bottom: 25px; color: #1a2b4b; }

        /* GRID */
        .BLOG_Grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 768px) { .BLOG_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .BLOG_Grid { grid-template-columns: repeat(3, 1fr); } }

        .BLOG_Card {
          background: #ffffff;
          padding: 15px;
          border-radius: 40px;
          border: 1px solid #f1f5f9;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .BLOG_Card_Img_Box { 
          height: 250px; border-radius: 30px; overflow: hidden; margin-bottom: 30px; 
          position: relative; 
        }
        .BLOG_Card_Img_Box img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s; }
        .BLOG_Card:hover .BLOG_Card_Img_Box img { transform: scale(1.1); }

        .BLOG_Card_Content { padding: 0 20px 25px; }
        .BLOG_Card_Tag { 
          color: #3b82f6; font-weight: 800; font-size: 0.75rem; 
          margin-bottom: 12px; display: block; letter-spacing: 1px; 
        }
        .BLOG_Card_H { font-size: 1.5rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; line-height: 1.3; }
        .BLOG_Card_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; font-weight: 500; margin-bottom: 25px; }

        .BLOG_Card_Footer { border-top: 1px solid #f8fafc; padding-top: 20px; display: flex; align-items: center; justify-content: space-between; }
        .BLOG_Author { display: flex; align-items: center; gap: 10px; }
        .BLOG_Author_Dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }

        /* EMPTY STATE */
        .BLOG_Empty { padding: 120px 0; text-align: center; }
        .BLOG_Empty_Icon { width: 100px; height: 100px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; color: #cbd5e1; }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="BLOG_Hero">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="BLOG_Hero_Bg"
          style={{ backgroundImage: `url(${corporateFlagship})` }}
        />
        <div className="BLOG_Hero_Content">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="BLOG_Badge uppercase">Corporate Insights</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="BLOG_Hero_H1 NET_Hero_H1">Knowledge-Led <br /> <span className="text-blue-500">Perspectives</span></motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="BLOG_Search_Box"
          >
            <Search className="BLOG_Search_Icon" size={24} color="white" />
            <input 
              type="text" 
              placeholder="Search Insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="BLOG_Search_Btn" onClick={() => scrollToSection(insightsRef)}>
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FILTER BAR */}
      <section className="BLOG_Filter_Bar">
        <div className="BLOG_Filter_Flex">
          <div className="flex items-center gap-4 mr-10">
            <Filter size={18} className="text-slate-400" />
            <span className="text-slate-400 font-bold text-md tracking-widest hidden md:block">Refine Area:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`BLOG_Filter_Btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 3: GRID */}
      <section ref={insightsRef} className="BLOG_Grid_Section">
        <div className="BLOG_Grid_Container">

          {/* FEATURED: Only show if no search/filter active */}
          {!searchQuery && activeCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="BLOG_Featured_Card"
            >
              <div className="BLOG_Featured_Img">
                <img src={featuredBlog} alt="Featured Article" />
              </div>
              <div className="BLOG_Featured_Content">
                <span className="BLOG_Badge uppercase">Editorial Focus</span>
                <h2 className="NET_Hero_H1 BLOG_Featured_H">Insights From Our Strategic Advisors</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
                  Comprehensive perspectives on technology, people, and unified corporate processes
                  drawn from real-world digital flagship engagements.
                </p>
                <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <User size={30} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2b4b]">CHN Strategic Board</h4>
                    <p className="text-xs font-bold text-slate-400 tracking-widest">Industry Knowledge Directors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-[#1a2b4b] tracking-tight">
              {activeCategory} Insights
            </h3>
            <p className="text-slate-400 font-bold text-xs tracking-widest">Showing {filteredInsights.length} results</p>
          </div>

          <motion.div layout className="BLOG_Grid">
            <AnimatePresence mode="popLayout">
              {filteredInsights.map((insight) => (
                <motion.div
                  key={insight.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="BLOG_Card">
                    <div className="BLOG_Card_Img_Box">
                      <img src={insight.image} alt={insight.title} />
                    </div>
                    <div className="BLOG_Card_Content text-left">
                      <span className="BLOG_Card_Tag">{insight.tag}</span>
                      <h3 className="BLOG_Card_H">{insight.title}</h3>
                      <p className="BLOG_Card_P line-clamp-3">{insight.desc}</p>

                      <div className="BLOG_Card_Footer">
                        <div className="BLOG_Author">
                          <div className="BLOG_Author_Dot" />
                          <span className="text-[11px] font-bold text-slate-400 tracking-widest">{insight.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredInsights.length === 0 && (
            <div className="BLOG_Empty">
              <div className="BLOG_Empty_Icon"><Search size={40} /></div>
              <h4 className="text-2xl font-bold text-[#1a2b4b] mb-4">No results found</h4>
              <p className="text-slate-400 font-medium mb-8">Refine your search term or select a different category.</p>
              <button
                className="text-blue-500 font-bold text-sm tracking-widest"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section style={{ padding: '50px 5%', textAlign: 'center', background: '#f8fafc' }}>
        <h2 className="NET_Hero_H1" style={{ color: '#1a2b4b' }}>Stay Informed With <span className="text-blue-500">Expert Clarity</span></h2>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-12">
          Gain access to refined perspectives that matter to business owners,
          IT decision-makers, and industry professionals.
        </p>
        <Link to="/contact">
          <button className="BLOG_Btn">
            Inquire for Insights
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CHNInsights;
