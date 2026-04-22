import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Code, BarChart,
  ArrowRight, Server, CheckCircle2, Award, Zap, Users,
  Mail, Phone, Send, Target, Rocket, PenTool, Layout, LineChart, Shield
} from 'lucide-react';

// Asset Imports
import aboutTeamMeeting from "@/assets/images/about-team-meeting.png";
import careersEnv from "@/assets/images/careers-env.png";
import careersHero from "@/assets/images/careers-hero.png";
import aboutMainImg from "@/assets/images/about-main.jpg";
import careersExcellence from "@/assets/images/careers-excellence.jpg";
import aboutOffice from "@/assets/images/about-office.jpg";
import cultureCollaboration from "@/assets/images/culture-collaboration.png";
import corporateLeader from "@/assets/images/corporate-leader.png";

const Careers = () => {
  const [searchParams, setSearchParams] = useState({ title: '', department: 'All Departments', experience: 'All Experience', qualification: 'All Qualifications' });
  const [isSearching, setIsSearching] = useState(false);
  const applicationRef = useRef<HTMLDivElement>(null);
  const beginCareerRef = useRef<HTMLElement>(null);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    interest: 'General Inquiry',
    otherInterest: '',
    message: ''
  });
  const [applyData, setApplyData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Select Job Position',
    otherPosition: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const BREVO_API_KEY = "REMOVED_SECRET  "; // REPLACE WITH YOUR BREVO API V3 KEY
  const BREVO_SENDER = { name: "CHN Careers Portal", email: "vinichn2026@gmail.com" }; // REPLACE WITH VERIFIED SENDER
  const BREVO_RECIPIENT = "hrd@chnindia.com"; // WHERE TO SEND APPLICATIONS
  const LOGO_URL = "https://chnindia.com/chn-logo.png";
  const [showEmailPreview, setShowEmailPreview] = React.useState(false);
  const [previewType, setPreviewType] = React.useState<'inquiry' | 'apply'>('apply');

  const JOBS_DATA = [
    { id: 1, title: "Marketing Expert", dept: "Software Solutions", exp: "2-5 Years", qual: "MBA", tags: ["Strategy", "Ads"] },
    { id: 2, title: "Graphic Designer", dept: "Software Solutions", exp: "0-2 Years", qual: "Graduate", tags: ["Figma", "UI"] },
    { id: 3, title: "Project Manager", dept: "Consulting", exp: "5+ Years", qual: "PMP", tags: ["Agile", "Scrum"] },
    { id: 4, title: "SEO Specialist", dept: "Digital Solutions", exp: "2-5 Years", qual: "Graduate", tags: ["SEM", "Content"] },
    { id: 5, title: "Senior Developer", dept: "Software Solutions", exp: "5+ Years", qual: "B.Tech", tags: ["Stack", "Cloud"] },
    { id: 6, title: "UI Designer", dept: "Digital Solutions", exp: "2-5 Years", qual: "Graduate", tags: ["Design", "UX"] },
    { id: 7, title: "Digital Marketing Analyst", dept: "Digital Solutions", exp: "2-5 Years", qual: "B.Tech", tags: ["Data", "SEO"] },
    { id: 8, title: "Full Stack Developer", dept: "Software Solutions", exp: "3-5 Years", qual: "B.Tech", tags: ["React", "Node"] },
    { id: 9, title: "L1 Network Engineer", dept: "Tech Services", exp: "1-3 Years", qual: "B.E", tags: ["Cisco", "IP"] },
    { id: 10, title: "HR Generalist", dept: "Consulting", exp: "2-5 Years", qual: "MBA", tags: ["Payroll", "Recruit"] },
    { id: 11, title: "Finance Executive", dept: "Corporate Services", exp: "3-5 Years", qual: "CA / MBA", tags: ["Tax", "Audit"] },
    { id: 12, title: "Sales Coordinator", dept: "Business Development", exp: "1-3 Years", qual: "Graduate", tags: ["Leads", "CRM"] },
    { id: 13, title: "Other / Not Listed", dept: "General Interest", exp: "N/A", qual: "N/A", tags: ["General"] }
  ];

  const filteredJobs = JOBS_DATA.filter(job => {
    const matchTitle = job.title.toLowerCase().includes(searchParams.title.toLowerCase());
    const matchDept = searchParams.department === 'All Departments' || job.dept === searchParams.department;
    const matchExp = searchParams.experience === 'All Experience' || job.exp === searchParams.experience;
    return matchTitle && matchDept && matchExp;
  });

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      beginCareerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  const buildCareerPreviewHtml = (type: 'inquiry' | 'apply') => {
    const data = type === 'apply' ? applyData : inquiryData;
    const subject = type === 'apply' ? `[Job Application] ${(data as typeof applyData).position || 'Full Stack Developer'}` : `[Careers Inquiry] ${(data as typeof inquiryData).interest || 'General Inquiry'}`;
    return `
      <div style="background-color: #f1f5f9; padding: 60px 20px; font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0;">
          <tr>
            <td style="padding: 50px 40px; background-color: #ffffff; text-align: center; border-bottom: 1px solid #f1f5f9;">
              <img src="${LOGO_URL}" alt="CHN Technologies Logo" style="width: 160px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #002e5b; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">${type === 'apply' ? 'New Application' : 'Careers Inquiry'}</h1>
              <p style="color: #64748b; margin-top: 10px; font-size: 13px; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 50px 40px;">
              <div style="margin-bottom: 40px;">
                <h2 style="color: #0f172a; font-size: 20px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -0.5px;">Candidate Information</h2>
                <div style="height: 4px; width: 40px; background: #3b82f6; border-radius: 10px;"></div>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Full Name</span><strong style="color: #1e293b; font-size: 16px;">${data.name || 'Jane Smith'}</strong></td></tr>
                <tr><td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Email Identity</span><strong style="color: #1e293b; font-size: 16px;">${data.email || 'jane@example.com'}</strong></td></tr>
                ${type === 'apply' ? `<tr><td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Mobile Contact</span><strong style="color: #1e293b; font-size: 16px;">${(data as typeof applyData).phone || '+91 9876543210'}</strong></td></tr>` : ''}
                <tr><td style="padding: 20px 0;"><span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">${type === 'apply' ? 'Target Position' : 'Inquiry Interest'}</span><div style="background: #eff6ff; color: #3b82f6; padding: 10px 20px; border-radius: 12px; display: inline-block; font-weight: 900; font-size: 14px; border: 1px solid rgba(59,130,246,0.1);">${type === 'apply' ? (data as typeof applyData).position || 'Full Stack Developer' : (data as typeof inquiryData).interest || 'General Inquiry'}</div></td></tr>
              </table>
              <div style="margin-top: 40px; padding: 30px; background: #fafbfc; border-radius: 20px; border: 1px solid #f1f5f9;">
                 <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 15px;">Statement of Interest</span>
                 <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0; font-weight: 500;">${data.message || 'Sample career submission message preview...'}</p>
              </div>
              <div style="margin-top: 50px; text-align: center;">
                <a href="#" style="background: #3b82f6; color: #ffffff; padding: 18px 40px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; display: inline-block; box-shadow: 0 20px 40px rgba(59,130,246,0.2);">REPLY DIRECTLY</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 600;">&copy; ${new Date().getFullYear()} CHN Technologies Digital Recruitment Engine</p>
            </td>
          </tr>
        </table>
      </div>
    `;
  };

  const handleFormSubmit = async (e: React.FormEvent, data: any, type: 'inquiry' | 'apply') => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const submissionData = { ...data };
      if (type === 'apply' && data.position === 'Other / Not Listed') {
        submissionData.position = `Other: ${data.otherPosition}`;
      }
      if (type === 'inquiry' && data.interest === 'Other') {
        submissionData.interest = `Other: ${data.otherInterest}`;
      }

      const subject = type === 'apply' ? `[Job Application] ${submissionData.position}` : `[Careers Inquiry] ${submissionData.interest}`;

      const htmlContent = `
        <div style="background-color: #f1f5f9; padding: 60px 20px; font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0;">
            <tr>
              <td style="padding: 50px 40px; background-color: #ffffff; text-align: center; border-bottom: 1px solid #f1f5f9;">
                <img src="${LOGO_URL}" alt="CHN Technologies Logo" style="width: 160px; height: auto; margin-bottom: 20px;">
                <h1 style="color: #002e5b; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Application</h1>
                <p style="color: #64748b; margin-top: 10px; font-size: 13px; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 50px 40px;">
                <div style="margin-bottom: 40px;">
                  <h2 style="color: #0f172a; font-size: 20px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -0.5px;">Candidate Information</h2>
                  <div style="height: 4px; width: 40px; background: #3b82f6; border-radius: 10px;"></div>
                </div>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Full Name</span>
                      <strong style="color: #1e293b; font-size: 16px;">${submissionData.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Email Identity</span>
                      <strong style="color: #1e293b; font-size: 16px;">${submissionData.email}</strong>
                    </td>
                  </tr>
                  ${type === 'apply' ? `
                  <tr>
                    <td style="padding: 15px 0; border-bottom: 1px solid #f1f5f9;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Mobile Contact</span>
                      <strong style="color: #1e293b; font-size: 16px;">${submissionData.phone || 'N/A'}</strong>
                    </td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding: 20px 0;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">${type === 'apply' ? 'Target Position' : 'Inquiry Interest'}</span>
                      <div style="background: #eff6ff; color: #3b82f6; padding: 10px 20px; border-radius: 12px; display: inline-block; font-weight: 900; font-size: 14px; border: 1px solid rgba(59,130,246,0.1);">${type === 'apply' ? submissionData.position : submissionData.interest}</div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top: 40px; padding: 30px; background: #fafbfc; border-radius: 20px; border: 1px solid #f1f5f9;">
                   <span style="color: #94a3b8; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 15px;">Statement of Interest</span>
                   <p style="color: #475569; font-size: 15px; line-height: 1.8; margin: 0; font-weight: 500;">${submissionData.message}</p>
                </div>

                <div style="margin-top: 50px; text-align: center;">
                  <a href="mailto:${submissionData.email}" style="background: #3b82f6; color: #ffffff; padding: 18px 40px; border-radius: 100px; text-decoration: none; font-weight: 900; font-size: 14px; display: inline-block; box-shadow: 0 20px 40px rgba(59,130,246,0.2);">REPLY DIRECTLY</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 600;">&copy; ${new Date().getFullYear()} CHN Technologies Digital Recruitment Engine</p>
              </td>
            </tr>
          </table>
        </div>
      `;

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json", "api-key": BREVO_API_KEY.trim() },
        body: JSON.stringify({
          sender: BREVO_SENDER,
          to: [{ email: BREVO_RECIPIENT, name: "CHN HR Team" }],
          subject: subject,
          htmlContent: htmlContent
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        if (type === 'inquiry') setInquiryData({ name: '', email: '', interest: 'General Inquiry', otherInterest: '', message: '' });
        else setApplyData({ name: '', email: '', phone: '', position: 'Select Job Position', otherPosition: '', message: '' });
        setTimeout(() => setShowSuccess(false), 6000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Uplink Failed");
      }
    } catch (error: any) {
      console.error("Transmission Error:", error);
      alert(`Network Fault: ${error.message || "Verification Required"}`);
    }
    finally { setIsSubmitting(false); }
  };

  const handleApply = (jobTitle: string) => {
    setApplyData(prev => ({ ...prev, position: jobTitle }));
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="CR_WRAPPER">
      <AnimatePresence>
        {/* Email Preview Modal */}
        {showEmailPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] flex items-center justify-center p-4"
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
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-black text-slate-700 uppercase tracking-[2px]">Email Preview</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewType('apply')}
                      className={`px-3 py-1 rounded-full text-xs font-black transition-all ${previewType === 'apply' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                    >Application</button>
                    <button
                      onClick={() => setPreviewType('inquiry')}
                      className={`px-3 py-1 rounded-full text-xs font-black transition-all ${previewType === 'inquiry' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                    >Inquiry</button>
                  </div>
                </div>
                <button
                  onClick={() => setShowEmailPreview(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-500 transition-all text-slate-400 font-black text-lg"
                >&times;</button>
              </div>
              <div dangerouslySetInnerHTML={{ __html: buildCareerPreviewHtml(previewType) }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Masterpiece Success Overlay - Premium & Responsive */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[400] flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Ultra-High-Fidelity Backdrop */}
              <div className="absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-2xl" />
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[100px] rounded-full"
                />
              </div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: -20 }}
                className="relative z-10 w-full max-w-lg bg-white rounded-[40px] md:rounded-[50px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,46,91,0.25)] flex flex-col items-center text-center p-8 md:p-16 pb-12 md:pb-20 border border-white/50"
              >
                {/* Decorative Success Glow */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />

                <div className="relative mb-8 md:mb-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-50 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="w-12 h-12 md:w-16 md:h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                          d="M20 6L9 17L4 12"
                        />
                      </motion.svg>
                    </motion.div>

                    <motion.div
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 border-4 border-blue-400 rounded-full"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-10 py-1 bg-slate-100 rounded-full mb-6 border border-slate-200">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs font-black uppercase text-slate-600 tracking-[0.2em]">Uplink Verified</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-[#002e5b] tracking-tighter mb-4 leading-tight">
                  Application <span className="text-blue-600">Secure</span>
                </h3>

                <p className="text-slate-500 font-bold text-sm md:text-base leading-relaxed max-w-xs mx-auto mb-10">
                  Your profile is now live in our recruitment engine. Expect a strategic response shortly.
                </p>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="group relative w-full flex items-center justify-center py-5 md:py-6 bg-[#002e5b] text-white rounded-2xl md:rounded-[30px] font-black text-sm tracking-widest uppercase overflow-hidden shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 mb-6"
                >
                  <span className="relative z-10">Proceed to Portal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                {/* Auto-Close Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-slate-50">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>

      <style>{`
        .CR_WRAPPER { font-family: 'Outfit', 'Inter', sans-serif; color: #1a2b4b; background: #ffffff; }
        
        /* --- INNOVATIVE HERO (OLD DESIGN RESTORED) --- */
        .CR_Hero { position: relative; background: #f1f6ff; min-height: 90vh; overflow: hidden; display: flex; align-items: center; padding: 120px 5% 60px; }
        .CR_Hero_Navy_Shape { position: absolute; top: 0; right: 0; height: 100%; width: 45%; background: linear-gradient(135deg, #1e3a8a 0%, #002e5b 100%); z-index: 0; clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%); }
        .CR_Graphic_Orb { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%); filter: blur(80px); border-radius: 50%; z-index: 0; pointer-events: none; }
        .CR_Floating_Box { position: absolute; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); backdrop-filter: blur(5px); border-radius: 20px; z-index: 15; pointer-events: none; }
        .CR_Hero_Content { position: relative; z-index: 10; max-width: 1300px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
        @media (max-width: 1024px) { .CR_Hero_Content { grid-template-columns: 1fr; text-align: center; } .CR_Hero_Navy_Shape { display: none; } }
        
        .CR_Hero_H1 { font-weight: 900; color: #1a1a1a; line-height: 1.1; margin-bottom: 25px; font-size: clamp(2.5rem, 5vw, 4.5rem); letter-spacing: -2px; }
        .CR_Hero_P { font-size: 1.1rem; color: #64748b; font-weight: 500; margin-bottom: 45px; line-height: 1.8; max-width: 600px; }

        .CR_Image_Stack { 
          position: relative; width: 100%; max-width: 280px; height: 350px; margin: 0 auto; 
          display: flex; align-items: center; justify-content: center;
          perspective: 2000px;
        }
        
        .CR_Fan_Box {
          width: 260px; height: 300px; position: absolute;
          border-radius: 40px; overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,46,91,0.12);
          transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          border: 4px solid white;
        }
        .CR_Fan_Box img { width: 100%; height: 100%; object-fit: cover; }
        
        /* Straight Staggered Layout (Right-Sided) - Exact Design Sync */
        .CR_Fan_90 { transform: translate(60px, -30px) rotate(30deg); z-index: 10; opacity: 1; }
        .CR_Fan_60 { transform: translate(30px, -30px) rotate(15deg); z-index: 15; opacity: 1; }
        .CR_Fan_30 { transform: translate(0, 0) scale(1.1); z-index: 20; }

        @media (max-width: 640px) {
          .CR_Image_Stack { transform: scale(0.85); height: 320px; }
          .CR_Fan_90 { transform: translate(30px, -15px) rotate(20deg); }
          .CR_Fan_60 { transform: translate(15px, -15px) rotate(10deg); }
        }

        .CR_Stats_Card {
          position: absolute; right: -80px; bottom: 40px;
          background: white; border-radius: 24px; padding: 25px;
          box-shadow: 0 40px 100px rgba(0,46,91,0.12);
          z-index: 30; width: 220px;
          border: 1px solid rgba(0,46,91,0.04);
        }
        .CR_Stat_Row { margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .CR_Stat_Row:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .CR_Stat_Value { display: flex; align-items: baseline; gap: 5px; }
        .CR_Stat_Num { font-size: 1.4rem; font-weight: 950; color: #0f172a; line-height: 1; }
        .CR_Stat_Label { font-size: 0.65rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
        .CR_Stat_Sub { font-size: 0.6rem; font-weight: 700; color: #94a3b8; display: block; margin-top: 2px; }

        .CR_Value_Item { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
        .CR_Value_Icon { width: 40px; height: 40px; background: rgba(59,130,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #60a5fa; }
        .CR_Value_Text { font-weight: 800; color: white; font-size: 1.1rem; letter-spacing: -0.5px; }
        

        .CR_Begin_Section { 
          padding: 80px 8%; background: white; position: relative; 
        }
        .CR_Begin_Grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 60px; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
        @media (max-width: 1024px) { .CR_Begin_Grid { grid-template-columns: 1fr; gap: 80px; } }
        
        .CR_Job_Item { 
          background: #ffffff; padding: 25px 0; border-bottom: 2px solid #f8fafc;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          transition: 0.3s; cursor: pointer;
        }
        .CR_Job_Item:hover { padding-left: 15px; border-color: #3b82f6; }
        .CR_Job_Item:hover h4 { color: #3b82f6; }
        
        .CR_Hiring_Tag { color: #3b82f6; font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; display: block; opacity: 0.6; }

        .CR_Sidebar_Wrap { position: relative; padding-top: 40px; }
        .CR_Side_Img_Box { width: 100%; height: 350px; border-radius: 40px; overflow: hidden; margin-bottom: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.08); }
        .CR_Side_Img_Box img { width: 100%; height: 100%; object-fit: cover; }
        
        .CR_Side_Form_Card { 
          background: #ffffff; border-radius: 35px; border: 1px solid #f1f5f9; padding: 40px; 
          box-shadow: 0 20px 60px rgba(0,46,91,0.04);
        }
        .CR_Side_H { font-size: 1.8rem; font-weight: 950; margin-bottom: 15px; color: #0f172a; }
        .CR_Side_P { color: #64748b; font-weight: 500; font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px; }

        .CR_Apply_Split_Grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; max-width: 1400px; margin: 0 auto; align-items: stretch; }
        @media (max-width: 1024px) { .CR_Apply_Split_Grid { grid-template-columns: 1fr; } }
        
        .CR_Apply_Photo { border-radius: 40px; overflow: hidden; height: 100%; min-height: 500px; }
        .CR_Apply_Photo img { width: 100%; height: 100%; object-fit: cover; }
        
        .CR_Upload_Area { 
          border: 2px dashed #e2e8f0; border-radius: 24px; padding: 25px; text-align: center; 
          background: #f8fafc; transition: 0.3s; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 15px;
        }
        .CR_Upload_Area:hover { border-color: #3b82f6; background: #eff6ff; }
        
        .CR_Icon_Box { width: 44px; height: 44px; background: #3b82f6; color: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; shrink-0; }
        .CR_Side_Input { 
          width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 16px; 
          padding: 18px 20px; margin-bottom: 15px; font-size: 1rem; outline: none; transition: 0.3s;
        }
        .CR_Side_Input:focus { border-color: #3b82f6; background: white; box-shadow: 0 10px 20px rgba(59,130,246,0.05); }
        .CR_Side_Btn { width: 100%; background: #3b82f6; color: white; padding: 18px; border-radius: 100px; font-weight: 800; border: none; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 30px rgba(59,130,246,0.2); }
        .CR_Side_Btn:hover { background: #1e3a8a; transform: translateY(-3px); }

        .CR_Apply_Section { padding: 50px 5%; background: #fafbfc; }
        .CR_Apply_Grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; max-width: 1300px; margin: 0 auto; align-items: center; }
        @media (max-width: 1024px) { .CR_Apply_Grid { grid-template-columns: 1fr; } }
        
        .CR_Apply_Img { border-radius: 40px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.1); height: 550px; border: 10px solid white; }
        .CR_Apply_Img img { width: 100%; height: 100%; object-fit: cover; transition: 1s; }
        .CR_Apply_Img:hover img { transform: scale(1.05); }
        
        .CR_Form_Grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .CR_Form_Input { 
          width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 20px; 
          padding: 20px 25px; font-size: 1rem; outline: none; transition: 0.3s; font-weight: 500;
        }
        .CR_Apply_Submit { background: #3b82f6; color: white; padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; margin-top: 30px; box-shadow: 0 20px 40px rgba(59,130,246,0.25); transition: 0.4s; }
        .CR_Apply_Submit:hover { background: #1e3a8a; transform: translateY(-5px); box-shadow: 0 30px 60px rgba(59,130,246,0.35); }

        .CR_Roadmap { padding: 120px 5%; background: #002e5b; color: white; position: relative; overflow: hidden; }
        .CR_Roadmap::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%); pointer-events: none; }
        
        .CR_Step_Grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; max-width: 1400px; margin: 80px auto 0; perspective: 2000px; }
        @media (max-width: 1200px) { .CR_Step_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .CR_Step_Grid { grid-template-columns: 1fr; } }
        
        .CR_Step_Box { 
          padding: 35px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 35px; 
          backdrop-filter: blur(15px); display: flex; flex-direction: column; height: 100%; transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1); 
          position: relative; overflow: hidden;
        }
        .CR_Step_Box::before { 
          content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 100%); 
          opacity: 0; transition: 0.5s; z-index: 0;
        }
        .CR_Step_Box:hover { border-color: #3b82f6; box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.2); }
        .CR_Step_Box:hover::before { opacity: 1; }
        
        .CR_Step_Num { 
          font-size: 2.8rem; font-weight: 900; color: #3b82f6; margin-bottom: 25px; position: relative; z-index: 10;
          text-shadow: 0 0 15px rgba(59,130,246,0.5); animation: CR_Neon_Pulse 3s infinite;
        }
        
        @keyframes CR_Neon_Pulse {
          0%, 100% { opacity: 0.7; text-shadow: 0 0 10px rgba(59,130,246,0.4); }
          50% { opacity: 1; text-shadow: 0 0 25px rgba(59,130,246,0.8); scale: 1.05; }
        }

        .CR_Step_H4 { font-size: 1.6rem; font-weight: 900; color: white; margin-bottom: 18px; position: relative; z-index: 10; }
        .CR_Step_P { font-size: 1rem; color: rgba(191, 219, 254, 0.7); font-weight: 500; line-height: 1.6; position: relative; z-index: 10; }
        
        .CR_Final { padding: 120px 5%; text-align: center; background: white; }
        .CR_Btn { background: #3b82f6; color: white; padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 15px; box-shadow: 0 20px 50px rgba(59,130,246,0.25); transition: 0.4s; }
        .CR_Float_Badge {
          position: absolute; right: -50px; top: 120px; background: white; padding: 25px; border-radius: 30px;
          box-shadow: 0 40px 100px rgba(0,96,255,0.15); border: 1px solid rgba(59,130,246,0.1); z-index: 20;
          display: flex; flex-direction: column; align-items: center; gap: 10px; width: 180px;
        }
        @media (max-width: 1280px) { .CR_Float_Badge { display: none; } }
        
        .CR_Counter_Num { font-size: 2.2rem; font-weight: 900; color: #3b82f6; line-height: 1; }
        .CR_Counter_Label { font-size: 0.7rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; }

        .CR_Side_H { font-size: 1.8rem; font-weight: 900; margin-bottom: 20px; }
      `}</style>

      <section className="CR_Hero">
        <div className="CR_Hero_Navy_Shape" />
        <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="CR_Graphic_Orb top-[-10%] right-[-10%]" />

        <div className="CR_Hero_Content">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="CR_Hero_H1">Advance Your <br /> <span className="text-blue-600">Career Here</span></h1>
            <p className="CR_Hero_P">Join a leading tech-consulting force where your expertise meets strategic enterprise transformation.</p>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="CR_Btn"
              onClick={() => beginCareerRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Vacancies <ArrowRight size={24} className="ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="CR_Image_Stack">
              <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />

              <div className="CR_Fan_Box CR_Fan_90">
                <img src={careersExcellence} alt="CHN Excellence" />
              </div>
              <div className="CR_Fan_Box CR_Fan_60">
                <img src={careersEnv} alt="CHN Environment" />
              </div>
              <div className="CR_Fan_Box CR_Fan_30">
                <img src={corporateLeader} alt="Career Excellence" />
              </div>

              {/* Floating Statistics Card */}
              {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="CR_Stats_Card"
              >
                <div className="CR_Stat_Row">
                  <div className="CR_Stat_Value">
                    <span className="CR_Stat_Num">319</span>
                    <span className="CR_Stat_Label">job offers</span>
                  </div>
                  <span className="CR_Stat_Sub">Product Development</span>
                </div>
                <div className="CR_Stat_Row">
                  <div className="CR_Stat_Value">
                    <span className="CR_Stat_Num">266</span>
                    <span className="CR_Stat_Label">job offers</span>
                  </div>
                  <span className="CR_Stat_Sub">Marketing & Communication</span>
                </div>
                <div className="CR_Stat_Row">
                  <div className="CR_Stat_Value">
                    <span className="CR_Stat_Num">334</span>
                    <span className="CR_Stat_Value">job offers</span>
                  </div>
                  <span className="CR_Stat_Sub">Project Management</span>
                </div>
              </motion.div> */}

              {/* Floating Accents */}
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 right-0 w-16 h-16 bg-blue-600/20 rounded-full blur-xl z-0" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-10 -left-10 w-32 h-32 border border-blue-500/10 rounded-full z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="CR_Begin_Section" id="begin-career" ref={beginCareerRef}>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 max-w-[1400px] mx-auto border-b border-slate-100 pb-12">
          <div>
            <span className="text-blue-500 font-extrabold tracking-[4px] uppercase mb-4 block">Hiring Positions Available</span>
            <h1 className="text-6xl font-black tracking-tighter leading-[0.9]">Begin Your <span className="text-blue-600">Career Here</span></h1>
          </div>
          <div className="max-w-md border-l-4 border-blue-600 pl-8">
            <p className="text-slate-500 font-medium leading-relaxed">Join a domain-specific workforce dedicated to enterprise-scale technology transformation and long-term operational success.</p>
          </div>
        </div>

        <div className="CR_Begin_Grid">
          <div className="CR_Job_List">
            {JOBS_DATA.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="CR_Job_Item group"
                onClick={() => handleApply(job.title)}
              >
                <div className="flex-1">
                  <h4 className="text-2xl font-black tracking-tight mb-2 transition-colors">{job.title}</h4>
                  <p className="text-slate-400 font-bold text-sm tracking-wide">
                    {job.dept} &mdash; {job.exp} &mdash; Full Time
                  </p>
                </div>
                <div className="text-slate-300 group-hover:text-blue-600 transition-all">
                  <ArrowRight size={38} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="CR_Sidebar_Wrap">
            <div className="CR_Side_Img_Box">
              <img src={aboutOffice} alt="CHN Office Interior" />
            </div>

            <div className="CR_Side_Form_Card">
              <h3 className="CR_Side_H">Do You Have Questions?</h3>
              <p className="CR_Side_P">Connect with our strategic team to better understand our culture and growth roadmaps.</p>

              <form onSubmit={(e) => handleFormSubmit(e, inquiryData, 'inquiry')} className="space-y-4">
                <input
                  type="text" placeholder="Your Name*" required className="CR_Form_Input"
                  value={inquiryData.name} onChange={(e) => setInquiryData(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="email" placeholder="Your Email*" required className="CR_Form_Input"
                  value={inquiryData.email} onChange={(e) => setInquiryData(prev => ({ ...prev, email: e.target.value }))}
                />
                <textarea
                  placeholder="Additional Message" rows={4} className="CR_Form_Input"
                  value={inquiryData.message} onChange={(e) => setInquiryData(prev => ({ ...prev, message: e.target.value }))}
                />
                <button type="submit" disabled={isSubmitting} className="CR_Btn w-full justify-center">
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
                {/* <button
                  type="button"
                  onClick={() => { setPreviewType('inquiry'); setShowEmailPreview(true); }}
                  className="w-full flex items-center justify-center gap-2 mt-2 py-3 rounded-full border border-blue-300/40 text-slate-400 hover:text-blue-600 hover:border-blue-400 transition-all text-xs font-black tracking-widest uppercase"
                >
                  <Mail size={14} /> Preview Email
                </button> */}
              </form>

              <div className="mt-12 space-y-6 pt-10 border-t border-slate-50">
                <h4 className="text-sm font-black uppercase tracking-[3px] text-slate-300 mb-6">Get In Touch With Us</h4>
                <div className="flex items-start gap-4">
                  <div className="CR_Icon_Box"><MapPin size={22} /></div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 leading-tight">Our Location</h5>
                    <p className="text-sm text-slate-400 font-medium">No. 28, CIT Nagar, Chennai, TN - 600035</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="CR_Icon_Box"><Mail size={22} /></div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 leading-tight">Email</h5>
                    <p className="text-sm text-slate-400 font-medium">hrd@chnindia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="CR_Icon_Box"><Phone size={22} /></div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 leading-tight">Phone Number</h5>
                    <p className="text-sm text-slate-400 font-medium">+91-7010203031</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-24" ref={applicationRef}>
        <div className="CR_Apply_Split_Grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="CR_Apply_Photo"
          >
            <img src={cultureCollaboration} alt="CHN Team Collaboration" />
          </motion.div>

          <div className="flex flex-col justify-center p-3">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">Our Team Will Respond <br /> To You Within <span className="text-blue-600">24 Hrs</span></h2>

            <form onSubmit={(e) => handleFormSubmit(e, applyData, 'apply')} className="mt-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text" placeholder="Your Name*" required className="CR_Form_Input"
                  value={applyData.name} onChange={(e) => setApplyData(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="email" placeholder="Your Email*" required className="CR_Form_Input"
                  value={applyData.email} onChange={(e) => setApplyData(prev => ({ ...prev, email: e.target.value }))}
                />
                <input
                  type="text" placeholder="Mobile Number*" required className="CR_Form_Input"
                  value={applyData.phone} onChange={(e) => setApplyData(prev => ({ ...prev, phone: e.target.value }))}
                />
                <select
                  className="CR_Form_Input bg-white"
                  value={applyData.position}
                  onChange={(e) => setApplyData(prev => ({ ...prev, position: e.target.value }))}
                >
                  <option disabled>Select Job Position</option>
                  {JOBS_DATA.map(j => <option key={j.id}>{j.title}</option>)}
                </select>
              </div>

              <textarea
                placeholder="Additional Message" rows={4}
                className="CR_Form_Input w-full"
                value={applyData.message} onChange={(e) => setApplyData(prev => ({ ...prev, message: e.target.value }))}
              />

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="CR_Upload_Area flex-1 w-full relative">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="flex items-center gap-4 w-full">
                    <span className="bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg shadow-blue-200">Browse Files</span>
                    <span className="text-slate-400 font-bold text-sm">Drag & Drop Files Here</span>
                    <ArrowRight size={20} className="text-slate-300 ml-auto" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="CR_Btn w-full md:w-auto min-w-[180px] justify-center">
                  {isSubmitting ? "Processing..." : "Submit"}
                </button>
              </div>
              <p className="text-[10px] uppercase font-black tracking-[3px] text-slate-300 mt-2">Upload your portfolio in pdf, jpg, png or doc format</p>
              {/* <button
                type="button"
                onClick={() => { setPreviewType('apply'); setShowEmailPreview(true); }}
                className="w-full flex items-center justify-center gap-2 mt-4 py-3 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-all text-xs font-black tracking-widest uppercase"
              >
                <Mail size={14} /> Preview Email Template
              </button> */}
            </form>
          </div>
        </div>
      </section>

      <section className="CR_Roadmap">
        <div className="text-center mb-20 relative z-10 px-4">
          <span className="text-blue-400 font-black tracking-[0.4em] uppercase mb-4 block">Strategic Onboarding</span>
          <h2 className="text-5xl font-black text-white tracking-tighter">Our Recruitment Roadmap</h2>
        </div>

        <div className="CR_Step_Grid">
          {[
            { n: "01", h: "Strategic Application", p: "Identify a role that aligns with your domain expertise and submit your contextual profile through our internal hub." },
            { n: "02", h: "Technical Alignment", p: "Engage in technical discussions with our sector leads to evaluate practical competency and problem-solving skills." },
            { n: "03", h: "Culture & Values", p: "A deep-dive into our professional ecosystem to ensure alignment with CHN's core values and strategic mission." },
            { n: "04", h: "Structured Onboarding", p: "Formal integration into our workforce with a structured 90-day roadmap tailored for your technical growth." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateX: 6, rotateY: -6, y: -10, transition: { duration: 0.4 } }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="CR_Step_Box"
            >
              <div className="CR_Step_Num">{step.n}</div>
              <div>
                <h4 className="CR_Step_H4">{step.h}</h4>
                <p className="CR_Step_P">{step.p}</p>
              </div>

              {/* Micro-light-sweep */}
              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-20deg]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="CR_Final">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="NET_Hero_H1 text-6xl font-black mb-10 tracking-tighter leading-[0.9]">Start Your Career <br /> <span className="text-blue-500">with Purpose.</span></h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Click below to explore current strategic openings and begin your application process today.</p>
          <button className="CR_Btn" onClick={() => applicationRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Apply Now <Send size={26} />
          </button>
        </motion.div>
      </section>

    </div >
  );
};

export default Careers;