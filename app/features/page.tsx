"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Bell, Lock, Smartphone, Users, CheckCircle, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Customer Khata",
    description: "Easily add and manage all your customers in one place with complete profiles and running balances."
  },
  {
    icon: BarChart3,
    title: "Payment Tracking",
    description: "Track payments, due dates, and payment history with detailed and intuitive analytics."
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Send automated WhatsApp/SMS reminders for upcoming payments and never miss a collection."
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your data is encrypted and protected with PIN/biometric authentication directly on your device."
  },
  {
    icon: Smartphone,
    title: "Cloud Synchronization",
    description: "Your business data is safely stored in the cloud. Access your ledger from any device instantly."
  },
  {
    icon: Shield,
    title: "Automated Backup",
    description: "Never lose your data. Secure, encrypted cloud backups ensure your business records are always safe."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative flex flex-col">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            💳 Credit Keeper
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/features" className="text-sm font-bold text-white transition">Features</Link>
            <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white transition">About</Link>
            <a href="https://play.google.com" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95">
              Download App
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Everything you need to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">manage credits</span>.</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Credit Keeper brings enterprise-level ledger management to your mobile phone. Simple, secure, and incredibly powerful.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:bg-[#1e293b] transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110" />
                <feature.icon size={36} className="text-blue-400 mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            ))}
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
