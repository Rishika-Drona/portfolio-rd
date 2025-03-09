
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import TableauVisualizations from '@/components/TableauVisualizations';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const trendingLinesRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Track mouse movement for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Make trending lines react to cursor
      if (trendingLinesRef.current) {
        const lines = trendingLinesRef.current.querySelectorAll('.trending-line');
        lines.forEach((line, index) => {
          const speed = index % 3 === 0 ? 0.05 : index % 3 === 1 ? 0.03 : 0.02;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (line as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(1px)`;
        });
        
        // Make particles follow cursor slightly
        const particles = trendingLinesRef.current.querySelectorAll('.floating-particle');
        particles.forEach((particle, index) => {
          const speed = 0.01 + (index % 5) * 0.002;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (particle as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(1px)`;
        });
      }
    };

    // Handle scroll animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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
      
      // Parallax effect on scroll
      document.querySelectorAll('.parallax-element').forEach((elem, i) => {
        const speed = i % 2 === 0 ? 0.1 : 0.05;
        const yPos = -window.scrollY * speed;
        (elem as HTMLElement).style.transform = `translateY(${yPos}px) translateZ(2px)`;
      });
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
      for (let i = 0; i < 30; i++) {
        const line = document.createElement('div');
        line.classList.add('trending-line');
        
        // Alternate colors
        if (i % 5 === 0) {
          line.style.background = 'linear-gradient(90deg, rgba(155, 135, 245, 0), rgba(155, 135, 245, 0.9), rgba(155, 135, 245, 0))';
          line.style.height = '3px';
        } else if (i % 5 === 1) {
          line.style.background = 'linear-gradient(90deg, rgba(255, 135, 177, 0), rgba(255, 135, 177, 0.8), rgba(255, 135, 177, 0))';
          line.style.height = '2px';
        } else if (i % 5 === 2) {
          line.style.background = 'linear-gradient(90deg, rgba(135, 206, 255, 0), rgba(135, 206, 255, 0.7), rgba(135, 206, 255, 0))';
          line.style.height = '2px';
        } else if (i % 5 === 3) {
          line.style.background = 'linear-gradient(90deg, rgba(190, 240, 150, 0), rgba(190, 240, 150, 0.7), rgba(190, 240, 150, 0))';
          line.style.height = '2.5px';
        } else {
          line.style.background = 'linear-gradient(90deg, rgba(240, 180, 130, 0), rgba(240, 180, 130, 0.8), rgba(240, 180, 130, 0))';
          line.style.height = '1.5px';
        }
        
        // Add reverse direction for half the lines
        if (i % 2 === 0) line.classList.add('reverse');
        
        // Random positioning and sizing
        line.style.width = `${Math.random() * 40 + 20}%`;
        line.style.top = `${Math.random() * containerHeight}px`;
        line.style.left = `${Math.random() * containerWidth}px`;
        
        // Different animation speeds
        const duration = 5 + Math.random() * 12;
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
      for (let i = 0; i < 25; i++) {
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
        const colorSchemes = [
          [220, 80, 70], // Blue-purple
          [280, 75, 75], // Purple
          [170, 80, 75], // Teal
          [330, 80, 75], // Pink
          [45, 80, 75],  // Gold
        ];
        
        const scheme = colorSchemes[i % colorSchemes.length];
        const hue = scheme[0] + Math.floor(Math.random() * 20) - 10;
        const saturation = scheme[1] + Math.floor(Math.random() * 10) - 5;
        const lightness = scheme[2] + Math.floor(Math.random() * 10) - 5;
        
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.2})`;
        particle.style.boxShadow = `0 0 ${Math.floor(size * 1.5)}px ${Math.floor(size / 2)}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
        
        // Animation
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.setProperty('--direction', Math.random() > 0.5 ? '1' : '-1');
        particle.style.setProperty('--float-factor', `${Math.random() * 0.8 + 0.6}`);
        
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
          
          const rotateY = ((x - centerX) / centerX) * 10;
          const rotateX = ((centerY - y) / centerY) * 8;
          
          (card as HTMLElement).style.setProperty('--rotate-x', `${rotateX}deg`);
          (card as HTMLElement).style.setProperty('--rotate-y', `${rotateY}deg`);
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
          
          // Add glare effect based on tilt
          const glare = card.querySelector('.card-glare') as HTMLElement;
          if (glare) {
            const glarePos = (x / rect.width) * 100;
            glare.style.background = `
              linear-gradient(
                ${90 + rotateY}deg, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.03) 40%, 
                rgba(255, 255, 255, 0.2) 45%, 
                rgba(255, 255, 255, 0.03) 50%, 
                rgba(255, 255, 255, 0) 100%
              )
            `;
            glare.style.opacity = `${0.2 + Math.abs(rotateY) / 30}`;
          }
        });
        
        card.addEventListener('mouseleave', () => {
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
          const glare = card.querySelector('.card-glare');
          if (glare) {
            (glare as HTMLElement).style.opacity = '0';
          }
        });
        
        // Add glare element if not present
        if (!card.querySelector('.card-glare')) {
          const glare = document.createElement('div');
          glare.classList.add('card-glare');
          glare.style.position = 'absolute';
          glare.style.top = '0';
          glare.style.left = '0';
          glare.style.width = '100%';
          glare.style.height = '100%';
          glare.style.pointerEvents = 'none';
          glare.style.opacity = '0';
          glare.style.zIndex = '1';
          glare.style.transition = 'opacity 0.3s ease';
          glare.style.borderRadius = 'inherit';
          card.appendChild(glare);
        }
      });
    };
    
    // Initialize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
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
      window.removeEventListener('mousemove', handleMouseMove);
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
        <TableauVisualizations />
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
            <a href="https://public.tableau.com/app/profile/rishika.drona/vizzes" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              Tableau
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
