
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
    
    // Create bubbles - significantly increased number and improved visibility
    const numberOfBubbles = 100; // Doubled the number of bubbles
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bg-bubble');
      
      // Various sizes from small to very large
      const size = Math.floor(Math.random() * 400) + 50; // 50px to 450px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Position across entire viewport with emphasis on left side for half of the bubbles
      let posX = Math.floor(Math.random() * 100);
      // Make half the bubbles favor the left side of the screen
      if (i % 2 === 0) {
        posX = Math.floor(Math.random() * 40); // 0% to 40% from left
      }
      const posY = Math.floor(Math.random() * 100);
      bubble.style.left = `${posX}%`;
      bubble.style.top = `${posY}%`;
      
      // Varied animation durations for natural movement
      const duration = Math.floor(Math.random() * 30) + 10; // 10s to 40s
      const delay = Math.floor(Math.random() * 15);
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      
      // Enhanced movement with larger offsets
      bubble.style.setProperty('--x-offset', `${(Math.random() * 200) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset', `${(Math.random() * 200) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--x-offset2', `${(Math.random() * 250) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset2', `${(Math.random() * 250) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--x-offset3', `${(Math.random() * 200) * (Math.random() > 0.5 ? 1 : -1)}px`);
      bubble.style.setProperty('--y-offset3', `${(Math.random() * 200) * (Math.random() > 0.5 ? 1 : -1)}px`);
      
      // More vibrant colors with higher opacity
      const colors = [
        'rgba(155, 135, 245, 0.6)', // Purple
        'rgba(103, 232, 249, 0.6)', // Cyan
        'rgba(235, 181, 245, 0.6)', // Pink
        'rgba(181, 245, 186, 0.6)', // Light green
        'rgba(245, 203, 135, 0.6)',  // Gold
        'rgba(252, 165, 241, 0.6)',  // Bright pink
        'rgba(129, 236, 236, 0.6)',  // Turquoise
        'rgba(203, 166, 247, 0.6)'   // Lavender
      ];
      bubble.style.background = `radial-gradient(circle at 30% 30%, white, ${colors[Math.floor(Math.random() * colors.length)]})`;
      bubble.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.6)'; // Enhanced glow effect
      
      // Add animation keyframes directly to the bubble
      bubble.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      container.appendChild(bubble);
    }
    
    // Create moving lines - significantly more lines
    const numberOfLines = 80; // Doubled the number of lines
    for (let i = 0; i < numberOfLines; i++) {
      const line = document.createElement('div');
      line.classList.add('gradient-line');
      
      // Varied sizes for lines
      const width = Math.floor(Math.random() * 80) + 20; // 20% to 100% width
      const height = Math.floor(Math.random() * 8) + 2; // 2px to 10px height
      line.style.width = `${width}%`;
      line.style.height = `${height}px`;
      
      // Distribute across the entire viewport with emphasis on left side for half the lines
      const posY = Math.floor(Math.random() * 95) + 2; // 2% to 97% from top
      line.style.top = `${posY}%`;
      
      // Make half the lines start from the left side
      if (i % 2 === 0) {
        line.style.left = '0';
        line.style.right = 'auto';
      } else {
        line.style.left = Math.random() > 0.5 ? '0' : 'auto';
        line.style.right = Math.random() > 0.5 ? '0' : 'auto';
      }
      
      // Varied animation speeds
      const duration = Math.floor(Math.random() * 15) + 5; // 5s to 20s
      const delay = Math.floor(Math.random() * 10);
      line.style.animationName = 'gradient-line';
      line.style.animationDuration = `${duration}s`;
      line.style.animationDelay = `${delay}s`;
      line.style.animationIterationCount = 'infinite';
      line.style.animationTimingFunction = 'ease-in-out';
      line.style.animationDirection = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
      
      // More vibrant gradients with higher opacity
      const gradients = [
        'linear-gradient(90deg, rgba(155, 135, 245, 0) 0%, rgba(155, 135, 245, 0.9) 50%, rgba(155, 135, 245, 0) 100%)', // Purple
        'linear-gradient(90deg, rgba(103, 232, 249, 0) 0%, rgba(103, 232, 249, 0.9) 50%, rgba(103, 232, 249, 0) 100%)', // Cyan
        'linear-gradient(90deg, rgba(235, 181, 245, 0) 0%, rgba(235, 181, 245, 0.9) 50%, rgba(235, 181, 245, 0) 100%)', // Pink
        'linear-gradient(90deg, rgba(181, 245, 186, 0) 0%, rgba(181, 245, 186, 0.9) 50%, rgba(181, 245, 186, 0) 100%)', // Light green
        'linear-gradient(90deg, rgba(252, 165, 241, 0) 0%, rgba(252, 165, 241, 0.9) 50%, rgba(252, 165, 241, 0) 100%)', // Bright pink
        'linear-gradient(90deg, rgba(129, 236, 236, 0) 0%, rgba(129, 236, 236, 0.9) 50%, rgba(129, 236, 236, 0) 100%)', // Turquoise
        'linear-gradient(90deg, rgba(203, 166, 247, 0) 0%, rgba(203, 166, 247, 0.9) 50%, rgba(203, 166, 247, 0) 100%)'  // Lavender
      ];
      line.style.background = gradients[Math.floor(Math.random() * gradients.length)];
      line.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)'; // Enhanced glow
      
      // Add diagonal lines too
      if (Math.random() > 0.7) {
        line.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        line.style.transformOrigin = Math.random() > 0.5 ? 'left center' : 'right center';
      }
      
      container.appendChild(line);
    }
    
    // Create horizontal lines that move left to right
    const numberOfHorizontalLines = 30; // Added 30 horizontal lines
    for (let i = 0; i < numberOfHorizontalLines; i++) {
      const hLine = document.createElement('div');
      hLine.classList.add('horizontal-line');
      
      // Varied sizes for horizontal lines
      const height = Math.floor(Math.random() * 6) + 1; // 1px to 7px height
      hLine.style.height = `${height}px`;
      hLine.style.width = `${Math.floor(Math.random() * 40) + 10}%`; // 10% to 50% width
      
      // Position more on the left side
      let posX = Math.floor(Math.random() * 40); // 0% to 40% from left
      const posY = Math.floor(Math.random() * 95) + 2; // 2% to 97% from top
      hLine.style.left = `${posX}%`;
      hLine.style.top = `${posY}%`;
      
      // Animation properties
      const duration = Math.floor(Math.random() * 12) + 8; // 8s to 20s
      const delay = Math.floor(Math.random() * 8);
      hLine.style.animationName = 'horizontal-line-move';
      hLine.style.animationDuration = `${duration}s`;
      hLine.style.animationDelay = `${delay}s`;
      hLine.style.animationIterationCount = 'infinite';
      hLine.style.animationTimingFunction = 'linear';
      
      // Colors
      const colors = [
        'rgba(155, 135, 245, 0.7)', // Purple
        'rgba(103, 232, 249, 0.7)', // Cyan
        'rgba(235, 181, 245, 0.7)', // Pink
        'rgba(181, 245, 186, 0.7)', // Light green
        'rgba(252, 165, 241, 0.7)'  // Bright pink
      ];
      hLine.style.background = colors[Math.floor(Math.random() * colors.length)];
      hLine.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
      
      container.appendChild(hLine);
    }
    
    // Create pulse rings - more rings with better visibility
    const numberOfRings = 40; // More rings
    for (let i = 0; i < numberOfRings; i++) {
      const ring = document.createElement('div');
      ring.classList.add('bg-pulse-ring');
      
      // Varied sizes
      const size = Math.floor(Math.random() * 300) + 50; // 50px to 350px
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      
      // Position across entire viewport with emphasis on left side for half the rings
      let posX = Math.floor(Math.random() * 90) + 5; // 5% to 95% from left
      // Make half the rings favor the left side of the screen
      if (i % 2 === 0) {
        posX = Math.floor(Math.random() * 40) + 5; // 5% to 45% from left
      }
      const posY = Math.floor(Math.random() * 90) + 5; // 5% to 95% from top
      ring.style.left = `${posX}%`;
      ring.style.top = `${posY}%`;
      
      // Varied animation speeds
      const duration = Math.floor(Math.random() * 8) + 2; // 2s to 10s
      const delay = Math.floor(Math.random() * 8);
      ring.style.animationDuration = `${duration}s`;
      ring.style.animationDelay = `${delay}s`;
      
      // More vibrant colors with higher opacity
      const colors = [
        'rgba(155, 135, 245, 0.8)', // Purple
        'rgba(103, 232, 249, 0.8)', // Cyan
        'rgba(235, 181, 245, 0.8)', // Pink
        'rgba(181, 245, 186, 0.8)', // Light green
        'rgba(252, 165, 241, 0.8)', // Bright pink
        'rgba(129, 236, 236, 0.8)', // Turquoise
        'rgba(203, 166, 247, 0.8)'  // Lavender
      ];
      ring.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
      ring.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.7)'; // Enhanced glow
      ring.style.borderWidth = `${Math.floor(Math.random() * 4) + 2}px`; // 2px to 6px border
      
      container.appendChild(ring);
    }
    
    // Add CSS for animations directly to the document if not already present
    if (!document.getElementById('bg-animation-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'bg-animation-styles';
      styleSheet.innerHTML = `
        .bg-bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          z-index: -1;
          pointer-events: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(var(--x-offset, 30px), var(--y-offset, 30px)) scale(1.05);
          }
          50% {
            transform: translate(var(--x-offset2, -30px), var(--y-offset2, 50px)) scale(0.95);
          }
          75% {
            transform: translate(var(--x-offset3, 50px), var(--y-offset3, -30px)) scale(1.02);
          }
        }
        
        .gradient-line {
          position: absolute;
          border-radius: 10px;
          z-index: -1;
          pointer-events: none;
        }
        
        @keyframes gradient-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .horizontal-line {
          position: absolute;
          border-radius: 10px;
          z-index: -1;
          pointer-events: none;
        }
        
        @keyframes horizontal-line-move {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(150vw);
            opacity: 0;
          }
        }
        
        .bg-pulse-ring {
          position: absolute;
          border-radius: 50%;
          border-style: solid;
          z-index: -1;
          animation-name: pulse;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
          pointer-events: none;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      const styleSheet = document.getElementById('bg-animation-styles');
      if (styleSheet) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-5 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ opacity: 1 }}
    />
  );
};

export default BackgroundAnimation;
