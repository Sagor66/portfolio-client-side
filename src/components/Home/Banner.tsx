"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Shared/Button";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="relative pt-20 pb-12 px-6 overflow-hidden bg-white">
        <div className="flex flex-col items-center text-center gap-8 relative z-10">
          {/* Static Simple Image - Rounded and Centered */}
          <div className="w-56 h-56 relative rounded-full shadow-2xl border-4 border-white overflow-hidden">
            <div className="static-profile-image" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight leading-tight text-slate-900 px-2">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary bg-clip-text text-transparent">
                Shazzadul Haque
              </span>
            </h1>

            <h4 className="text-xl font-bold text-slate-800 tracking-tight">
              Full-Stack Software Engineer
            </h4>

            <p className="text-base text-slate-600 leading-relaxed font-medium max-w-sm mx-auto">
              Building scalable SaaS products, APIs, and modern web experiences.
              From{" "}
              <span className="text-slate-900 font-bold border-b-2 border-brand-primary/20">
                concept → production
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col w-full gap-4 max-w-xs">
            <Button href="/contact" size="lg" className="w-full">
              Let's Talk
            </Button>
            <Button
              href="/experience"
              variant="outline"
              size="lg"
              className="w-full"
            >
              View Experience
            </Button>
          </div>
        </div>

        {/* Simplified Static Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col-reverse lg:flex-row gap-16 items-center justify-between">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight text-slate-900">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary bg-clip-text text-transparent">
              Shazzadul Haque
            </span>
          </h1>

          <h4 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Full-Stack Software Engineer
          </h4>

          <p className="text-lg md:text-xl tracking-wide text-slate-600 mb-10 leading-relaxed font-medium">
            Building scalable SaaS products, APIs, and modern web experiences.
            From{" "}
            <span className="text-slate-900 font-bold border-b-2 border-brand-primary/30">
              concept → architecture → production
            </span>
            . Based in Bangladesh 📍
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <Button href="/contact" size="lg" className="min-w-[200px]">
              Let's Talk
            </Button>
            <Button
              href="/experience"
              variant="outline"
              size="lg"
              className="min-w-[200px]"
            >
              View Experience
            </Button>
          </div>
        </motion.div>

        {/* Banner Image / Visual - Enhanced Bubble Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative"
        >
          {/* Main Animated Blob Container with Image */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            {/* Primary Static Blob with Image Background */}
            <div className="absolute inset-0 blob shadow-2xl" />

            {/* Morphing Gradient Overlay */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-blue-500/5 to-transparent pointer-events-none"
            />

            {/* Pulsing Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-brand-primary/30 blur-3xl"
              style={{ borderRadius: "50%" }}
            />

            {/* Abstract Code Elements Floating Around */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20"
            >
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <code className="text-xs text-brand-primary font-bold">
                npm start
              </code>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-10 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-primary font-bold text-sm">
                  {`</>`}
                </div>
                <div className="h-2 w-16 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: [-64, 64] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-full bg-brand-primary/30"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border-2 border-dashed border-brand-primary/20 rounded-full"
          />

          {/* Counter-Rotating Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-8 border border-dotted border-blue-400/30 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
