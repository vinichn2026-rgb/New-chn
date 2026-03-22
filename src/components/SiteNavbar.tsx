import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import chnLogo from "@/assets/chn-logo.png";

interface ServiceItem {
  name: string;
  link: string;
}

interface TechCategory {
  title: string;
  items: ServiceItem[];
  icon: string;
}

interface ConsultingItem {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

const techCategories: TechCategory[] = [
  {
    title: "IT Infrastructure",
    icon: "📈",
    items: [
      { name: "Network Management", link: "/network" },
      { name: "End User Computing", link: "/enduser" },
      { name: "Cyber Security", link: "/cybersecurity" },
      { name: "Server Administration", link: "/server" },
      { name: "LAN Cabling & Surveillance", link: "/lancabling" },
    ],
  },
  {
    title: "Software Solutions",
    icon: "🎯",
    items: [
      { name: "Web Design & Development", link: "/webdesign" },
      { name: "Application Development", link: "/application" },
    ],
  },
  {
    title: "Digital Solutions",
    icon: "✍️",
    items: [
      { name: "Data Analytics", link: "/dataanalytics" },
      { name: "Automation", link: "/automation" },
    ],
  },
];

const consultingItems: ConsultingItem[] = [
  { title: "Workforce Management", desc: "Build high-performing teams and reduce hiring overhead", icon: "⚛️", link: "/workforce" },
  { title: "Payroll & Compliance", desc: "Error-free payroll with expert support and structured systems", icon: "🛒", link: "/payroll" },
  { title: "Training & Development", desc: "Custom learning programs aligned with your business goals", icon: "🎨", link: "/training" },
];

const SiteNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
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

  const handleMenuEnter = useCallback((menuName: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuName);
  }, []);

  const handleMenuLeave = useCallback(() => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-blue-pale/90 backdrop-blur-sm"
      }`}
      style={{ height: 60 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={chnLogo} alt="CHN Technologies" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>

          {/* Technology Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("technology")}
            onMouseLeave={handleMenuLeave}
          >
            <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Technology <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "technology" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "technology" && (
              <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border p-6 min-w-[500px]">
                <div className="grid grid-cols-3 gap-6">
                  {techCategories.map((cat) => (
                    <div key={cat.title}>
                      <div className="flex items-center gap-2 mb-3">
                        <span>{cat.icon}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">{cat.title}</span>
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.link}
                            to={item.link}
                            className="block text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 px-2 py-1.5 rounded-md transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Consulting Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("consulting")}
            onMouseLeave={handleMenuLeave}
          >
            <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Consulting <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "consulting" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "consulting" && (
              <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border p-4 min-w-[320px]">
                <div className="space-y-1">
                  {consultingItems.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-lg mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => handleMenuEnter("resources")}
            onMouseLeave={handleMenuLeave}
          >
            <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "resources" && (
              <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border p-4 min-w-[200px]">
                <div className="space-y-1">
                  <Link to="/about" className="block text-sm px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">About Us</Link>
                  <Link to="/blogs" className="block text-sm px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">Blogs</Link>
                  <Link to="/careers" className="block text-sm px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">Careers</Link>
                  <Link to="/whatwethink" className="block text-sm px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">What We Think</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="ml-4 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-card/98 backdrop-blur-md z-40 overflow-y-auto">
          <div className="p-6 space-y-4">
            <Link to="/" className="block py-3 text-lg font-medium text-foreground border-b border-border">Home</Link>

            <div>
              <button
                onClick={() => setActiveMenu(activeMenu === "m-tech" ? null : "m-tech")}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground border-b border-border"
              >
                Technology <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "m-tech" ? "rotate-180" : ""}`} />
              </button>
              {activeMenu === "m-tech" && (
                <div className="pl-4 py-2 space-y-3">
                  {techCategories.map((cat) => (
                    <div key={cat.title}>
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{cat.title}</div>
                      {cat.items.map((item) => (
                        <Link key={item.link} to={item.link} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">{item.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setActiveMenu(activeMenu === "m-consult" ? null : "m-consult")}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground border-b border-border"
              >
                Consulting <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "m-consult" ? "rotate-180" : ""}`} />
              </button>
              {activeMenu === "m-consult" && (
                <div className="pl-4 py-2 space-y-1">
                  {consultingItems.map((item) => (
                    <Link key={item.link} to={item.link} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">{item.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block py-3 text-lg font-medium text-foreground border-b border-border">About</Link>
            <Link to="/blogs" className="block py-3 text-lg font-medium text-foreground border-b border-border">Blogs</Link>
            <Link to="/careers" className="block py-3 text-lg font-medium text-foreground border-b border-border">Careers</Link>
            <Link to="/contact" className="block py-3 text-lg font-semibold text-primary">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
