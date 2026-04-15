import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

export default function Comparison() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-blue-500/5 -translate-y-1/2 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-main">Why we built FinAI</h2>
          <p className="text-text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Traditional calculators are broken. They require you to know the answers before you even ask the question.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease }}
            className="feature-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
            <h3 className="text-2xl font-semibold mb-10 text-text-dim tracking-tight">Traditional Calculators</h3>
            
            <ul className="space-y-6">
              {[
                "Endless manual form fields",
                "Requires knowing exact interest rates",
                "Outputs raw numbers, no context",
                "Ignores your overall financial health",
                "No actionable suggestions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-text-dim">
                  <div className="mt-1 bg-red-500/10 p-1.5 rounded-full shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI Platform */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="glass-card p-10 relative overflow-hidden glow-border"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[60px] rounded-full"></div>
            
            <h3 className="text-2xl font-semibold mb-10 text-text-main flex items-center gap-3 tracking-tight">
              FinAI Platform
              <span className="px-2.5 py-1 rounded-md text-[11px] uppercase tracking-widest bg-blue-500/20 text-blue-300 font-bold">Next Gen</span>
            </h3>
            
            <ul className="space-y-6">
              {[
                "Ask questions in plain English",
                "Auto-fetches current market rates",
                "Provides clear YES/NO decisions",
                "Analyzes your complete risk profile",
                "Gives smart, actionable recommendations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-text-main">
                  <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
