
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import TableauVisualizations from '@/components/TableauVisualizations';
import BlogPosts from '@/components/BlogPosts';
import Certifications from '@/components/Certifications';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const trendingLinesRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Track mouse movement for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Make trending lines react to cursor with larger movement
      if (trendingLinesRef.current) {
        const lines = trendingLinesRef.current.querySelectorAll('.trending-line');
        lines.forEach((line, index) => {
          const speed = index % 3 === 0 ? 0.08 : index % 3 === 1 ? 0.05 : 0.03;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (line as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(2px)`;
        });
        
        // Make particles follow cursor with more dramatic movement
        const particles = trendingLinesRef.current.querySelectorAll('.floating-particle');
        particles.forEach((particle, index) => {
          const speed = 0.02 + (index % 5) * 0.004;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (particle as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(2px) scale(${1 + speed})`;
        });
      }
    };

    // Handle scroll animations with more dramatic effects
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
      
      // Enhanced parallax effect on scroll
      document.querySelectorAll('.parallax-element').forEach((elem, i) => {
        const speed = i % 2 === 0 ? 0.15 : 0.08;
        const yPos = -window.scrollY * speed;
        (elem as HTMLElement).style.transform = `translateY(${yPos}px) translateZ(3px)`;
      });
    };
    
    // Create more visible trending lines with enhanced animations
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
      for (let i = 0; i < 45; i++) {
        const line = document.createElement('div');
        line.classList.add('trending-line');
        
        // Alternate colors with more vibrant options
        if (i % 7 === 0) {
          line.style.background = 'linear-gradient(90deg, rgba(155, 135, 245, 0), rgba(155, 135, 245, 1), rgba(155, 135, 245, 0))';
          line.style.height = '4px';
        } else if (i % 7 === 1) {
          line.style.background = 'linear-gradient(90deg, rgba(255, 135, 177, 0), rgba(255, 135, 177, 0.9), rgba(255, 135, 177, 0))';
          line.style.height = '3px';
        } else if (i % 7 === 2) {
          line.style.background = 'linear-gradient(90deg, rgba(135, 206, 255, 0), rgba(135, 206, 255, 0.8), rgba(135, 206, 255, 0))';
          line.style.height = '3.5px';
        } else if (i % 7 === 3) {
          line.style.background = 'linear-gradient(90deg, rgba(190, 240, 150, 0), rgba(190, 240, 150, 0.8), rgba(190, 240, 150, 0))';
          line.style.height = '2.5px';
        } else if (i % 7 === 4) {
          line.style.background = 'linear-gradient(90deg, rgba(240, 180, 130, 0), rgba(240, 180, 130, 0.9), rgba(240, 180, 130, 0))';
          line.style.height = '3px';
        } else if (i % 7 === 5) {
          line.style.background = 'linear-gradient(90deg, rgba(180, 130, 240, 0), rgba(180, 130, 240, 0.8), rgba(180, 130, 240, 0))';
          line.style.height = '2.5px';
        } else {
          line.style.background = 'linear-gradient(90deg, rgba(130, 210, 210, 0), rgba(130, 210, 210, 0.9), rgba(130, 210, 210, 0))';
          line.style.height = '3px';
        }
        
        // Add reverse direction for half the lines
        if (i % 2 === 0) line.classList.add('reverse');
        
        // Random positioning and sizing
        line.style.width = `${Math.random() * 50 + 30}%`;
        line.style.top = `${Math.random() * containerHeight}px`;
        line.style.left = `${Math.random() * containerWidth}px`;
        
        // Different animation speeds
        const duration = 4 + Math.random() * 10;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        
        // Increase opacity for more visibility
        line.style.opacity = `${0.6 + Math.random() * 0.4}`;
        
        container.appendChild(line);
      }
    };
    
    // Create enhanced floating particles
    const createFloatingParticles = () => {
      if (!trendingLinesRef.current) return;
      
      const container = trendingLinesRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Add more floating particles with enhanced glow
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Varying sizes with some larger ones
        const size = Math.random() * 12 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.top = `${Math.random() * containerHeight}px`;
        particle.style.left = `${Math.random() * containerWidth}px`;
        
        // Vibrant color schemes
        const colorSchemes = [
          [220, 90, 75], // Blue-purple
          [280, 90, 80], // Purple
          [170, 90, 80], // Teal
          [330, 90, 80], // Pink
          [45, 90, 80],  // Gold
          [0, 85, 75],   // Red
          [200, 95, 75], // Cyan
        ];
        
        const scheme = colorSchemes[i % colorSchemes.length];
        const hue = scheme[0] + Math.floor(Math.random() * 20) - 10;
        const saturation = scheme[1] + Math.floor(Math.random() * 10) - 5;
        const lightness = scheme[2] + Math.floor(Math.random() * 10) - 5;
        
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.3})`;
        
        // Enhanced glow effect
        particle.style.boxShadow = `0 0 ${Math.floor(size * 2.5)}px ${Math.floor(size / 1.5)}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.4)`;
        
        // Animation
        particle.style.animationDuration = `${Math.random() * 15 + 8}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.setProperty('--direction', Math.random() > 0.5 ? '1' : '-1');
        particle.style.setProperty('--float-factor', `${Math.random() * 1.2 + 0.8}`);
        
        container.appendChild(particle);
      }
    };
    
    // Enhanced parallax tilt effect for cards
    const initTiltEffect = () => {
      const cards = document.querySelectorAll('.neo-card, .project-card, .parallax-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // More pronounced tilt effect
          const rotateY = ((x - centerX) / centerX) * 15;
          const rotateX = ((centerY - y) / centerY) * 12;
          
          (card as HTMLElement).style.setProperty('--rotate-x', `${rotateX}deg`);
          (card as HTMLElement).style.setProperty('--rotate-y', `${rotateY}deg`);
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
          
          // Enhanced glare effect based on tilt
          const glare = card.querySelector('.card-glare') as HTMLElement;
          if (glare) {
            const glarePos = (x / rect.width) * 100;
            glare.style.background = `
              linear-gradient(
                ${90 + rotateY}deg, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.03) 40%, 
                rgba(255, 255, 255, 0.3) 45%, 
                rgba(255, 255, 255, 0.03) 50%, 
                rgba(255, 255, 255, 0) 100%
              )
            `;
            glare.style.opacity = `${0.3 + Math.abs(rotateY) / 20}`;
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
        <Certifications />
        <TableauVisualizations />
        <BlogPosts />
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
            <a href="https://medium.com/@rishikadrona.rd" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              Blog
            </a>
            <a href="mailto:rishikadrona.rd@gmail.com" className="text-gray-600 hover:text-primary transition-colors transform-z-2">
              Email
            </a>
          </div>
        </div>
      </footer>
      
      {/* Back to top button with enhanced animation */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-3d opacity-0 transition-opacity duration-300 hover:bg-primary/90 hover:shadow-3d-hover hover:scale-110 focus:outline-none z-50 transform-z-5 group"
        aria-label="Back to top"
      >
        <ArrowUp size={24} className="animate-bounce-subtle group-hover:animate-none group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </div>
  );
};

export default Index;
