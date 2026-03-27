import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import chnLogo from "@/assets/chn-logo.png";

const techLinks = [
  { name: "Network Management", link: "/network" },
  { name: "End User Computing", link: "/enduser" },
  { name: "Cyber Security", link: "/cybersecurity" },
  { name: "Server Administration", link: "/server" },
  { name: "LAN Cabling & Surveillance", link: "/lancabling" },
  { name: "Web Design & Development", link: "/webdesign" },
  { name: "Application Development", link: "/application" },
  { name: "Data Analytics", link: "/dataanalytics" },
  { name: "Automation", link: "/automation" },
];

const consultingLinks = [
  { name: "Workforce Management", link: "/workforce" },
  { name: "Payroll & Compliance", link: "/payroll" },
  { name: "Training & Development", link: "/training" },
];

const resourceLinks = [
  { name: "About Us", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "What We Think", link: "/whatwethink" },
];

interface DropdownProps {
  label: string;
  id: string;
  links: { name: string; link: string }[];
  active: string | null;
  onEnter: (id: string) => void;
  onLeave: () => void;
}

const NavDropdown = ({ label, id, links, active, onEnter, onLeave }: DropdownProps) => {
  const location = useLocation();
  const isActive = links.some((l) => location.pathname === l.link);

  return (
    <div className="relative" onMouseEnter={() => onEnter(id)} onMouseLeave={onLeave}>
      <button
        className={`px-4 py-6 text-[15px] font-medium transition-colors flex items-center gap-1 ${
          isActive ? "text-primary" : "text-foreground hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${active === id ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full left-0 bg-card rounded-md shadow-lg border border-border py-2 min-w-[240px] transition-all duration-200 origin-top ${
          active === id ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {links.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className={`block px-5 py-2.5 text-sm transition-colors ${
              location.pathname === item.link
                ? "text-primary bg-primary/5"
                : "text-foreground/70 hover:text-primary hover:bg-muted/50"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

interface MobileAccordionProps {
  label: string;
  id: string;
  links: { name: string; link: string }[];
  active: string | null;
  toggle: (id: string) => void;
}

const MobileAccordion = ({ label, id, links, active, toggle }: MobileAccordionProps) => (
  <div>
    <button
      onClick={() => toggle(id)}
      className="flex items-center justify-between w-full py-3.5 text-base font-medium text-foreground border-b border-border/50"
    >
      {label}
      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${active === id ? "rotate-180" : ""}`} />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        active === id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pl-4 py-2 space-y-0.5">
        {links.map((item) => (
          <Link key={item.link} to={item.link} className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const SiteNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleEnter = useCallback((id: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(id);
  }, []);

  const handleLeave = useCallback(() => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const toggleMobile = useCallback((id: string) => setActiveMenu((prev) => (prev === id ? null : id)), []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block w-full bg-navy text-navy-foreground text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="mailto:info@chntechnologies.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@chntechnologies.com
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 XXXXXXXXXX
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
              <FaFacebookF className="w-3 h-3" />
            </a>
            <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
              <FaLinkedinIn className="w-3 h-3" />
            </a>
            <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors">
              <FaInstagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-card shadow-md border-b border-border"
            : "sticky top-0 bg-card"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 py-3">
            <img src={chnLogo} alt="CHN Technologies" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              className={`px-4 py-6 text-[15px] font-medium transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <NavDropdown label="Technology" id="tech" links={techLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
            <NavDropdown label="Consulting" id="consult" links={consultingLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
            <NavDropdown label="Resources" id="resources" links={resourceLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
            <Link
              to="/contact"
              className={`px-4 py-6 text-[15px] font-medium transition-colors ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[60px] bg-card z-40 overflow-y-auto transition-all duration-300 ${
            isMobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="p-6 space-y-1">
            <Link to="/" className="block py-3.5 text-base font-medium text-foreground border-b border-border/50">Home</Link>
            <MobileAccordion label="Technology" id="m-tech" links={techLinks} active={activeMenu} toggle={toggleMobile} />
            <MobileAccordion label="Consulting" id="m-consult" links={consultingLinks} active={activeMenu} toggle={toggleMobile} />
            <MobileAccordion label="Resources" id="m-resources" links={resourceLinks} active={activeMenu} toggle={toggleMobile} />
            <Link to="/contact" className="block py-3.5 text-base font-semibold text-primary border-b border-border/50">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNavbar;
