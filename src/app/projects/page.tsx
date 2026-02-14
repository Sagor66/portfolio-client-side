"use client";

import { useEffect, useState } from "react";
import Projects from "@/components/Home/Projects";
import BinaryBackground from "@/components/Shared/BinaryBackground";
import { motion } from "framer-motion";

interface Project {
  githubClientLink: string;
  githubServerLink: string;
  keyFeatures: string[];
  liveLink: string;
  projectName: string;
  technologiesUsed: string[];
  videoLink: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden pb-40">
      {/* Coder Vibe Background - High Visibility */}
      <BinaryBackground />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <header className="pt-32 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-brand-primary uppercase bg-brand-primary/10 rounded-full border border-brand-primary/20 backdrop-blur-sm"
          >
            Engineering Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6"
          >
            Built with <span className="text-brand-primary">Precision</span>
            <span className="text-brand-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A curated showcase of complex systems, optimized architectures, and
            scalable web applications built for the future.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project, i) => (
            <Projects key={i} project={project}></Projects>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
