"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import wave1 from "@/assets/wave/wave1.png";
import wave2 from "@/assets/wave/wave2.png";
import Projects from "@/components/Home/Projects";

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
    <div className="bg-blue-500 min-h-screen relative bg-featured pb-40">
      <div className="absolute top-0 w-full">
        <Image
          src={wave1}
          alt="wave"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <h2 className="text-5xl font-extrabold tracking-wider text-white text-center pt-32 mb-16">
          All <span className="border-b-4 rounded pb-2">Projects</span>
        </h2>
        <div>
          {projects.map((project, i) => (
            <Projects key={i} project={project}></Projects>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Image
          src={wave2}
          alt="wave"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
