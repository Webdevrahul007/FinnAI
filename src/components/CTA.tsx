import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden glow-border"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-text-main">
              Ready to make <span className="text-gradient">smarter</span> <br className="hidden md:block" />
              financial decisions?
            </h2>
            <p className="text-lg md:text-xl text-text-dim mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have stopped guessing and started knowing. It's 100% free to try.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button className="px-8 py-4 cta-button rounded-full flex items-center justify-center gap-2 group font-semibold text-base">
                Try Calculator
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-surface text-text-main border border-border font-semibold rounded-full hover:bg-surface-hover transition-colors text-base">
                Explore Tools
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
