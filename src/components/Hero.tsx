import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-16">
      {/* Background Dot pattern overlay */}
      <div className="absolute inset-0 code-pattern pointer-events-none z-0"></div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-brand-primary-container/10 filter blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-brand-primary/10 filter blur-[80px] pointer-events-none z-0"></div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-8 flex flex-col items-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-brand-outline-variant bg-brand-surface-container/60 backdrop-blur-md shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgba(173,198,255,1)]"></span>
          <span className="font-mono text-xs text-brand-on-surface-variant tracking-wider uppercase font-medium">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-on-surface leading-[1.12] tracking-tighter"
        >
          Web Developer <br />
          <span className="bg-gradient-to-r from-brand-primary via-brand-primary-container to-blue-400 bg-clip-text text-transparent">
            Crafting Digital Experiences
          </span>
        </motion.h1>

        {/* Subtitle Translation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-brand-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Spesialis HTML, CSS, & JavaScript. Building clean, responsive, and highly performant web interfaces with a focus on technical precision and exceptional user experience.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none pt-4"
        >
          <button
            id="hero-view-projects"
            onClick={() => handleScrollTo("projects")}
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-brand-on-primary font-bold text-xs tracking-wider uppercase rounded-md hover:bg-brand-primary-container hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group cursor-pointer"
          >
            Lihat Proyek
            <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <button
            id="hero-contact-button"
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-outline-variant text-brand-on-surface font-bold text-xs tracking-wider uppercase rounded-md hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface-container/20 transition-all duration-300 cursor-pointer"
          >
            Mari Bekerja Sama
          </button>
        </motion.div>
      </div>

      {/* Bounce Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => handleScrollTo("projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer hover:opacity-100 transition-opacity z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-on-surface-variant mb-1 font-mono">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 text-brand-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
