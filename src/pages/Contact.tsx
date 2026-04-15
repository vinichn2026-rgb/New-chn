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
import { toast } from 'sonner';

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

    // Web3Forms Configuration
    const WEB3FORMS_ACCESS_KEY = "c4dd4198-389c-4a2c-9664-941876c93e0d";

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("organisation", formData.org);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("interest", formData.interest);
            formDataToSend.append("message", formData.message);
            formDataToSend.append("from_name", "CHN Website Contact Form");
            formDataToSend.append("subject", `New Requirement: ${formData.interest}`);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                toast.success("Message sent successfully!");
            } else {
                throw new Error(data.message || "Failed to submit form");
            }
        } catch (error) {
            console.error("Web3Forms submission error:", error);
            setIsSubmitting(false);
            toast.error("Failed to send message. Please try again or contact us directly at info@chnindia.com");
        }
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
                  padding: 100px 5% 60px;
                  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                }
                @media (max-width: 1024px) {
                  .CN_Hero { padding-top: 140px; }
                }

                .CN_Hero_Inner {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 60px;
                  width: 100%;
                  max-width: 1300px;
                  position: relative;
                  z-index: 10;
                }
                @media (max-width: 1024px) {
                  .CN_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
                  .CN_Hero_Content { max-width: 100%; order: 1; }
                  .CN_Hero_Img { order: 2; width: 100%; }
                  .CN_Circle_Img { width: 300px; height: 300px; border-width: 10px; }
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
                .CN_Hero_Title
                 { color: #002e5b; line-height: 1.1; margin-bottom: 25px; letter-spacing: -0.03em; text-transform:capitalize;}
                .CN_Hero_Subtitle { color: #0060ff; font-weight: 700; margin-bottom: 30px; line-height: 1.3; }
                .CN_Hero_Desc { color: #475569; line-height: 1.8; margin-bottom: 40px; font-weight: 450; }
.CN_Hero_P{ont-size: 2.1rem;
    color: #64748b;
    font-weight: 500;
}
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
                .CN_Section_Title { color: #002e5b; margin-bottom: 25px; letter-spacing: -0.02em; text-transform:capitalize; }
                .CN_Section_Desc { max-width: 800px; margin: 0 auto 60px; color: #64748b; line-height: 1.7; font-weight: 450; }
                
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
                .CN_Bullet_Text { color: #1a2b4b; font-weight: 600; line-height: 1.4; }

                /* --- SECTION 3: SPLIT MAIN (FORM vs INFO) --- */
                .CN_Main_Grid { padding: 80px 5% 120px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; max-width: 1400px; margin: 0 auto; }
                @media (max-width: 1024px) { .CN_Main_Grid { grid-template-columns: 1fr; } }

                /* FORM (DARK COLOR FROM SAMPLE) */
                .CN_Form_Box { background: #0d1117; color: white; padding: 60px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); }
                @media (max-width: 640px) { .CN_Form_Box { padding: 30px; border-radius: 30px; } }
                .CN_Form_H {  margin-bottom: 15px; text-transform: capitalize; letter-spacing: -0.02em; color:white; }
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
                  font-weight: 800; font-size: 1.1rem; border: none; text-transform: capitalize; letter-spacing: 2px;
                  cursor: pointer; transition: all 0.4s; box-shadow: 0 20px 40px rgba(0,96,255,0.25);
                  display: flex; align-items: center; justify-content: center; gap: 15px;
                }
                .CN_Primary_Btn:hover { transform: translateY(-5px); background: #0050d5; box-shadow: 0 25px 50px rgba(0,96,255,0.35); }

                /* INFO BOX (WHITE) */
                .CN_Info_Box { background: white; padding: 60px; border-radius: 50px; border: 1px solid #f1f5f9; box-shadow: 0 20px 60px rgba(0,0,0,0.03); }
                @media (max-width: 640px) { .CN_Info_Box { padding: 30px; border-radius: 30px; } }
                .CN_Info_Item { display: flex; gap: 20px; margin-bottom: 40px; align-items: flex-start; }
                .CN_Info_Icon { color: #0060ff; background: #eff6ff; padding: 15px; border-radius: 20px; flex-shrink: 0; }
                .CN_Info_H { color: #002e5b; margin-bottom: 10px; letter-spacing: -0.01em; font-size:1.1rem;}
                .CN_Info_Text { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

                /* --- SECTION 4: RESPONSE EXPECTATION --- */
                .CN_Expectation { padding: 100px 5%; background: #fdfdfd; border-top: 1px solid #f1f5f9; text-align: center; }
                .CN_Flow { 
                  display: grid; 
                  grid-template-columns: 1fr; 
                  gap: 40px; 
                  max-width: 1200px; 
                  margin: 80px auto 0; 
                }
                @media (min-width: 768px) { .CN_Flow { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .CN_Flow { grid-template-columns: repeat(3, 1fr); } }
                .CN_Step { position: relative; }
                .CN_Step_Icon { 
                  width: 80px; height: 80px; background: white; color: #0060ff; border-radius: 25px; 
                  display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;
                  box-shadow: 0 15px 30px rgba(0,96,255,0.1); border: 1px solid #eff6ff; 
                }
                .CN_Step_H { color: #002e5b; margin-bottom: 15px; }
                .CN_Step_P { color: #64748b; line-height: 1.6; font-weight: 450; }
                
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
                .CN_Final { padding:50px 20px; text-align: center; background: #fff; }
                .CN_Final_Max { max-width: 800px; margin: 0 auto; }
                .CN_Final_H { color: #1a2b4b; line-height: 1.1; margin-bottom: 30px; text-transform:capitalize; }
                .CN_Final_P { color: #64748b; margin-bottom: 50px; font-weight: 500; }
                .CN_Btn { 
                  background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
                  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;
                }
                .CN_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }
            `}</style>

            {/* LAYOUT 1 – CONTACT INTENT (HERO) */}
            <section className="CN_Hero">
                <div className="CN_Hero_Inner">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="CN_Hero_Content">
                        <span className="text-[#0060ff] font-bold tracking-[0.1em] uppercase mb-6 block">Strategic Engagement</span>
                        <h2 className="NET_Hero_H1 CN_Hero_Title capitalize">contact us</h2>
                        <p className="CN_Hero_Subtitle subtitle">Conversations lead to clarity. Let’s start with yours.</p>
                        <p className="CN_Hero_P">               Whether you need digital solutions, expert consulting, or a new career path, CHN Technologies is ready to help. Reach out today to solve your challenges and start a structured engagement.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="CN_Hero_Img">
                        <div className="CN_Circle_Img">
                            <img src="/images/contact-main.jpg" alt="Contact CHN Technologies" />
                        </div>
                    </motion.div>
                </div>
                <div className="CN_Triangle_Bg"></div>
            </section>

            {/* LAYOUT 2 – WHY REACH OUT */}
            {/* <section className="CN_WhyReach">
                <span className="text-[#0060ff] font-bold tracking-[0.3em] uppercase mb-6 block">Integration Matrix</span>
                <h2 className="CN_Section_Title capitalize">when should you contact <span className="text-blue-500">chn</span></h2>
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
            </section> */}

            {/* LAYOUT 3, 4 – CONNECTION METHODS & FORM (SPLIT) */}
            <section className="CN_Main_Grid" id="contact-form">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="CN_Form_Box">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <h2 className="NET_Hero_H1 CN_Form_H capitalize">share your <span className="text-blue-500">requirement</span></h2>
                                <p className="CN_Form_P subtitle">
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
                                    <button type="submit" disabled={isSubmitting} className="CN_Primary_Btn md:col-span-2 " style={{ textTransform: 'capitalize' }}>
                                        {isSubmitting ? 'Processing Intake...' : 'Send Message'} <Send size={20} />
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                    <CheckCircle2 size={60} />
                                </div>
                                <h3 className="text-3xl font-black">Intake Confirmed</h3>
                                <p className="text-slate-400 font-medium">Requirement logged. Our strategic response team will review and contact you shortly.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-blue-500 font-bold uppercase text-sm underline underline-offset-8">Send New Intake</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="CN_Info_Box">
                    <h2 className="NET_Hero_H1 CN_Hero_Subtitle subtitle capitalize" style={{ marginBottom: '50px' }}>how to connect with us</h2>

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
                <span className="text-[#0060ff] font-bold tracking-[0.1em] uppercase mb-6 block">Structured Response</span>
                <h2 className="NET_Hero_H1 CN_Section_Title capitalize">what happens after you contact us</h2>

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
                    <h2 className="NET_Hero_H1 CN_Section_Title capitalize">our <span className="text-blue-500">presence</span></h2>
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
                <div className="CN_Final_Max">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="NET_Hero_H1 CN_Final_H capitalize">start the <span className="text-blue-500">conversation</span></h2>
                        <p className="CN_Final_P">Contact CHN Technologies to discuss how we can support your organisation or career goals.</p>
                        <a href="#contact-form" style={{ textDecoration: 'none' }}>
                            <button className="CN_Btn">Get In Touch <ArrowRight size={24} /></button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;