import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
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

// Asset Imports
import contactMain from "@/assets/images/contact-main.jpg";

const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.195Z" />
    </svg>
);

const ContactPage = () => {
    const [searchParams] = useSearchParams();
    const { hash } = useLocation();
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    // Handle hash navigation manually for scroll-snap reliability
    useEffect(() => {
        if (hash) {
            const targetId = hash.replace('#', '');
            const element = document.getElementById(targetId);
            if (element) {
                // If snap-scrolling is on, we might need to scroll the wrapper specifically
                if (window.innerWidth >= 1025 && wrapperRef.current) {
                    wrapperRef.current.scrollTo({
                        top: element.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [hash]);
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

    // Brevo SMTP Configuration
    const BREVO_API_KEY = "REMOVED_SECRET  ";
    const BREVO_SENDER = { name: "CHN Website Contact", email: "vinichn2026@gmail.com" };
    const BREVO_RECIPIENT = "info@chnindia.com";
    const LOGO_URL = "https://chnindia.com/chn-logo.png";
    const [showEmailPreview, setShowEmailPreview] = React.useState(false);

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
            const subject = `New Requirement: ${formData.interest}`;
            const htmlContent = `
                <div style="background-color: #f8fafc; padding: 40px 20px; font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,46,91,0.06); border: 1px solid #e2e8f0;">
                        <tr>
                            <td style="height: 6px; background: linear-gradient(to right, #2563eb, #4f46e5);"></td>
                        </tr>
                        <tr>
                            <td style="padding: 60px 40px 40px; text-align: center;">
                                <img src="${LOGO_URL}" alt="CHN Technologies" style="width: 140px; height: auto; margin-bottom: 24px;">
                                <h1 style="color: #002e5b; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1.5px; text-transform: uppercase;">New Inquiry</h1>
                                <p style="color: #64748b; margin-top: 12px; font-size: 14px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">Digital Flagship Center</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 40px 40px;">
                                <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td width="50%" style="padding-bottom: 24px;">
                                                <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Client Name</span>
                                                <strong style="color: #1e293b; font-size: 15px;">${formData.name}</strong>
                                            </td>
                                            <td width="50%" style="padding-bottom: 24px;">
                                                <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Organisation</span>
                                                <strong style="color: #1e293b; font-size: 15px;">${formData.org || 'Not Specified'}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="50%" style="padding-bottom: 24px;">
                                                <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Email Identity</span>
                                                <strong style="color: #1e293b; font-size: 15px;">${formData.email}</strong>
                                            </td>
                                            <td width="50%" style="padding-bottom: 24px;">
                                                <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Contact Phone</span>
                                                <strong style="color: #1e293b; font-size: 15px;">${formData.phone || 'Not Provided'}</strong>
                                            </td>
                                        </tr>
                                    </table>

                                    <div style="margin-top: 8px; border-top: 1px solid #f1f5f9; padding-top: 24px;">
                                        <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Area of Interest</span>
                                        <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); color: #2563eb; padding: 12px 24px; border-radius: 100px; display: inline-block; font-weight: 900; font-size: 13px; border: 1px solid rgba(37,99,235,0.1); letter-spacing: 0.5px;">
                                            ${formData.interest}
                                        </div>
                                    </div>
                                </div>

                                <div style="margin-top: 32px; padding: 32px; background: #fafafa; border-radius: 24px; border: 1px solid #f1f5f9; position: relative;">
                                   <div style="position: absolute; left: 0; top: 32px; bottom: 32px; width: 4px; background: #2563eb; border-radius: 0 4px 4px 0;"></div>
                                   <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 16px; padding-left: 12px;">Requirement Brief</span>
                                   <p style="color: #334155; font-size: 16px; line-height: 1.8; margin: 0; font-weight: 500; padding-left: 12px;">${formData.message}</p>
                                </div>

                                <div style="margin-top: 48px; text-align: center;">
                                    <a href="mailto:${formData.email}" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; padding: 20px 48px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; display: inline-block; box-shadow: 0 20px 40px rgba(37,99,235,0.25); letter-spacing: 1px;">REPLY TO CLIENT</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 40px; text-align: center; background-color: #fafafa; border-top: 1px solid #f1f5f9;">
                                <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">&copy; ${new Date().getFullYear()} CHN TECHNOLOGIES • DIGITAL FLAGSHIP HUB</p>
                                <div style="margin-top: 12px;">
                                    <span style="color: #cbd5e1; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Encrypted Submission • Fast Response Protocol</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            `;

            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "api-key": BREVO_API_KEY.trim()
                },
                body: JSON.stringify({
                    sender: BREVO_SENDER,
                    to: [{ email: BREVO_RECIPIENT, name: "CHN Sales Team" }],
                    subject: subject,
                    htmlContent: htmlContent
                })
            });

            if (response.ok) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                toast.success("Message sent successfully!");
                setFormData({ name: '', org: '', email: '', phone: '', interest: 'Area of Interest', message: '' });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Uplink Failed");
            }
        } catch (error) {
            console.error("Brevo SMTP submission error:", error);
            setIsSubmitting(false);
            toast.error("Failed to send message. Please try again or contact us directly at info@chnindia.com");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Build the email HTML preview (mirrors the actual email template)
    const buildPreviewHtml = () => `
        <div style="background-color: #f8fafc; padding: 40px 20px; font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,46,91,0.06); border: 1px solid #e2e8f0;">
                <tr><td style="height: 6px; background: linear-gradient(to right, #2563eb, #4f46e5);"></td></tr>
                <tr>
                    <td style="padding: 60px 40px 40px; text-align: center;">
                        <img src="${LOGO_URL}" alt="CHN Technologies" style="width: 140px; height: auto; margin-bottom: 24px;">
                        <h1 style="color: #002e5b; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1.5px;">New Inquiry</h1>
                        <p style="color: #64748b; margin-top: 12px; font-size: 14px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">Digital Flagship Center</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 40px 40px;">
                        <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%" style="padding-bottom: 24px;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Client Name</span><strong style="color: #1e293b; font-size: 15px;">${formData.name || 'John Doe'}</strong></td>
                                    <td width="50%" style="padding-bottom: 24px;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Organisation</span><strong style="color: #1e293b; font-size: 15px;">${formData.org || 'Acme Corp'}</strong></td>
                                </tr>
                                <tr>
                                    <td width="50%" style="padding-bottom: 24px;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Email Identity</span><strong style="color: #1e293b; font-size: 15px;">${formData.email || 'john@example.com'}</strong></td>
                                    <td width="50%" style="padding-bottom: 24px;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Contact Phone</span><strong style="color: #1e293b; font-size: 15px;">${formData.phone || '+91 9876543210'}</strong></td>
                                </tr>
                            </table>
                            <div style="margin-top: 8px; border-top: 1px solid #f1f5f9; padding-top: 24px;">
                                <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Area of Interest</span>
                                <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); color: #2563eb; padding: 12px 24px; border-radius: 100px; display: inline-block; font-weight: 900; font-size: 13px; border: 1px solid rgba(37,99,235,0.1); letter-spacing: 0.5px;">${formData.interest}</div>
                            </div>
                        </div>
                        <div style="margin-top: 32px; padding: 32px; background: #fafafa; border-radius: 24px; border: 1px solid #f1f5f9; position: relative;">
                           <div style="position: absolute; left: 0; top: 32px; bottom: 32px; width: 4px; background: #2563eb; border-radius: 0 4px 4px 0;"></div>
                           <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 16px; padding-left: 12px;">Requirement Brief</span>
                           <p style="color: #334155; font-size: 16px; line-height: 1.8; margin: 0; font-weight: 500; padding-left: 12px;">${formData.message || 'Sample message preview text here...'}</p>
                        </div>
                        <div style="margin-top: 48px; text-align: center;">
                            <a href="#" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; padding: 20px 48px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; display: inline-block; box-shadow: 0 20px 40px rgba(37,99,235,0.25); letter-spacing: 1px;">REPLY TO CLIENT</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 40px; text-align: center; background-color: #fafafa; border-top: 1px solid #f1f5f9;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">&copy; ${new Date().getFullYear()} CHN TECHNOLOGIES • DIGITAL FLAGSHIP HUB</p>
                        <div style="margin-top: 12px;"><span style="color: #cbd5e1; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Encrypted Submission • Fast Response Protocol</span></div>
                    </td>
                </tr>
            </table>
        </div>
    `;

    return (
        <div className="CN_WRAPPER" ref={wrapperRef}>
            <style>{`
                .CN_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  color: #1a2b4b;
                  background: #ffffff;
                }

                /* Layout Snap Configuration (Desktop only for better usability) */
                @media (min-width: 1025px) {
                  .CN_WRAPPER {
                    height: 100vh;
                    overflow-y: auto;
                    scroll-snap-type: y mandatory;
                    scroll-behavior: smooth;
                  }
                  .CN_Hero, .CN_Main_Grid, .CN_Expectation, .CN_Map_Section, .CN_Final {
                    scroll-snap-align: start;
                    scroll-snap-stop: always;
                  }
                }

                /* --- SECTION 1: HERO (EXACT SAMPLE DESIGN) --- */
                .CN_Hero {
                  padding: 100px 5% 60px;
                  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  min-height: 100vh;
                  align-items: center;
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
                  width: 50%; 
                  height: 100%; 
                  background: #0060ff; 
                  clip-path: polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%);
                  opacity: 0.1;
                }

                .CN_Hero_Content { flex: 1.2; max-width: 650px; z-index: 10; }
                .CN_Hero_Title
                 { color: #002e5b; line-height: 1.1; margin-bottom: 15px; letter-spacing: -0.03em;}
                .CN_Hero_Subtitle { color: #0060ff; font-weight: 700; margin-bottom: 30px; line-height: 1.3; }
                .CN_Hero_Desc { color: #475569; line-height: 1.8; margin-bottom: 40px; font-weight: 450; }
.CN_Hero_P{font-size: 1.2rem;
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
                  top: 0; right: 0;
                  width: 45%; height: 100%;
                  background: linear-gradient(135deg, #1e3a8a 0%, #002e5b 100%);
                  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
                  z-index: -1;
                  opacity: 1;
                }

                .CN_Triangle_Bg::before {
                  content: "";
                  position: absolute;
                  top: 0; left: 0;
                  width: 2px; height: 100%;
                  background: linear-gradient(180deg, transparent, #3b82f6, transparent);
                  opacity: 0.5;
                }

                .CN_Graphic_Orb {
                  position: absolute;
                  width: 600px;
                  height: 600px;
                  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
                  filter: blur(80px);
                  border-radius: 50%;
                  z-index: -1;
                  pointer-events: none;
                }

                .CN_Floating_Box {
                  position: absolute;
                  border: 1px solid rgba(255,255,255,0.1);
                  background: rgba(255,255,255,0.03);
                  backdrop-filter: blur(5px);
                  border-radius: 20px;
                  z-index: 15;
                  pointer-events: none;
                }

                .CN_Dot_Pattern {
                  position: absolute;
                  width: 200px;
                  height: 200px;
                  background-image: radial-gradient(rgba(59,130,246,0.2) 1px, transparent 1px);
                  background-size: 20px 20px;
                  z-index: 0;
                  opacity: 0.6;
                }

                .CN_Vertical_Label {
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

                /* --- SECTION 2: WHY CONTACT --- */
                .CN_WhyReach { padding: 100px 5%; background: #ffffff; text-align: center; }
                .CN_Section_Title { color: #002e5b; margin-bottom: 25px; letter-spacing: -0.02em; }
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
                .CN_Main_Grid { 
                  padding: 80px 5% 120px; 
                  display: grid; 
                  grid-template-columns: 1.2fr 1fr; 
                  gap: 40px; 
                  max-width: 1400px; 
                  margin: 0 auto; 
                  min-height: 100vh;
                  align-items: center;
                }
                @media (max-width: 1024px) { .CN_Main_Grid { grid-template-columns: 1fr; } }

                /* FORM (DARK COLOR FROM SAMPLE) */
                .CN_Form_Box { background: #0d1117; color: white; padding: 60px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); }
                @media (max-width: 640px) { .CN_Form_Box { padding: 30px; border-radius: 30px; } }
                .CN_Form_H {  margin-bottom: 15px; letter-spacing: -0.02em; color:white; }
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
                  font-weight: 600; font-size: 1.1rem; border: none; letter-spacing: 2px;
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
                .CN_Step_H { color: #002e5b; margin-bottom: 15px; font-weight: 800;}
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
                .CN_Final_H { color: #1a2b4b; line-height: 1.1; margin-bottom: 30px;  }
                .CN_Final_P { color: #64748b; margin-bottom: 50px; font-weight: 500; }
                .CN_Btn { 
                  background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
                  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;
                }
                .CN_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }
            `}</style>

            {/* EMAIL PREVIEW MODAL */}
            <AnimatePresence>
                {showEmailPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[500] flex items-center justify-center p-4"
                        onClick={() => setShowEmailPreview(false)}
                    >
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] bg-white shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100 rounded-t-[30px]">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-sm font-black text-slate-700 uppercase tracking-[2px]">Email Preview — Contact Form</span>
                                </div>
                                <button
                                    onClick={() => setShowEmailPreview(false)}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-500 transition-all text-slate-400 font-black text-lg"
                                >&times;</button>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: buildPreviewHtml() }} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* LAYOUT 1 – CONTACT INTENT (HERO) */}
            <section className="CN_Hero">
                {/* Background Graphics */}
                <div className="CN_Triangle_Bg" />
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="CN_Graphic_Orb top-[-10%] right-[-10%]"
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="CN_Graphic_Orb bottom-[-20%] left-[10%]"
                />
                <div className="CN_Dot_Pattern top-20 right-[20%]" />
                <div className="CN_Dot_Pattern bottom-40 left-[5%]" />
                {/* <div className="CN_Vertical_Label top-20 left-10">STRATEGIC.INTERFACE.v2.0</div>
                <div className="CN_Vertical_Label bottom-40 right-10">CHN.GLOBAL.CONNECT</div> */}

                <div className="CN_Hero_Inner">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="CN_Hero_Content">
                        <span className="text-[#0060ff] font-bold tracking-[0.1em] uppercase mb-6 block">Strategic Engagement</span>
                        <h1 className=" CN_Hero_Title">Contact Us</h1>
                        <p className="CN_Hero_Subtitle subtitle">Conversations Lead to Clarity. Let’s Start With Yours</p>
                        <p className="CN_Hero_P">               Whether you need digital solutions, expert consulting, or a new career path, CHN Technologies is ready to help. Reach out today to solve your challenges and start a structured engagement.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center gap-5 mt-10"
                        >
                            <a href="#our-presence" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 12,
                                background: '#0060ff',
                                color: '#fff',
                                padding: '16px 36px',
                                borderRadius: 100,
                                fontWeight: 600,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                letterSpacing: '0.02em',
                                boxShadow: '0 12px 40px rgba(0,96,255,0.35)',
                                transition: 'all 0.3s',
                            }}>
                                <ArrowRight size={18} />
                                Our Presence
                            </a>
                        </motion.div>
                    </motion.div>

                    <div className="CN_Hero_Img">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Floating graphic boxes */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="CN_Floating_Box w-32 h-32 -top-10 -right-10 flex items-center justify-center"
                            >
                                <Activity className="text-blue-500" size={40} />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="CN_Floating_Box w-24 h-24 -bottom-6 -left-12 flex items-center justify-center border-blue-500/30"
                            >
                                <Target className="text-blue-400" size={30} />
                            </motion.div>

                            <div className="relative z-10">
                                {/* Image Stack Decoration */}
                                <div className="absolute top-[8%] -right-7 w-full h-full bg-blue-100/10 rounded-full rotate-6 border border-white/20" />
                                <div className="absolute top-[5%] -right-3 w-full h-full bg-blue-500/10 rounded-full rotate-3 border border-blue-500/20 shadow-2xl" />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
                                    className="CN_Circle_Img relative z-20"
                                >
                                    <img src={contactMain} alt="Contact CHN Technologies" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* LAYOUT 3, 4 – CONNECTION METHODS & FORM (SPLIT) */}
            <section className="CN_Main_Grid" id="contact-form">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="CN_Form_Box">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <h2 className="NET_Hero_H1 CN_Form_H">Share Your Requirement</h2>
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
                                    <button type="submit" disabled={isSubmitting} className="CN_Primary_Btn md:col-span-2">
                                        {isSubmitting ? 'Processing intake...' : 'Send Message'} <Send size={20} />
                                    </button>
                                    {/* <button
                                        type="button"
                                        onClick={() => setShowEmailPreview(true)}
                                        className="md:col-span-2 w-full flex items-center justify-center gap-2 mt-2 py-3 rounded-full border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400 transition-all text-sm font-bold tracking-wider"
                                    >
                                        <Mail size={16} /> Preview Email Template
                                    </button> */}
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                    <CheckCircle2 size={60} />
                                </div>
                                <h3 className="text-3xl font-black">Intake confirmed</h3>
                                <p className="text-slate-400 font-medium">Requirement logged. Our strategic response team will review and contact you shortly.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-blue-500 font-bold text-sm underline underline-offset-8">Send new intake</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="CN_Info_Box">
                    <h2 className="NET_Hero_H1 CN_Hero_Subtitle subtitle" style={{ marginBottom: '50px' }}>How to connect with us</h2>

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
                <h2 className="NET_Hero_H1 CN_Section_Title">Here’s What Happens Next After You Contact Us</h2>

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
            <section className="CN_Map_Section" id="our-presence">
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <h2 className="NET_Hero_H1 CN_Section_Title">Our <span className="text-blue-500">presence</span></h2>
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
                        <h2 className="NET_Hero_H1 CN_Final_H">Start the <span className="text-blue-500">Conversation</span></h2>
                        <p className="CN_Final_P">Contact CHN Technologies to discuss how we can support your organisation or career goals.</p>
                        <a href="#contact-form" style={{ textDecoration: 'none' }}>
                            <button className="CN_Btn">Get in Touch <ArrowRight size={24} /></button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
