"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-12 px-4 max-w-7xl mx-auto pb-24 flex flex-col lg:flex-row gap-12">
      {/* Left Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/3"
      >
        <h1 className="text-5xl font-bold mb-6 text-foreground">Let&apos;s Talk</h1>
        <p className="text-lg text-slate-500 mb-10 font-light leading-relaxed">
          Whether you have a question about a complex system setup, an app idea, or just want to connect, feel free to reach out.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Email</h4>
              <p className="text-slate-500 text-sm">hello@rioandhika.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Location</h4>
              <p className="text-slate-500 text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Phone</h4>
              <p className="text-slate-500 text-sm">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-2/3"
      >
        <AnimatedCard className="border shadow-xl shadow-blue-900/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all font-light"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all resize-none font-light"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-500/20"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </AnimatedCard>
      </motion.div>
    </div>
  );
}
