import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Shield, FileText, Globe, Briefcase, CreditCard, Ban,
    AlertTriangle, Zap, ExternalLink, UserCheck, LogOut,
    Scale, RefreshCw, Mail, MapPin, Phone
} from 'lucide-react';

const sections = [
    {
        number: '01',
        icon: FileText,
        title: 'Definitions',
        content: `"Company", "We", "Us" refers to CHN Technologies. "You" refers to any user accessing our website or services. "Services" include all CHN's offerings such as IT, software, workforce consulting, and more.`,
        type: 'text'
    },
    {
        number: '02',
        icon: Globe,
        title: 'Use of Website',
        bullets: [
            'Use only for lawful purposes',
            'Do not disrupt or interfere with site operation',
            'No unauthorized access or misuse of our systems',
        ],
        footer: 'We reserve the right to restrict or revoke access at any time.',
        type: 'bullets'
    },
    {
        number: '03',
        icon: Shield,
        title: 'Intellectual Property',
        content: `All content including graphics, code, and media is the property of CHN Technologies and protected by law. You may not reproduce or republish content without permission.`,
        type: 'text'
    },
    {
        number: '04',
        icon: Briefcase,
        title: 'Service Engagement',
        bullets: [
            'Deliverables and fees will be mutually agreed upon',
            'Clients must provide accurate information and feedback',
            'We may terminate service due to misuse, breach, or non-payment',
        ],
        type: 'bullets'
    },
    {
        number: '05',
        icon: CreditCard,
        title: 'Payments',
        content: `All payments follow agreed contracts or invoices. Delays may incur interest or penalties.`,
        type: 'text'
    },
    {
        number: '06',
        icon: Ban,
        title: 'No Refund Policy',
        content: `Payments are non-refundable unless otherwise stated in a signed agreement. Access to services or products indicates acceptance of the no-refund policy.`,
        type: 'text',
        highlight: true
    },
    {
        number: '07',
        icon: AlertTriangle,
        title: 'Disclaimers',
        content: `Website content is provided "as is" without warranties. We do not guarantee completeness, accuracy, or specific outcomes.`,
        type: 'text'
    },
    {
        number: '08',
        icon: Zap,
        title: 'Limitation of Liability',
        bullets: [
            'We are not liable for inability to use the site',
            'No responsibility for data loss or unauthorized access',
            'No liability for delays caused by third-party providers',
        ],
        type: 'bullets'
    },
    {
        number: '09',
        icon: ExternalLink,
        title: 'Third-Party Links',
        content: `Our website may link to external sites. We are not responsible for their content or privacy practices.`,
        type: 'text'
    },
    {
        number: '10',
        icon: UserCheck,
        title: 'Indemnification',
        content: `You agree to indemnify CHN Technologies from any claims, damages, or expenses arising from your use of our services or violation of these terms.`,
        type: 'text'
    },
    {
        number: '11',
        icon: LogOut,
        title: 'Termination',
        content: `We may suspend or terminate access without notice if you violate these terms.`,
        type: 'text'
    },
    {
        number: '12',
        icon: Scale,
        title: 'Governing Law',
        content: `All matters are governed by the laws of India. Any dispute will be resolved in courts of Chennai, India.`,
        type: 'text'
    },
    {
        number: '13',
        icon: RefreshCw,
        title: 'Changes to Terms',
        content: `We may update these terms at any time. Continued use of our website means you accept the revised terms.`,
        type: 'text'
    },
];

const TermsAndConditions = () => {
    return (
        <div className="TC_WRAPPER">
            <style>{`
                .TC_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  background: #ffffff;
                  color: #1a2b4b;
                  overflow-x: hidden;
                }
                .TC_Hero {
                    background: linear-gradient(135deg, #001a3a 0%, #002e5b 50%, #0050a0 100%);
                    padding: 160px 5% 100px;
                    position: relative;
                    overflow: hidden;
                }
                .TC_Hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(0,96,255,0.15) 0%, transparent 70%);
                    pointer-events: none;
                }
                .TC_Hero_Grid {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                }
                .TC_Badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0,96,255,0.2);
                    border: 1px solid rgba(0,96,255,0.4);
                    color: #60a5fa;
                    padding: 8px 20px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-bottom: 30px;
                }
                .TC_Title {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin-bottom: 20px;
                }
                .TC_Meta {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                .TC_Intro_Text {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    max-width: 750px;
                    margin-top: 30px;
                    font-weight: 400;
                }

                @media (max-width: 1024px) {
                  .TC_Hero { padding: 140px 5% 80px; text-align: center; }
                  .TC_Intro_Text { margin: 30px auto 0; }
                }

                /* TOC sidebar */
                .TC_Layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 60px;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 80px 5% 120px;
                    align-items: start;
                }
                @media (max-width: 1024px) {
                    .TC_Layout { grid-template-columns: 1fr; gap: 40px; }
                    .TC_TOC { display: none; }
                    .TC_Section { text-align: center; }
                    .TC_Section_Header { flex-direction: column; text-align: center; align-items: center; }
                    .TC_Section_Text, .TC_Highlight_Box, .TC_Bullet_List, .TC_Footer_Note { margin-left: 0 !important; }
                    .TC_Bullet_Item { justify-content: center; text-align: center; }
                }
                .TC_TOC {
                    position: sticky;
                    top: 100px;
                    background: #f8fafc;
                    border-radius: 24px;
                    padding: 30px;
                    border: 1px solid #e2e8f0;
                }
                .TC_TOC_Title {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #0060ff;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    margin-bottom: 20px;
                }
                .TC_TOC_Item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 0;
                    border-bottom: 1px solid #f1f5f9;
                    text-decoration: none;
                    color: #475569;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                .TC_TOC_Item:hover { color: #0060ff; }
                .TC_TOC_Num {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #0060ff;
                    background: #eff6ff;
                    width: 24px; height: 24px;
                    border-radius: 6px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }

                /* Sections */
                .TC_Section {
                    border-bottom: 1px solid #f1f5f9;
                    padding: 50px 0;
                    scroll-margin-top: 100px;
                }
                .TC_Section:first-child { padding-top: 0; }
                .TC_Section_Header {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    margin-bottom: 24px;
                }
                .TC_Section_Num {
                    font-size: 0.72rem;
                    font-weight: 900;
                    color: #0060ff;
                    background: #eff6ff;
                    padding: 6px 12px;
                    border-radius: 10px;
                    letter-spacing: 0.05em;
                    flex-shrink: 0;
                }
                .TC_Section_Icon {
                    width: 48px; height: 48px;
                    background: linear-gradient(135deg, #eff6ff, #dbeafe);
                    color: #0060ff;
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .TC_Section_Title {
                    color: #002e5b;
                    letter-spacing: -0.01em;
                }
                .TC_Section_Text {
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-left: 66px;
                }
                .TC_Highlight_Box {
                    background: linear-gradient(135deg, #fff7ed, #fef3c7);
                    border: 1px solid #fbbf24;
                    border-radius: 20px;
                    padding: 24px 30px;
                    margin-left: 66px;
                    margin-top: 10px;
                }
                .TC_Highlight_Box p {
                    color: #92400e;
                    font-size: 1rem;
                    line-height: 1.7;
                    font-weight: 500;
                    margin: 0;
                }
                .TC_Bullet_List {
                    margin-left: 66px;
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .TC_Bullet_Item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.6;
                }
                .TC_Bullet_Dot {
                    width: 8px; height: 8px;
                    background: #0060ff;
                    border-radius: 50%;
                    flex-shrink: 0;
                    margin-top: 10px;
                }
                .TC_Footer_Note {
                    margin-left: 66px;
                    margin-top: 16px;
                    color: #64748b;
                    font-size: 0.95rem;
                    font-style: italic;
                }

                /* Contact card */
                .TC_Contact_Card {
                    background: linear-gradient(135deg, #002e5b 0%, #0050a0 100%);
                    border-radius: 40px;
                    padding: 50px;
                    color: white;
                    margin-top: 60px;
                }
                .TC_Contact_Title {
                    font-size: clamp(1.5rem, 4vw, 2rem);
                    font-weight: 900;
                    margin-bottom: 12px;
                    letter-spacing: -0.01em;
                }
                .TC_Contact_Subtitle {
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 40px;
                    font-size: 1rem;
                }
                .TC_Contact_Grid {
                    display: grid;
                    grid-template_columns: 1fr;
                    gap: 24px;
                }
                @media (min-width: 640px) { .TC_Contact_Grid { grid-template-columns: repeat(2, 1fr); } }

                .TC_Contact_Item {
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                    text-align: left;
                }
                .TC_Contact_Icon {
                    color: #60a5fa;
                    flex-shrink: 0;
                    margin-top: 4px;
                }
                .TC_Contact_Label {
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.5);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 6px;
                }
                .TC_Contact_Value {
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 500;
                    line-height: 1.5;
                }

                @media (max-width: 640px) {
                  .TC_Contact_Card { padding: 40px 20px; }
                  .TC_Contact_Item { padding: 20px; }
                }
            `}</style>

            {/* HERO */}
            <section className="TC_Hero">
                <div className="TC_Hero_Grid" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    <div className="TC_Badge">
                        <Shield size={12} />
                        Legal Document
                    </div>
                    <h2 className="TC_Title NET_Hero_H1">Terms &amp; <span style={{ color: '#60a5fa' }}>Conditions</span></h2>
                    <p className="TC_Meta">Last updated: July 5, 2025</p>
                    <p className="TC_Intro_Text">
                        Welcome to CHN Technologies. By using our website (www.chntechs.com) and services, you agree
                        to comply with the following terms. If you do not agree, please discontinue use of our
                        website and services.
                    </p>
                </motion.div>
            </section>

            {/* BODY */}
            <div className="TC_Layout">
                {/* Sticky Table of Contents */}
                <aside className="TC_TOC">
                    <p className="TC_TOC_Title">Table of Contents</p>
                    {sections.map((s) => (
                        <a key={s.number} href={`#section-${s.number}`} className="TC_TOC_Item">
                            <span className="TC_TOC_Num">{s.number}</span>
                            {s.title}
                        </a>
                    ))}
                    <a href="#section-contact" className="TC_TOC_Item">
                        <span className="TC_TOC_Num">14</span>
                        Contact Us
                    </a>
                </aside>

                {/* Sections */}
                <div>
                    {sections.map((section, i) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.number}
                                id={`section-${section.number}`}
                                className="TC_Section"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                viewport={{ once: true, margin: '-60px' }}
                            >
                                <div className="TC_Section_Header">
                                    <span className="TC_Section_Num">{section.number}</span>
                                    <div className="TC_Section_Icon">
                                        <Icon size={20} />
                                    </div>
                                    <h2 className="NET_Hero_H1 TC_Section_Title">{section.title}</h2>
                                </div>

                                {section.type === 'text' && (
                                    section.highlight ? (
                                        <div className="TC_Highlight_Box">
                                            <p>{section.content}</p>
                                        </div>
                                    ) : (
                                        <p className="TC_Section_Text">{section.content}</p>
                                    )
                                )}

                                {section.type === 'bullets' && (
                                    <>
                                        <ul className="TC_Bullet_List">
                                            {section.bullets?.map((b, bi) => (
                                                <li key={bi} className="TC_Bullet_Item">
                                                    <span className="TC_Bullet_Dot" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        {section.footer && (
                                            <p className="TC_Footer_Note">{section.footer}</p>
                                        )}
                                    </>
                                )}
                            </motion.div>
                        );
                    })}

                    {/* Section 14 – Contact */}
                    <motion.div
                        id="section-contact"
                        className="TC_Section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="TC_Section_Header">
                            <span className="TC_Section_Num">14</span>
                            <div className="TC_Section_Icon">
                                <Mail size={20} />
                            </div>
                            <h2 className="NET_Hero_H1 TC_Section_Title">Contact Us</h2>
                        </div>

                        <div className="TC_Contact_Card">
                            <p className="TC_Contact_Title">CHN Technologies</p>
                            <p className="TC_Contact_Subtitle">For queries about these terms, reach us through any channel below.</p>
                            <div className="TC_Contact_Grid">
                                <div className="TC_Contact_Item">
                                    <Mail size={18} className="TC_Contact_Icon" />
                                    <div>
                                        <p className="TC_Contact_Label">Email</p>
                                        <p className="TC_Contact_Value">info@chntechs.com</p>
                                    </div>
                                </div>
                                <div className="TC_Contact_Item">
                                    <Phone size={18} className="TC_Contact_Icon" />
                                    <div>
                                        <p className="TC_Contact_Label">Phone</p>
                                        <p className="TC_Contact_Value">+91 70102 00001</p>
                                    </div>
                                </div>
                                <div className="TC_Contact_Item">
                                    <Globe size={18} className="TC_Contact_Icon" />
                                    <div>
                                        <p className="TC_Contact_Label">Website</p>
                                        <p className="TC_Contact_Value">www.chntechs.com</p>
                                    </div>
                                </div>
                                <div className="TC_Contact_Item">
                                    <MapPin size={18} className="TC_Contact_Icon" />
                                    <div>
                                        <p className="TC_Contact_Label">Address</p>
                                        <p className="TC_Contact_Value">No. 28, Fourth Main Road,<br />CIT Nagar, Chennai – 600035</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Related links */}
                    <div style={{ marginTop: '50px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }} className="related_links">
                        <Link to="/privacy-policy" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', color: '#0060ff', padding: '12px 24px', borderRadius: 100, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', border: '1px solid #bfdbfe', transition: 'all 0.3s' }}>
                            <Shield size={15} /> Privacy Policy
                        </Link>
                        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#002e5b', color: '#fff', padding: '12px 24px', borderRadius: 100, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.3s' }}>
                            <Mail size={15} /> Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
