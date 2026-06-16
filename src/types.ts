export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image?: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  role?: string;
  timeline?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // percentage eg 90
  iconName: string; // lucide icon identifier
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}
