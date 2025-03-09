
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const trendingLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-appear');
      
      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        const elementVisible = 150;
        
        if (elementPosition.top < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      // Show/hide back to top button
      const scrollButton = document.getElementById('back-to-top');
      if (scrollButton) {
        if (window.scrollY > 500) {
          scrollButton.classList.remove('opacity-0');
          scrollButton.classList.add('opacity-100');
        } else {
          scrollButton.classList.remove('opacity-100');
          scrollButton.classList.add('opacity-0');
        }
      }
    };
    
    // Create trending lines animation
    const createTrendingLines = () => {
      if (!trendingLinesRef.current) return;
      
      // Clear existing lines
      while (trendingLinesRef.current.firstChild) {
        trendingLinesRef.current.removeChild(trendingLinesRef.current.firstChild);
      }
      
      const container = trendingLinesRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Create more visible lines with different sizes and speeds
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.classList.add('trending-line');
        
        // Alternate colors
        if (i % 3 === 0) {
          line.style.background = 'linear-gradient(90deg, rgba(155, 135, 245, 0), rgba(155, 135, 245, 0.9), rgba(155, 135, 245, 0))';
          line.style.height = '3px';
        } else if (i % 3 === 1) {
          line.style.background = 'linear-gradient(90deg, rgba(255, 135, 177, 0), rgba(255, 135, 177, 0.8), rgba(255, 135, 177, 0))';
          line.style.height = '2px';
        } else {
          line.style.background = 'linear-gradient(90deg, rgba(135, 206, 255, 0), rgba(135, 206, 255, 0.7), rgba(135, 206, 255, 0))';
          line.style.height = '2px';
        }
        
        // Add reverse direction for half the lines
        if (i % 2 === 0) line.classList.add('reverse');
        
        // Random positioning and sizing
        line.style.width = `${Math.random() * 40 + 20}%`;
        line.style.top = `${Math.random() * containerHeight}px`;
        line.style.left = `${Math.random() * containerWidth}px`;
        
        // Different animation speeds
        const duration = 5 + Math.random() * 8;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        
        // Increase opacity
        line.style.opacity = `${0.5 + Math.random() * 0.5}`;
        
        container.appendChild(line);
      }
    };
    
    // Create floating particles
    const createFloatingParticles = () => {
      if (!trendingLinesRef.current) return;
      
      const container = trendingLinesRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Add some floating particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Random size
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.top = `${Math.random() * containerHeight}px`;
        particle.style.left = `${Math.random() * containerWidth}px`;
        
        // Random color
        const hue = Math.floor(Math.random() * 60) + 220; // Blue-purple range
        particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.5 + 0.2})`;
        
        // Animation
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    };
    
    // Parallax tilt effect for cards
    const initTiltEffect = () => {
      const cards = document.querySelectorAll('.neo-card, .project-card, .parallax-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateY = ((x - centerX) / centerX) * 5;
          const rotateX = ((centerY - y) / centerY) * 5;
          
          (card as HTMLElement).style.setProperty('--rotate-x', `${rotateX}deg`);
          (card as HTMLElement).style.setProperty('--rotate-y', `${rotateY}deg`);
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
      });
    };
    
    // Initialize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      createTrendingLines();
      createFloatingParticles();
    });
    
    handleScroll(); // Check on initial load
    createTrendingLines();
    createFloatingParticles();
    
    // Add slight delay to ensure DOM is fully loaded
    setTimeout(() => {
      initTiltEffect();
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', createTrendingLines);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ perspective: '1000px' }}>
      <Navbar />
      
      {/* Trending lines background */}
      <div 
        ref={trendingLinesRef} 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-8 text-center bg-primary/5 relative z-10 transform-style-preserve-3d">
        <div className="main-container">
          <p className="text-sm text-gray-600 transform-z-1">© {new Date().getFullYear()} Rishika Drona. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/Rishika-Drona" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              GitHub
            </a>
            <a href="https://linkedin.com/in/rishika-drona" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              LinkedIn
            </a>
            <a href="mailto:rishikadrona.rd@gmail.com" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              Email
            </a>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-3d opacity-0 transition-opacity duration-300 hover:bg-primary/90 focus:outline-none z-50 transform-z-5"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
