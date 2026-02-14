"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import myImg from "@/assets/banner/IMG_0647_flipped.jpg";
import TechWeb from "@/components/About/TechWeb";

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-blue-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/10 to-transparent rounded-full animate-pulse"></div>

                {/* Main image container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:shadow-brand-primary/30 transition-all duration-500">
                  <Image
                    src={myImg}
                    alt="Shazzadul Haque"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-2/3">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide text-brand-primary uppercase bg-blue-50 rounded-full">
                Full-Stack Software Engineer
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  About
                </span>{" "}
                <span className="bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="text-xl font-medium">
                  Hi, I'm{" "}
                  <span className="text-brand-primary font-bold">Shazzad</span>{" "}
                  — a product-focused software engineer who loves building
                  scalable systems that solve real business problems.
                </p>
                <p>
                  I work full-time on a SaaS platform where I design and ship
                  production features used by thousands of users. My work spans
                  backend architecture, APIs, performance optimization,
                  automation systems, and end-to-end product development.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg my-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full -mr-20 -mt-20"></div>
                  <h3 className="font-bold text-slate-900 mb-6 text-xl relative z-10">
                    Over the past few years, I've:
                  </h3>
                  <ul className="grid grid-cols-1 gap-4 relative z-10">
                    {[
                      "Built a timezone-aware booking system with Google Calendar sync",
                      "Implemented SCORM learning support for enterprise clients",
                      "Designed bulk user migration & enrollment tools",
                      "Developed APIs powering mobile apps",
                      "Optimized database queries and reduced bundle sizes",
                      "Led bug-fixing efforts and worked directly with customers",
                      "Built an entire course platform independently from scratch",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-base group"
                      >
                        <span className="text-brand-primary mt-1 text-xl group-hover:scale-125 transition-transform">
                          ▹
                        </span>
                        <span className="group-hover:text-slate-900 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg">
                  I enjoy owning features from{" "}
                  <span className="text-slate-900 font-bold bg-yellow-50 px-2 py-1 rounded">
                    idea → design → implementation → launch
                  </span>
                  .
                </p>
                <p>
                  My main focus is backend and product engineering using{" "}
                  <span className="font-semibold text-slate-900">Node.js</span>,{" "}
                  <span className="font-semibold text-slate-900">AdonisJS</span>
                  , and modern web technologies. Outside of work, I build side
                  projects, teach programming, and create tech content.
                </p>
                <div className="pt-4 border-t-2 border-brand-primary/20">
                  <p className="font-bold text-2xl text-slate-900 italic bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent">
                    Always learning. Always shipping. ✨
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechWeb />
    </div>
  );
};

export default AboutMe;
