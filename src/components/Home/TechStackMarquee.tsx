"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazonaws,
  SiVercel,
  SiFigma,
  SiAdonisjs,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "AdonisJS", icon: SiAdonisjs, color: "#5A45FF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const TechStackMarquee = () => {
  // Duplicate the array for seamless loop
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-8 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-base">
            Technologies I use to build modern web applications
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

        {/* Scrolling Container */}
        <motion.div
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-6 items-center py-2"
        >
          {duplicatedTechStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all min-w-fit shadow-lg hover:shadow-2xl"
              >
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}20, transparent 70%)`,
                  }}
                ></div>

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    className="text-2xl transition-transform group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Name */}
                <span className="relative z-10 text-sm font-bold text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
    </div>
  );
};

export default TechStackMarquee;
