import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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

const NavDropdown = ({ label, id, links, active, onEnter, onLeave }: DropdownProps) => (
  <div className="relative" onMouseEnter={() => onEnter(id)} onMouseLeave={onLeave}>
    <button className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
      {label}
      <ChevronDown className={`w-3 h-3 transition-transform ${active === id ? "rotate-180" : ""}`} />
    </button>
    {active === id && (
      <div className="absolute top-full left-0 mt-1 bg-card rounded-md shadow-md border border-border py-2 min-w-[200px]">
        {links.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}
  </div>
);

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
      className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground border-b border-border"
    >
      {label}
      <ChevronDown className={`w-4 h-4 transition-transform ${active === id ? "rotate-180" : ""}`} />
    </button>
    {active === id && (
      <div className="pl-4 py-2 space-y-1">
        {links.map((item) => (
          <Link key={item.link} to={item.link} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
            {item.name}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const SiteNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

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

  const handleEnter = useCallback((id: string) => setActiveMenu(id), []);
  const handleLeave = useCallback(() => setActiveMenu(null), []);
  const toggleMobile = useCallback((id: string) => setActiveMenu((prev) => (prev === id ? null : id)), []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-card/80 backdrop-blur-sm"
      }`}
      style={{ height: 56 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={chnLogo} alt="CHN Technologies" className="h-9 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <NavDropdown label="Technology" id="tech" links={techLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
          <NavDropdown label="Consulting" id="consult" links={consultingLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
          <NavDropdown label="Resources" id="resources" links={resourceLinks} active={activeMenu} onEnter={handleEnter} onLeave={handleLeave} />
          <Link to="/contact" className="ml-3 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-card z-40 overflow-y-auto">
          <div className="p-6 space-y-1">
            <Link to="/" className="block py-3 text-base font-medium text-foreground border-b border-border">Home</Link>
            <MobileAccordion label="Technology" id="m-tech" links={techLinks} active={activeMenu} toggle={toggleMobile} />
            <MobileAccordion label="Consulting" id="m-consult" links={consultingLinks} active={activeMenu} toggle={toggleMobile} />
            <MobileAccordion label="Resources" id="m-resources" links={resourceLinks} active={activeMenu} toggle={toggleMobile} />
            <Link to="/contact" className="block py-3 text-base font-semibold text-primary">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
