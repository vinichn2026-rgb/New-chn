import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="PP_WRAPPER">
      <style>{`
        .PP_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        .PP_Hero {
          padding: 160px 5% 80px;
          background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          text-align: center;
        }

        @media (max-width: 768px) {
          .PP_Hero { padding-top: 140px; }
        }

        .PP_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 20px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }

        .PP_Title { font-weight: 900; color: #0f172a; margin-bottom: 20px; letter-spacing: -0.02em; font-size: clamp(2.5rem, 5vw, 4rem); }
        .PP_Subtitle { color: #64748b; font-weight: 500; }

        .PP_Content {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 5% 140px;
        }

        .PP_Section { margin-bottom: 60px; }
        .PP_Section_H { 
          color: #0f172a; margin-bottom: 25px; 
          display: flex; align-items: center; gap: 15px; letter-spacing: -0.01em;
        }
        .PP_Section_Icon { color: #2563eb; background: rgba(37, 99, 235, 0.08); padding: 10px; border-radius: 12px; min-width: 44px; display: flex; justify-content: center; }
        
        .PP_P { color: #475569; line-height: 1.8; margin-bottom: 20px; font-size: 1.1rem; }
        .PP_List { list-style: none; padding: 0; }
        .PP_Item { display: flex; gap: 15px; margin-bottom: 15px; align-items: flex-start; text-align: left; }
        .PP_Check { color: #2563eb; margin-top: 4px; flex-shrink: 0; }

        .PP_Contact_Box {
          background: #f8fafc;
          padding: 40px;
          border-radius: 30px;
          border: 1px solid rgba(0,0,0,0.04);
          margin-top: 40px;
          text-align: left;
        }
        .PP_Contact_Item { display: flex; gap: 15px; margin-bottom: 20px; align-items: center; color: #475569; font-weight: 500; }
        .PP_Contact_Icon { color: #2563eb; min-width: 20px; }

        .PP_Footer_Note {
           text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 40px; border-top: 1px solid #f1f5f9;
        }

        @media (max-width: 640px) {
          .PP_Contact_Box { padding: 30px 20px; }
          .PP_Section_H { flex-direction: column; text-align: center; }
          .PP_Item { font-size: 0.95rem; }
        }
      `}</style>

      <section className="PP_Hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="PP_Badge">Trust & Transparency</span>
          <h2 className="PP_Title NET_Hero_H1">Privacy Policy</h2>
          <p className="PP_Subtitle">Last Updated: July 5, 2025</p>
        </motion.div>
      </section>

      <section className="PP_Content">
        <div className="PP_Section">
          <h2 className="NET_Hero_H1 PP_Section_H">
            <span className="PP_Section_Icon"><Shield size={24} /></span>
            1. Information collection
          </h2>
          <p className="PP_P">
            We collect information to provide better services to all our users. The types of information we collect include:
          </p>
          <ul className="PP_List">
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span><strong>Personal Data:</strong> Name, email address, phone number, and company name shared via forms.</span></li>
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span><strong>Usage Data:</strong> Device information, IP addresses, and behavioral data on how you interact with our site.</span></li>
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span><strong>Communication:</strong> Records of any correspondence you have with our team.</span></li>
          </ul>
        </div>

        <div className="PP_Section">
          <h2 className="NET_Hero_H1 PP_Section_H">
            <span className="PP_Section_Icon"><Eye size={24} /></span>
            2. How we use information
          </h2>
          <p className="PP_P">
            The data we collect is used strictly for operational and improvement purposes:
          </p>
          <ul className="PP_List">
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span>To provide and maintain our suite of IT and consulting services.</span></li>
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span>To notify you about changes to our services or upcoming technical updates.</span></li>
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span>To provide customer support and respond to your inquiries effectively.</span></li>
            <li className="PP_Item"><CheckCircle size={18} className="PP_Check" /> <span>To monitor the usage of our website and detect/prevent technical issues.</span></li>
          </ul>
        </div>

        <div className="PP_Section">
          <h2 className="NET_Hero_H1 PP_Section_H">
            <span className="PP_Section_Icon"><Lock size={24} /></span>
            3. Data security & protection
          </h2>
          <p className="PP_P">
            The security of your data is important to us. We implement a variety of security measures to maintain the safety of your personal information:
          </p>
          <p className="PP_P">
            We use SSL encryption to protect data transmitted between your browser and our servers. Access to personal data is restricted to authorized employees and partners who need the information to perform their duties.
          </p>
        </div>

        <div className="PP_Section">
          <h2 className="NET_Hero_H1 PP_Section_H">
            <span className="PP_Section_Icon"><FileText size={24} /></span>
            4. Your rights
          </h2>
          <p className="PP_P">
            You have certain rights regarding your personal data, including the right to access, correct, or request the deletion of the information we hold about you. You may also opt-out of receiving marketing communications at any time.
          </p>
        </div>

        <div className="PP_Section">
          <h2 className="NET_Hero_H1 PP_Section_H">
            <span className="PP_Section_Icon"><Mail size={24} /></span>
            7. Contact information
          </h2>
          <p className="PP_P">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="PP_Contact_Box">
            <div className="PP_Contact_Item">
              <Mail size={20} className="PP_Contact_Icon" />
              <span>info@chnindia.com</span>
            </div>
            <div className="PP_Contact_Item">
              <Phone size={20} className="PP_Contact_Icon" />
              <span>+91 7010203031</span>
            </div>
            <div className="PP_Contact_Item">
              <MapPin size={20} className="PP_Contact_Icon" />
              <span>No. 28, Fourth Main Road, CIT Nagar, Chennai - 600035</span>
            </div>
          </div>
        </div>

        <div className="PP_Footer_Note">
          &copy; 2025 CHN Technologies. All rights reserved. Continued use of our website implies acceptance of this policy.
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
