"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50 glass-pill rounded-full px-6 py-3 transition-colors"
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50">
            <span className="text-xl font-extrabold text-foreground tracking-tight">
              Aether<span className="text-blue-500">Nusantara.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center bg-white/40 p-1 rounded-full border border-white/60">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? "text-white" : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md shadow-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact" className="text-sm font-bold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors shadow-md">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 bg-white/50 p-2 rounded-full border border-white/80 focus:outline-none"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-0 z-40 bg-zinc-50/95 backdrop-blur-3xl pt-32 px-6 flex flex-col md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="space-y-4">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-extrabold pb-4 border-b border-slate-200/50 ${
                  pathname === link.path
                    ? "text-blue-600"
                    : "text-slate-800 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full block text-center rounded-2xl bg-blue-600 text-white font-bold py-4 text-xl shadow-xl shadow-blue-500/20">
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
