import type { Metadata } from "next";
import {
  Calendar,
  Users,
  BookOpen,
  Video,
  Mail,
  Smartphone,
  Zap,
  Award,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience | Shazzad.dev",
  description: "My professional journey and technical achievements.",
};

interface ExperienceItem {
  title: string;
  role: string;
  period?: string;
  description: string;
  company: string;
  achievements: Achievement[];
}

interface Achievement {
  title: string;
  icon: React.ElementType;
  description: string;
  details?: string[];
  impact?: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "EzyCourse",
    title: "Full-Stack Software Engineer",
    role: "Full-stack Product Development & Team Collaboration",
    description:
      "Building scalable products and high-performance engineering solutions for modern SaaS platforms.",
    achievements: [
      {
        title: "Global Appointment Booking System",
        icon: Calendar,
        description:
          "Architected a robust scheduling engine supporting dynamic timezone offsets and Google Calendar integration.",
        details: [
          "Built a complex scheduling engine that handles dynamic timezone conversions for international users",
          "Integrated Google Calendar API for bidirectional synchronization of events and availability",
          "Implemented automated multi-channel reminder systems (Email/SMS) for reduced no-shows",
          "Optimized availability search queries using specialized MySQL indexing for high performance",
        ],
        impact: "Reduced scheduling conflicts & manual coordination.",
        tech: ["Node.js", "AdonisJS", "Google Calendar API"],
      },
      {
        title: "Bulk User Migration & Enrollment",
        icon: Users,
        description:
          "Architected a CSV import/export system to migrate thousands of users, auto-enrolling them into courses and products.",
        details: [
          "Developed a fault-tolerant processing pipeline using Node.js Stream API for massive datasets",
          "Built a custom mapping engine to translate various external data formats into local schema",
          "Integrated background queue workers (Redis/Bull) to process thousands of enrollments asynchronously",
          "Implemented comprehensive validation logic and real-time error reporting during imports",
        ],
        impact:
          "Enabled fast onboarding for B2B clients (1000s of users in minutes).",
        tech: ["Stream API", "MySQL", "Queue Jobs"],
      },
      {
        title: "SCORM Learning Support",
        icon: BookOpen,
        description:
          "Implemented SCORM player & tracking engine to integrate enterprise training content.",
        details: [
          "Developed a standard-compliant SCORM 1.2/2004 runtime environment for external content",
          "Built a tracking engine to capture learner progress, completion status, and assessment scores",
          "Optimized secure cross-domain iFrame communication for data exchange between content and LMS",
          "Implemented state persistence to allow users to resume lessons seamlessly across sessions",
        ],
        impact:
          "Opened doors for corporate customers requiring standardized learning modules.",
        tech: ["SCORM 1.2/2004", "React.js"],
      },
      {
        title: "Media Library (Audio/Video)",
        icon: Video,
        description:
          "Built a centralized media management system with secure streaming and organized structure.",
        details: [
          "Created a centralized asset management system for secure storage and distribution of multimedia",
          "Automated video transcoding and optimization workflows using cloud-native processing tools",
          "Implemented a custom media player with playback speed control and resolution switching",
          "Designed an efficient hierarchical tagging and folder system for bulk asset organization",
        ],
        impact: "Faster course creation & content reuse for instructors.",
        tech: ["AWS S3", "Video Engine"],
      },
      {
        title: "Communication Systems",
        icon: Mail,
        description:
          "Designed transactional email service, notification system, and automation workflows.",
        details: [
          "Built a highly configurable transactional email engine with dynamic variable injection",
          "Developed a real-time notification system using WebSockets for instant user updates",
          "Integrated complex automation triggers for enrollments, completions, and community activity",
          "Managed deliverability and bounce/complaint handling via SendGrid webhook integrations",
        ],
        impact: "Improved user engagement & retention through timely alerts.",
        tech: ["SendGrid", "Webhooks", "Automation"],
      },
      {
        title: "Mobile API Layer",
        icon: Smartphone,
        description:
          "Built and optimized RESTful APIs specifically for the Flutter mobile app with caching strategies.",
        details: [
          "Structured a lightweight RESTful API layer specifically designed for high-performance mobile clients",
          "Implemented aggressive caching strategies using Redis to minimize database load",
          "Optimized JSON payloads by removing redundancy and implementing efficient serialization",
          "Added robust mobile-specific authentication and data protection layers",
        ],
        impact: "Improved performance and reduced latency for mobile users.",
        tech: ["REST API", "Redis", "JSON"],
      },
      {
        title: "Performance Optimization",
        icon: Zap,
        description:
          "Added DB indexing, query filters, and reduced Next.js bundle size.",
        details: [
          "Conducted deep database profiling and optimized slow queries through strategic refactoring",
          "Reduced Next.js main bundle size by 40% through code splitting and tree-shaking",
          "Implemented server-side caching and static generation for high-traffic public pages",
          "Fine-tuned Redis layers to improve API response times by over 200ms on average",
        ],
        impact:
          "Faster load times + lower server costs. Reduced slow queries significantly.",
        tech: ["MySQL Tuning", "Redis", "Next.js Optimization"],
      },
      {
        title: "Engineering Ownership & Stability Leadership",
        icon: Award,
        description:
          "Beyond building core product features, I led stability and bug resolution efforts across the platform to ensure production reliability and faster issue turnaround.",
        details: [
          "Led a small cross-functional bug-fixing team and coordinated resolution cycles",
          "Prioritized and triaged production issues based on severity and business impact",
          "Conducted root-cause analysis for recurring bugs and implemented long-term fixes",
          "Reviewed pull requests to maintain code quality and architectural consistency",
          "Improved validation logic and system safeguards to reduce repeated edge-case failures",
          "Worked directly with clients and support teams to translate problems into technical solutions",
          "Mentored junior engineers during debugging sessions and release cycles",
        ],
        impact:
          "Improved product stability, reduced recurring bug reports, accelerated critical issue resolution, and strengthened overall codebase reliability.",
        tech: ["Leadership", "Mentoring", "Agile", "QA", "Triage"],
      },
    ],
  },
  {
    company: "EzyCommunity",
    title: "Solo Engineer",
    role: "Architect & Lead Developer",
    description:
      "Independently architected and engineered the entire backend infrastructure and web frontend.",
    achievements: [
      {
        title: "Built Course System From Scratch",
        icon: ArrowUpRight,
        description:
          "Delivered a production-ready LMS with custom API architecture, enrollment system, and progress tracking.",
        impact: "Launched a complete platform in record time.",
        tech: ["Node.js", "AdonisJS", "MySQL", "Redis", "Next.js", "Docker"],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans antialiased min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Page Header */}
        <header className="mb-20 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-brand-primary uppercase bg-brand-light rounded-full">
            Career Journey
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Work Experience<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A showcase of my technical contributions and the impact I've
            delivered.
          </p>
        </header>

        {experiences.map((exp, index) => (
          <section key={index} className="mb-32 last:mb-0">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {exp.company}
                </h2>
                <p className="text-xl text-brand-primary font-semibold mt-1">
                  {exp.title}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-slate-500 font-medium">
                {exp.role}
              </div>
            </div>

            {/* Achievements Grid */}
            <div
              className={`grid grid-cols-1 ${exp.achievements.length > 1 ? "md:grid-cols-2" : ""} gap-6`}
            >
              {exp.achievements.map((achievement, i) => {
                const isSpecial =
                  achievement.title ===
                  "Engineering Ownership & Stability Leadership";
                return (
                  <div
                    key={i}
                    className={`group bg-white p-8 rounded-2xl flex flex-col h-full transition-all duration-500 relative ${
                      isSpecial
                        ? "border-2 animate-border-glow"
                        : "border border-slate-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {isSpecial && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-primary/10 via-blue-400/10 to-brand-primary/10 opacity-30 animate-pulse pointer-events-none -m-[2px]"></div>
                    )}
                    <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed relative z-10">
                      {achievement.description}
                    </p>
                    {achievement.details && (
                      <ul className="mb-6 space-y-2 relative z-10">
                        {achievement.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {achievement.impact && (
                      <div className="mb-4 text-sm bg-green-50 text-green-700 px-3 py-2 rounded-lg border border-green-100 relative z-10">
                        <strong>Impact:</strong> {achievement.impact}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      {achievement.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Experience;
