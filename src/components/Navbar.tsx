import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 64; // Navbar height is 16 = 64px
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 h-16 flex justify-between items-center px-6 md:px-12 border-b transition-all duration-300 ${
        scrolled
          ? "bg-brand-surface-container-lowest/85 backdrop-blur-xl border-brand-outline-variant/50 shadow-md"
          : "bg-brand-background/40 backdrop-blur-md border-brand-outline-variant/15"
      }`}
    >
      {/* Brand Logo and Mobile Menu toggle */}
      <div className="flex items-center gap-4">
        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-brand-primary hover:bg-brand-surface-container-high rounded transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <button
          id="logo-home-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-extrabold text-2xl text-brand-primary tracking-tighter hover:opacity-85 transition-opacity"
        >
          PORTFOLIO
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        <button
          id="nav-projects-desktop"
          onClick={() => handleScrollTo("projects")}
          className="text-brand-on-surface-variant font-medium text-sm hover:text-brand-primary transition-colors cursor-pointer"
        >
          Projects
        </button>
        <button
          id="nav-skills-desktop"
          onClick={() => handleScrollTo("skills")}
          className="text-brand-on-surface-variant font-medium text-sm hover:text-brand-primary transition-colors cursor-pointer"
        >
          Skills
        </button>
        <button
          id="nav-contact-desktop"
          onClick={() => handleScrollTo("contact")}
          className="text-brand-on-surface-variant font-medium text-sm hover:text-brand-primary transition-colors cursor-pointer"
        >
          Contact
        </button>
        <button
          id="nav-cta-desktop"
          onClick={() => handleScrollTo("contact")}
          className="px-4 py-2 border border-brand-primary/30 rounded text-brand-primary font-semibold text-xs tracking-wider uppercase hover:bg-brand-primary hover:text-brand-on-primary transition-all duration-200 cursor-pointer"
        >
          Hire Me
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-brand-surface-container border-b border-brand-outline-variant shadow-lg md:hidden flex flex-col p-4 space-y-4 animate-fadeIn">
          <button
            id="nav-projects-mobile"
            onClick={() => handleScrollTo("projects")}
            className="text-left py-2 px-4 text-brand-on-surface hover:text-brand-primary hover:bg-brand-surface-container-high rounded transition-colors"
          >
            Projects
          </button>
          <button
            id="nav-skills-mobile"
            onClick={() => handleScrollTo("skills")}
            className="text-left py-2 px-4 text-brand-on-surface hover:text-brand-primary hover:bg-brand-surface-container-high rounded transition-colors"
          >
            Skills
          </button>
          <button
            id="nav-contact-mobile"
            onClick={() => handleScrollTo("contact")}
            className="text-left py-2 px-4 text-brand-on-surface hover:text-brand-primary hover:bg-brand-surface-container-high rounded transition-colors"
          >
            Contact
          </button>
          <button
            id="nav-cta-mobile"
            onClick={() => handleScrollTo("contact")}
            className="w-full py-2.5 text-center bg-brand-primary text-brand-on-primary font-semibold text-sm tracking-wide rounded hover:bg-brand-primary-container hover:text-white transition-colors"
          >
            Hire Me (Mari Bekerja Sama)
          </button>
        </div>
      )}
    </header>
  );
}
