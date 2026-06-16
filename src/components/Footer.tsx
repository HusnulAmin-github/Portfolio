import { useState } from "react";
import { Download, FileText, Briefcase, GraduationCap, Award, Compass, Heart, ExternalLink } from "lucide-react";
import Modal from "./Modal";

export default function Footer() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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

  const handleDownloadCVFile = () => {
    // Elegant dynamic download trigger
    const cvContent = `CURRICULUM VITAE - WEB DEVELOPER
==================================

Nama: Developer Portfolio
Spesialisasi: HTML, CSS, JavaScript, React.js

PROFIL ringkas:
Building clean, responsive, and highly performant web interfaces with a focus on technical precision and exceptional user experience.

KEMAMPUAN TEKNIS:
- HTML5 & CSS3 (Tailwind CSS, PostCSS)
- JavaScript ES6+ & TypeScript
- React.js (Framer Motion, React Hooks)
- Git & Git Workflow

REKAP PROYEK:
1. E-commerce Dashboard (Web Application)
2. Fintech Startup Landing Page (Landing Page)
3. API Documentation Generator (Developer Tool)

KONTAK:
Email: hello@example.com
Website: ${window.location.origin}
`;
    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_Web_Developer_Portfolio.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-brand-surface-container-low border-t border-brand-outline-variant/40 flex flex-col items-center gap-6 py-12 px-6 w-full mt-auto">
      <button
        id="footer-logo-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-extrabold text-2xl text-brand-on-surface tracking-tighter hover:text-brand-primary transition-colors cursor-pointer"
      >
        PORTFOLIO
      </button>

      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand-on-surface-variant text-xs font-mono font-bold uppercase tracking-wider hover:text-brand-primary transition-colors inline-flex items-center gap-1"
        >
          GitHub <ExternalLink className="w-3 h-3 text-brand-primary" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand-on-surface-variant text-xs font-mono font-bold uppercase tracking-wider hover:text-brand-primary transition-colors inline-flex items-center gap-1"
        >
          LinkedIn <ExternalLink className="w-3 h-3 text-brand-primary" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand-on-surface-variant text-xs font-mono font-bold uppercase tracking-wider hover:text-brand-primary transition-colors inline-flex items-center gap-1"
        >
          Instagram <ExternalLink className="w-3 h-3 text-brand-primary" />
        </a>
        <button
          id="footer-download-cv-trigger"
          onClick={() => setIsCVModalOpen(true)}
          className="text-brand-on-surface-variant text-xs font-mono font-bold uppercase tracking-wider hover:text-brand-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
        >
          Download CV <Download className="w-3.5 h-3.5 text-brand-primary" />
        </button>
      </nav>

      {/* Mini signature */}
      <div className="flex items-center gap-1 text-[11px] font-mono text-brand-on-surface-variant/50">
        <span>Made with</span>
        <Heart className="w-3 h-3 text-brand-primary fill-brand-primary animate-pulse" />
        <span>&amp; Precision. © 2026 Developer Portfolio. All Rights Reserved.</span>
      </div>

      {/* Interactive CV Modal View */}
      <Modal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        title="Curriculum Vitae (CV) - Pratinjau"
      >
        <div className="space-y-6 text-left">
          {/* Header Card */}
          <div className="p-5 rounded-lg bg-brand-surface-container border border-brand-outline-variant/30 flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-xl text-brand-on-surface">Web Developer</h3>
              <p className="text-xs font-mono text-brand-primary font-bold">SPESIALIS INTERFAS WEB PRESTASI TINGGI</p>
              <p className="text-xs text-brand-on-surface-variant">Pekanbaru, Riau | husnulamin8.work@gmail.com</p>
            </div>
            <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-full">
              <FileText className="w-8 h-8" />
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-primary font-bold flex items-center gap-1.5 border-b border-brand-outline-variant/20 pb-1.5">
              <Briefcase className="w-4 h-4 text-brand-primary" /> Pengalaman Kerja
            </h4>
            <div className="space-y-3">
              <div className="relative pl-4 border-l border-brand-primary/30">
                <span className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-brand-primary"></span>
                <div className="flex justify-between items-start">
                  <h5 className="font-semibold text-brand-on-surface text-sm">Lead Front-end Developer</h5>
                  <span className="text-[10px] font-mono text-brand-on-surface-variant">2023 - Present</span>
                </div>
                <p className="text-xs text-brand-on-surface-variant">Fingo Financial Services</p>
              </div>
              <div className="relative pl-4 border-l border-brand-primary/30">
                <span className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-brand-primary"></span>
                <div className="flex justify-between items-start">
                  <h5 className="font-semibold text-brand-on-surface text-sm">Junior UI/UX Developer</h5>
                  <span className="text-[10px] font-mono text-brand-on-surface-variant">2021 - 2023</span>
                </div>
                <p className="text-xs text-brand-on-surface-variant">TechInno Nusantara Agency</p>
              </div>
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-primary font-bold flex items-center gap-1.5 border-b border-brand-outline-variant/20 pb-1.5">
              <GraduationCap className="w-4 h-4 text-brand-primary" /> Pendidikan Terakhir
            </h4>
            <div className="relative pl-4 border-l border-brand-primary/30">
              <span className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-brand-primary"></span>
              <div className="flex justify-between items-start">
                <h5 className="font-semibold text-brand-on-surface text-sm">Sarjana Teknik (S.T)</h5>
                <span className="text-[10px] font-mono text-brand-on-surface-variant">Graduated 2025</span>
              </div>
              <p className="text-xs text-brand-on-surface-variant">Universitas Islam Riau - Teknik Informatika</p>
            </div>
          </div>

          {/* Certifications and awards */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-primary font-bold flex items-center gap-1.5 border-b border-brand-outline-variant/20 pb-1.5">
              <Award className="w-4 h-4 text-brand-primary" /> Sertifikasi Kompetensi
            </h4>
            <ul className="list-disc pl-4 text-xs text-brand-on-surface-variant space-y-1.5">
              <li>Google IT Support Professional Certificate</li>
              <li>Meta Front-End Developer Specialization</li>
              <li>React Advanced Architecture - Licensed Trainer</li>
            </ul>
          </div>

          {/* Download button */}
          <div className="pt-4 border-t border-brand-outline-variant/20 flex gap-3">
            <button
              id="cv-modal-download-file-button"
              onClick={handleDownloadCVFile}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-brand-primary text-brand-on-primary font-bold text-xs uppercase tracking-wider rounded text-center hover:bg-brand-primary-container hover:text-white transition-all cursor-pointer"
            >
              Unduh Versi Text File (.txt) <Download className="w-4 h-4 ml-1.5" />
            </button>
            <button
              id="cv-modal-dismiss-button"
              onClick={() => setIsCVModalOpen(false)}
              className="px-4 py-3 bg-brand-surface-container-high border border-brand-outline-variant/60 text-brand-on-surface font-bold text-xs uppercase tracking-wider rounded hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </footer>
  );
}
