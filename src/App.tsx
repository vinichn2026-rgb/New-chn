import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import WhatWeThink from "./pages/WhatWeThink";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Service page configs
const services = {
  network: { title: "Network Management", subtitle: "IT Infrastructure", description: "End-to-end network design, deployment, and management services ensuring reliable connectivity and optimal performance across your organisation.", features: ["Network architecture design and planning", "LAN/WAN setup and configuration", "Network monitoring and troubleshooting", "Performance optimisation", "Firewall and security configuration"] },
  enduser: { title: "End User Computing", subtitle: "IT Infrastructure", description: "Comprehensive end-user computing solutions that empower your workforce with reliable, secure, and efficient desktop environments.", features: ["Desktop and laptop provisioning", "Virtual desktop infrastructure (VDI)", "Device lifecycle management", "Help desk and support services", "Software deployment and updates"] },
  cybersecurity: { title: "Cyber Security", subtitle: "IT Infrastructure", description: "Proactive cybersecurity services to protect your organisation against evolving threats and ensure compliance with industry standards.", features: ["Security assessments and audits", "Threat detection and response", "Identity and access management", "Security awareness training", "Compliance and governance"] },
  server: { title: "Server Administration", subtitle: "IT Infrastructure", description: "Expert server administration services ensuring your infrastructure runs reliably, securely, and at peak performance.", features: ["Server setup and configuration", "OS patching and updates", "Performance monitoring", "Backup and disaster recovery", "Capacity planning"] },
  lancabling: { title: "LAN Cabling & Surveillance", subtitle: "IT Infrastructure", description: "Professional structured cabling and surveillance solutions for modern workplaces.", features: ["Structured cabling design", "Cat6/Cat6a installation", "CCTV and surveillance systems", "Access control systems", "Cable management and testing"] },
  webdesign: { title: "Web Design & Development", subtitle: "Software Solutions", description: "Custom web solutions designed to represent your brand and drive engagement.", features: ["Responsive web design", "Custom web application development", "CMS implementation", "E-commerce solutions", "UI/UX design"] },
  application: { title: "Application Development", subtitle: "Software Solutions", description: "Scalable application development tailored to your business workflows and requirements.", features: ["Custom application development", "Mobile app development", "API design and integration", "Legacy application modernisation", "Quality assurance and testing"] },
  dataanalytics: { title: "Data Analytics", subtitle: "Digital Solutions", description: "Data-driven insights and analytics capabilities to enhance visibility and operational efficiency.", features: ["Business intelligence dashboards", "Data warehousing", "Predictive analytics", "Report automation", "Data integration"] },
  automation: { title: "Automation", subtitle: "Digital Solutions", description: "Process automation solutions to improve efficiency, reduce errors, and free up valuable resources.", features: ["Robotic process automation (RPA)", "Workflow automation", "Document processing automation", "Integration automation", "Monitoring and alerts"] },
  workforce: { title: "Workforce Management", subtitle: "Consulting", description: "Build high-performing teams and reduce hiring overhead with our workforce consulting services.", features: ["Talent acquisition strategy", "Workforce planning", "Contract staffing", "HR process optimisation", "Employee engagement programs"] },
  payroll: { title: "Payroll & Compliance", subtitle: "Consulting", description: "Error-free payroll processing with expert support and structured compliance systems.", features: ["Payroll processing and management", "Tax compliance", "Statutory compliance", "Payroll audits", "Employee benefits administration"] },
  training: { title: "Training & Development", subtitle: "Consulting", description: "Custom learning programs aligned with your business goals and workforce development needs.", features: ["Corporate training programs", "Skill development workshops", "Leadership development", "Technical certifications", "Learning management systems"] },
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/whatwethink" element={<WhatWeThink />} />
          {Object.entries(services).map(([key, config]) => (
            <Route key={key} path={`/${key}`} element={<ServicePage {...config} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
