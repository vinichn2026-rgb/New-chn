import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Server, Shield, Monitor, HardDrive, Wifi, Globe, Code, BarChart2, Zap } from 'lucide-react';

const categories = [
    {
        id: 'it-infrastructure',
        label: 'IT Infrastructure',
        color: '#0060ff',
        bg: '#eff6ff',
        description: 'End-to-end infrastructure services that keep your operations stable, secure, and connected.',
        services: [
            { name: 'Network Management', link: '/network', icon: Wifi, desc: 'Network design, monitoring, and performance optimisation.' },
            { name: 'Cyber Security', link: '/cybersecurity', icon: Shield, desc: 'Threat detection, compliance, and access management.' },
            { name: 'End User Computing', link: '/enduser', icon: Monitor, desc: 'Provisioning, VDI, device lifecycle, and helpdesk.' },
            { name: 'Server Administration', link: '/server', icon: Server, desc: 'Server setup, OS patching, and disaster recovery.' },
            { name: 'LAN Cabling & Surveillance', link: '/lancabling', icon: HardDrive, desc: 'Structured cabling, CCTV, and access control systems.' },
        ],
    },
    {
        id: 'software-solutions',
        label: 'Software Solutions',
        color: '#7c3aed',
        bg: '#f5f3ff',
        description: 'Custom-built digital products and web platforms tailored to your business workflows.',
        services: [
            { name: 'Web Design & Development', link: '/webdesign', icon: Globe, desc: 'Responsive websites, CMS implementation, and UI/UX design.' },
            { name: 'Application Development', link: '/application', icon: Code, desc: 'Scalable apps, mobile solutions, and API integrations.' },
        ],
    },
    {
        id: 'digital-solutions',
        label: 'Digital Solutions',
        color: '#059669',
        bg: '#ecfdf5',
        description: 'Data-driven processes and intelligent automation to improve efficiency and visibility.',
        services: [
            { name: 'Data Analytics', link: '/dataanalytics', icon: BarChart2, desc: 'BI dashboards, predictive analytics, and data warehousing.' },
            { name: 'Automation', link: '/automation', icon: Zap, desc: 'RPA, workflow automation, and process integration.' },
        ],
    },
];

const TechnologyPage = () => {
    return (
        <div className="TECH_WRAPPER">
            <style>{`
                .TECH_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  background: #fff;
                  color: #1a2b4b;
                  overflow-x: hidden;
                }
                .TECH_Hero {
                    background: linear-gradient(135deg, #001a3a 0%, #002e5b 60%, #003f80 100%);
                    padding: 160px 5% 100px;
                    position: relative;
                    overflow: hidden;
                }
                .TECH_Hero::before {
                    content: '';
                    position: absolute;
                    top: -200px; right: -200px;
                    width: 700px; height: 700px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,96,255,0.12) 0%, transparent 70%);
                    pointer-events: none;
                }
                .TECH_Hero_Grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                }
                .TECH_Badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,96,255,0.18); border: 1px solid rgba(0,96,255,0.35);
                    color: #60a5fa; padding: 7px 18px; border-radius: 100px;
                    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em;
                    text-transform: capitalize; margin-bottom: 28px;
                }
                .TECH_Hero_Title {
                    font-size: clamp(2.5rem, 6vw, 5.5rem);
                    font-weight: 900; color: #fff;
                    line-height: 1.05; letter-spacing: -0.03em;
                    text-transform: capitalize; margin-bottom: 20px;
                }
                .TECH_Hero_desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.7);
                    max-width: 700px; line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .TECH_Hero { padding: 140px 5% 80px; text-align: center; }
                    .TECH_Hero_desc { margin: 0 auto; }
                    .TECH_Breadcrumb { justify-content: center; }
                }

                /* Body */
                .TECH_Body { max-width: 1300px; margin: 0 auto; padding: 80px 5% 120px; }

                .TECH_Category { margin-bottom: 80px; }
                .TECH_Category_Header {
                    display: flex; align-items: flex-start; gap: 40px;
                    margin-bottom: 40px; padding-bottom: 24px;
                    border-bottom: 1px solid #f1f5f9;
                }
                @media (max-width: 1024px) {
                    .TECH_Category_Header { flex-direction: column; gap: 30px; text-align: center; align-items: center; }
                    .TECH_Category_Desc { margin: 0 auto; }
                }
                .TECH_Category_Label {
                    color: #002e5b; letter-spacing: -0.01em; margin-bottom: 10px;
                }
                .TECH_Category_Desc {
                    font-size: 1rem; color: #64748b;
                    max-width: 700px; line-height: 1.6;
                }
                .TECH_Category_Badge {
                    padding: 6px 16px; border-radius: 100px;
                    font-size: 0.72rem; font-weight: 800;
                    text-transform: capitalize; letter-spacing: 0.1em;
                    white-space: nowrap; flex-shrink: 0;
                }

                .TECH_Grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                @media (min-width: 768px) { .TECH_Grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .TECH_Grid { grid-template-columns: repeat(3, 1fr); } }

                .TECH_Card {
                    background: #fafafa;
                    border: 1px solid #f1f5f9;
                    border-radius: 24px;
                    padding: 30px;
                    text-decoration: none;
                    color: inherit;
                    display: flex; flex-direction: column;
                    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                    position: relative; overflow: hidden;
                    height: 100%;
                }
                .TECH_Card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.08);
                    border-color: transparent;
                }

                .TECH_Card_Icon {
                    width: 50px; height: 50px; border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px; flex-shrink: 0;
                    transition: transform 0.3s;
                }
                .TECH_Card:hover .TECH_Card_Icon { transform: scale(1.1); }

                .TECH_Card_Name {
                    font-size: 1.2rem; font-weight: 800; margin-bottom: 10px;
                    color: #1a2b4b;
                }
                .TECH_Card_Desc {
                    font-size: 0.95rem; color: #64748b; line-height: 1.6;
                    flex: 1;
                }
                .TECH_Card_Arrow {
                    margin-top: 20px; align-self: flex-end;
                    width: 36px; height: 36px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.3s;
                }
                .TECH_Card:hover .TECH_Card_Arrow { transform: translate(2px, -2px); }

                /* Breadcrumb */
                .TECH_Breadcrumb {
                    display: flex; align-items: center; gap: 10px;
                    font-size: 0.8rem; color: rgba(255,255,255,0.45);
                    margin-bottom: 24px;
                    text-transform: capitalize; letter-spacing: 0.1em; font-weight: 700;
                }
                .TECH_Breadcrumb a { color: rgba(255,255,255,0.45); text-decoration: none; }
                .TECH_Breadcrumb a:hover { color: #fff; }

                /* Bottom CTA */
                .TECH_CTA {
                    background: linear-gradient(135deg, #002e5b, #0060ff);
                    border-radius: 40px; padding: 60px;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 40px; margin-top: 40px;
                }
                @media (max-width: 1024px) {
                    .TECH_CTA { flex-direction: column; text-align: center; padding: 50px 30px; }
                    .TECH_CTA_Content { width: 100%; }
                    .TECH_CTA_Btn { margin: 0 auto; width: 100%; justify-content: center; }
                }
            `}</style>

            {/* HERO */}
            <section className="TECH_Hero">
                <div className="TECH_Hero_Grid" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    <div className="TECH_Breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span style={{ color: '#60a5fa' }}>Technology</span>
                    </div>
                    <div className="TECH_Badge">What We Do</div>
                    <h2 className="TECH_Hero_Title NET_Hero_H1 capitalize">
                        technology<br />
                        <span style={{ color: '#60a5fa' }}>services</span>
                    </h2>
                    <p className="TECH_Hero_desc">
                        Integrated technology capabilities across infrastructure, software, and digital solutions —
                        built to strengthen operations and drive long-term performance.
                    </p>
                </motion.div>
            </section>

            {/* CATEGORIES */}
            <div className="TECH_Body">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.id}
                        className="TECH_Category"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: ci * 0.1 }}
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {/* Category header */}
                        <div className="TECH_Category_Header">
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }} className="header_top">
                                    <span
                                        className="TECH_Category_Badge"
                                        style={{ background: cat.bg, color: cat.color }}
                                    >
                                        {cat.label}
                                    </span>
                                </div>
                                <h2 className="NET_Hero_H1 TECH_Category_Label capitalize">{cat.label.toLowerCase()}</h2>
                                <p className="TECH_Category_Desc">{cat.description}</p>
                            </div>
                            <Link
                                to={`/${cat.id}`}
                                className="category_link"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 8,
                                    color: cat.color, fontWeight: 700, fontSize: '0.85rem',
                                    textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                                    padding: '12px 24px',
                                    border: `1px solid ${cat.color}30`,
                                    borderRadius: 100,
                                    background: cat.bg,
                                    transition: 'all 0.3s',
                                }}
                            >
                                View All <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {/* Service cards */}
                        <div className="TECH_Grid">
                            {cat.services.map((svc, si) => {
                                const Icon = svc.icon;
                                return (
                                    <motion.div
                                        key={svc.link}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: si * 0.07 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link to={svc.link} className="TECH_Card">
                                            <div
                                                className="TECH_Card_Icon"
                                                style={{ background: cat.bg, color: cat.color }}
                                            >
                                                <Icon size={22} />
                                            </div>
                                            <p className="TECH_Card_Name">{svc.name}</p>
                                            <p className="TECH_Card_Desc">{svc.desc}</p>
                                            <div
                                                className="TECH_Card_Arrow"
                                                style={{ background: cat.bg, color: cat.color }}
                                            >
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="TECH_CTA"
                >
                    <div className="TECH_CTA_Content">
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
                            Not sure where to start?
                        </p>
                        <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 900, margin: 0, lineHeight: 1.2 }}>
                            Let's find the right solution for your business
                        </h3>
                    </div>
                    <Link to="/contact" className="TECH_CTA_Btn" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        background: '#fff', color: '#002e5b',
                        padding: '16px 36px', borderRadius: 100,
                        fontWeight: 800, fontSize: '0.95rem',
                        textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                        transition: 'all 0.3s',
                    }}>
                        Talk to Us <ArrowUpRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default TechnologyPage;
