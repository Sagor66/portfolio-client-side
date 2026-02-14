"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Button from "../Shared/Button";

interface Project {
  githubClientLink: string;
  githubServerLink: string;
  keyFeatures: string[];
  liveLink: string;
  projectName: string;
  technologiesUsed: string[];
  videoLink: string;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 2))); // Only take top 2
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide text-brand-primary uppercase bg-blue-50 rounded-full">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Featured <span className="text-brand-primary">Projects</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all group"
          >
            View All Projects{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all group border-b-2 border-brand-primary/20 pb-0.5 hover:border-brand-primary"
          >
            View All Projects{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Video/Image Side */}
      <div className="w-full lg:w-3/5 group">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-brand-primary/20">
          <iframe
            src={project.videoLink}
            title={project.projectName}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Overlay for interaction hint */}
          <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors pointer-events-none"></div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5">
        <motion.h3
          className="text-3xl font-bold text-slate-900 mb-4 cursor-default"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.projectName}
        </motion.h3>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologiesUsed.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-full border border-slate-200 shadow-sm hover:border-brand-primary hover:text-brand-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-3 mb-8">
          {project.keyFeatures.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-slate-600 text-sm group/item"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button href={project.liveLink} variant="primary" size="md">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </Button>

          <div className="flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
            <Button
              href={project.githubClientLink}
              variant="ghost"
              size="sm"
              className="px-4 py-2 text-slate-600 font-semibold hover:text-brand-primary"
            >
              <Github className="w-4 h-4" /> Client
            </Button>
            <div className="w-px bg-slate-200 my-1"></div>
            <Button
              href={project.githubServerLink}
              variant="ghost"
              size="sm"
              className="px-4 py-2 text-slate-600 font-semibold hover:text-brand-primary"
            >
              <Github className="w-4 h-4" /> Server
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
