import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import chnLogo from "@/assets/chn-logo.png";

const SiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "What We Do",
      link: "#",
      children: [
        {
          name: "Technology",
          link: "/technology",
          children: [
            {
              name: "IT Infrastructure",
              link: "/it-infrastructure",
              children: [
                { name: "Network Management", link: "/network-management" },
                { name: "End User Computing", link: "/enduser" },
                { name: "Cyber Security", link: "/cybersecurity" },
                { name: "Server Administration", link: "/server" },
                { name: "LAN Cabling & Surveillance", link: "/lancabling" }
              ]
            },
            {
              name: "Software Solutions",
              link: "/software-solutions",
              children: [
                { name: "Web Design & Development", link: "/webdesign" },
                { name: "Application Development", link: "/application-development" }
              ]
            },
            {
              name: "Digital Solutions",
              link: "/digital-solutions",
              children: [
                { name: "Data Analytics", link: "/data-analytics" },
                { name: "Automation", link: "/automation" }
              ]
            }
          ]
        },
        {
          name: "Consulting",
          link: "/consulting",
          children: [
            {
              name: "Workforce Management",
              link: "/workforce",

            },
            {
              name: "Payroll & Compliance",
              link: "/payroll",

            },
            {
              name: "Training & Development",
              link: "/training",

            }
          ]
        },
        {
          name: "Resources",
          link: "/resources",
          children: [
            { name: "Careers", link: "/careers" },
            { name: "Blogs", link: "/blogs" }
          ]
        }
      ]
    },


    {
      name: "What We Think",
      // link: "#",
      // dropdown: [
      //   { name: "Consulting Services", link: "/consulting" },
      //   { name: "Digital Transformation", link: "/digital-transformation" },
      //   { name: "Business Strategy", link: "/strategy" },
      //   { name: "Innovation Approach", link: "/innovation" }
      // ]
    },

    {
      name: "About CHN",
      link: "/about",

    },

    {
      name: "Contact Us",
      link: "/contact"
    }
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block w-full bg-[#f8f9fa] border-b border-slate-100 text-[13px] text-slate-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[45px]">
          <div className="flex items-center gap-2">
            <a href="mailto:info@chnindia.com" className="hover:text-[#002e5b] transition-colors">info@chnindia.com</a>
            <span className="text-slate-300">/</span>
            <a href="tel:+91-9384817323" className="hover:text-[#002e5b] transition-colors">+91-9384817323</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="/terms" className="hover:text-[#002e5b] transition-colors">Terms & Condition</a>
              <span className="text-slate-200">|</span>
              <a href="/privacy" className="hover:text-[#002e5b] transition-colors">Privacy Policy</a>
              <span className="text-slate-200">|</span>
              <a href="/contact" className="hover:text-[#002e5b] transition-colors">Contact Us</a>
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-900 border-l border-slate-200 pl-6 h-4">
              <button className="hover:text-[#002e5b] transition-colors">FR</button>
              <button className="text-[#002e5b] flex items-center gap-1">EN <ChevronDown size={14} /></button>
            </div>
          </div>
        </div>
      </div>

      <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white shadow-md" : "absolute top-[45px] bg-transparent"}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between h-[65px]">
          <div className="flex-1 flex items-center justify-start h-full">
            <Link to="/" className="flex items-center no-underline group">
              <img src={chnLogo} alt="CHN Technologies Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          <ul className="hidden xl:flex flex-none items-center justify-center gap-8 m-0 p-0 list-none font-sans h-full">
            {navItems.map((item: any) => {
              const isActive = location.pathname === item.link || (item.name === "Home" && location.pathname === "/");
              const hasDropdown = item.dropdown || item.children;
              return (
                <li key={item.name} className="relative group h-full flex items-center">
                  <Link to={item.link} className={`flex items-center text-[16px] font-semibold transition-all duration-300 group-hover:text-[#002e5b] no-underline ${isActive ? "text-[#002e5b]" : "text-[#222222]"}`}>
                    <span className={`h-[2.5px] bg-[#002e5b] transition-all duration-300 mr-2 ${isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"}`}></span>
                    {item.name}
                    {hasDropdown && <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {hasDropdown && (
                    <ul className="absolute top-[100%] left-[-20px] bg-white min-w-[220px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] border-t-[3px] border-[#002e5b] py-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 list-none m-0 p-0">
                      {(item.dropdown || item.children).map((drop: any) => (
                        <li key={drop.name} className="group/child relative">
                          <Link to={drop.link} className="block px-6 py-2 text-[#4b5563] text-[15px] font-semibold no-underline transition-colors duration-200 hover:text-[#002e5b] flex items-center justify-between">
                            {drop.name}
                            {drop.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/child:rotate-0 transition-transform" />}
                          </Link>
                          {drop.children && (
                            <ul className="absolute left-[100%] top-0 ml-0 bg-white min-w-[220px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] border-t-[3px] border-[#002e5b] py-4 opacity-0 invisible translate-x-[-10px] group-hover/child:opacity-100 group-hover/child:visible group-hover/child:translate-x-0 transition-all duration-300 z-50 list-none m-0 p-0">
                              {drop.children.map((subitem: any) => (
                                <li key={subitem.name} className="group/grandchild relative">
                                  <Link to={subitem.link} className="block px-6 py-2 text-[#4b5563] text-[14px] font-medium no-underline transition-colors duration-200 hover:text-[#002e5b] flex items-center justify-between">
                                    {subitem.name}
                                    {subitem.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/grandchild:rotate-0 transition-transform" />}
                                  </Link>
                                  {subitem.children && (
                                    <ul className="absolute left-[100%] top-0 ml-0 bg-white min-w-[220px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] border-t-[3px] border-[#002e5b] py-4 opacity-0 invisible translate-x-[-10px] group-hover/grandchild:opacity-100 group-hover/grandchild:visible group-hover/grandchild:translate-x-0 transition-all duration-300 z-50 list-none m-0 p-0">
                                      {subitem.children.map((leaf: any) => (
                                        <li key={leaf.name}>
                                          <Link to={leaf.link} className="block px-6 py-2 text-[#4b5563] text-[14px] font-medium no-underline transition-colors duration-200 hover:text-[#002e5b]">{leaf.name}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex-1 flex items-center justify-end gap-6 text-slate-400 h-full">
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className="hover:text-[#002e5b] transition-all hover:-translate-y-0.5"><FaFacebookF size={14} /></a>
              <a href="#" className="hover:text-[#002e5b] transition-all hover:-translate-y-0.5"><FaTwitter size={14} /></a>
              <a href="#" className="hover:text-[#002e5b] transition-all hover:-translate-y-0.5"><FaLinkedinIn size={14} /></a>
              <a href="#" className="hover:text-[#002e5b] transition-all hover:-translate-y-0.5"><FaInstagram size={14} /></a>
            </div>
            <button className="xl:hidden text-[#222222] p-2 hover:bg-slate-100 rounded-lg transition-colors border-none bg-transparent cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 xl:hidden z-50 shadow-lg transition-all duration-300">
            <ul className="flex flex-col p-6 gap-4 m-0 list-none">
              {navItems.map((item: any) => {
                const hasDropdown = item.dropdown || item.children;
                const isExpanded = expandedMenu === item.name;
                return (
                  <li key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link to={item.link} className="text-lg font-medium text-[#222222] hover:text-[#002e5b] no-underline transition-colors block py-2 flex-1" onClick={() => setIsMobileOpen(false)}>{item.name}</Link>
                      {hasDropdown && (
                        <button
                          onClick={() => setExpandedMenu(isExpanded ? null : item.name)}
                          className="text-[#002e5b] ml-2 transition-transform"
                        >
                          <ChevronDown size={20} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {hasDropdown && isExpanded && (
                      <ul className="flex flex-col gap-2 pl-4 mt-2 border-l-2 border-slate-100 list-none">
                        {(item.dropdown || item.children).map((drop: any) => (
                          <li key={drop.name}>
                            <div className="flex items-center justify-between">
                              <Link to={drop.link} className="text-[15px] text-slate-500 hover:text-[#002e5b] no-underline block py-1 flex-1" onClick={() => setIsMobileOpen(false)}>{drop.name}</Link>
                              {drop.children && (
                                <button
                                  onClick={() => setExpandedMenu(isExpanded && expandedMenu === `${item.name}-${drop.name}` ? null : `${item.name}-${drop.name}`)}
                                  className="text-[#002e5b] ml-2 transition-transform"
                                >
                                  <ChevronDown size={16} className={`transition-transform ${expandedMenu === `${item.name}-${drop.name}` ? "rotate-180" : ""}`} />
                                </button>
                              )}
                            </div>
                            {drop.children && expandedMenu === `${item.name}-${drop.name}` && (
                              <ul className="flex flex-col gap-1 pl-4 mt-2 border-l-2 border-slate-200 list-none">
                                {drop.children.map((subitem: any) => (
                                  <li key={subitem.name}>
                                    <Link to={subitem.link} className="text-[13px] text-slate-400 hover:text-[#002e5b] no-underline block py-1" onClick={() => setIsMobileOpen(false)}>{subitem.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default SiteNavbar;