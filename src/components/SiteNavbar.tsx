import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import chnLogo from "@/assets/chn-logo.png";

const SiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPathActive = (item: any): boolean => {
    if (item.link && item.link !== "#" && location.pathname === item.link) return true;
    const children = item.children || item.dropdown;
    if (children) {
      return children.some((child: any) => isPathActive(child));
    }
    return false;
  };

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredItem(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  const navItems = [
    {
      name: "What We Do",
      link: "#",
      children: [
        {
          name: "Technology",
          children: [
            {
              name: "IT Infrastructure",
              children: [
                { name: "Network Management", link: "/network" },
                { name: "End User Computing", link: "/enduser" },
                { name: "Cyber Security", link: "/cybersecurity" },
                { name: "Server Administration", link: "/server" },
                { name: "LAN Cabling & Surveillance", link: "/lancabling" }
              ]
            },
            {
              name: "Software Solutions",
              children: [
                { name: "Web Design & Development", link: "/webdesign" },
                { name: "Application Development", link: "/application" }
              ]
            },
            {
              name: "Digital Solutions",
              children: [
                { name: "Data Analytics", link: "/dataanalytics" },
                { name: "Automation", link: "/automation" }
              ]
            }
          ]
        },
        {
          name: "Consulting",
          children: [
            { name: "Workforce Management", link: "/workforce" },
            { name: "Payroll & Compliance", link: "/payroll" },
            { name: "Training & Development", link: "/training" }
          ]
        }
      ]
    },
    { name: "About CHN", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact" },
    { name: "Blogs", link: "/blogs" }
  ];

  return (
    <>
      <nav className={`w-full z-[100] transition-all duration-300 fixed top-0 ${isScrolled ? "bg-white shadow-md h-[70px]" : "bg-white/95 backdrop-blur-md border-b border-slate-100 h-[80px]"}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center no-underline group translate-y-[-2px]">
              <img src={chnLogo} alt="CHN Technologies Logo" className="h-[46px] w-auto object-contain" />
            </Link>
          </div>

          <ul className="hidden lg:flex flex-none items-center justify-center lg:gap-4 xl:gap-8 m-0 p-0 list-none font-sans h-full">
            {navItems.map((item) => {
              const active = isPathActive(item);
              const hasDropdown = item.children;
              const isHovered = hoveredItem === item.name;

              return (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.link}
                    className={`flex items-center text-[15px] font-bold tracking-tight transition-all duration-300 no-underline px-2 py-1 rounded-md ${active ? "text-blue-600" : "text-[#1a2b4b] hover:text-blue-600"}`}
                  >
                    {item.name}
                    {hasDropdown && <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />}
                  </Link>

                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[100%] left-[-20px] pt-2 z-[110]"
                      >
                        <ul className="bg-white/90 backdrop-blur-2xl min-w-[280px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border-t-[3px] border-blue-600 py-4 list-none m-0 p-0 rounded-b-2xl border border-white/20">
                          {item.children.map((drop: any) => {
                            const dropActive = isPathActive(drop);
                            return (
                              <li key={drop.name} className="group/child relative">
                                <Link
                                  to={drop.link || "#"}
                                  className={`block px-6 py-3 text-[14px] font-bold no-underline transition-all duration-200 flex items-center justify-between ${dropActive ? "text-blue-600 bg-blue-50/50" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"}`}
                                >
                                  {drop.name}
                                  {drop.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/child:rotate-0 transition-transform" />}
                                </Link>

                                {drop.children && (
                                  <div className="absolute left-[100%] top-[-8px] pl-2 opacity-0 invisible translate-x-3 group-hover/child:opacity-100 group-hover/child:visible group-hover/child:translate-x-0 transition-all duration-300">
                                    <ul className="bg-white/90 backdrop-blur-2xl min-w-[280px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border-t-[3px] border-blue-600 py-4 list-none m-0 p-0 rounded-2xl border border-white/20">
                                      {drop.children.map((subitem: any) => {
                                        const subActive = isPathActive(subitem);
                                        return (
                                          <li key={subitem.name} className="group/grandchild relative">
                                            <Link
                                              to={subitem.link || "#"}
                                              className={`block px-6 py-2.5 text-[13px] font-semibold no-underline transition-all duration-200 flex items-center justify-between ${subActive ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-blue-600 hover:bg-slate-50"}`}
                                            >
                                              {subitem.name}
                                              {subitem.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/grandchild:rotate-0 transition-transform" />}
                                            </Link>

                                            {subitem.children && (
                                              <div className="absolute left-[100%] top-[-8px] pl-2 opacity-0 invisible translate-x-3 group-hover/grandchild:opacity-100 group-hover/grandchild:visible group-hover/grandchild:translate-x-0 transition-all duration-300">
                                                <ul className="bg-white/90 backdrop-blur-2xl min-w-[260px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border-t-[3px] border-blue-600 py-4 list-none m-0 p-0 rounded-2xl border border-white/20">
                                                  {subitem.children.map((leaf: any) => (
                                                    <li key={leaf.name}>
                                                      <Link
                                                        to={leaf.link}
                                                        className={`block px-6 py-2 text-[13px] font-medium no-underline transition-colors duration-200 ${location.pathname === leaf.link ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-blue-600 hover:bg-slate-50"}`}
                                                      >
                                                        {leaf.name}
                                                      </Link>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex-1 flex items-center justify-end gap-6 text-slate-600">
            <div className="hidden lg:flex items-center gap-4">
              {[
                { icon: <FaFacebookF size={14} />, link: "https://www.facebook.com/people/CHN-Technologies/100068692698660/" },
                { icon: <FaLinkedinIn size={14} />, link: "https://www.linkedin.com/company/chn-technologies/" },
                { icon: <FaXTwitter size={14} />, link: "https://x.com/chn_india70840" },
                { icon: <FaInstagram size={14} />, link: "https://www.instagram.com/chntech_india/" },
                { icon: <FaYoutube size={14} />, link: "https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" }
              ].map((social, idx) => (
                <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5 opacity-80 hover:opacity-100">
                  {social.icon}
                </a>
              ))}
            </div>
            <button className="lg:hidden text-[#002e5b] p-2 hover:bg-slate-100 rounded-lg transition-colors border-none bg-transparent cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 lg:hidden z-50 shadow-lg overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-4 m-0 list-none">
                {navItems.map((item) => {
                  const active = isPathActive(item);
                  const hasDropdown = item.children;
                  const isExpanded = expandedMenu === item.name;
                  return (
                    <li key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.link}
                          className={`text-lg font-bold no-underline transition-colors block py-2 flex-1 ${active ? "text-blue-600" : "text-[#002e5b] hover:text-blue-600"}`}
                          onClick={() => { if (!hasDropdown) setIsMobileOpen(false); }}
                        >
                          {item.name}
                        </Link>
                        {hasDropdown && (
                          <button
                            onClick={() => setExpandedMenu(isExpanded ? null : item.name)}
                            className={`text-[#002e5b] ml-2 transition-transform p-2 ${isExpanded ? "rotate-180" : ""}`}
                          >
                            <ChevronDown size={20} />
                          </button>
                        )}
                      </div>
                      {hasDropdown && isExpanded && (
                        <ul className="flex flex-col gap-2 pl-4 mt-2 border-l-2 border-blue-100 list-none">
                          {item.children.map((drop: any) => {
                            const dropActive = isPathActive(drop);
                            const dropExpanded = expandedMenu === `${item.name}-${drop.name}`;
                            return (
                              <li key={drop.name}>
                                <div className="flex items-center justify-between">
                                  <Link
                                    to={drop.link || "#"}
                                    className={`text-[15px] font-semibold no-underline block py-1 flex-1 ${dropActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
                                    onClick={() => { if (!drop.children) setIsMobileOpen(false); }}
                                  >
                                    {drop.name}
                                  </Link>
                                  {drop.children && (
                                    <button
                                      onClick={() => setExpandedMenu(dropExpanded ? item.name : `${item.name}-${drop.name}`)}
                                      className={`text-[#002e5b] ml-2 transition-transform p-1 ${dropExpanded ? "rotate-180" : ""}`}
                                    >
                                      <ChevronDown size={16} />
                                    </button>
                                  )}
                                </div>
                                {drop.children && dropExpanded && (
                                  <ul className="flex flex-col gap-1 pl-4 mt-2 border-l-2 border-blue-50 list-none">
                                    {drop.children.map((subitem: any) => {
                                      const subActive = isPathActive(subitem);
                                      const subExpanded = expandedMenu === `${item.name}-${drop.name}-${subitem.name}`;
                                      return (
                                        <li key={subitem.name}>
                                          <div className="flex items-center justify-between">
                                            <Link
                                              to={subitem.link || "#"}
                                              className={`text-[14px] font-medium no-underline block py-1 flex-1 ${subActive ? "text-blue-600" : "text-slate-500 hover:text-blue-600"}`}
                                              onClick={() => { if (!subitem.children) setIsMobileOpen(false); }}
                                            >
                                              {subitem.name}
                                            </Link>
                                          </div>
                                          {subitem.children && subExpanded && (
                                            <ul className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-slate-100 list-none">
                                              {subitem.children.map((leaf: any) => (
                                                <li key={leaf.name}>
                                                  <Link to={leaf.link} className={`text-[13px] no-underline block py-1 ${location.pathname === leaf.link ? "text-blue-600 font-bold" : "text-slate-400 hover:text-blue-600"}`} onClick={() => setIsMobileOpen(false)}>{leaf.name}</Link>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default SiteNavbar;