"use client";

import {
  SiGithub,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

interface ProjectsProps {
  project: Project;
}

const Projects = ({ project }: ProjectsProps) => {
  const {
    githubClientLink,
    githubServerLink,
    keyFeatures,
    liveLink,
    projectName,
    technologiesUsed,
    videoLink,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-stretch lg:gap-10 mb-16 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] justify-between rounded-3xl overflow-hidden group hover:border-brand-primary/30 transition-all duration-500"
    >
      <div className="lg:w-3/5 relative overflow-hidden bg-slate-50">
        <div className="h-full w-full">
          <iframe
            src={videoLink}
            title={projectName}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full min-h-[300px] lg:min-h-[450px] transition-transform duration-700 group-hover:scale-105"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center bg-white/40">
        <div className="relative z-10">
          <h4 className="text-3xl lg:text-5xl text-slate-900 font-black mb-6 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
            {projectName}
          </h4>

          <div className="space-y-8">
            <div>
              <p className="font-bold text-slate-500 mb-3 text-sm uppercase tracking-widest">
                Key Features
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                {keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                    <span className="group-hover:text-slate-900 transition-colors">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-slate-500 mb-3 text-sm uppercase tracking-widest">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {technologiesUsed.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100/80 text-brand-primary text-[11px] font-bold rounded-lg border border-slate-200 backdrop-blur-sm group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button
                  href={githubClientLink}
                  variant="outline"
                  size="md"
                  className="flex-1 border-slate-200 hover:border-brand-primary text-slate-700 hover:text-brand-primary transition-all"
                >
                  <span className="text-xl mr-2">
                    <SiGithub />
                  </span>{" "}
                  Client
                </Button>
                <Button
                  href={githubServerLink}
                  variant="outline"
                  size="md"
                  className="flex-1 border-slate-200 hover:border-brand-primary text-slate-700 hover:text-brand-primary transition-all"
                >
                  <span className="text-xl mr-2">
                    <SiGithub />
                  </span>{" "}
                  Server
                </Button>
              </div>
              <Button
                href={liveLink}
                variant="primary"
                size="lg"
                className="w-full shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5 transition-all"
              >
                Launch Application
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
