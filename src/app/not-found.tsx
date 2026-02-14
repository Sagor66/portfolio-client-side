"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(59, 130, 246, 0.8)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[12rem] md:text-[16rem] font-black text-transparent bg-gradient-to-r from-brand-primary via-blue-400 to-brand-primary bg-clip-text leading-none"
          >
            404
          </motion.h1>

          {/* Glitch Effect Overlay */}
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-red-500 mix-blend-screen leading-none"
          >
            404
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have wandered off into
            the digital void. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 transition-all"
            >
              Go Home
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated Robot/Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-16 text-8xl"
        >
          🤖
        </motion.div>
      </div>
    </div>
  );
}
