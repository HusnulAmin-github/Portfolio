/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-background text-brand-on-background selection:bg-brand-primary-container selection:text-white flex flex-col pt-16 overflow-x-hidden font-sans">
      {/* Background radial gradient wrapper for subtle depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/15 pointer-events-none z-0"></div>

      {/* Structured components */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Intro Hero with Dot grids */}
        <Hero />

        {/* Dynamic Filterable Projects List */}
        <ProjectsList />

        {/* Technical Competencies list */}
        <SkillsList />

        {/* Secure Message Delivery Center */}
        <ContactForm />
      </main>

      {/* Signature and interactive CV viewer */}
      <Footer />
    </div>
  );
}
