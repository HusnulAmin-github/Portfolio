import { useState } from "react";
import { Search, ExternalLink, Code, Calendar, User, SlidersHorizontal, BookOpen, Layers } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import Modal from "./Modal";

export default function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("SEMUA");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["SEMUA", "WEB APPLICATION", "LANDING PAGE", "DEVELOPER TOOL"];

  // Filter and search logic
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === "SEMUA" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
      {/* Title Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-brand-primary mb-2">
            <Layers className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase font-semibold">Portofolio Saya</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-brand-on-surface mb-3 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-brand-primary rounded-full"></div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:max-w-xl">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-on-surface-variant/60 w-4.5 h-4.5" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Cari proyek atau teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-brand-surface-container-low border border-brand-outline-variant/50 hover:border-brand-outline-variant focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded-md text-sm text-brand-on-surface outline-none transition-all placeholder:text-brand-on-surface-variant/50"
            />
          </div>

          {/* Mobile Category Select */}
          <div className="sm:hidden relative">
            <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-on-surface-variant w-4 h-4" />
            <select
              id="projects-category-select-mobile"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm text-brand-on-surface rounded-md outline-none appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Category Filter Pills */}
          <div className="hidden sm:flex flex-wrap gap-1.5 bg-brand-surface-container-lowest/80 p-1 border border-brand-outline-variant/30 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-pill-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-md transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-primary text-brand-on-primary shadow-sm"
                    : "text-brand-on-surface-variant hover:text-brand-on-surface hover:bg-brand-surface-container-high/60"
                }`}
              >
                {cat === "SEMUA" ? "Semua" : cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout - Matching Bento Grid and Column Spans in HTML */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-12 py-16 text-center border border-dashed border-brand-outline-variant/30 bg-brand-surface-container-low/40 rounded-xl">
            <p className="text-brand-on-surface-variant mb-2">Tidak ada proyek yang sesuai dengan kriteria.</p>
            <button
              id="reset-projects-filter"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("SEMUA");
              }}
              className="text-xs font-semibold uppercase tracking-wider text-brand-primary hover:underline cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => {
            // Check matching grid configurations:
            // E-commerce Dashboard: md:col-span-8
            // Fintech Startup: md:col-span-4
            // API Documentation Generator: md:col-span-12
            let columnSpan = "md:col-span-12";
            if (project.id === "ecommerce-dashboard") columnSpan = "md:col-span-8";
            if (project.id === "fintech-startup") columnSpan = "md:col-span-4";

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className={`project-card group glass-panel rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between ${columnSpan} transition-all duration-300`}
              >
                {/* Visual Area */}
                <div className="relative">
                  {project.image ? (
                    <div className="h-48 md:h-56 bg-brand-surface-container-high relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-background/90 via-transparent to-transparent opacity-60"></div>
                    </div>
                  ) : (
                    // Beautiful grid dot pattern for Project 2 (Fintech)
                    <div className="h-48 bg-brand-surface-container-high relative overflow-hidden flex items-center justify-center border-b border-brand-outline-variant/20">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxZTI5M2IiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMzM0MTU1Ii8+PC9zdmc+')] opacity-60"></div>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                        <Code className="w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Category Pill Tag Overlay (for responsive view) */}
                  <span className="absolute top-4 left-4 z-15 bg-brand-background/85 backdrop-blur-md border border-brand-outline-variant/50 text-[10px] font-bold tracking-widest text-brand-primary uppercase px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Info Text Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-brand-on-surface group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-on-surface-variant leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags and CTA Links */}
                  <div className="mt-6 pt-4 border-t border-brand-outline-variant/20">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="tech-chip px-2.5 py-1 text-[11px] font-mono rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] text-brand-on-surface-variant font-mono self-center pl-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono tracking-wider uppercase text-brand-primary inline-flex items-center group-hover:underline">
                        Lihat Detail <BookOpen className="w-3.5 h-3.5 ml-1" />
                      </span>
                      <span className="text-brand-on-surface-variant group-hover:text-brand-primary p-1 rounded-full group-hover:bg-brand-surface-container-high transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Structured Portfolio Interactive Modal Detail Viewer */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || "Proyek Detail"}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Modal project image / SVG */}
            {selectedProject.image ? (
              <div className="h-56 md:h-72 w-full rounded-lg overflow-hidden bg-brand-surface-container-high relative border border-brand-outline-variant/30">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-44 w-full rounded-lg bg-brand-surface-container-high relative overflow-hidden flex items-center justify-center border border-brand-outline-variant/30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxZTI5M2IiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMzM0MTU1Ii8+PC9zdmc+')] opacity-60"></div>
                <Code className="w-10 h-10 text-brand-primary relative z-10 animate-bounce" />
              </div>
            )}

            {/* General Description */}
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded">
                {selectedProject.category}
              </span>
              <p className="text-brand-on-background text-[15px] leading-relaxed font-sans">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Side metadata grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-brand-surface-container border border-brand-outline-variant/20">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-brand-on-surface-variant font-semibold">Peran Saya</h4>
                  <p className="text-xs font-semibold text-brand-on-surface mt-0.5">{selectedProject.role || "Developer"}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-brand-on-surface-variant font-semibold">Waktu</h4>
                  <p className="text-xs font-semibold text-brand-on-surface mt-0.5">{selectedProject.timeline || "Selesai"}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Code className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-brand-on-surface-variant font-semibold">Kode</h4>
                  <p className="text-xs font-semibold text-brand-on-surface mt-0.5">Sandi Bersih</p>
                </div>
              </div>
            </div>

            {/* Technologies list */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-brand-on-surface-variant font-bold mb-2.5">Teknologi Terpakai:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-brand-surface-container-high border border-brand-outline-variant/30 text-xs text-brand-on-surface-variant rounded font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons in footer of modal */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-outline-variant/20">
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-visit-demo-${selectedProject.id}`}
                className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-brand-primary text-brand-on-primary font-bold text-xs uppercase tracking-wider rounded text-center hover:bg-brand-primary-container hover:text-white transition-all cursor-pointer"
              >
                Lihat Demo Langsung <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-visit-github-${selectedProject.id}`}
                className="inline-flex items-center justify-center px-4 py-3 bg-brand-surface-container-high border border-brand-outline-variant/60 text-brand-on-surface font-bold text-xs uppercase tracking-wider rounded text-center hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer"
              >
                Kunjungi GitHub Repo
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
