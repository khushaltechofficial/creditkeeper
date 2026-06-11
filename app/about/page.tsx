"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react';

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "₹10Cr+", label: "Credits Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "App Rating" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative flex flex-col">
      {/* Background glowing orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/features" className="text-sm font-medium text-gray-400 hover:text-white transition">Features</Link>
            <Link href="/about" className="text-sm font-bold text-white transition">About</Link>
            <a href="https://play.google.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95">
              Download App
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Empowering local <br /><span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">businesses to grow.</span></h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Credit Keeper was built with a single mission: to help shopkeepers, small business owners, and merchants replace their traditional paper ledgers with a secure, digital, and automated platform.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-400" size={24} />
                  <span className="font-medium text-gray-300">100% Secure</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartHandshake className="text-pink-400" size={24} />
                  <span className="font-medium text-gray-300">Made for Bharat</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#0f172a] border border-white/10 p-6 rounded-2xl text-center flex flex-col justify-center min-h-[140px]">
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center"
          >
            <Target size={48} className="text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
              To digitally transform 1 million micro and small businesses across the country by providing them with enterprise-grade financial tracking tools that are as simple to use as a piece of paper.
            </p>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0f1c] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            &copy; 2026 Credit Keeper. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
            <Link href="/delete-account" className="text-gray-400 hover:text-white transition">Delete Account</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
