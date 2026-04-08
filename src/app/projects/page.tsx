"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Smart Logistics Dashboard",
      description: "A comprehensive data visualization dashboard tracking real-time logistics networks and predicting potential supply chain bottlenecks using intelligent algorithms.",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Recharts"],
    },
    {
      title: "Sistem Informasi Desa",
      description: "An elegant, responsive local government information system that bridges communities with municipal services, featuring automated document generation.",
      tags: ["React", "Node.js", "PostgreSQL", "MUI"],
    },
    {
      title: "E-Commerce Analytics",
      description: "An enterprise-grade B2B analytics platform that aggregates high-volume sales data into actionable, dynamic user interfaces.",
      tags: ["Next.js", "GraphQL", "Tailwind", "Prisma"],
    },
  ];

  return (
    <div className="pt-12 px-4 max-w-7xl mx-auto pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-foreground">Featured Projects</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
          A showcase of systems and interfaces built with scaling and robust architecture in mind.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedCard key={index} delay={index * 0.1} className="flex flex-col h-full border border-slate-200">
            <div className="h-48 w-full bg-slate-100 rounded-lg mb-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-300 font-bold text-2xl group-hover:scale-105 transition-transform duration-500">
                    Preview Image
                </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
            <p className="text-slate-500 mb-6 flex-grow text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 border-t pt-4 border-slate-100">
              <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">
                <ExternalLink size={16} /> Live Demo
              </button>
              <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">
                <FaGithub size={16} /> Source
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
