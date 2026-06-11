"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ShieldCheck, Zap, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      {/* Background glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition">Features</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition">About</Link>
            <a href="https://play.google.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95">
              Download App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <Zap size={16} /> #1 App for Business Owners & Shopkeepers
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Manage Customer Credits <br className="hidden md:block" /> with <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Absolute Ease</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mb-12"
        >
          Replace your traditional ledger with a powerful, secure, and modern digital khata. Track payments, send reminders, and grow your business today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4"
        >
          <a href="https://play.google.com" className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95">
            Get it on Play Store
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link href="/features" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
            Explore Features
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center gap-4 text-gray-400 text-sm"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0f1c] bg-gray-700 flex items-center justify-center">
                <Star size={12} className="text-yellow-400" />
              </div>
            ))}
          </div>
          <p>Trusted by <span className="text-white font-medium">10,000+</span> businesses</p>
        </motion.div>

        {/* Floating App Mockup (Visual Polish) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full max-w-4xl h-64 md:h-96 rounded-t-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent flex items-end justify-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="w-[80%] h-[90%] bg-[#0f172a] rounded-t-2xl border-t border-l border-r border-white/10 shadow-2xl flex flex-col relative z-10">
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1e293b]/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
              
              <div className="text-center relative z-10">
                <ShieldCheck size={64} className="text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">100% Secure & Offline</h3>
                <p className="text-gray-400 max-w-sm mx-auto">Your ledger data is encrypted and saved directly on your device. Complete privacy, zero compromises.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0f1c] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            &copy; 2026 Credit Keeper. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
            <a href="mailto:smartkhushal2007@gmail.com" className="text-gray-400 hover:text-white transition">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
