import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const heroFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const HeroSection = ({ title, subtitle, ctaText = "Learn More", ctaLink = "/" }: HeroSectionProps) => (
  <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div initial="hidden" animate="visible" variants={heroFadeUp} className="inline-block px-4 py-1.5 bg-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-white/80 mb-4 border border-white/20">
        {subtitle}
      </motion.div>
      <motion.h1 initial="hidden" animate="visible" variants={heroFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {title}
      </motion.h1>
      <motion.div initial="hidden" animate="visible" variants={heroFadeUp} className="mt-6">
        <Link to={ctaLink} className="inline-flex items-center justify-center px-8 py-3.5 bg-white/20 border border-white/30 text-white font-semibold rounded-sm hover:bg-white/30 transition-all">
          {ctaText}
        </Link>
      </motion.div>
    </div>
  </section>
);


export const SubmenuHero = ({ title, breadcrumbs }: { title: string; breadcrumbs: { name: string; link: string }[] }) => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
    <div className="container mx-auto px-6 relative z-10">
      <nav className="flex mb-8 overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-white/60 whitespace-nowrap">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.name} className="flex items-center">
              {index > 0 && <span className="mx-2 text-white/30">/</span>}
              <Link
                to={crumb.link}
                className={`hover:text-white transition-colors ${index === breadcrumbs.length - 1 ? "text-white font-semibold" : ""}`}
              >
                {crumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
      >
        {title}
      </motion.h1>
    </div>
  </section>
);

export default HeroSection;
