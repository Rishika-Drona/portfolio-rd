
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
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.body.style.backgroundImage = "url('/lovable-uploads/3e140b61-d18d-429e-9b3a-eb7e36c09186.png')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    
    const existingOverlay = document.getElementById('background-overlay');
    if (existingOverlay) {
      document.body.removeChild(existingOverlay);
    }
    
    const overlay = document.createElement('div');
    overlay.id = 'background-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)';
    overlay.style.zIndex = '0';
    overlay.style.pointerEvents = 'none';
    
    if (document.body.firstChild) {
      document.body.insertBefore(overlay, document.body.firstChild);
    } else {
      document.body.appendChild(overlay);
    }

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
    
    const initTiltEffect = () => {
      const cards = document.querySelectorAll('.neo-card, .project-card, .parallax-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateY = ((x - centerX) / centerX) * 15;
          const rotateX = ((centerY - y) / centerY) * 12;
          
          (card as HTMLElement).style.setProperty('--rotate-x', `${rotateX}deg`);
          (card as HTMLElement).style.setProperty('--rotate-y', `${rotateY}deg`);
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
          
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
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      // Window resize handler if needed
    });
    
    handleScroll();
    
    setTimeout(() => {
      initTiltEffect();
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
      
      const backgroundOverlay = document.getElementById('background-overlay');
      if (backgroundOverlay) document.body.removeChild(backgroundOverlay);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen overflow-x-hidden relative z-10" style={{ perspective: '1000px' }}>
      <BackgroundAnimation />
      <Navbar />
      
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
