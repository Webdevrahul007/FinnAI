import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ease = [0.16, 1, 0.3, 1];

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '' });

export default function Hero() {
  const [query, setQuery] = useState("Can I afford a $45k car on a $90k salary?");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    decision: string;
    explanation: string;
    riskLevel: string;
    riskScore: number;
  } | null>(null);

  const handleAnalyze = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const prompt = `
        Analyze this financial question: "${query}"
        
        Provide a JSON response with the following structure:
        {
          "decision": "A short, punchy decision (e.g., 'YES, BUT CAUTIOUSLY', 'NO, TOO RISKY', 'YES, GO FOR IT')",
          "explanation": "A 2-3 sentence explanation of the reasoning.",
          "riskLevel": "A single word risk level (e.g., 'Low', 'Moderate', 'High')",
          "riskScore": A number between 0 and 100 representing the risk (0 is lowest risk, 100 is highest risk)
        }
        
        Ensure the response is valid JSON and contains only the JSON object.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const text = response.text;
      if (text) {
        const parsed = JSON.parse(text);
        setResult(parsed);
      }
    } catch (error) {
      console.error("Error analyzing query:", error);
      // Fallback for demo purposes if API fails
      setResult({
        decision: "UNABLE TO ANALYZE",
        explanation: "There was an error connecting to the AI engine. Please try again later.",
        riskLevel: "Unknown",
        riskScore: 0
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-text-main tracking-wide uppercase">FinAI Engine 2.0 Live</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text-main mb-8">
              Make <span className="text-gradient">smarter</span> <br className="hidden md:block" />
              financial decisions <br className="hidden md:block" />
              in seconds.
            </h1>
            
            <p className="text-lg md:text-xl text-text-dim mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Not spreadsheets. Not guesswork. Just clear, actionable answers to your most complex financial questions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <button className="w-full sm:w-auto px-8 py-4 cta-button rounded-full flex items-center justify-center gap-2 group font-semibold text-base">
                Start for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-surface text-text-main border border-border font-semibold rounded-full hover:bg-surface-hover transition-colors text-base">
                View demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-text-dim font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Real-time market data</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2rem] blur transition-opacity duration-500 ${isLoading ? 'opacity-40 animate-pulse' : 'opacity-0'}`}></div>
            <div className="glass-card p-8 relative">
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-text-dim mb-3">Ask FinAI anything</label>
                <div className="ai-input-box p-2 flex items-center gap-3">
                  <div className="flex-1 pl-4">
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                      placeholder="e.g., Can I afford a $45k car on a $90k salary?"
                      className="w-full bg-transparent border-none outline-none text-text-main text-base font-medium placeholder:text-text-dim/50"
                    />
                  </div>
                  <button 
                    onClick={handleAnalyze}
                    disabled={isLoading || !query.trim()}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500 text-white p-3 rounded-full transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-5 min-h-[200px]">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center h-full py-10 opacity-50">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
                    <p className="text-text-dim text-sm font-medium animate-pulse">Analyzing financial data...</p>
                  </div>
                ) : result ? (
                  <>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="data-item flex items-start gap-4"
                    >
                      <div className="mt-1">
                        <span className={`badge-yes ${
                          result.decision.includes('NO') ? '!text-red-500 !bg-red-500/10 !border-red-500/20' : 
                          result.decision.includes('CAUTIOUS') ? '!text-yellow-500 !bg-yellow-500/10 !border-yellow-500/20' : ''
                        }`}>
                          {result.decision}
                        </span>
                      </div>
                      <div>
                        <p className="text-text-main text-sm font-medium mb-1">Affordability Check</p>
                        <p className="text-text-dim text-sm leading-relaxed">{result.explanation}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.4, ease }}
                      className="data-item"
                    >
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-text-dim font-medium">Risk Profile</span>
                        <span className={`font-semibold ${
                          result.riskLevel.toLowerCase() === 'high' ? 'text-red-400' :
                          result.riskLevel.toLowerCase() === 'moderate' ? 'text-yellow-400' : 'text-green-400'
                        }`}>
                          {result.riskLevel}
                        </span>
                      </div>
                      <div className="risk-meter">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${result.riskScore}%` }}
                          transition={{ delay: 0.3, duration: 1, ease }}
                          className={`risk-fill ${
                            result.riskScore > 70 ? '!from-yellow-400 !to-red-500' :
                            result.riskScore > 30 ? '!from-green-400 !to-yellow-400' : '!from-blue-400 !to-green-400'
                          }`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6, ease }}
                      className="data-item flex items-start gap-4"
                    >
                      <div className="mt-1">
                        <span className="badge-yes">YES, BUT CAUTIOUSLY</span>
                      </div>
                      <div>
                        <p className="text-text-main text-sm font-medium mb-1">Affordability Check</p>
                        <p className="text-text-dim text-sm leading-relaxed">A $45k car exceeds the recommended 20% rule for your income. However, with your low current debt, it's manageable.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.6, ease }}
                      className="data-item"
                    >
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-text-dim font-medium">Risk Profile</span>
                        <span className="text-yellow-400 font-semibold">Moderate</span>
                      </div>
                      <div className="risk-meter">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '65%' }}
                          transition={{ delay: 1.4, duration: 1, ease }}
                          className="risk-fill"
                        ></motion.div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
