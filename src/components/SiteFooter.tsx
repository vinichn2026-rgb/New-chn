import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import chnLogo from "@/assets/chn-logo.png";

const SiteFooter = () => {
  return (
    <footer className="w-full bg-secondary/50 py-6 px-5">
      <div className="container mx-auto">
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row items-center">
          {/* Logo Section */}
          <div className="bg-primary/5 px-8 py-6 flex items-center justify-center md:min-w-[180px]">
            <img src={chnLogo} alt="CHN Technologies" className="w-28" />
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="text-center md:text-left">
              <h4 className="text-base font-semibold text-foreground tracking-tight">CHN Technologies</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Integrated technology and consulting services built for stability, security, and scalable growth.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex flex-wrap gap-5 text-sm text-foreground/80">
                <span className="flex items-center gap-2">
                  <FaPhoneAlt className="text-primary text-xs" /> +91 XXXXXXXXXX
                </span>
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> info@chntechnologies.com
                </span>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedinIn, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaYoutube, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
          <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
          <span>© {new Date().getFullYear()} CHN Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
