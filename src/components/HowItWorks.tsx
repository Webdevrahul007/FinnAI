import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Zap } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: MessageSquare,
    title: "Ask your question",
    desc: "Type your financial scenario in plain English. No complex forms or jargon required."
  },
  {
    icon: Cpu,
    title: "AI analyzes data",
    desc: "Our engine runs thousands of simulations against current market rates and your profile."
  },
  {
    icon: Zap,
    title: "Get instant decision",
    desc: "Receive a clear YES/NO answer, risk assessment, and actionable next steps."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-main">How it works</h2>
          <p className="text-text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Complex financial modeling, simplified into three easy steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 rounded-full glass-card flex items-center justify-center mb-10 relative z-10 glow-border group-hover:scale-105 transition-transform duration-500">
                <step.icon className="w-10 h-10 text-blue-400" />
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-base border-4 border-background shadow-lg">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-text-main tracking-tight">{step.title}</h3>
              <p className="text-text-dim leading-relaxed max-w-xs text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
