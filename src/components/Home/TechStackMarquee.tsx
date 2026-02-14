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
  // Split tech stack into two rows for variety
  const row1 = techStack.slice(0, Math.ceil(techStack.length / 2));
  const row2 = techStack.slice(Math.ceil(techStack.length / 2));

  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <div className="relative w-full bg-[#030711] py-24 overflow-hidden">
      {/* Smoother Blending Masks */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Secondary Softening Layer */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-30 pointer-events-none" />

      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Mastered <span className="text-brand-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            A comprehensive set of tools and technologies I've mastered to build
            high-performance applications.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#030711] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#030711] to-transparent z-10"></div>

        {/* Row 1 - Moving Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{
              x: [0, -100 * row1.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-8 items-center py-4 px-4"
          >
            {duplicatedRow1.map((tech, index) => (
              <TechBadge key={`${tech.name}-row1-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{
              x: [-100 * row2.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex gap-8 items-center py-4 px-4"
          >
            {duplicatedRow2.map((tech, index) => (
              <TechBadge key={`${tech.name}-row2-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TechBadge = ({ tech }: { tech: any }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex items-center gap-4 px-8 py-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/50 hover:border-brand-primary/50 transition-all min-w-[180px] shadow-2xl overflow-hidden"
    >
      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${tech.color}30, transparent 70%)`,
        }}
      ></div>

      {/* Static background subtly tinted with tech color */}
      <div
        className="absolute inset-x-0 bottom-0 h-1 opacity-20 group-hover:h-full group-hover:opacity-[0.03] transition-all duration-500"
        style={{ backgroundColor: tech.color }}
      />

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-brand-primary/30 transition-colors">
        <Icon
          className="text-3xl transition-all duration-500 group-hover:rotate-[360deg]"
          style={{ color: tech.color }}
        />
      </div>

      {/* Name */}
      <div className="relative z-10 flex flex-col">
        <span className="text-sm font-black text-white tracking-wide">
          {tech.name}
        </span>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">
          Expertise
        </span>
      </div>
    </motion.div>
  );
};

export default TechStackMarquee;
