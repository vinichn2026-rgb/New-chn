export interface SubmenuContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  content: string;
}

export const submenuContent: Record<string, SubmenuContent> = {
  "software-development": {
    title: "Software Development",
    subtitle: "Technology | CHN India",
    description: "Custom software development solutions tailored to enterprise needs, with full lifecycle support including requirement analysis, design, development, QA and deployment.",
    features: [
      "Agile development delivery",
      "Cloud-native microservices architecture",
      "End-to-end security and compliance",
      "Scalable APIs and integration",
      "Ongoing maintenance and DevOps support"
    ],
    content: "We build robust, scalable applications from backend to frontend, with deep focus on performance, usability, and maintainability."
  },
  "application-development": {
    title: "Application Development",
    subtitle: "Technology | CHN India",
    description: "Modern application development that accelerates business operations with extensible solutions, API-first design, and seamless user experiences.",
    features: [
      "Full-stack development",
      "Mobile application platforms",
      "API and third-party integration",
      "CI/CD pipelines",
      "Quality assurance and testing"
    ],
    content: "Our team delivers project-based and support-based application services, ensuring a strong product-market fit and high-impact outcomes."
  },
  "data-analytics": {
    title: "Data Analytics",
    subtitle: "Digital Solutions | CHN India",
    description: "Data analytics and business intelligence services that provide actionable insight from enterprise data through dashboards, ML models, and reporting.",
    features: [
      "Data pipeline development",
      "Dashboard & visualization",
      "Predictive analytics",
      "Data governance and quality",
      "Advanced machine learning"
    ],
    content: "Turn raw data into strategic decision-making assets through end-to-end analytics services and data engineering best practices."
  },
  "technology": {
    title: "Technology",
    subtitle: "What We Do",
    description: "Comprehensive technology services that include software development, application development, data analytics, cloud solutions, and enterprise IT architecture.",
    features: [
      "Enterprise-grade software solutions",
      "Scalable cloud architecture",
      "Data intelligence and analytics",
      "Agile delivery model",
      "24/7 operational support"
    ],
    content: "CHN India delivers full-stack technology transformation programs that help companies increase agility while reducing cost and risk."
  },
  "what-we-think": {
    title: "What We Think",
    subtitle: "Strategic insights for future-ready enterprise transformation",
    description: "CHN India’s thought leadership for Technology, Consulting, and Resource Services—framing the next wave of innovation with practical, scalable, and security-first thinking.",
    features: [
      "Future-ready IT infrastructure strategy",
      "Business-driven software and digital innovation",
      "Resilient cybersecurity and risk management",
      "Operational excellence through consulting leadership",
      "Talent enablement and sustainable workforce planning"
    ],
    content: "Explore CHN’s perspective on delivering value through strategic IT, consulting, and resources. Our approach centers on innovation, trusted governance, and measurable business outcomes."
  },
  "it-support": {
    title: "IT Support",
    subtitle: "What We Do",
    description: "End-to-end IT support service delivery with hardware support, network management, and system maintenance ensuring high availability and productivity.",
    features: [
      "Proactive hardware support",
      "Network monitoring and optimisation",
      "System uptime and patch management",
      "Helpdesk and remote support",
      "Disaster recovery planning"
    ],
    content: "Our IT Support practice serves enterprises with a combination of on-site engineers and remote operations centers for rapid issue resolution."
  },
  "biometric": {
    title: "Biometric Solutions",
    subtitle: "What We Do",
    description: "Advanced biometric security systems and access control solutions for safe and user-friendly authentication across enterprises.",
    features: [
      "Fingerprint and face recognition",
      "Access management integration",
      "Scalable and secure deployments",
      "Compliance-ready data handling",
      "Real-time reporting and surveillance"
    ],
    content: "From physical security to identity assurance, CHN India's biometric solutions deliver modern security with minimal friction."
  },
  "network-management": {
    title: "NETWORK MANAGEMENT SERVICES",
    subtitle: "IT Infrastructure | CHN India",
    description: "CHN Technologies provides structured network management services that ensure stable connectivity, controlled access, and continuous performance across business environments. Our approach focuses on visibility, security, and proactive management rather than reactive fixes.",
    features: [
      "Network architecture design and planning",
      "LAN/WAN setup and configuration",
      "Network monitoring and troubleshooting",
      "Performance optimisation and capacity planning",
      "Firewall and security configuration",
      "24/7 network support and maintenance"
    ],
    content: "Reliable, secure, and high-performance networks built for uninterrupted business operations."
  }
};
