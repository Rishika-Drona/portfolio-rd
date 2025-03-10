
import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing animations
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Create bubbles
    const numberOfBubbles = 8;
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bg-bubble');
      
      // Random size between 100px and 300px
      const size = Math.floor(Math.random() * 200) + 100;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random starting position
      const posX = Math.floor(Math.random() * 100);
      const posY = Math.floor(Math.random() * 100);
      bubble.style.left = `${posX}%`;
      bubble.style.top = `${posY}%`;
      
      // Random animation duration and delay
      const duration = Math.floor(Math.random() * 10) + 15;
      const delay = Math.floor(Math.random() * 5);
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      
      // Random movement direction
      bubble.style.setProperty('--x-offset', `${(Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset', `${(Math.random() * 40) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--x-offset2', `${(Math.random() * 60) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset2', `${(Math.random() * 80) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--x-offset3', `${(Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset3', `${(Math.random() * 40) * (Math.random() > 0.5 ? 1 : -1)}px`);
      
      // Random colors
      const colors = ['rgba(155, 135, 245, 0.15)', 'rgba(103, 232, 249, 0.15)', 'rgba(235, 181, 245, 0.15)', 'rgba(181, 245, 186, 0.15)'];
      bubble.style.background = `radial-gradient(circle at 30% 30%, white, ${colors[Math.floor(Math.random() * colors.length)]})`;
      
      container.appendChild(bubble);
    }
    
    // Create moving lines
    const numberOfLines = 6;
    for (let i = 0; i < numberOfLines; i++) {
      const line = document.createElement('div');
      line.classList.add('gradient-line');
      
      // Random width and height
      const width = Math.floor(Math.random() * 40) + 60; // 60px to 100px
      const height = Math.floor(Math.random() * 2) + 2; // 2px to 4px
      line.style.width = `${width}%`;
      line.style.height = `${height}px`;
      
      // Random position
      const posY = Math.floor(Math.random() * 80) + 10; // 10% to 90% from top
      line.style.top = `${posY}%`;
      line.style.left = Math.random() > 0.5 ? '0' : 'auto';
      line.style.right = Math.random() > 0.5 ? '0' : 'auto';
      
      // Random animation
      const duration = Math.floor(Math.random() * 8) + 10; // 10s to 18s
      const delay = Math.floor(Math.random() * 5);
      line.style.animationName = 'gradient-line';
      line.style.animationDuration = `${duration}s`;
      line.style.animationDelay = `${delay}s`;
      line.style.animationIterationCount = 'infinite';
      line.style.animationTimingFunction = 'ease-in-out';
      
      // Random colors
      const gradients = [
        'linear-gradient(90deg, rgba(155, 135, 245, 0) 0%, rgba(155, 135, 245, 0.6) 50%, rgba(155, 135, 245, 0) 100%)',
        'linear-gradient(90deg, rgba(103, 232, 249, 0) 0%, rgba(103, 232, 249, 0.6) 50%, rgba(103, 232, 249, 0) 100%)',
        'linear-gradient(90deg, rgba(235, 181, 245, 0) 0%, rgba(235, 181, 245, 0.6) 50%, rgba(235, 181, 245, 0) 100%)',
        'linear-gradient(90deg, rgba(181, 245, 186, 0) 0%, rgba(181, 245, 186, 0.6) 50%, rgba(181, 245, 186, 0) 100%)'
      ];
      line.style.background = gradients[Math.floor(Math.random() * gradients.length)];
      
      container.appendChild(line);
    }
    
    // Create pulse rings
    const numberOfRings = 4;
    for (let i = 0; i < numberOfRings; i++) {
      const ring = document.createElement('div');
      ring.classList.add('bg-pulse-ring');
      
      // Random size
      const size = Math.floor(Math.random() * 100) + 80; // 80px to 180px
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      
      // Random position
      const posX = Math.floor(Math.random() * 80) + 10; // 10% to 90% from left
      const posY = Math.floor(Math.random() * 80) + 10; // 10% to 90% from top
      ring.style.left = `${posX}%`;
      ring.style.top = `${posY}%`;
      
      // Random animation
      const duration = Math.floor(Math.random() * 5) + 5; // 5s to 10s
      const delay = Math.floor(Math.random() * 3);
      ring.style.animationDuration = `${duration}s`;
      ring.style.animationDelay = `${delay}s`;
      
      // Random colors
      const colors = ['rgba(155, 135, 245, 0.3)', 'rgba(103, 232, 249, 0.3)', 'rgba(235, 181, 245, 0.3)', 'rgba(181, 245, 186, 0.3)'];
      ring.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(ring);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default BackgroundAnimation;
