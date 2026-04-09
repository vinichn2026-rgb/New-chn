import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import chnLogo from "@/assets/chn-logo.png";

const SiteFooter = () => {
  return (
    <footer className="w-full" style={{ background: "var(--gradient-dark)" }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img src={chnLogo} alt="CHN Technologies" className="h-12 mb-5 brightness-0 invert" />
            <p className="text-sm text-white/60 leading-relaxed">
              Integrated technology and consulting services built for stability,
              security, and scalable growth.
            </p>
            {/* <div className="mt-6">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Contact Us 24/7</p>
              <a href="tel:+911234567890" className="text-lg font-semibold text-white hover:text-primary transition-colors">
               +91-9384817323 <br/>+91-7010203031
              </a>
            </div> */}
          </div>

          {/* Explore Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-semibold text-lg mb-5">Explore Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Blogs", to: "/blogs" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Network Management", to: "/network" },
                { label: "Cyber Security", to: "/cybersecurity" },
                { label: "End User Computing", to: "/enduser" },
                { label: "Web Design & Development", to: "/webdesign" },
                { label: "Application Development", to: "/application" },
                { label: "Data Analytics", to: "/dataanalytics" },
                { label: "Workforce Management", to: "/workforce" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-semibold text-lg mb-5 uppercase tracking-tighter">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex flex-col items-center md:flex-row md:items-start gap-3">
                <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60">+91-9384817323 <br /> +91-7010203031</span>
            </li>
            <li className="flex flex-col items-center md:flex-row md:items-start gap-3">
              <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-white/60">info@chnindia.com</span>
            </li>
            <li className="flex flex-col items-center md:flex-row md:items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-white/60">Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

      {/* Bottom Bar */ }
  <div className="border-t border-white/10">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex gap-3">
        {[
          { Icon: FaFacebookF, href: "#" },
          { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/chn-technologies/" },
          { Icon: FaXTwitter, href: "https://x.com/chn_india70840" },
          { Icon: FaInstagram, href: "#" },
          { Icon: FaYoutube, href: "#" }
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          >
            <item.Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
      <p className="text-sm text-white/40">
        © {new Date().getFullYear()} <span className="text-primary font-medium">CHN Technologies.</span> All rights reserved.
      </p>
      <div className="flex items-center gap-6 text-xs text-white/50">
        <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </div>
    </footer >
  );
};

export default SiteFooter;
