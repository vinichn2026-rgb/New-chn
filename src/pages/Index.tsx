import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Server, Code, BarChart3, Users, Phone, Mail, MapPin } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import workspace from "@/assets/workspace.jpg";
import servers from "@/assets/servers.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "IT Infrastructure",
    desc: "Network management, cybersecurity, server administration, and end-user computing — all managed under one roof.",
    link: "/network",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Software Solutions",
    desc: "Custom web and application development tailored to your workflows and business requirements.",
    link: "/webdesign",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Digital Solutions",
    desc: "Data analytics and process automation to improve visibility and operational efficiency.",
    link: "/dataanalytics",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consulting",
    desc: "Workforce management, payroll compliance, and training programs aligned with your goals.",
    link: "/workforce",
  },
];

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Years Experience" },
];

const Index = () => {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={0}
                className="text-sm font-semibold text-primary tracking-wide uppercase mb-4"
              >
                Technology & Consulting Services
              </motion.p>

              <motion.h1
                initial="hidden" animate="visible" variants={fadeUp} custom={1}
                className="text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight"
              >
                We help businesses{" "}
                <span className="text-primary">run technology</span>{" "}
                with structure and clarity.
              </motion.h1>

              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={2}
                className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                CHN Technologies delivers integrated IT, software, and consulting
                services — so you can focus on growing your business, not managing systems.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" variants={fadeUp} custom={3}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors"
                >
                  About Us
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <img
                src={heroTeam}
                alt="CHN Technologies team collaborating in office"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/10]"
                width={1920} height={1080}
              />
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-xl shadow-md border border-border px-5 py-4"
              >
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground mt-0.5">System Uptime</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY (stats bar) ── */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              End-to-end services that keep your business running.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <Link
                  to={svc.link}
                  className="group flex gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {svc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHN (image + text) ── */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={servers}
                alt="Modern server infrastructure"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy" width={800} height={600}
              />
            </motion.div>

            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Why CHN Technologies</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                A partner that understands your operations.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We don't just deploy solutions and walk away. Our approach is structured
                around long-term partnership — continuous support, clear accountability,
                and outcomes tied to your business goals.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Structured delivery with clear ownership",
                  "Solutions aligned with your business constraints",
                  "Ongoing support beyond implementation",
                  "Focus on stability, security, and scalability",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp} custom={i}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:underline"
              >
                More about our approach <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                A clear path from assessment to results.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
                Every engagement follows a structured approach — so there are no surprises,
                just measurable progress.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { step: "01", title: "Assess", desc: "Understand your current systems, challenges, and priorities." },
                  { step: "02", title: "Design", desc: "Build a realistic roadmap aligned with your business goals." },
                  { step: "03", title: "Implement", desc: "Execute with control — phased delivery, minimal disruption." },
                  { step: "04", title: "Support", desc: "Ongoing monitoring, optimisation, and improvement." },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp} custom={i}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={workspace}
                alt="Clean workspace with analytics dashboard"
                className="w-full rounded-2xl object-cover aspect-square"
                loading="lazy" width={800} height={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Let's discuss how CHN Technologies can support your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-bold rounded-md hover:bg-primary-foreground/90 transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
