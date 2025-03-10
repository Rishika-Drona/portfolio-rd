
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Code, Sparkles } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<'summary' | 'education'>('summary');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events within the About section
      if (!aboutRef.current) return;
      
      const aboutRect = aboutRef.current.getBoundingClientRect();
      const isInViewport = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
      
      if (isInViewport && !isTransitioning) {
        if (e.deltaY > 0 && activeCard === 'summary') {
          // Scrolling down - show education
          setIsTransitioning(true);
          setActiveCard('education');
          setTimeout(() => setIsTransitioning(false), 800); // Increased for smoother transition
          e.preventDefault();
        } else if (e.deltaY < 0 && activeCard === 'education') {
          // Scrolling up - show summary
          setIsTransitioning(true);
          setActiveCard('summary');
          setTimeout(() => setIsTransitioning(false), 800); // Increased for smoother transition
          e.preventDefault();
        }
      }
    };
    
    // Add touch swipe support
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!aboutRef.current || isTransitioning) return;
      
      const aboutRect = aboutRef.current.getBoundingClientRect();
      const isInViewport = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
      
      if (isInViewport) {
        const touchEndY = e.touches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        // Threshold to detect intentional swipe (20px)
        if (Math.abs(diff) > 20) {
          if (diff > 0 && activeCard === 'summary') {
            // Swiping up - show education
            setIsTransitioning(true);
            setActiveCard('education');
            setTimeout(() => setIsTransitioning(false), 800);
            e.preventDefault();
          } else if (diff < 0 && activeCard === 'education') {
            // Swiping down - show summary
            setIsTransitioning(true);
            setActiveCard('summary');
            setTimeout(() => setIsTransitioning(false), 800);
            e.preventDefault();
          }
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeCard, isTransitioning]);

  return (
    <section id="about" className="section-container bg-accent/50 relative overflow-hidden" style={{ minHeight: '120vh' }}>
      {/* Decorative elements - enhanced with more dynamic elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-60 animate-pulse-subtle"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-50 rounded-full filter blur-3xl opacity-40 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-pink-50 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="main-container relative z-10">
        <h2 className="section-title flex items-center">
          <Sparkles size={28} className="mr-2 text-primary animate-pulse-subtle" /> About Me
        </h2>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">Scroll or swipe to flip cards</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <button 
              onClick={() => !isTransitioning && setActiveCard('summary')} 
              className={`px-4 py-1.5 rounded-full transition-all duration-500 transform ${activeCard === 'summary' 
                ? 'bg-primary text-white scale-110 shadow-lg' 
                : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Summary
            </button>
            <button 
              onClick={() => !isTransitioning && setActiveCard('education')} 
              className={`px-4 py-1.5 rounded-full transition-all duration-500 transform ${activeCard === 'education' 
                ? 'bg-primary text-white scale-110 shadow-lg' 
                : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Education
            </button>
          </div>
        </div>
        
        <div ref={aboutRef} className="card-stack-container relative h-[600px] mt-8 perspective-1000">
          {/* Professional Summary Card */}
          <div 
            ref={summaryRef} 
            className={`neo-card absolute w-full transition-all duration-800 ${
              activeCard === 'summary' 
                ? 'opacity-100 transform-none z-20 rotate-0 shadow-2xl' 
                : 'opacity-0 -translate-y-8 -translate-z-20 scale-95 rotate-6 z-10'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
              <Code size={28} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 pl-14 text-gray-800">Professional Summary</h3>
            <div className="gradient-line w-1/3 h-1 bg-gradient-to-r from-primary/30 to-primary mb-6 rounded-full"></div>
            
            <p className="text-gray-700 mb-4">
              I'm a <span className="highlight-text">Data Science enthusiast</span> with 9+ years of experience in designing and 
              implementing data science and machine learning solutions for various industries including finance,
              healthcare, and marketing.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise spans across the full data science lifecycle - from data acquisition and cleaning to 
              model development, deployment, and monitoring in production environments.
            </p>
            <p className="text-gray-700 mb-4">
              I specialize in building <span className="highlight-text">scalable ML pipelines</span> using orchestration tools like Airflow and Jenkins, 
              implementing <span className="highlight-text">NLP solutions with modern transformer architectures</span>, and developing interactive dashboards for data visualization.
            </p>
            <p className="text-gray-700">
              <span className="highlight-text">Recent focus:</span> Fine-tuning large language models, building retrieval-augmented generation systems, and implementing MLOps best practices for production AI applications.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center transform hover:scale-105 hover:bg-primary/15 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="text-xl font-bold text-primary">9+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center transform hover:scale-105 hover:bg-primary/15 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="text-xl font-bold text-primary">20+</div>
                <div className="text-xs text-gray-600">Projects Completed</div>
              </div>
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center transform hover:scale-105 hover:bg-primary/15 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="text-xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-600">ML Models in Production</div>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div 
            ref={educationRef} 
            className={`neo-card absolute w-full transition-all duration-800 ${
              activeCard === 'education' 
                ? 'opacity-100 transform-none z-20 rotate-0 shadow-2xl' 
                : 'opacity-0 translate-y-8 -translate-z-20 scale-95 -rotate-6 z-10'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
              <GraduationCap size={28} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 pl-14 text-gray-800">Education</h3>
            <div className="gradient-line w-1/3 h-1 bg-gradient-to-r from-primary/30 to-primary mb-6 rounded-full"></div>
            
            <div className="space-y-6">
              <div className="transform transition-all duration-500 hover:translate-x-2 p-4 rounded-lg hover:bg-white/70">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800 text-lg">Marshall University</h4>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">WV</span>
                </div>
                <p className="text-primary italic text-sm mb-1">Masters in Computer Science (Data Science)</p>
                <p className="text-sm text-gray-600 mb-2">GPA: 4.00</p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Coursework:</span> Deep Learning, Neural Networks for NLP, Machine Learning for Large Datasets, 
                  Cloud Computing, User-Centered Research and Evaluation, Data Science for Product Development, 
                  Quantitative Data Science.
                </p>
                <div className="mt-2 flex items-center">
                  <Award size={16} className="text-primary mr-2" />
                  <span className="text-xs text-gray-600">Graduated with Honors</span>
                </div>
              </div>
              
              <div className="transform transition-all duration-500 hover:translate-x-2 p-4 rounded-lg hover:bg-white/70">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800 text-lg">Jaipur Engineering College and Research Center</h4>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">India</span>
                </div>
                <p className="text-primary italic text-sm mb-1">Bachelor of Technology (Computer Science)</p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Notable Projects:</span> Real-time Chat Application (JavaScript, Firebase), 
                  Retail Data Predictive Analytics (Python, R).
                </p>
                <div className="mt-2 flex items-center">
                  <Award size={16} className="text-primary mr-2" />
                  <span className="text-xs text-gray-600">Awarded Best Undergrad Research Project, 2017 for an ML-based project on Google Lens Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
