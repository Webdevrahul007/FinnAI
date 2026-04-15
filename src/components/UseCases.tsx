import { motion } from 'framer-motion';
import { Car, Home, Wallet, Calculator } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const cases = [
  {
    icon: Home,
    title: "Mortgage Check",
    desc: "Real-time affordability math for homebuyers.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Car,
    title: "Auto Financing",
    desc: "Is it a liability or a smart asset purchase?",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Calculator,
    title: "Tax Projection",
    desc: "Optimize your year-end tax strategy instantly.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Wallet,
    title: "Career Move",
    desc: "Analyze the long-term ROI of job offers.",
    color: "from-blue-500 to-blue-400"
  }
];

export default function UseCases() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-main">Stop guessing.<br className="md:hidden" /> Start knowing.</h2>
          <p className="text-text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Replace dozens of complex, outdated calculators with one intelligent AI assistant that understands your full financial picture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className="feature-card p-8 cursor-pointer flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-text-main tracking-tight">{item.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
