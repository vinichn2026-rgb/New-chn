import techServices from "@/assets/images/tech-services.jpg";
import softwareSolutions from "@/assets/images/casestudy-cloud.jpg";
import digitalSolutions from "@/assets/images/analytics-viz.jpg";
import consultingAdvisory from "@/assets/images/service-consulting.jpg";
import cloudTransformation from "@/assets/images/cloud-transformation.jpg";
import cyberSecurity from "@/assets/images/cyber-security.jpg";

export const CAPABILITIES_DATA = [
  { id: 1, title: "Technology services", image: techServices, desc: "End-to-end IT management, networks, and security ensuring operational continuity.", date: "29 Mar 2026" },
  { id: 2, title: "Software solutions", image: softwareSolutions, desc: "Custom scalable software for workflows, integration, and long-term usability.", date: "29 Mar 2026" },
  { id: 3, title: "Digital solutions", image: digitalSolutions, desc: "Data-driven capabilities to enhance visibility and automate processes.", date: "29 Mar 2026" },
  { id: 4, title: "Consulting & advisory", image: consultingAdvisory, desc: "Workforce management and payroll compliance aligned with business goals.", date: "29 Mar 2026" },
  { id: 5, title: "Cloud transformation", image: cloudTransformation, desc: "Strategy and migration services for hybrid and multi-cloud environments.", date: "29 Mar 2026" },
  { id: 6, title: "Cyber security", image: cyberSecurity, desc: "Advanced threat detection, incident response, and continuous compliance monitoring.", date: "29 Mar 2026" },
];

export const INFINITE_LOOP_DATA = [...CAPABILITIES_DATA, ...CAPABILITIES_DATA, ...CAPABILITIES_DATA];

