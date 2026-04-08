"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { GraduationCap, Briefcase, User } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Senior Fullstack Developer",
      detail: "Leading architecture and implementation for scalable web systems.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2022 - 2026",
      title: "S1 Sistem Informasi (Information Systems)",
      detail: "Focusing on systems analysis, enterprise architecture, and data management.",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "2021",
      title: "Freelance Creative Director",
      detail: "Designed user experiences and dynamic themes for various digital campaigns.",
      icon: <User size={20} />,
    },
  ];

  return (
    <div className="pt-12 px-4 max-w-4xl mx-auto pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-6 text-foreground">About Me</h1>
        <p className="text-lg text-slate-500 leading-relaxed font-light">
          Hi, I&apos;m Rio Andhika. I bridge the gap between rigorous systems analysis and striking visual design. With a background in Information Systems, I build applications that are not only aesthetically pleasing but structurally sound from the data layer up.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-blue-100 ml-4 md:ml-0 md:border-l-0">
        {/* Central line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative md:w-1/2 md:odd:pr-12 md:even:pl-12 md:even:ml-auto">
              {/* Timeline dot */}
              <div className="absolute top-6 -left-2.5 md:left-auto md:right-[-11px] md:even:left-[-11px] w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow flex items-center justify-center z-10" />
              
              <AnimatedCard delay={index * 0.2}>
                <div className="text-blue-500 font-semibold mb-2 flex items-center gap-2">
                  {item.icon} {item.year}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
