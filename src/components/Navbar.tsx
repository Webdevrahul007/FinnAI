import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const ease = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-2xl tracking-tight text-gradient">FinAI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-text-dim hover:text-text-main transition-colors">Products</a>
          <a href="#how-it-works" className="text-sm font-medium text-text-dim hover:text-text-main transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-text-dim hover:text-text-main transition-colors">Security</a>
          <a href="#company" className="text-sm font-medium text-text-dim hover:text-text-main transition-colors">Company</a>
          <ThemeToggle />
          <button className="px-5 py-2.5 text-sm font-semibold bg-surface text-text-main border border-border rounded-full hover:bg-surface-hover transition-all hover:scale-105 active:scale-95">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-text-dim hover:text-text-main transition-colors p-2 -mr-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="p-6 flex flex-col gap-5">
              <a href="#features" className="text-base font-medium text-text-dim hover:text-text-main transition-colors" onClick={() => setIsOpen(false)}>Products</a>
              <a href="#how-it-works" className="text-base font-medium text-text-dim hover:text-text-main transition-colors" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#testimonials" className="text-base font-medium text-text-dim hover:text-text-main transition-colors" onClick={() => setIsOpen(false)}>Security</a>
              <a href="#company" className="text-base font-medium text-text-dim hover:text-text-main transition-colors" onClick={() => setIsOpen(false)}>Company</a>
              <button className="mt-4 px-5 py-3.5 text-sm font-semibold bg-surface text-text-main border border-border rounded-xl w-full active:scale-95 transition-transform">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
