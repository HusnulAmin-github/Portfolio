import { Project, Skill, Testimonial } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    category: "WEB APPLICATION",
    description: "A comprehensive analytics dashboard for e-commerce platforms. Features real-time sales tracking, inventory management, and customizable reporting widgets.",
    longDescription: "A fully-fledged administrative dashboard for e-commerce store operations. It parses streaming purchase logs and displays key performance indicators such as Gross Merchandise Value (GMV), conversion rates, and shopping cart abandonment metrics in visual panels. Highly modularized so panels can be dragged, hidden, or customized according to the user's focus.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5NANra4F60RBv1b0Tn5lX-GzHZJfDwvhrZKv4xJ4vIBbq3J82xXDlm54JZk6739D2CE4RCmWDVFowozwJIEpcTT2ldqGPkE8QmplYoF943qP6dqM78juD2hIUxMSeCYK4_WR-l3-7GfxkmZZZe-BDqIfEv3wzpK85txLIHVJn6RfZBuo4V-thb8_zEQS2q1dzmKKuKoUxiAkZWSz0yZGV8seBduVlHN60pBJF-91K1hEd6K3if49_cBbEXPhwMWaT3Ydf25IXdh3T",
    technologies: ["HTML", "Tailwind CSS", "Vanilla JS", "Recharts", "JSON Data Store"],
    demoUrl: "#",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    role: "Lead Front-end Developer",
    timeline: "Desember 2023 - Februari 2024 (3 Bulan)"
  },
  {
    id: "fintech-startup",
    title: "Fintech Startup",
    category: "LANDING PAGE",
    description: "High-conversion landing page with smooth scroll animations.",
    longDescription: "A premium, performant single-page landing website designed for an emerging financial technology startup. Features ultra-smooth parallax scroll triggers, dynamic currency/yield calculators, user onboarding forms, and high-fidelity mockups. Focuses on strong typographic hierarchy, high trust levels, responsive fluidity, and flawless loading transitions.",
    image: "", // Empty to trigger the beautiful SVG dot pattern from screenshot or custom visual
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Lucide React"],
    demoUrl: "#",
    githubUrl: "https://github.com/example/fintech-landing",
    role: "UI/UX Developer",
    timeline: "Oktober 2023 - November 2023 (1 Bulnan)"
  },
  {
    id: "api-doc-generator",
    title: "API Documentation Generator",
    category: "DEVELOPER TOOL",
    description: "A CLI tool that parses codebase comments to generate beautiful, static HTML documentation sites automatically. Focused on clean typography and readability.",
    longDescription: "An developer utility written in Node.js that traverses codebase folders, identifies standard docstrings (JSDoc, TsDoc, PyDoc), and automatically compiles them into elegant, search-indexed, search-optimized single-page HTML help files. Supports custom CSS styles, responsive sidebars, dark/light theme switching, and automated deployment scripts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVd8N3hBmunh5-qw1-VZNsawkm8aKNAJpPapnsy0I0yG7JN2q30DSnobOA5ekeTbSLhoHAvBbIyNnq29UvGQBteFZRDr58jIO1s-6zKZee3AiKMEQMdS5AFkZ2MZ1QZ6P_-kCnsP-uSos4pbGvmwQs-N5nklROUkovCcKpLL87iX_O_YNDopSeEeGFlGCXH4AMcL7hG7MNNGXEXt128wvVKvVTgz11k_PvKuAx6t0FcGkj5CRQbEOqdtR6kcnivTyvzfI27Bl32LuW",
    technologies: ["Node.js", "Markdown", "TypeScript", "HTML5", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/example/api-doc-gen",
    role: "Solo Creator",
    timeline: "Agustus 2023 (2 Minggu)"
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend Core",
    level: 95,
    iconName: "FileCode",
    description: "Semantic layouts, SEO friendly architecture, accessibility compliance (WCAG), canvas manipulation."
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend Core",
    level: 92,
    iconName: "Brush",
    description: "Tailwind CSS layouts, flexbox, CSS grid, custom variables, transition triggers, structural layout flow."
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    level: 90,
    iconName: "Codepen",
    description: "ES6+ standards, closures, asynchronous event handling, DOM manipulation and dynamic browser APIs."
  },
  {
    id: "react",
    name: "React",
    category: "Frameworks & UI",
    level: 88,
    iconName: "Atom",
    description: "Functional structures, custom hook architecture, performance profiling, state consolidation, and ecosystem routing."
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    level: 85,
    iconName: "GitBranch",
    description: "Collaborative trunk workflow, conflict resolution, rebasing operations, hooks, and semantic commits."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Budi Santoso",
    role: "CTO",
    company: "TechInno Nusantara",
    text: "Sangat profesional dan memiliki pemahaman mendalam tentang tata letak modern. Hasil pekerjaannya bersih, mudah dipelihara, dan sangat cepat dimuat di segala jenis perangkat.",
    avatarUrl: ""
  },
  {
    id: "testimonial-2",
    name: "Siti Rahma",
    role: "Product Owner",
    company: "FinGo Financial",
    text: "Kolaborasi yang luar biasa. Desain yang dihasilkan persis seperti yang direncanakan, bahkan visual mikro-animasinya jauh melebihi ekspektasi kami! Sangat direkomendasikan.",
    avatarUrl: ""
  }
];
