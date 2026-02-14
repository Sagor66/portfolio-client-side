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
  impact?: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "EzyCourse",
    title: "Software Engineer",
    role: "Full-stack Product Development & Team Collaboration",
    description:
      "Building scalable products and high-performance engineering solutions for modern SaaS platforms.",
    achievements: [
      {
        title: "Global Appointment Booking System",
        icon: Calendar,
        description:
          "Built a complex booking engine with timezone-aware scheduling and Google Calendar sync.",
        impact: "Reduced scheduling conflicts & manual coordination.",
        tech: ["Node.js", "AdonisJS", "Google Calendar API"],
      },
      {
        title: "Bulk User Migration & Enrollment",
        icon: Users,
        description:
          "Architected a CSV import/export system to migrate thousands of users, auto-enrolling them into courses and products.",
        impact:
          "Enabled fast onboarding for B2B clients (1000s of users in minutes).",
        tech: ["Stream API", "MySQL", "Queue Jobs"],
      },
      {
        title: "SCORM Learning Support",
        icon: BookOpen,
        description:
          "Implemented SCORM player & tracking engine to integrate enterprise training content.",
        impact:
          "Opened doors for corporate customers requiring standardized learning modules.",
        tech: ["SCORM 1.2/2004", "React.js"],
      },
      {
        title: "Media Library (Audio/Video)",
        icon: Video,
        description:
          "Built a centralized media management system with secure streaming and organized structure.",
        impact: "Faster course creation & content reuse for instructors.",
        tech: ["AWS S3", "Video Engine"],
      },
      {
        title: "Communication Systems",
        icon: Mail,
        description:
          "Designed transactional email service, notification system, and automation workflows.",
        impact: "Improved user engagement & retention through timely alerts.",
        tech: ["SendGrid", "Webhooks", "Automation"],
      },
      {
        title: "Mobile API Layer",
        icon: Smartphone,
        description:
          "Built and optimized RESTful APIs specifically for the Flutter mobile app with caching strategies.",
        impact: "Improved performance and reduced latency for mobile users.",
        tech: ["REST API", "Redis", "JSON"],
      },
      {
        title: "Performance Optimization",
        icon: Zap,
        description:
          "Added DB indexing, query filters, and reduced Next.js bundle size.",
        impact:
          "Faster load times + lower server costs. Reduced slow queries significantly.",
        tech: ["MySQL Tuning", "Redis", "Next.js Optimization"],
      },
      {
        title: "Leadership & Ownership",
        icon: Award,
        description:
          "Led small bug-fix team, handled client issues directly, and collaborated cross-team.",
        impact:
          "Converted customer feedback into tangible product improvements.",
        tech: ["Leadership", "Mentoring", "Agile"],
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
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
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
              {exp.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow leading-relaxed">
                    {achievement.description}
                  </p>
                  {achievement.impact && (
                    <div className="mb-4 text-sm bg-green-50 text-green-700 px-3 py-2 rounded-lg border border-green-100">
                      <strong>Impact:</strong> {achievement.impact}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto">
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
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Experience;
