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
    content: {
      built: "DB indexing, query filters, and reduced Next.js bundle size.",
      impact:
        "Faster load times + lower server costs. Reduced slow queries significantly.",
      tech: ["MySQL Tuning", "Redis", "Next.js Optimization"],
    },
  },
  {
    id: 8,
    title: "Leadership & Ownership",
    subtitle: "Team Lead",
    company: "EzyCourse",
    type: "role",
    icon: Award,
    content: {
      built: "Led small bug-fix team and directly handled client issues.",
      impact: "Converted customer feedback into product improvements.",
      tech: ["Leadership", "Mentoring", "Agile"],
    },
  },
  {
    id: 9,
    title: "Built Course System From Scratch",
    subtitle: "Solo Engineer",
    company: "EzyCommunity",
    type: "project",
    icon: Database,
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
    <div className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide text-brand-primary uppercase bg-blue-50 rounded-full">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Experience <span className="text-brand-primary">Timeline</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A detailed look at the features I've built, the problems I've
            solved, and the impact I've delivered.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 rounded-full h-full">
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

const TimelineCard = ({
  item,
  index,
}: {
  item: TimelineEvent;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-brand-primary rounded-full z-10 shadow flex items-center justify-center">
        <item.icon className="w-4 h-4 text-brand-primary" />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 pl-20 md:pl-0">
        <div
          className={`bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 relative group ${isEven ? "md:mr-10" : "md:ml-10"}`}
        >
          {/* Connector Line (Desktop) */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-px bg-slate-200 hidden md:block group-hover:bg-brand-primary/50 transition-colors
                ${isEven ? "-right-10" : "-left-10"}
              `}
          ></div>

          <div className="flex flex-col mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {item.company}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
              {item.title}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-600 leading-snug">
              <strong className="text-brand-primary">Impact:</strong>{" "}
              {item.content.impact}
            </p>
          </div>
        </div>
      </div>

      {/* Empty side for layout balance */}
      <div className="hidden md:block w-1/2"></div>
    </motion.div>
  );
};

export default ExperienceRoadmap;
