"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BinaryColumnProps {
  index: number;
}

const BinaryColumn = ({ index }: BinaryColumnProps) => {
  const [binary, setBinary] = useState<string[]>([]);

  useEffect(() => {
    // Initialize with random binary strings
    const length = Math.floor(Math.random() * 25) + 15;
    const initialBinary = Array.from({ length }, () =>
      Math.random() > 0.5 ? "1" : "0",
    );
    setBinary(initialBinary);
  }, []);

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: [-200, 1200],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration: Math.random() * 6 + 4,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 5,
      }}
      className="absolute text-[14px] md:text-[20px] font-mono text-blue-600/40 flex flex-col items-center pointer-events-none select-none"
      style={{ left: `${index * 2}%` }}
    >
      {binary.map((char, i) => (
        <span
          key={i}
          className={i % 3 === 0 ? "text-blue-500 font-bold opacity-100" : ""}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

const BinaryBackground = () => {
  const [columns, setColumns] = useState<number[]>([]);

  useEffect(() => {
    // High density coverage
    setColumns(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
      {columns.map((i) => (
        <BinaryColumn key={i} index={i} />
      ))}
    </div>
  );
};

export default BinaryBackground;
