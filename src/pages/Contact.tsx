import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    ArrowUpRight,
    Phone,
    Mail,
    Globe,
    Users,
    Send,
    CheckCircle2,
    Linkedin,
    Facebook,
    Instagram,
    Youtube,
    Activity,
    ArrowRight,
    MessageSquare,
    Target,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.195Z" />
    </svg>
);

const ContactPage = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        org: '',
        email: '',
        phone: '',
        interest: 'Area of Interest',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle pre-filling from URL parameters (e.g., from Careers search)
    useEffect(() => {
        const interestParam = searchParams.get('interest');
        const jobParam = searchParams.get('job');

        if (interestParam || jobParam) {
            setFormData(prev => ({
                ...prev,
                interest: interestParam ? interestParam : prev.interest,
                message: jobParam ? `Interested in position: ${decodeURIComponent(jobParam)}` : prev.message
            }));
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="CN_WRAPPER">
            <style>{`
                .CN_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  color: #1a2b4b;
                  background: #ffffff;
                }

                /* --- SECTION 1: HERO (EXACT SAMPLE DESIGN) --- */
                .CN_Hero {
                  padding: 78px 6% 38px;
                  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 60px;
                  position: relative;
                  overflow: hidden;
                }

                .CN_Hero::after {
                  content: "";
                  position: absolute;
                  top: 0; right: 0; 
                  width: 45%; 
                  height: 100%; 
                  background: #0060ff; 
                  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
                  opacity: 0.05;
                }

                .CN_Hero_Content { flex: 1.2; max-width: 650px; z-index: 10; }
                .CN_Hero_Title { font-size: 5rem; font-weight: 900; color: #002e5b; line-height: 1.1; margin-bottom: 25px; letter-spacing: -0.03em; text-transform: uppercase;}
                .CN_Hero_Subtitle { font-size: 1.5rem; color: #0060ff; font-weight: 700; margin-bottom: 30px; line-height: 1.3; }
                .CN_Hero_Desc { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 40px; font-weight: 450; }

                .CN_Hero_Img {
                  flex: 1;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  z-index: 5;
                }
                
                .CN_Circle_Img {
                  width: 480px;
                  height: 480px;
                  border-radius: 50%;
                  border: 15px solid #fff;
                  box-shadow: 0 40px 100px rgba(0,46,91,0.12);
                  overflow: hidden;
                  background: #fff;
                }
                .CN_Circle_Img img { width: 100%; height: 100%; object-fit: cover; }

                .CN_Triangle_Bg {
                  position: absolute;
                  bottom: -100px; right: -50px;
                  width: 500px; height: 500px;
                  background: linear-gradient(135deg, #0060ff 0%, #002e5b 100%);
                  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
                  z-index: -1;
                  opacity: 0.9;
                }

                /* --- SECTION 2: WHY CONTACT --- */
                .CN_WhyReach { padding: 100px 5%; background: #ffffff; text-align: center; }
                .CN_Section_Title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: #002e5b; margin-bottom: 25px; letter-spacing: -0.02em; text-transform: uppercase; }
                .CN_Section_Desc { max-width: 800px; margin: 0 auto 60px; font-size: 1.15rem; color: #64748b; line-height: 1.7; font-weight: 450; }
                
                .CN_Bullet_Grid { 
                  display: grid; 
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                  gap: 30px; 
                  max-width: 1200px; margin: 0 auto;
                }
                .CN_Bullet_Item { 
                  background: #f8fafc; padding: 40px 30px; border-radius: 30px; border: 1px solid #f1f5f9; text-align: left;
                  display: flex; gap: 20px; align-items: flex-start; transition: 0.4s;
                }
                .CN_Bullet_Item:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,96,255,0.06); border-color: #0060ff; }
                .CN_Bullet_Icon { color: #0060ff; background: #fff; padding: 12px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
                .CN_Bullet_Text { color: #1a2b4b; font-weight: 600; font-size: 1.1rem; line-height: 1.4; }

                /* --- SECTION 3: SPLIT MAIN (FORM vs INFO) --- */
                .CN_Main_Grid { padding: 80px 5% 120px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; max-width: 1400px; margin: 0 auto; }
                @media (max-width: 1024px) { .CN_Main_Grid { grid-template-columns: 1fr; } }

                /* FORM (DARK COLOR FROM SAMPLE) */
                .CN_Form_Box { background: #0d1117; color: white; padding: 60px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); }
                @media (max-width: 640px) { .CN_Form_Box { padding: 30px; border-radius: 30px; } }
                .CN_Form_H { font-size: 2.2rem; font-weight: 900; margin-bottom: 15px; text-transform: uppercase; letter-spacing: -0.02em; color:white; }
                .CN_Form_P { color: #94a3b8; margin-bottom: 45px; line-height: 1.6; font-size: 1rem; }

                .CN_Input { 
                  width: 100%; border: none; outline: none; background: #1a202c; color: white; border-radius: 15px; 
                  padding: 20px 25px; margin-bottom: 20px; font-size: 1rem; transition: 0.3s;
                }
                .CN_Input:focus { background: #2d3748; box-shadow: 0 0 0 2px #0060ff; }
                .CN_Select { 
                  width: 100%; border: none; outline: none; background: #1a202c; color: #94a3b8; border-radius: 15px; 
                  padding: 20px 25px; margin-bottom: 20px; font-size: 1rem; cursor: pointer;
                }

                .CN_Primary_Btn {
                  width: 100%; background: #0060ff; color: white; padding: 22px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; text-transform: uppercase; letter-spacing: 2px;
                  cursor: pointer; transition: all 0.4s; box-shadow: 0 20px 40px rgba(0,96,255,0.25);
                  display: flex; align-items: center; justify-content: center; gap: 15px;
                }
                .CN_Primary_Btn:hover { transform: translateY(-5px); background: #0050d5; box-shadow: 0 25px 50px rgba(0,96,255,0.35); }

                /* INFO BOX (WHITE) */
                .CN_Info_Box { background: white; padding: 60px; border-radius: 50px; border: 1px solid #f1f5f9; box-shadow: 0 20px 60px rgba(0,0,0,0.03); }
                @media (max-width: 640px) { .CN_Info_Box { padding: 30px; border-radius: 30px; } }
                .CN_Info_Item { display: flex; gap: 20px; margin-bottom: 40px; align-items: flex-start; }
                .CN_Info_Icon { color: #0060ff; background: #eff6ff; padding: 15px; border-radius: 20px; flex-shrink: 0; }
                .CN_Info_H { font-size: 1.4rem; font-weight: 800; color: #002e5b; margin-bottom: 10px; text-transform: uppercase; letter-spacing: -0.01em; }
                .CN_Info_Text { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

                /* --- SECTION 4: RESPONSE EXPECTATION --- */
                .CN_Expectation { padding: 100px 5%; background: #fdfdfd; border-top: 1px solid #f1f5f9; text-align: center; }
                .CN_Flow { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1200px; margin: 80px auto 0; }
                .CN_Step { position: relative; }
                .CN_Step_Icon { 
                  width: 80px; height: 80px; background: white; color: #0060ff; border-radius: 25px; 
                  display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;
                  box-shadow: 0 15px 30px rgba(0,96,255,0.1); border: 1px solid #eff6ff; 
                }
                .CN_Step_H { font-size: 1.4rem; font-weight: 800; color: #002e5b; margin-bottom: 15px; }
                .CN_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; font-weight: 450; }
                
                /* --- SECTION 5: MAPS (WIDE) --- */
                .CN_Map_Section { padding: 0 5% 100px; }
                .CN_Map_Box { 
                  width: 100%; height: 500px; border-radius: 30px; overflow: hidden; 
                  box-shadow: 0 40px 100px rgba(0,0,0,0.12); border: 1px solid #f1f5f9;
                  position: relative;
                  transform-style: preserve-3d;
                  will-change: transform;
                  transition: box-shadow 0.4s ease;
                }
                .CN_Map_Box:hover {
                  box-shadow: 0 60px 120px rgba(0,96,255,0.15);
                }
                .CN_Map_Overlay {
                  position: absolute; bottom: 40px; left: 40px; right: 40px;
                  background: rgba(255,255,255,0.92); backdrop-filter: blur(20px);
                  padding: 20px 30px; border-radius: 20px; display: flex; align-items: center; justify-content: space-between;
                  border: 1px solid rgba(0,96,255,0.1); z-index: 10;
                  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                }
                @media (max-width: 768px) { .CN_Map_Overlay { flex-direction: column; text-align: center; gap: 20px; bottom: 20px; left: 20px; right: 20px; } }

                /* --- FINAL CTA --- */
                .CN_Final { 
                  padding: 140px 5%; background: #002e5b; text-align: center; color: white; position: relative; overflow: hidden;
                }
                .CN_Final_H { font-size: 4rem; font-weight: 900; margin-bottom: 30px; letter-spacing: -0.03em; text-transform: uppercase; color:#ffffff; }
                .CN_Final_P { font-size: 1.4rem; color: #94a3b8; max-width: 800px; margin: 0 auto 50px; line-height: 1.6; font-weight: 500; }
            `}</style>

            {/* LAYOUT 1 – CONTACT INTENT (HERO) */}
            <section className="CN_Hero">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="CN_Hero_Content">
                    <span className="text-[#0060ff] font-bold tracking-[0.3em] uppercase mb-6 block">Strategic Engagement</span>
                    <h1 className="CN_Hero_Title">CONTACT US</h1>
                    <p className="CN_Hero_Subtitle">Conversations lead to clarity. Let’s start with yours.</p>
                    {/* <p className="CN_Hero_Desc">
                        Whether you are exploring technology services, digital solutions, consulting support, or career opportunities,
                        CHN Technologies is here to understand your requirements and guide you in the right direction.
                        Reach out to us to discuss challenges, ask questions, or begin a structured engagement.
                    </p> */}
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="CN_Hero_Img">
                    <div className="CN_Circle_Img">
                        {/* High-quality professional on phone image */}
                        <img src="/images/contact-main.jpg" alt="Contact CHN Technologies" />
                    </div>
                    <div className="CN_Triangle_Bg"></div>
                </motion.div>
            </section>

            {/* LAYOUT 2 – WHY REACH OUT */}
            <section className="CN_WhyReach">
                <span className="text-[#0060ff] font-bold tracking-[0.3em] uppercase mb-6 block">Integration Matrix</span>
                <h2 className="CN_Section_Title">WHEN SHOULD YOU CONTACT <span className="text-blue-500">CHN</span></h2>
                <p className="CN_Section_Desc">We provide a structured communication layer for organizations seeking stability, growth, and specialized expertise.</p>

                <div className="CN_Bullet_Grid">
                    {[
                        "Strengthen technology or digital operations",
                        "Improve workforce, payroll, or compliance processes",
                        "Explore consulting or advisory support",
                        "Discuss project requirements or partnerships",
                        "Enquire about career or collaboration opportunities"
                    ].map((bullet, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="CN_Bullet_Item">
                            <div className="CN_Bullet_Icon"><CheckCircle2 size={24} /></div>
                            <span className="CN_Bullet_Text">{bullet}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* LAYOUT 3, 4 – CONNECTION METHODS & FORM (SPLIT) */}
            <section className="CN_Main_Grid">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="CN_Form_Box">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <h2 className="CN_Form_H">SHARE YOUR <span className="text-blue-500">REQUIREMENT</span></h2>
                                <p className="CN_Form_P">
                                    Provide a brief overview of your requirement, and our team will connect with you to understand next steps.
                                    Clear information helps us respond faster and more effectively.
                                </p>
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input name="name" type="text" placeholder="Full Name" required className="CN_Input" value={formData.name} onChange={handleChange} />
                                    <input name="org" type="text" placeholder="Organisation" className="CN_Input" value={formData.org} onChange={handleChange} />
                                    <input name="email" type="email" placeholder="Email Address" required className="CN_Input md:col-span-1" value={formData.email} onChange={handleChange} />
                                    <input name="phone" type="text" placeholder="Contact Number" className="CN_Input" value={formData.phone} onChange={handleChange} />
                                    <select name="interest" className="CN_Select md:col-span-2" value={formData.interest} onChange={handleChange}>
                                        <option disabled>Area of Interest</option>
                                        <option>Technology Services</option>
                                        <option>Software & Digital Solutions</option>
                                        <option>Consulting & Advisory</option>
                                        <option>Careers</option>
                                    </select>
                                    <textarea name="message" placeholder="Requirement Details" rows={5} required className="CN_Input md:col-span-2" value={formData.message} onChange={handleChange}></textarea>
                                    <button type="submit" disabled={isSubmitting} className="CN_Primary_Btn md:col-span-2">
                                        {isSubmitting ? 'Processing Intake...' : 'Send Message'} <Send size={20} />
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                    <CheckCircle2 size={60} />
                                </div>
                                <h3 className="text-3xl font-black uppercase">Intake Confirmed</h3>
                                <p className="text-slate-400 font-medium">Requirement logged. Our strategic response team will review and contact you shortly.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-blue-500 font-bold uppercase text-sm underline underline-offset-8">Send New Intake</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="CN_Info_Box">
                    <h2 className="CN_Hero_Subtitle" style={{ marginBottom: '50px' }}>HOW TO CONNECT WITH US</h2>

                    <div className="space-y-4">
                        {[
                            { icon: <Globe size={28} />, title: "Business Enquiries", text: "For technology, digital, and consulting discussions." },
                            { icon: <Users size={28} />, title: "Consulting & Advisory", text: "For workforce management, payroll & compliance, and training-related discussions." },
                            { icon: <Activity size={28} />, title: "Careers", text: "For job applications, internships, and collaboration enquiries." },
                            { icon: <MapPin size={28} />, title: "Head Office", text: "CHN Technologies Pvt Ltd, No. 28, 4th Main Rd, CIT Nagar East, Chennai - 600035" },
                            { icon: <MapPin size={28} />, title: "Branch Office", text: "AAA Towers, Avinashi Rd, Near Hope College, Coimbatore - 641 004" }
                        ].map((info, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="CN_Info_Item">
                                <div className="CN_Info_Icon">{info.icon}</div>
                                <div>
                                    <h4 className="CN_Info_H">{info.title}</h4>
                                    <p className="CN_Info_Text">{info.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LAYOUT 5 – RESPONSE & ENGAGEMENT EXPECTATION */}
            <section className="CN_Expectation">
                <span className="text-[#0060ff] font-bold tracking-[0.3em] uppercase mb-6 block">Structured Response</span>
                <h2 className="CN_Section_Title">WHAT HAPPENS AFTER YOU CONTACT US</h2>

                <div className="CN_Flow">
                    {[
                        { icon: <Search size={30} />, head: "Strategic Review", p: "Your requirement is analyzed by the relevant sector leads for technical and business alignment." },
                        { icon: <Linkedin size={30} />, head: "Contextual Audit", p: "We may reach out to gather deeper context to ensure our response is Purposeful and precise." },
                        { icon: <CheckCircle2 size={30} />, head: "Structured Response", p: "A formal proposal, consultation, or discussion is scheduled to define the roadmap forward." }
                    ].map((step, i) => (
                        <div key={i} className="CN_Step">
                            <div className="CN_Step_Icon">
                                {step.icon}
                            </div>
                            <h4 className="CN_Step_H">{step.head}</h4>
                            <p className="CN_Step_P">{step.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LAYOUT 6 – CLOSING & MAPS */}
            <section className="CN_Map_Section">
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <h2 className="CN_Section_Title">OUR <span className="text-blue-500">PRESENCE</span></h2>
                    <p className="CN_Section_Desc" style={{ marginBottom: 0 }}>Discover stability and expertise at our key operational hubs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* CHENNAI HEAD OFFICE MAP */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 15, y: 40 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        whileHover={{ rotateX: -2, rotateY: 2, scale: 1.01 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
                        className="CN_Map_Box"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46!2d80.2328973!3d13.0279111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bb3ff0c96b%3A0x754b928c48673319!2sCHN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712310000003!5m2!1sen!2sin"
                            title="Head Office - Chennai"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="CN_Map_Overlay">
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Corporate HQ</p>
                                <h3 className="text-base font-black text-[#002e5b]">CHN Technologies – Chennai</h3>
                                <p className="text-[11px] text-gray-500 mt-0.5">No. 28, 4th Main Rd, CIT Nagar, Chennai 600035</p>
                            </div>
                            <a href="https://www.google.com/maps/dir//CHN+Technologies+Private+Limited,+No.+28,+4th+Main+Rd,+CIT+Nagar+East,+CIT+Nagar,+Chennai,+Tamil+Nadu+600035" target="_blank" rel="noreferrer" className="ml-4 flex-shrink-0 w-10 h-10 bg-[#002e5b] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* COIMBATORE BRANCH OFFICE MAP */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 15, y: 40 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        whileHover={{ rotateX: -2, rotateY: -2, scale: 1.01 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
                        className="CN_Map_Box"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.67!2d77.0206077!3d11.0266952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85700288537d1%3A0x2f08f25d9cfd98ba!2sCHN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712310000002!5m2!1sen!2sin"
                            title="Branch Office - Coimbatore"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="CN_Map_Overlay">
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Regional Center</p>
                                <h3 className="text-base font-black text-[#002e5b]">CHN Technologies – Coimbatore</h3>
                                <p className="text-[11px] text-gray-500 mt-0.5">AAA Towers, Avinashi Rd, Near Hope College, CBE 641004</p>
                            </div>
                            <a href="https://www.google.com/maps/place/CHN+Technologies+Private+Limited/@11.0267005,77.0180328,17z" target="_blank" rel="noreferrer" className="ml-4 flex-shrink-0 w-10 h-10 bg-[#002e5b] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="CN_Final">
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="CN_Final_H italic">START THE CONVERSATION</h2>
                    <p className="CN_Final_P">Contact CHN Technologies to discuss how we can support your organisation or career goals.</p>
                    <Link to="/contact">
                        <button className="CN_Primary_Btn" style={{ width: 'fit-content', margin: '0 auto', padding: '25px 80px' }}>Get In Touch <ArrowRight size={20} /></button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default ContactPage;