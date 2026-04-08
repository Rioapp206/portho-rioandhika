"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Database, Paintbrush, ChevronRight, Mail } from "lucide-react";
import { SiTailwindcss } from "react-icons/si";

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textInfo = texts[currentIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && currentText === textInfo) {
      const timer = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === "") {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting ? textInfo.substring(0, prev.length - 1) : textInfo.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-blue-600 border-r-2 border-blue-600 pr-1 inline-block min-w-[5px]">
      {currentText}
    </span>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const skills = [
    { title: "Next.js 14", icon: <Code2 strokeWidth={1.5} size={36} /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss size={36} /> },
    { title: "Systems Analysis", icon: <Database strokeWidth={1.5} size={36} /> },
    { title: "UI/UX Design", icon: <Paintbrush strokeWidth={1.5} size={36} /> },
  ];

  const previewProjects = [
    {
      title: "Smart Logistics Dashboard",
      description: "A comprehensive data visualization dashboard tracking real-time logistics networks and predicting supply chain bottlenecks.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Sistem Informasi Desa",
      description: "An elegant, responsive local government information system bridging communities with municipal services seamlessly.",
      tags: ["React", "Express", "PostgreSQL"],
    }
  ];

  return (
    <div className="overflow-x-clip relative">
      {/* Animated Mesh Background */}
      <div className="bg-mesh" />

      {/* Hero Section Redesign */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 relative w-full pt-44 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left z-10"
            style={{ y: yParallax }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-5 py-2 rounded-full glass border border-white/50 text-slate-700 font-semibold text-sm sm:text-base mb-8 shadow-sm tracking-wide"
            >
              I am a <span className="ml-[1ch]"><Typewriter texts={["Senior Fullstack Developer", "Founder of Aether Nusantara", "Creative Director", "Systems Analyst"]} /></span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Building <span className="text-gradient drop-shadow-sm">Digital</span> <br className="hidden sm:block" /> Future
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light">
              Designing high-performance, beautiful user interfaces that bridge the gap between complex enterprise data and intuitive modern design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex items-center justify-center gap-2"
                >
                  View My Works <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto glass hover:bg-white text-slate-800 px-8 py-4 rounded-2xl font-bold transition-all border border-slate-200 shadow-sm"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="relative group max-w-md mx-auto">
              {/* Animated aura background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative glass-card rounded-[2.5rem] p-4 border border-white/80 shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100">
                  <Image 
                    src="/portrait.png" 
                    alt="Rio Andhika" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Glass overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-slate-800">Available for Work</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 p-5 glass-pill rounded-full shadow-2xl z-20 hidden md:block border border-white"
              >
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">50+</span>
                    <span className="text-xs text-slate-500 leading-tight">Projects<br/>Completed</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full mt-20">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="flex flex-col items-center text-center p-8 border border-white !rounded-3xl">
              <div className="p-5 bg-blue-50 text-blue-600 rounded-2xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {skill.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-800">{skill.title}</h3>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Projects Spotlight */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase block mb-3">Portfolio Preview</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Featured Projects Spotlight</h2>
          </div>
          <Link href="/projects" className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all font-bold group">
            Explore All <ChevronRight className="inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {previewProjects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="!p-0 overflow-hidden border border-white">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="h-64 sm:h-full bg-slate-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                        <span className="text-slate-300 font-black text-2xl uppercase tracking-widest">{project.title}</span>
                    </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-500 mb-6 text-sm leading-relaxed font-light">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-40 relative overflow-hidden bg-slate-900 text-white w-full">
         <div className="absolute inset-0 bg-mesh opacity-20" />
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10 px-4"
         >
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tighter">Ready to ignite your next project?</h2>
            <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-light">
                Let&apos;s build something extraordinary together. I&apos;m currently available for freelance projects and full-time inquiries.
            </p>
            <Link href="/contact" className="inline-block">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center gap-3"
                >
                    <Mail size={24} /> Get In Touch
                </motion.button>
            </Link>
         </motion.div>
      </section>
    </div>
  );
}
