"use client";

import {
  SiGithub,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
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
    <div className="flex flex-col lg:flex-row items-center lg:gap-10 mb-10 bg-white/50 backdrop-blur-sm border border-slate-100 shadow-xl justify-between rounded-xl px-5 py-8">
      <div className="lg:ml-3 z-20 top-1/3 border-4 border-white shadow-2xl rounded-xl">
        <iframe
          width="700"
          height="393.75"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl hover:scale-105 transition-transform duration-500 w-[400px] lg:w-[700px] "
        ></iframe>
      </div>
      <div>
        <div className="w-[400px] lg:w-[600px] bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 px-5 py-8 shadow-inner">
          <h4 className="text-center text-4xl text-slate-900 font-black mb-6">
            {projectName}
          </h4>
          <div className="space-y-8">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-slate-800 mb-2">Key Features</p>
                <ul className="ml-4 text-sm text-slate-600 space-y-1">
                  {keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 text-3xl text-brand-primary bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                <SiReact />
                <SiTailwindcss />
                <SiExpress />
                <SiMongodb />
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-2">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {technologiesUsed.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100"
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
                  className="flex-1"
                >
                  <span className="text-xl">
                    <SiGithub />
                  </span>{" "}
                  Client Side
                </Button>
                <Button
                  href={githubServerLink}
                  variant="outline"
                  size="md"
                  className="flex-1"
                >
                  <span className="text-xl">
                    <SiGithub />
                  </span>{" "}
                  Server Side
                </Button>
              </div>
              <Button
                href={liveLink}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Live Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
