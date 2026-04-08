"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass border-t py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <span className="text-xl font-bold text-foreground block">
            Rio Andhika P<span className="text-blue-500">.</span>
          </span>
          <span className="text-sm text-slate-500 mt-1 block">
            Senior Fullstack Developer & Creative Director
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6"
        >
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Rio Andhika. All rights reserved.
      </div>
    </footer>
  );
}
