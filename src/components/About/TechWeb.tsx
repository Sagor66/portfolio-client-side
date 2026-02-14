"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAntdesign,
  SiNodedotjs,
  SiAdonisjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiVercel,
  SiFlutter,
  SiSocketdotio,
} from "react-icons/si";

interface TechNode {
  id: string;
  name: string;
  icon: any;
  color: string;
  position: { top: string; left: string };
}

interface Particle {
  id: number;
  targetNodeId: string;
  progress: number;
  path: { x: number; y: number }[];
}

const techNodes: TechNode[] = [
  {
    id: "react",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    position: { top: "20%", left: "25%" },
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    position: { top: "15%", left: "55%" },
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
    position: { top: "35%", left: "15%" },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    position: { top: "10%", left: "75%" },
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    position: { top: "70%", left: "20%" },
  },
  {
    id: "adonisjs",
    name: "AdonisJS",
    icon: SiAdonisjs,
    color: "#5A45FF",
    position: { top: "75%", left: "45%" },
  },
  {
    id: "nestjs",
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
    position: { top: "65%", left: "70%" },
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    position: { top: "40%", left: "80%" },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    position: { top: "55%", left: "85%" },
  },
  {
    id: "redis",
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    position: { top: "85%", left: "75%" },
  },
  {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    position: { top: "85%", left: "25%" },
  },
  {
    id: "aws",
    name: "AWS",
    icon: SiAmazonaws,
    color: "#FF9900",
    position: { top: "45%", left: "5%" },
  },
];

const TechWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const offsetRef = useRef(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [highlightedNode, setHighlightedNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const getCenter = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const coreNode = document.getElementById("node-core");
      const peripheralNodes = document.querySelectorAll(
        ".tech-node:not(#node-core)",
      );

      if (!coreNode) return;

      const coreCenter = getCenter(coreNode);
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      peripheralNodes.forEach((node, index) => {
        const nodeCenter = getCenter(node as HTMLElement);

        const gradient = ctx.createLinearGradient(
          coreCenter.x,
          coreCenter.y,
          nodeCenter.x,
          nodeCenter.y,
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.4)");
        gradient.addColorStop(1, "rgba(203, 213, 225, 0.2)");

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.setLineDash([10, 5]);
        ctx.lineDashOffset = -offsetRef.current * (index % 2 === 0 ? 1 : -1);
        ctx.moveTo(coreCenter.x, coreCenter.y);
        ctx.lineTo(nodeCenter.x, nodeCenter.y);
        ctx.stroke();

        if (index > 0) {
          const prevNodeCenter = getCenter(
            peripheralNodes[index - 1] as HTMLElement,
          );
          ctx.beginPath();
          ctx.setLineDash([]);
          ctx.strokeStyle = "rgba(226, 232, 240, 0.5)";
          ctx.moveTo(nodeCenter.x, nodeCenter.y);
          ctx.lineTo(prevNodeCenter.x, prevNodeCenter.y);
          ctx.stroke();
        }
      });

      // Draw particles
      setParticles((prevParticles) => {
        return prevParticles.map((particle) => {
          const targetNode = document.getElementById(
            `node-${particle.targetNodeId}`,
          );
          if (!targetNode) return particle;

          const targetCenter = getCenter(targetNode);
          const path = [coreCenter, targetCenter];

          const newProgress = particle.progress + 0.005; // Slower movement for better visibility

          if (newProgress >= 1) {
            setHighlightedNode(particle.targetNodeId);
            setTimeout(() => setHighlightedNode(null), 500);
            return { ...particle, progress: 0 };
          }

          const currentPos = {
            x: coreCenter.x + (targetCenter.x - coreCenter.x) * newProgress,
            y: coreCenter.y + (targetCenter.y - coreCenter.y) * newProgress,
          };

          // Draw particle as a prominent round circle
          ctx.beginPath();
          ctx.arc(currentPos.x, currentPos.y, 6, 0, Math.PI * 2);

          // Gradient fill for depth
          const particleGradient = ctx.createRadialGradient(
            currentPos.x,
            currentPos.y,
            0,
            currentPos.x,
            currentPos.y,
            6,
          );
          particleGradient.addColorStop(0, "#60a5fa");
          particleGradient.addColorStop(1, "#3b82f6");

          ctx.fillStyle = particleGradient;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#3b82f6";
          ctx.fill();
          ctx.shadowBlur = 0;

          return { ...particle, progress: newProgress };
        });
      });

      offsetRef.current += 0.2;
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    // Spawn particles periodically to random nodes
    const particleInterval = setInterval(() => {
      const randomNode =
        techNodes[Math.floor(Math.random() * techNodes.length)];
      setParticles((prev) => [
        ...prev.slice(-8), // Keep last 8 particles
        {
          id: particleIdRef.current++,
          targetNodeId: randomNode.id,
          progress: 0,
          path: [],
        },
      ]);
    }, 2500); // Slower spawn rate

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(particleInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tech <span className="text-brand-primary">Ecosystem</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            A complex web of modern technologies I use to build scalable,
            high-performance digital products.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-white/30 to-slate-50/30 backdrop-blur-sm shadow-xl overflow-hidden"
          style={{ minHeight: isMobile ? "auto" : "700px" }}
        >
          {!isMobile ? (
            <>
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
              />

              <motion.div
                id="node-core"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="tech-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-primary to-blue-600 flex flex-col items-center justify-center text-white shadow-2xl z-20 cursor-pointer hover:scale-110 transition-transform"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Hub
                </span>
                <span className="text-xl md:text-2xl font-black">CORE</span>
                <span className="text-xs font-medium mt-1">Full-Stack</span>
              </motion.div>

              {techNodes.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  id={`node-${tech.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: highlightedNode === tech.id ? 1.2 : 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`tech-node absolute w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-2 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-110 hover:shadow-2xl transition-all z-10 ${
                    highlightedNode === tech.id
                      ? "ring-4 ring-offset-2"
                      : "border-slate-100"
                  }`}
                  style={{
                    top: tech.position.top,
                    left: tech.position.left,
                    borderColor:
                      highlightedNode === tech.id ? tech.color : undefined,
                  }}
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <tech.icon
                      className="w-6 h-6 md:w-7 md:h-7"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-700 text-center px-1">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </>
          ) : (
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 p-6">
              <div className="col-span-full flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-primary to-blue-600 flex flex-col items-center justify-center text-white shadow-xl"
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                    Hub
                  </span>
                  <span className="text-lg font-black">CORE</span>
                </motion.div>
              </div>
              {techNodes.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-100 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${tech.color}10` }}
                  >
                    <tech.icon
                      className="w-5 h-5"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-primary"></span>
            Primary Stack
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></span>
            Supporting Technologies
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-200 border-t border-dashed border-blue-400"></span>
            Interconnected Workflows
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default TechWeb;
