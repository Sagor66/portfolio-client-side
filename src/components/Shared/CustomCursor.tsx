"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference" as const,
    },
  };

  const trailingVariants: Variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        type: "spring",
        mass: 0.8,
        damping: 30,
        stiffness: 250,
      },
    },
  };

  // Small dots trailing behind
  const dots = Array.from({ length: 5 }).map((_, i) => (
    <motion.div
      key={i}
      className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50 opacity-60"
      variants={{
        default: {
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          transition: {
            type: "spring",
            mass: 0.1 + i * 0.1, // Increasing mass for staggered effect
            damping: 15,
            stiffness: 100 - i * 10,
          },
        },
      }}
      animate="default"
    />
  ));

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-brand-primary rounded-full pointer-events-none z-50 mix-blend-multiply hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
      {/* Trailing larger dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-300 rounded-full pointer-events-none z-40 opacity-80 hidden md:block"
        variants={trailingVariants}
        animate="default"
      />
      {/* Trailing Loop for small dots */}
      <div className="hidden md:block">{dots}</div>
    </>
  );
};

export default CustomCursor;
