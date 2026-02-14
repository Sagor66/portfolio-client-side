import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeMap = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm",
    xl: "w-16 h-16 text-lg",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full border-2 border-brand-primary bg-white shadow-sm flex-shrink-0 ${sizeMap[size]} ${className}`}
    >
      <span className="font-black text-brand-primary tracking-tighter">SA</span>
    </div>
  );
};

export default Logo;
