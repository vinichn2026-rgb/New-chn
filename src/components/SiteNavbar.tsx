import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Network, Monitor, Zap, Users, Shield, Cpu, Layout, Activity, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import chnLogo from "@/assets/chn-logo.png";

const SiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "IT Infrastructure": return <Network size={18} />;
      case "Software Solutions": return <Monitor size={18} />;
      case "Digital Solutions": return <Zap size={18} />;
      case "Consulting": return <Users size={18} />;
      case "Cyber Security": return <Shield size={16} />;
      case "Network Management": return <Cpu size={16} />;
      case "Analytics": return <Activity size={16} />;
      default: return <div className="w-4 h-4 rounded-full bg-blue-100" />;
    }
  };
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLUListElement>(null);
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

  const updateIndicator = (element: HTMLElement | null) => {
    if (element) {
      const parentRect = navRef.current?.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      if (parentRect) {
        setIndicatorProps({
          left: elementRect.left - parentRect.left,
          width: elementRect.width,
          opacity: 1
        });
      }
    } else {
      setIndicatorProps(prev => ({ ...prev, opacity: 0 }));
    }
  };

  const handleMouseEnter = (name: string, e: React.MouseEvent<HTMLElement>) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredItem(name);
    updateIndicator(e.currentTarget);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      // Reset to active item if present
      const activeEl = navRef.current?.querySelector(".active-nav-link") as HTMLElement;
      if (activeEl) {
        updateIndicator(activeEl);
      } else {
        setIndicatorProps(prev => ({ ...prev, opacity: 0 }));
      }
    }, 200);
  };

  useEffect(() => {
    // Initial active indicator position
    setTimeout(() => {
      const activeEl = navRef.current?.querySelector(".active-nav-link") as HTMLElement;
      if (activeEl) updateIndicator(activeEl);
    }, 500);
  }, [location.pathname]);

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

          <ul 
            ref={navRef}
            className="hidden lg:flex flex-none items-center justify-center lg:gap-4 xl:gap-8 m-0 p-0 list-none font-sans h-full relative"
          >
            {/* Animated Highlight Indicator */}
            <motion.div
              className="absolute bottom-[20px] h-[3px] bg-blue-600 rounded-full z-10"
              initial={false}
              animate={{
                left: indicatorProps.left,
                width: indicatorProps.width,
                opacity: indicatorProps.opacity
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {navItems.map((item) => {
              const active = isPathActive(item);
              const hasDropdown = item.children;
              const isHovered = hoveredItem === item.name;

              return (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.link}
                    onMouseEnter={(e) => handleMouseEnter(item.name, e)}
                    className={`flex items-center text-[15px] font-bold tracking-tight transition-all duration-300 no-underline px-3 py-2 rounded-lg relative z-20 ${active ? "text-blue-600 active-nav-link" : "text-[#1a2b4b] hover:text-blue-600"}`}
                  >
                    {item.name}
                    {hasDropdown && <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />}
                  </Link>

                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className={`absolute top-[100%] ${item.name === "What We Do" ? "left-1/2 -translate-x-1/2" : "left-[-20px]"} pt-2 z-[110]`}
                      >
                        {item.name === "What We Do" ? (
                          /* VERTICAL DOWNWARD ACCORDION DROPDOWN */
                          <div 
                            className="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] border-t-[4px] border-blue-600 rounded-2xl border border-slate-200 flex flex-col transition-all duration-300 overflow-hidden"
                            style={{ width: "320px" }}
                            onMouseLeave={() => setActiveCluster(null)}
                          >
                            <div className="p-3 flex flex-col gap-1">
                              {[...item.children[0].children, item.children[1]].map((cluster: any) => {
                                const isExpanded = activeCluster === cluster.name;
                                const clusterChildren = cluster.name === "Consulting" ? cluster.children : (cluster.children || []);
                                
                                return (
                                  <div 
                                    key={cluster.name}
                                    onMouseEnter={() => setActiveCluster(cluster.name)}
                                    className="flex flex-col"
                                  >
                                    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 ${isExpanded ? "bg-blue-600 text-white shadow-md shadow-blue-100" : "hover:bg-slate-50 text-slate-700"}`}>
                                      <div className={`${isExpanded ? "text-white" : "text-blue-600"}`}>
                                        {getIcon(cluster.name)}
                                      </div>
                                      <span className="text-[14px] font-black">{cluster.name}</span>
                                      <ChevronDown size={14} className={`ml-auto transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                                    </div>

                                    <AnimatePresence>
                                      {isExpanded && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                          className="overflow-hidden bg-slate-50/50 rounded-b-xl"
                                        >
                                          <ul className="list-none p-2 m-0 flex flex-col gap-1 border-t border-slate-100">
                                            {clusterChildren.map((link: any) => {
                                              const isActive = location.pathname === link.link;
                                              return (
                                                <li key={link.name}>
                                                  <Link 
                                                    to={link.link}
                                                    onClick={() => setIsMobileOpen(false)}
                                                    className={`group/link flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 no-underline ${isActive ? "bg-white shadow-sm text-blue-600" : "text-slate-500 hover:text-blue-600 hover:bg-white hover:shadow-sm"}`}
                                                  >
                                                    <span className="text-[13px] font-bold">{link.name}</span>
                                                    <ChevronDown size={12} className={`-rotate-90 transition-transform ${isActive ? "opacity-100" : "opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1"}`} />
                                                  </Link>
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                            
                            <div className="bg-blue-50/50 p-4 border-t border-slate-100">
                               <p className="text-[11px] text-slate-400 font-medium text-center m-0 italic">"Premium tech solutions for your business"</p>
                            </div>
                          </div>
                        ) : (
                          /* STANDARD DROPDOWN */
                          <ul className="bg-white/95 backdrop-blur-2xl min-w-[240px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border-t-[3px] border-blue-600 py-3 list-none m-0 p-0 rounded-b-2xl border border-white/20">
                            {item.children.map((drop: any) => {
                              const dropActive = isPathActive(drop);
                              return (
                                <li key={drop.name} className="px-2">
                                  <Link
                                    to={drop.link || "#"}
                                    className={`block px-4 py-2.5 rounded-lg text-[14px] font-bold no-underline transition-all duration-200 flex items-center justify-between ${dropActive ? "text-blue-600 bg-blue-50/50" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"}`}
                                  >
                                    {drop.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
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
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[70px] w-full bg-white lg:hidden z-[90] overflow-y-auto"
            >
              <div className="p-8 pb-32">
                <div className="mb-10">
                  <span className="text-[12px] font-extrabold text-blue-600 uppercase tracking-widest block mb-4">Navigation</span>
                  <ul className="flex flex-col gap-6 m-0 list-none p-0">
                    {navItems.map((item) => {
                      const active = isPathActive(item);
                      const hasDropdown = item.children;
                      const isExpanded = expandedMenu === item.name;
                      return (
                        <li key={item.name} className="border-b border-slate-50 pb-4 last:border-0">
                          <div className="flex items-center justify-between group">
                            <Link
                              to={item.link}
                              className={`text-2xl font-black no-underline transition-colors flex items-center gap-3 ${active ? "text-blue-600" : "text-[#1a2b4b]"}`}
                              onClick={() => { if (!hasDropdown) setIsMobileOpen(false); }}
                            >
                              {item.name}
                              {active && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                            </Link>
                            {hasDropdown && (
                              <button
                                onClick={() => setExpandedMenu(isExpanded ? null : item.name)}
                                className={`text-slate-400 hover:text-blue-600 transition-transform w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 ${isExpanded ? "rotate-180 bg-blue-50 text-blue-600" : ""}`}
                              >
                                <ChevronDown size={22} />
                              </button>
                            )}
                          </div>
                          
                          <AnimatePresence>
                            {hasDropdown && isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <ul className="flex flex-col gap-5 pl-4 mt-6 border-l-2 border-blue-100 list-none">
                                  {item.children.map((drop: any, idx: number) => {
                                    const dropActive = isPathActive(drop);
                                    const dropExpanded = expandedMenu === `${item.name}-${drop.name}`;
                                    return (
                                      <li key={drop.name}>
                                        <div className="flex items-center justify-between">
                                          <Link
                                            to={drop.link || "#"}
                                            className={`text-[17px] font-bold no-underline block flex-1 ${dropActive ? "text-blue-600" : "text-slate-600"}`}
                                            onClick={() => { if (!drop.children) setIsMobileOpen(false); }}
                                          >
                                            {drop.name}
                                          </Link>
                                          {drop.children && (
                                            <button
                                              onClick={() => setExpandedMenu(dropExpanded ? item.name : `${item.name}-${drop.name}`)}
                                              className={`text-slate-400 transition-transform p-2 ${dropExpanded ? "rotate-180 text-blue-600" : ""}`}
                                            >
                                              <ChevronDown size={18} />
                                            </button>
                                          )}
                                        </div>
                                        
                                        {drop.children && dropExpanded && (
                                          <ul className="flex flex-col gap-3 pl-4 mt-4 list-none border-l border-slate-200">
                                            {drop.children.map((subitem: any) => {
                                              const subActive = isPathActive(subitem);
                                              return (
                                                <li key={subitem.name}>
                                                  <Link
                                                    to={subitem.link || "#"}
                                                    className={`text-[15px] font-semibold no-underline block py-1 ${subActive ? "text-blue-600" : "text-slate-500"}`}
                                                    onClick={() => setIsMobileOpen(false)}
                                                  >
                                                    {subitem.name}
                                                  </Link>
                                                  {subitem.children && (
                                                    <ul className="flex flex-col gap-2 pl-4 mt-2 list-none border-l border-slate-100">
                                                      {subitem.children.map((leaf: any) => (
                                                        <li key={leaf.name}>
                                                          <Link 
                                                            to={leaf.link} 
                                                            className={`text-[14px] font-medium no-underline block py-1 ${location.pathname === leaf.link ? "text-blue-600 font-bold" : "text-slate-400"}`} 
                                                            onClick={() => setIsMobileOpen(false)}
                                                          >
                                                            {leaf.name}
                                                          </Link>
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
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className="pt-8 mt-10 border-t border-slate-100">
                  <span className="text-[12px] font-extrabold text-blue-600 uppercase tracking-widest block mb-6">Connect With Us</span>
                  <div className="flex gap-4">
                    {[
                      { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/people/CHN-Technologies/100068692698660/" },
                      { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/chn-technologies/" },
                      { icon: <FaXTwitter size={20} />, link: "https://x.com/chn_india70840" },
                      { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/chntech_india/" },
                      { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" }
                    ].map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a2b4b] hover:bg-blue-600 hover:text-white transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default SiteNavbar;