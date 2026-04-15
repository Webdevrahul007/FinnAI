import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="canvas text-text-main selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <UseCases />
          <Comparison />
          <HowItWorks />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
