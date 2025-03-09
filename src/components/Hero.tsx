
import { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="main-container">
        <div 
          ref={heroRef} 
          className="scroll-appear max-w-4xl"
        >
          <div className="tag mb-3 animate-fade-in">Data Scientist & ML Engineer</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Rishika Drona
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Driving innovation through data science and machine learning solutions, with expertise in ETL development, NLP, and MLOps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90"
            >
              Get in touch
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#experience" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium transition-all hover:bg-gray-200"
            >
              View experience
            </a>
          </div>
          
          <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:rishikadrona.rd@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.github.com/rishika-drona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rishika-drona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-pulse-subtle">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <div className="w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
