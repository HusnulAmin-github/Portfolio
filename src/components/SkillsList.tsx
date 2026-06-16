import React, { useState } from "react";
import { FileCode, Palette, Terminal, Atom, GitBranch, Cpu, Trophy, CheckCircle } from "lucide-react";
import { SKILLS_DATA } from "../data";
import { Skill } from "../types";

// Safety helper to map static string identifier to Lucide React icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode: FileCode,
  Brush: Palette,
  Codepen: Terminal,
  Atom: Atom,
  GitBranch: GitBranch
};

export default function SkillsList() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 bg-brand-surface-container-low border-y border-brand-outline-variant/20" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="mb-14 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-brand-primary justify-center">
            <Cpu className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="font-mono text-xs tracking-wider uppercase font-semibold">Tumpukan Teknologi</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-brand-on-surface tracking-tight">
            Technical Skills
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-on-surface-variant max-w-lg mx-auto">
            Core competencies and technologies. Click elements to examine domain proficiency details.
          </p>
          <div className="w-16 h-1 bg-brand-primary rounded-full mx-auto"></div>
        </div>

        {/* Skill Box grid system */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {SKILLS_DATA.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || FileCode;
            const isSelected = activeSkill?.id === skill.id;

            return (
              <button
                key={skill.id}
                id={`skill-card-trigger-${skill.id}`}
                onClick={() => setActiveSkill(isSelected ? null : skill)}
                className={`flex flex-col items-center p-6 bg-brand-surface-container border rounded-lg w-32 md:w-36 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-all duration-300 group cursor-pointer ${
                  isSelected
                    ? "border-brand-primary bg-brand-surface-container-high scale-105 shadow-md shadow-brand-primary/5"
                    : "border-brand-outline-variant/60 hover:border-brand-primary/60 hover:bg-brand-surface-container-high/45 hover:-translate-y-1"
                }`}
              >
                <div
                  className={`p-3 rounded-full mb-3.5 transition-colors ${
                    isSelected
                      ? "bg-brand-primary text-brand-on-primary"
                      : "bg-brand-surface-container-high text-brand-on-surface-variant group-hover:text-brand-primary group-hover:bg-brand-primary/10"
                  }`}
                >
                  <IconComponent className="w-8 h-8 transition-transform group-hover:scale-110 pointer-events-none" />
                </div>
                <span className="font-mono text-xs font-bold text-brand-on-surface text-center tracking-wide group-hover:text-brand-primary transition-colors pointer-events-none">
                  {skill.name}
                </span>

                {/* Level Tag percentage bar */}
                <span className="mt-1.5 font-mono text-[10px] text-brand-on-surface-variant/75 font-semibold pointer-events-none">
                  {skill.level}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Detail interactive summary panel */}
        {activeSkill && (
          <div className="mt-12 max-w-xl mx-auto p-6 rounded-xl border border-brand-primary/20 bg-brand-surface-container-high/35 backdrop-blur-md shadow-inner animate-fadeIn">
            <h3 className="font-mono text-sm uppercase tracking-widest text-brand-primary font-bold mb-1.5 inline-flex items-center gap-1.5">
              <Trophy className="w-4 h-4" /> Detail Kompetensi: {activeSkill.name}
            </h3>
            <div className="w-full bg-brand-surface-container-low h-2.5 rounded-full overflow-hidden border border-brand-outline-variant/20 mb-4">
              <div
                className="bg-gradient-to-r from-brand-primary to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${activeSkill.level}%` }}
              />
            </div>
            <p className="text-sm font-sans text-brand-on-surface-variant leading-relaxed">
              {activeSkill.description}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-brand-primary/80 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" /> Terverifikasi dalam Proyek Nyata
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
