"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Users,
  BookOpen,
  Video,
  Mail,
  Smartphone,
  Zap,
  Award,
  Database,
} from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  company: string;
  type: "feature" | "role" | "project";
  icon: React.ElementType;
  helpUrl?: string;
  content: {
    problem?: string;
    built: string;
    impact: string;
    tech: string[];
  };
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "Global Appointment Booking System",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Calendar,
    helpUrl: "https://help.ezycourse.com/article/create-an-appointment",
    content: {
      problem: "Users needed timezone-aware scheduling.",
      built: "Full booking engine with Google Calendar sync.",
      impact: "Reduced scheduling conflicts & manual coordination.",
      tech: ["Node.js", "AdonisJS", "Google Calendar API"],
    },
  },
  {
    id: 2,
    title: "Bulk User Migration & Enrollment",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Users,
    helpUrl: "https://help.ezycourse.com/article/import-students",
    content: {
      built:
        "CSV import/export system to migrate users from other platforms with auto-enrollment.",
      impact:
        "Enabled fast onboarding for B2B clients (1000s of users in minutes).",
      tech: ["Node.js", "Stream API", "MySQL"],
    },
  },
  {
    id: 3,
    title: "SCORM Learning Support",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: BookOpen,
    helpUrl: "https://help.ezycourse.com/article/scorm-html-lessons",
    content: {
      built: "SCORM player + tracking engine.",
      impact:
        "Allowed enterprise training content integration, opening doors for corporate customers.",
      tech: ["SCORM 1.2/2004", "React.js"],
    },
  },
  {
    id: 4,
    title: "Media Library (Audio/Video)",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Video,
    helpUrl: "http://help.ezycourse.com/article/create-a-video-library",
    content: {
      built: "Centralized media management system.",
      impact: "Faster course creation & content reuse.",
      tech: ["AWS S3", "Video Engine"],
    },
  },
  {
    id: 5,
    title: "Communication Systems",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Mail,
    helpUrl: "https://help.ezycourse.com/article/create-an-ezycourse-community",
    content: {
      built:
        "Transactional email service, notification system, and automation workflows.",
      impact: "Improved user engagement & retention.",
      tech: ["SendGrid", "Webhooks", "Automation"],
    },
  },
  {
    id: 6,
    title: "Mobile API Layer",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Smartphone,
    helpUrl: "https://help.ezycourse.com/article/mobile-app-terms-policy",
    content: {
      built:
        "REST APIs for Flutter mobile app with optimized payloads & caching.",
      impact: "Improved performance for mobile users.",
      tech: ["REST API", "Redis", "JSON"],
    },
  },
  {
    id: 7,
    title: "Performance Optimization",
    subtitle: "Software Engineer",
    company: "EzyCourse",
    type: "feature",
    icon: Zap,
    helpUrl: "https://nextjs.org/docs/app/guides/package-bundling",
    content: {
      built: "DB indexing, query filters, and reduced Next.js bundle size.",
      impact:
        "Faster load times + lower server costs. Reduced slow queries significantly.",
      tech: ["MySQL Tuning", "Redis", "Next.js Optimization"],
    },
  },
  {
    id: 8,
    title: "Engineering Ownership & Stability Leadership",
    subtitle: "Team Lead",
    company: "EzyCourse",
    type: "role",
    icon: Award,
    content: {
      problem: "Ensuring production reliability and faster issue turnaround.",
      built:
        "Led bug resolution efforts, triage cycles, and root-cause analysis for recurring issues.",
      impact:
        "Improved product stability, reduced reports, and accelerated critical issue resolution.",
      tech: ["Leadership", "Triage", "Root-Cause Analysis", "Code Quality"],
    },
  },
  {
    id: 9,
    title: "Built Course System From Scratch",
    subtitle: "Solo Engineer",
    company: "EzyCommunity",
    type: "project",
    icon: Database,
    helpUrl: "https://www.ezycommunity.com/",
    content: {
      built:
        "Designed DB schema, backend APIs, and integrated frontend. Implemented enrollments, lessons, and progress tracking.",
      impact: "Shipped full LMS feature independently.",
      tech: ["Node.js", "AdonisJS", "MySQL", "Next.js"],
    },
  },
];

const ExperienceRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundShapes />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide text-brand-primary uppercase bg-blue-100/50 rounded-full"
          >
            My Journey (2023 - Present)
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Experience <span className="text-brand-primary">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A detailed look at the features I've built, the problems I've
            solved, and the impact I've delivered.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full h-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-brand-primary origin-top rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundShapes = () => {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"
      />

      {/* Small floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: ["-10%", "110%"],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
          className="absolute w-1 h-1 bg-brand-primary/20 rounded-full"
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-[15%] left-[5%] opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-brand-primary"
          />
        </svg>
      </div>
      <div className="absolute top-[45%] right-[5%] opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <rect
            x="20"
            y="20"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            transform="rotate(15 60 60)"
            className="text-brand-primary"
          />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[8%] opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M40 10 L70 70 L10 70 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            transform="rotate(-20 40 40)"
            className="text-brand-primary"
          />
        </svg>
      </div>
    </>
  );
};

const TimelineCard = ({
  item,
  index,
}: {
  item: TimelineEvent;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  const cardContent = (
    <motion.div
      whileInView={{
        boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.4)",
        scale: 1.01,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.8, margin: "-10% 0px -10% 0px" }}
      className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative group ${isEven ? "md:mr-10" : "md:ml-10"} ${item.helpUrl ? "cursor-pointer ring-1 ring-slate-100 hover:ring-brand-primary/30" : ""}`}
    >
      {/* Connector Line (Desktop) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-10 h-px bg-slate-200 hidden md:block group-hover:bg-brand-primary transition-colors duration-500
            ${isEven ? "-right-10" : "-left-10"}
          `}
      ></div>

      <div className="flex flex-col mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
            {item.company}
          </span>
          {item.helpUrl && (
            <span className="text-[10px] text-slate-400 group-hover:text-brand-primary transition-colors flex items-center gap-1">
              View Specs ↗
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-slate-500 font-medium">{item.subtitle}</p>
      </div>

      <div className="space-y-3">
        {item.content.problem && (
          <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-slate-100 pl-3 italic">
            "{item.content.problem}"
          </p>
        )}
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-slate-900">What I built:</span>{" "}
          {item.content.built}
        </p>
        <div className="pt-2">
          <p className="text-sm text-slate-600 leading-snug">
            <strong className="text-brand-primary font-bold">Impact:</strong>{" "}
            {item.content.impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.content.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle background icon for the card */}
      <div className="absolute right-4 bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
        <item.icon size={80} />
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <motion.div
        // whileHover={{ scale: 1.2, rotate: 360 }}
        // transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-brand-primary rounded-full z-10 shadow-lg flex items-center justify-center cursor-help"
      >
        <item.icon className="w-5 h-5 text-brand-primary" />
      </motion.div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 pl-20 md:pl-0">
        {item.helpUrl ? (
          <a
            href={item.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </a>
        ) : (
          cardContent
        )}
      </div>

      {/* Empty side for layout balance */}
      <div className="hidden md:block w-1/2"></div>
    </motion.div>
  );
};

export default ExperienceRoadmap;
