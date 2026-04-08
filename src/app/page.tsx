"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";
import { ArrowRight, Code2, LayoutDashboard, Database, Paintbrush, ExternalLink, ChevronRight, Mail } from "lucide-react";
import { SiTailwindcss } from "react-icons/si";

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textInfo = texts[currentIndex];
    let typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && currentText === textInfo) {
      const timer = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
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
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const skills = [
    { title: "Next.js 14", icon: <Code2 strokeWidth={1.5} size={36} /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss size={36} /> },
    { title: "Systems Analysis", icon: <Database strokeWidth={1.5} size={36} /> },
    { title: "UI/UX Design", icon: <Paintbrush strokeWidth={1.5} size={36} /> },
  ];

  const previewProjects = [
    {
      title: "Smart Logistics Dashboard",
      description: "A comprehensive data visualization dashboard tracking real-time logistics networks and predicting potential supply chain bottlenecks.",
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
      {/* Animated Mesh Background globally attached to hero */}
      <div className="bg-mesh" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative w-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="z-10 w-full max-w-5xl"
          style={{ y: yParallax }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center px-6 py-2 rounded-full glass border border-white/50 text-slate-700 font-semibold text-sm sm:text-base mb-8 shadow-sm tracking-wide"
          >
            I am a <span className="ml-[1ch]"><Typewriter texts={["Senior Fullstack Developer", "Founder of Aether Nusantara", "Creative Director", "Systems Analyst"]} /></span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] font-extrabold tracking-tighter text-slate-800 mb-8 leading-[1.1]">
            Building <span className="text-gradient drop-shadow-sm">Digital</span> <br className="hidden sm:block" /> Experiences
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light px-4 sm:px-0">
            I craft high-performance, beautiful user interfaces that bridge the gap between complex enterprise data and intuitive modern design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-8 sm:px-0">
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.4)] flex items-center justify-center gap-2"
              >
                View Works <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto glass hover:bg-white text-slate-800 px-8 py-4 rounded-full font-bold transition-all border border-slate-200/60 shadow-sm"
              >
                Learn More About Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 block">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Core Technology Stack</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Combining the theoretical foundations of Information Systems with cutting-edge web technologies to engineer robust architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="flex flex-col items-center text-center p-8 group">
              <div className="p-5 bg-white/80 border border-slate-100 text-blue-600 rounded-2xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_30px_rgb(37,99,235,0.3)] transition-all duration-500">
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800">{skill.title}</h3>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-50 relative z-10 w-full border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block">Background Overview</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Information Systems <br/> meets Creative Design</h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
              As an S1 Information Systems student and the Founder of <strong className="font-semibold text-slate-900 border-b border-blue-200">Aether Nusantara</strong>, I embrace enterprise architecture, database structuring, and human-computer interaction. My fullstack perspective ensures the frontend wow factor is backed by a secure, deeply scalable baseline.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2 group text-base sm:text-lg">
              Discover my journey <ChevronRight strokeWidth={2.5} size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden h-[350px] sm:h-[400px] flex items-center justify-center isolation-auto border border-white/80 shadow-[0_20px_60px_-15px_rgb(0,0,0,0.05)]">
               <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay backdrop-blur-2xl" />
               
               {/* Animated rings inside the card */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[200%] h-[200%] border border-blue-100/50 rounded-full border-dashed opacity-50 pointer-events-none" />
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[150%] h-[150%] border border-blue-200/50 rounded-full opacity-30 pointer-events-none" />

               <div className="relative text-center z-10 w-full">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/10 border-4 border-slate-50">
                    <span className="text-3xl font-extrabold tracking-tighter">AN<span className="text-slate-400">.</span></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Aether Nusantara</h3>
                  <p className="text-slate-500 mt-2 font-medium">Bridging Innovation and Technology</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-6 sm:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block mb-3">Portfolio Highlights</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Selected Works</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/projects" className="hidden sm:flex items-center gap-2 px-7 py-3 rounded-full border-2 border-slate-100 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors font-bold shadow-sm hover:shadow-md bg-white">
              View Complete Archive
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {previewProjects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="flex flex-col h-full border border-slate-100 bg-white/60 !p-6 sm:!p-8">
              <div className="h-64 sm:h-80 w-full bg-slate-100 rounded-2xl mb-8 overflow-hidden relative group shadow-inner">
                  {/* Modern image placeholder grid effect */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/agsquare.png')] opacity-[0.03]"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50/40 flex items-center justify-center text-slate-400 font-bold text-xl sm:text-2xl tracking-widest uppercase group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {project.title}
                  </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">{project.title}</h3>
              <p className="text-slate-500 mb-8 flex-grow text-base sm:text-lg leading-relaxed font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end pt-5 border-t border-slate-100">
                <Link href="/projects" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  Case Study <ExternalLink strokeWidth={2.5} size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center sm:hidden">
            <Link href="/projects" className="w-full flex justify-center items-center gap-2 px-7 py-4 rounded-full border-2 border-slate-100 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors font-bold shadow-sm bg-white">
              View Complete Archive
            </Link>
        </div>
      </section>

      {/* Ultra Premium CTA Section */}
      <section className="py-32 sm:py-40 border-t border-slate-100 relative overflow-hidden mt-12 w-full">
        {/* Dynamic CTA Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900 z-0"></div>
          <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -left-[20%] w-[100%] h-[150%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></motion.div>
          <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[50%] -right-[20%] w-[100%] h-[150%] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></motion.div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] opacity-[0.05] z-0"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight drop-shadow-lg">Have a vision?<br/>Let's collaborate.</h2>
          <p className="text-blue-100/80 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            From ambitious data platforms to structural UI overhauls, I handle design through to scalable deployment.
          </p>
          <Link href="/contact" className="inline-block w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-full font-extrabold text-lg sm:text-xl transition-all shadow-[0_10px_40px_rgb(255,255,255,0.2)] flex items-center justify-center gap-3 mx-auto border-4 border-white/20 hover:border-white/50 bg-clip-padding"
            >
              <Mail size={24} strokeWidth={2.5} /> Start a Project Together
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
