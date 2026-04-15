import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=sarah",
    quote: "I was stressed about buying a house. FinAI didn't just give me a mortgage estimate, it told me exactly how much I needed to save to keep my lifestyle intact. Incredible tool."
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=david",
    quote: "The car affordability analysis is mind-blowing. It factored in insurance and maintenance costs I hadn't even considered. Saved me from making a terrible financial mistake."
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?u=elena",
    quote: "Finally, a financial tool that speaks human. I asked 'Can I afford to take a 3-month sabbatical?' and it gave me a clear, actionable breakdown of my runway."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-surface border border-border backdrop-blur-md">
            <div className="w-2 h-2 rounded-full trust-dot"></div>
            <span className="text-xs font-medium text-text-main tracking-wide uppercase">Trusted by 10,000+ professionals</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-main">Don't just take our word for it</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
              className="glass rounded-[2rem] p-10 border-border hover:bg-surface-hover transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-text-dim leading-relaxed mb-10 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-5 mt-auto">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-border" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-semibold text-text-main tracking-tight text-lg">{t.name}</h4>
                  <p className="text-sm text-text-dim font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
