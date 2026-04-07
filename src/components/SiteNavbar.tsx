import { useState, useEffect } from "react";
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
        }
      ]
    },

    {
      name: "About CHN",
      link: "/about",

    },
    {
      name: "Careers",
      link: "/careers",

    },
    {
      name: "Contact Us",
      link: "/contact"
    },
    {
      name: "Blogs",
      link: "/blogs"
    }
  ];
  return (
    <>
      <nav className={`w-full z-50 transition-all duration-300 fixed top-0 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md border-b border-slate-100"}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between h-[65px]">
          <div className="flex-1 flex items-center justify-start h-full">
            <Link to="/" className="flex items-center no-underline group">
              <img src={chnLogo} alt="CHN Technologies Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          <ul className="hidden lg:flex flex-none items-center justify-center lg:gap-4 xl:gap-8 m-0 p-0 list-none font-sans h-full">
            {navItems.map((item: any) => {
              const isActive = location.pathname === item.link || (item.name === "Home" && location.pathname === "/");
              const hasDropdown = item.dropdown || item.children;
              return (
                <li key={item.name} className="relative group h-full flex items-center">
                  <Link to={item.link} className={`flex items-center text-[16px] font-semibold transition-all duration-300 hover:text-blue-600 no-underline ${isActive ? "text-blue-600" : "text-[#002e5b]"}`}>
                    {item.name}
                    {hasDropdown && <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {hasDropdown && (
                    <ul
                      className="absolute top-[100%] left-[-20px] bg-white/95 backdrop-blur-md min-w-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-t-[3px] border-blue-600 py-4 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 list-none m-0 p-0 rounded-b-xl"
                    >
                      {(item.dropdown || item.children).map((drop: any) => (
                        <li key={drop.name} className="group/child relative">
                          <Link to={drop.link} className="block px-6 py-2.5 text-[#4b5563] text-[15px] font-semibold no-underline transition-colors duration-200 hover:text-blue-600 flex items-center justify-between">
                            {drop.name}
                            {drop.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/child:rotate-0 transition-transform" />}
                          </Link>
                          {drop.children && (
                            <ul className="absolute left-[100%] top-0 ml-0 bg-white/95 backdrop-blur-md min-w-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-t-[3px] border-blue-600 py-4 opacity-0 invisible translate-x-3 group-hover/child:opacity-100 group-hover/child:visible group-hover/child:translate-x-0 transition-all duration-300 z-50 list-none m-0 p-0 rounded-r-xl">
                              {drop.children.map((subitem: any) => (
                                <li key={subitem.name} className="group/grandchild relative">
                                  <Link to={subitem.link} className="block px-6 py-2.5 text-[#4b5563] text-[14px] font-medium no-underline transition-colors duration-200 hover:text-blue-600 flex items-center justify-between">
                                    {subitem.name}
                                    {subitem.children && <ChevronDown size={14} className="ml-2 -rotate-90 group-hover/grandchild:rotate-0 transition-transform" />}
                                  </Link>
                                  {subitem.children && (
                                    <ul className="absolute left-[100%] top-0 ml-0 bg-white/95 backdrop-blur-md min-w-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-t-[3px] border-blue-600 py-4 opacity-0 invisible translate-x-3 group-hover/grandchild:opacity-100 group-hover/grandchild:visible group-hover/grandchild:translate-x-0 transition-all duration-300 z-50 list-none m-0 p-0 rounded-r-xl">
                                      {subitem.children.map((leaf: any) => (
                                        <li key={leaf.name}>
                                          <Link to={leaf.link} className="block px-6 py-2 text-[#4b5563] text-[14px] font-medium no-underline transition-colors duration-200 hover:text-blue-600">{leaf.name}</Link>
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

          <div className="flex-1 flex items-center justify-end gap-6 text-slate-600 h-full">
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://www.facebook.com/people/CHN-Technologies/100068692698660/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5"><FaFacebookF size={14} /></a>
              <a href="https://www.linkedin.com/company/chn-technologies/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5"><FaLinkedinIn size={14} /></a>
              <a href="https://x.com/chn_india70840" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5"><FaXTwitter size={14} /></a>
              <a href="https://www.instagram.com/chntech_india/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5"><FaInstagram size={14} /></a>
              <a href="https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:-translate-y-0.5"><FaYoutube size={14} /></a>
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
                {navItems.map((item: any) => {
                  const hasDropdown = item.dropdown || item.children;
                  const isExpanded = expandedMenu === item.name;
                  return (
                    <li key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link to={item.link} className="text-lg font-medium text-[#002e5b] hover:text-blue-600 no-underline transition-colors block py-2 flex-1" onClick={() => setIsMobileOpen(false)}>{item.name}</Link>
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
                                <Link to={drop.link} className="text-[15px] text-slate-600 hover:text-blue-600 no-underline block py-1 flex-1" onClick={() => setIsMobileOpen(false)}>{drop.name}</Link>
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
                                      <Link to={subitem.link} className="text-[13px] text-slate-500 hover:text-blue-600 no-underline block py-1" onClick={() => setIsMobileOpen(false)}>{subitem.name}</Link>
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

                {/* Mobile Socials */}
                <li className="mt-4 pt-6 border-t border-slate-100 h-full">
                  <div className="flex items-center gap-6 text-slate-600 h-full">
                    <a href="https://www.facebook.com/people/CHN-Technologies/100068692698660/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaFacebookF size={18} /></a>
                    <a href="https://www.linkedin.com/company/chn-technologies/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaLinkedinIn size={18} /></a>
                    <a href="https://x.com/chn_india70840" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaXTwitter size={18} /></a>
                    <a href="https://www.instagram.com/chntech_india/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaInstagram size={18} /></a>
                    <a href="https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all"><FaYoutube size={18} /></a>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default SiteNavbar;