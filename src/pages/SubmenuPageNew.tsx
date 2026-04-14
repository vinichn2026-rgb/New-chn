import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, Download, Phone } from "lucide-react";
import { SubmenuHero } from "@/components/HeroSection";
import { submenuContent } from "@/data/submenuContent";

const animateFade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const } })
};

// Navigation structure for breadcrumbs
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
            children: [
              { name: "Talent Acquisition", link: "/talent-acquisition" },
              { name: "Workforce Planning", link: "/workforce-planning" },
              { name: "Contract Staffing", link: "/contract-staffing" }
            ]
          },
          {
            name: "Payroll & Compliance",
            link: "/payroll",
            children: [
              { name: "Payroll Processing", link: "/payroll-processing" },
              { name: "Tax Compliance", link: "/tax-compliance" },
              { name: "Statutory Compliance", link: "/statutory-compliance" }
            ]
          },
          {
            name: "Training & Development",
            link: "/training",
            children: [
              { name: "Corporate Training", link: "/corporate-training" },
              { name: "Leadership Development", link: "/leadership-development" },
              { name: "Technical Certifications", link: "/technical-certifications" }
            ]
          }
        ]
      },
      {
        name: "Resources",
        link: "/resources",
        children: [
          { name: "About", link: "/about" },
          { name: "Careers", link: "/careers" },
          { name: "Blogs", link: "/blogs" }
        ]
      }
    ]
  }
];

// Function to generate breadcrumbs
const generateBreadcrumbs = (slug: string) => {
  const breadcrumbs = [{ name: "Home", link: "/" }];

  const findPath = (items: any[], targetSlug: string, path: string[] = []): string[] | null => {
    for (const item of items) {
      const currentPath = [...path, item.name];
      if (item.link === `/${targetSlug}`) {
        return currentPath;
      }
      if (item.children) {
        const childPath = findPath(item.children, targetSlug, currentPath);
        if (childPath) return childPath;
      }
    }
    return null;
  };

  const path = findPath(navItems, slug);
  if (path) {
    path.forEach(name => {
      breadcrumbs.push({ name, link: "#" }); // Links will be resolved later if needed
    });
  }

  return breadcrumbs;
};

const SubmenuPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? submenuContent[slug] : undefined;
  const [mdContent, setMdContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const breadcrumbs = slug ? generateBreadcrumbs(slug) : [{ name: "Home", link: "/" }];

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setMdContent("");
    fetch(`/content/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Content not found");
        return res.text();
      })
      .then((text) => setMdContent(text))
      .catch(() => setMdContent(""))
      .finally(() => setLoading(false));
  }, [slug]);

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="NET_Hero_H1">Page not found</h2>
        <p className="mt-4 text-slate-600">The requested section does not exist. Please choose a valid service.</p>
        <Link to="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">Return to homepage</Link>
      </div>
    );
  }

  const isThoughtLeadership = slug === "what-we-think";

  // Related services - this could be enhanced to be dynamic based on category
  const relatedServices = [
    "IT Infrastructure",
    "Software Solutions",
    "Digital Solutions",
    "Workforce Management",
    "Payroll & Compliance"
  ];

  return (
    <div>
      {/* Hero Banner */}
      <SubmenuHero title={page.title} breadcrumbs={breadcrumbs} />

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {isThoughtLeadership && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} animate="visible" variants={animateFade} custom={0} className="mb-12">
                  <h2 className="NET_Hero_H1 text-center">CHN's Point of View</h2>
                  <p className="text-center text-slate-600 max-w-3xl mx-auto mb-10">A unified outlook across Technology, Consulting and Resources to build resilient, secure, and growth-ready enterprises.</p>
                </motion.div>
              )}

              {/* Description */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={0}
                className="text-lg text-[#002e5b] leading-relaxed mb-10"
              >
                {page.description}
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={1}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {page.features.map((feature, index) => (
                    <div key={feature} className="flex gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-[#002e5b] mt-1 flex-shrink-0" />
                      <span className="text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={2}
              >
                {loading ? (
                  <p className="text-slate-600">Loading content...</p>
                ) : (
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    {(mdContent || page.content).split("\n\n").map((block, idx) => {
                      const trimmed = block.trim();
                      if (trimmed.startsWith("# ")) {
                        return <h2 key={idx} className="text-2xl font-bold text-foreground">{trimmed.replace(/^#\s+/, "")}</h2>;
                      }
                      if (trimmed.startsWith("## ")) {
                        return <h3 key={idx} className="text-xl font-semibold text-foreground">{trimmed.replace(/^##\s+/, "")}</h3>;
                      }
                      if (trimmed.match(/^[-*]\s+/)) {
                        const lines = trimmed.split("\n").map((line) => line.replace(/^[-*]\s+/, ""));
                        return (
                          <ul key={idx} className="list-disc list-inside">
                            {lines.map((line, li) => <li key={li}>{line}</li>)}
                          </ul>
                        );
                      }
                      return <p key={idx}>{trimmed}</p>;
                    })}
                  </div>
                )}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={3}
                className="mt-12 text-center"
              >
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#002e5b] text-white font-semibold rounded-lg hover:bg-[#002e5b]/90 transition-all">
                  Discuss your requirements <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Services */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={0}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm mb-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {relatedServices.map((service) => (
                    <li key={service}>
                      <Link to="#" className="text-[#002e5b] hover:text-[#002e5b]/80 transition-colors text-sm">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Download Brochure */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={1}
                className="bg-[#002e5b] p-6 rounded-lg text-white mb-6"
              >
                <h3 className="text-lg font-semibold mb-4">Download Brochure</h3>
                <p className="text-white/80 text-sm mb-4">Get detailed information about our services in PDF format.</p>
                <button className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-[#002e5b] font-semibold rounded-lg hover:bg-white/90 transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </motion.div>

              {/* Need Help */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate="visible"
                variants={animateFade}
                custom={2}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-4">Contact our experts for personalized consultation.</p>
                <div className="flex items-center text-[#002e5b] font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-9384817323
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuPage;