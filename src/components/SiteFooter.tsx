import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="w-full bg-[#0a1122] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Follow Us */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white/85">CHN Technologies</h3>
            <p className="text-[#00c2ff] text-sm font-semibold tracking-wide mx-auto md:mx-0">
              Empowering Businesses Through<br />Technology & Expertise
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              CHN Technologies is a leading provider of technology and consulting solutions
              delivering IT, HR, and business services with innovation and trust.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-bold mb-4 text-white/85">Follow Us</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://www.linkedin.com/company/chn-technologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0077b5] flex items-center justify-center rounded-lg hover:opacity-80 transition-all">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://www.facebook.com/people/CHN-Technologies/100068692698660/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#3b5998] flex items-center justify-center rounded-lg hover:opacity-80 transition-all">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://www.instagram.com/chntech_india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center rounded-lg hover:opacity-80 transition-all">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#ff0000] flex items-center justify-center rounded-lg hover:opacity-80 transition-all">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white/85">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "About CHN", to: "/about" },
                { label: "Careers", to: "/careers" },

                { label: "Contacts", to: "/contact" },
                { label: "Blogs", to: "/blogs" }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-white" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white/85">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex gap-4 justify-center md:justify-start">
                <MapPin size={20} className="text-[#00c2ff] shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chennai (Head Office)<br />
                  Coimbatore<br />
                </p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <Phone size={20} className="text-[#00c2ff] shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  +91-7010203031<br />
                </p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <Mail size={20} className="text-[#00c2ff] shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  sales@chnindia.com<br />
                  info@chnindia.com
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white/85">Legal & Compliance</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4  text-sm">
          <p className="text-white/65">© 2026 CHN Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1 text-white/65">
            Building Smart Solutions for Modern Businesses — CHN Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
