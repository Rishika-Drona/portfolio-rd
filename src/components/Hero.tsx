
import { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Github, Linkedin, BookOpen } from 'lucide-react';

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
      className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative"
    >
      {/* Simple background elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="main-container relative z-10">
        <div 
          ref={heroRef} 
          className="scroll-appear max-w-4xl"
        >
          <div className="tag mb-3 animate-fade-in">Data Scientist & ML/AI Engineer</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Rishika Drona</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Driving innovation through Data Science, Machine Learning and Artificial Intelligence solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="btn-primary group"
            >
              Get in touch
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:rishikadrona.rd@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.github.com/Rishika-Drona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rishika-drona" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://medium.com/@rishikadrona.rd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Blog"
            >
              <BookOpen size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-pulse-subtle">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <div className="w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
