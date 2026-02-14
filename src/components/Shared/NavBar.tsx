"use client";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/contact", label: "Contact", icon: Mail },
];

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main Navbar - Hides on scroll */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrolled ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-brand-primary transition-colors"
            >
              <span className="bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent font-black">
                Shazzad
              </span>
              .dev
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-brand-primary font-semibold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1RVZfgA5toMmGeFhw5tyMoQUVaKvmaJC6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button className="relative px-4 py-2 bg-gradient-to-r from-brand-primary to-blue-600 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                  Resume
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-primary hover:bg-blue-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Glassy Sidebar - Shows on scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-brand-primary hover:to-blue-600 transition-all group relative"
                  title={link.label}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.label}
                  </span>
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1RVZfgA5toMmGeFhw5tyMoQUVaKvmaJC6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl text-white bg-gradient-to-br from-brand-primary to-blue-600 hover:shadow-lg hover:shadow-brand-primary/50 transition-all group relative"
                title="Resume"
              >
                <FileText className="w-5 h-5" />
                <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Resume
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-600 hover:text-brand-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-primary hover:to-blue-600 rounded-xl font-semibold transition-all"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://drive.google.com/file/d/1RVZfgA5toMmGeFhw5tyMoQUVaKvmaJC6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-brand-primary to-blue-600 rounded-xl font-semibold shadow-lg"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default NavBar;
