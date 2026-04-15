import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-display font-extrabold text-2xl tracking-tight text-gradient">FinAI</span>
            </div>
            <p className="text-[15px] text-text-dim max-w-xs leading-relaxed">
              Empowering individuals to make data-backed financial decisions with the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-8 tracking-tight">Calculators</h4>
            <ul className="space-y-5 text-[15px] text-text-dim">
              <li><a href="#" className="hover:text-text-main transition-colors">Loan Affordability</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Car Purchase</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Salary Checker</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Tax Estimator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-8 tracking-tight">Resources</h4>
            <ul className="space-y-5 text-[15px] text-text-dim">
              <li><a href="#" className="hover:text-text-main transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Financial Guide</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-8 tracking-tight">Legal</h4>
            <ul className="space-y-5 text-[15px] text-text-dim">
              <li><a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-text-main transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-text-dim">
            © {new Date().getFullYear()} FinAI. All rights reserved.
          </p>
          <div className="flex gap-4 text-[14px] text-text-dim">
            <span>Built for the future of finance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
