"use client";

import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si";
import Logo from "./Logo";

const Footer = () => {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/Sagor66", label: "GitHub" },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/shazzadul-haque-73571a222/",
      label: "LinkedIn",
    },
    { icon: SiTwitter, href: "", label: "Twitter" },
    {
      icon: SiGmail,
      href: "mailto:sazzadulhaquesagor@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 bg-gradient-to-b from-transparent to-slate-50/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-slate-600 hover:text-brand-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mb-6">
          <p className="text-center text-slate-600 font-medium">
            COPYRIGHT©2024{" "}
            <span className="bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent font-bold">
              SHAZZAD
            </span>{" "}
            ALL RIGHTS RESERVED
          </p>
          <Logo size="md" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
