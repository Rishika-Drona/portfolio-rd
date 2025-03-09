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
import ResumeButton from '@/components/ResumeButton';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const trendingLinesRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      if (trendingLinesRef.current) {
        const lines = trendingLinesRef.current.querySelectorAll('.trending-line');
        lines.forEach((line, index) => {
          const speed = index % 3 === 0 ? 0.08 : index % 3 === 1 ? 0.05 : 0.03;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (line as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(2px)`;
        });
        
        const particles = trendingLinesRef.current.querySelectorAll('.floating-particle');
        particles.forEach((particle, index) => {
          const speed = 0.02 + (index % 5) * 0.004;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (particle as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(2px) scale(${1 + speed})`;
        });
        
        const bubbles = trendingLinesRef.current.querySelectorAll('.bg-bubble');
        bubbles.forEach((bubble, index) => {
          const speed = 0.03 + (index % 4) * 0.01;
          const xOffset = (e.clientX - window.innerWidth / 2) * speed;
          const yOffset = (e.clientY - window.innerHeight / 2) * speed;
          
          (bubble as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px) translateZ(3px) scale(${1 + speed/2})`;
        });
      }
    };

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
      
      document.querySelectorAll('.parallax-element').forEach((elem, i) => {
        const speed = i % 2 === 0 ? 0.15 : 0.08;
        const yPos = -window.scrollY * speed;
        (elem as HTMLElement).style.transform = `translateY(${yPos}px) translateZ(3px)`;
      });
    };
    
    const createBackgroundVisualizations = () => {
      if (!trendingLinesRef.current) return;
      
      while (trendingLinesRef.current.firstChild) {
        trendingLinesRef.current.removeChild(trendingLinesRef.current.firstChild);
      }
      
      const container = trendingLinesRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      for (let i = 0; i < 70; i++) {
        const line = document.createElement('div');
        line.classList.add('trending-line');
        
        if (i % 8 === 0) {
          line.style.background = 'linear-gradient(90deg, rgba(155, 135, 245, 0), rgba(155, 135, 245, 0.9), rgba(155, 135, 245, 0))';
          line.style.height = '4px';
        } else if (i % 8 === 1) {
          line.style.background = 'linear-gradient(90deg, rgba(255, 135, 177, 0), rgba(255, 135, 177, 0.8), rgba(255, 135, 177, 0))';
          line.style.height = '3px';
        } else if (i % 8 === 2) {
          line.style.background = 'linear-gradient(90deg, rgba(135, 206, 255, 0), rgba(135, 206, 255, 0.8), rgba(135, 206, 255, 0))';
          line.style.height = '3.5px';
        } else if (i % 8 === 3) {
          line.style.background = 'linear-gradient(90deg, rgba(190, 240, 150, 0), rgba(190, 240, 150, 0.8), rgba(190, 240, 150, 0))';
          line.style.height = '3px';
        } else if (i % 8 === 4) {
          line.style.background = 'linear-gradient(90deg, rgba(240, 180, 130, 0), rgba(240, 180, 130, 0.8), rgba(240, 180, 130, 0))';
          line.style.height = '3.5px';
        } else if (i % 8 === 5) {
          line.style.background = 'linear-gradient(90deg, rgba(180, 130, 240, 0), rgba(180, 130, 240, 0.8), rgba(180, 130, 240, 0))';
          line.style.height = '3px';
        } else if (i % 8 === 6) {
          line.style.background = 'linear-gradient(90deg, rgba(103, 232, 249, 0), rgba(103, 232, 249, 0.8), rgba(103, 232, 249, 0))';
          line.style.height = '4px';
        } else {
          line.style.background = 'linear-gradient(90deg, rgba(249, 168, 212, 0), rgba(249, 168, 212, 0.8), rgba(249, 168, 212, 0))';
          line.style.height = '3px';
        }
        
        if (i % 2 === 0) line.classList.add('reverse');
        
        line.style.width = `${Math.random() * 60 + 40}%`;
        line.style.top = `${Math.random() * containerHeight}px`;
        line.style.left = `${Math.random() * containerWidth}px`;
        
        const duration = 4 + Math.random() * 10;
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(line);
      }
      
      for (let i = 0; i < 20; i++) {
        const crossLine = document.createElement('div');
        crossLine.classList.add('trending-line', 'crossing-line');
        
        const colors = [
          'linear-gradient(90deg, rgba(255, 135, 177, 0), rgba(255, 135, 177, 0.7), rgba(255, 135, 177, 0))',
          'linear-gradient(90deg, rgba(103, 232, 249, 0), rgba(103, 232, 249, 0.7), rgba(103, 232, 249, 0))',
          'linear-gradient(90deg, rgba(190, 240, 150, 0), rgba(190, 240, 150, 0.7), rgba(190, 240, 150, 0))',
          'linear-gradient(90deg, rgba(155, 135, 245, 0), rgba(155, 135, 245, 0.7), rgba(155, 135, 245, 0))'
        ];
        
        crossLine.style.background = colors[i % colors.length];
        crossLine.style.height = '2px';
        crossLine.style.transform = `rotate(${Math.random() * 180}deg)`;
        crossLine.style.transformOrigin = 'center center';
        crossLine.style.width = `${Math.random() * 30 + 70}%`;
        crossLine.style.top = `${Math.random() * containerHeight}px`;
        crossLine.style.left = `${Math.random() * containerWidth / 2}px`;
        crossLine.style.animationDuration = `${10 + Math.random() * 15}s`;
        crossLine.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(crossLine);
      }
      
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        const size = Math.random() * 15 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.top = `${Math.random() * containerHeight}px`;
        particle.style.left = `${Math.random() * containerWidth}px`;
        
        const colorSchemes = [
          [220, 95, 75], // Blue-purple
          [280, 95, 80], // Purple
          [170, 95, 80], // Teal
          [330, 95, 80], // Pink
          [45, 95, 80],  // Gold
          [190, 95, 80], // Cyan
          [0, 95, 75],   // Red
        ];
        
        const scheme = colorSchemes[i % colorSchemes.length];
        const hue = scheme[0] + Math.floor(Math.random() * 20) - 10;
        const saturation = scheme[1] + Math.floor(Math.random() * 10) - 5;
        const lightness = scheme[2] + Math.floor(Math.random() * 10) - 5;
        
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.3})`;
        particle.style.boxShadow = `0 0 ${Math.floor(size * 3)}px ${Math.floor(size / 1.5)}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.4)`;
        
        particle.style.animationDuration = `${Math.random() * 15 + 8}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.setProperty('--direction', Math.random() > 0.5 ? '1' : '-1');
        particle.style.setProperty('--float-factor', (Math.random() * 1.5 + 0.5).toString());
        
        container.appendChild(particle);
      }
      
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bg-bubble');
        
        const size = Math.random() * 100 + 30;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.top = `${Math.random() * containerHeight}px`;
        bubble.style.left = `${Math.random() * containerWidth}px`;
        
        const hue = Math.random() * 60 + 180; // Cyan to blue range
        bubble.style.setProperty('--x-offset', `${(Math.random() * 100 - 50)}px`);
        bubble.style.setProperty('--y-offset', `${(Math.random() * -100 - 20)}px`);
        bubble.style.setProperty('--x-offset2', `${(Math.random() * 150 - 75)}px`);
        bubble.style.setProperty('--y-offset2', `${(Math.random() * -150 - 30)}px`);
        bubble.style.setProperty('--x-offset3', `${(Math.random() * 80 - 40)}px`);
        bubble.style.setProperty('--y-offset3', `${(Math.random() * -80 - 10)}px`);
        
        bubble.style.animationDuration = `${Math.random() * 20 + 15}s`;
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        
        if (i % 5 === 0) {
          bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(255, 192, 203, 0.6))';
          bubble.style.boxShadow = '0 0 20px rgba(255, 192, 203, 0.6)';
        } else if (i % 5 === 1) {
          bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(186, 225, 255, 0.6))';
          bubble.style.boxShadow = '0 0 20px rgba(186, 225, 255, 0.6)';
        } else if (i % 5 === 2) {
          bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(216, 191, 255, 0.6))';
          bubble.style.boxShadow = '0 0 20px rgba(216, 191, 255, 0.6)';
        }
        
        container.appendChild(bubble);
      }
      
      for (let i = 0; i < 8; i++) {
        const ring = document.createElement('div');
        ring.classList.add('bg-pulse-ring');
        
        const size = 50 + i * 20;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        
        if (i === 0) {
          ring.style.top = '20%';
          ring.style.left = '15%';
        } else if (i === 1) {
          ring.style.top = '70%';
          ring.style.left = '80%';
        } else if (i === 2) {
          ring.style.top = '30%';
          ring.style.left = '75%';
        } else if (i === 3) {
          ring.style.top = '80%';
          ring.style.left = '30%';
        } else if (i === 4) {
          ring.style.top = '50%';
          ring.style.left = '50%';
        } else if (i === 5) {
          ring.style.top = '25%';
          ring.style.left = '40%';
        } else if (i === 6) {
          ring.style.top = '65%';
          ring.style.left = '10%';
        } else {
          ring.style.top = '15%';
          ring.style.left = '65%';
        }
        
        const hue = 250 + Math.random() * 40;
        ring.style.borderColor = `hsla(${hue}, 90%, 75%, 0.6)`;
        ring.style.animationDuration = `${4 + i * 0.8}s`;
        ring.style.animationDelay = `${i * 0.5}s`;
        
        container.appendChild(ring);
      }
      
      for (let i = 0; i < 10; i++) {
        const gradientLine = document.createElement('div');
        gradientLine.classList.add('gradient-line');
        
        gradientLine.style.position = 'absolute';
        gradientLine.style.height = '2px';
        gradientLine.style.width = `${Math.random() * 30 + 20}%`;
        gradientLine.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)';
        gradientLine.style.top = `${Math.random() * containerHeight}px`;
        gradientLine.style.left = `${Math.random() * containerWidth}px`;
        gradientLine.style.opacity = '0.6';
        gradientLine.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.5)';
        gradientLine.style.animation = `gradient-line ${Math.random() * 5 + 10}s infinite linear`;
        gradientLine.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(gradientLine);
      }
      
      const constellationPoints = [];
      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.classList.add('bg-constellation-dot');
        
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        constellationPoints.push({ x, y, element: dot });
        container.appendChild(dot);
      }
      
      for (let i = 0; i < constellationPoints.length; i++) {
        const point1 = constellationPoints[i];
        
        for (let j = i + 1; j < constellationPoints.length; j++) {
          const point2 = constellationPoints[j];
          
          const dx = point2.x - point1.x;
          const dy = point2.y - point1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const line = document.createElement('div');
            line.classList.add('bg-constellation-line');
            
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            
            line.style.width = `${distance}px`;
            line.style.left = `${point1.x}px`;
            line.style.top = `${point1.y}px`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.opacity = `${(1 - distance / 200) * 0.8}`;
            
            container.appendChild(line);
          }
        }
      }
      
      const heartbeatContainer = document.createElement('div');
      heartbeatContainer.classList.add('bg-heartbeat-container');
      heartbeatContainer.style.position = 'absolute';
      heartbeatContainer.style.bottom = '20%';
      heartbeatContainer.style.right = '10%';
      heartbeatContainer.style.width = '300px';
      heartbeatContainer.style.height = '100px';
      heartbeatContainer.style.display = 'flex';
      heartbeatContainer.style.alignItems = 'center';
      heartbeatContainer.style.opacity = '0.5';
      heartbeatContainer.style.transform = 'rotate(-10deg)';
      
      for (let i = 0; i < 30; i++) {
        const line = document.createElement('div');
        line.classList.add('bg-heartbeat-line');
        line.style.height = `${Math.sin(i * 0.5) * 30 + 25}px`;
        line.style.animationDelay = `${i * 0.1}s`;
        heartbeatContainer.appendChild(line);
      }
      
      container.appendChild(heartbeatContainer);
      
      const barchartContainer = document.createElement('div');
      barchartContainer.classList.add('bg-barchart-container');
      barchartContainer.style.position = 'absolute';
      barchartContainer.style.top = '15%';
      barchartContainer.style.left = '5%';
      barchartContainer.style.width = '200px';
      barchartContainer.style.height = '120px';
      barchartContainer.style.display = 'flex';
      barchartContainer.style.alignItems = 'flex-end';
      barchartContainer.style.justifyContent = 'space-between';
      barchartContainer.style.opacity = '0.25';
      barchartContainer.style.transform = 'rotate(5deg)';
      
      for (let i = 0; i < 15; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bg-barchart-bar');
        bar.style.height = `${Math.random() * 80 + 20}%`;
        bar.style.animationDelay = `${i * 0.2}s`;
        barchartContainer.appendChild(bar);
      }
      
      container.appendChild(barchartContainer);
      
      const histogramContainer = document.createElement('div');
      histogramContainer.classList.add('bg-histogram-container');
      histogramContainer.style.position = 'absolute';
      histogramContainer.style.top = '60%';
      histogramContainer.style.left = '15%';
      histogramContainer.style.width = '250px';
      histogramContainer.style.height = '150px';
      histogramContainer.style.display = 'flex';
      histogramContainer.style.alignItems = 'flex-end';
      histogramContainer.style.justifyContent = 'center';
      histogramContainer.style.opacity = '0.25';
      histogramContainer.style.gap = '2px';
      histogramContainer.style.transform = 'rotate(-5deg)';
      
      for (let i = 0; i < 8; i++) {
        const group = document.createElement('div');
        group.style.display = 'flex';
        group.style.gap = '1px';
        group.style.height = '100%';
        group.style.alignItems = 'flex-end';
        
        for (let j = 0; j < 3; j++) {
          const bar = document.createElement('div');
          bar.classList.add('bg-histogram-bar');
          bar.style.width = '4px';
          bar.style.height = `${Math.random() * 80 + 20}%`;
          
          if (j === 0) bar.style.backgroundColor = 'rgba(255, 165, 0, 0.5)';
          else if (j === 1) bar.style.backgroundColor = 'rgba(255, 140, 0, 0.5)';
          else bar.style.backgroundColor = 'rgba(255, 120, 0, 0.5)';
          
          bar.style.animationDelay = `${i * 0.1 + j * 0.05}s`;
          group.appendChild(bar);
        }
        
        histogramContainer.appendChild(group);
      }
      
      container.appendChild(histogramContainer);
      
      const audioWaveContainer = document.createElement('div');
      audioWaveContainer.classList.add('bg-audiowave-container');
      audioWaveContainer.style.position = 'absolute';
      audioWaveContainer.style.bottom = '30%';
      audioWaveContainer.style.right = '25%';
      audioWaveContainer.style.width = '200px';
      audioWaveContainer.style.height = '80px';
      audioWaveContainer.style.display = 'flex';
      audioWaveContainer.style.alignItems = 'center';
      audioWaveContainer.style.justifyContent = 'center';
      audioWaveContainer.style.gap = '2px';
      audioWaveContainer.style.opacity = '0.2';
      audioWaveContainer.style.transform = 'rotate(8deg)';
      
      for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bg-audiowave-bar');
        bar.style.animationDuration = `${0.7 + Math.random() * 1}s`;
        audioWaveContainer.appendChild(bar);
      }
      
      container.appendChild(audioWaveContainer);
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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      createBackgroundVisualizations();
    });
    
    handleScroll();
    createBackgroundVisualizations();
    
    setTimeout(() => {
      initTiltEffect();
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', createBackgroundVisualizations);
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
      
      <div 
        ref={trendingLinesRef} 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />
      
      <main className="relative z-10">
        <Hero />
        <div className="flex justify-center -mt-8 mb-8 relative z-20">
          <ResumeButton />
        </div>
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

