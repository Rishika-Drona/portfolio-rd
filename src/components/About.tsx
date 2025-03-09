
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-container bg-accent/50 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="main-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div ref={aboutRef} className="scroll-appear grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="neo-card relative group">
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <GraduationCap size={24} />
            </div>
            
            <h3 className="text-xl font-semibold mb-4 pl-10">Education</h3>
            <div className="space-y-6">
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800">Marshall University</h4>
                  <span className="text-sm text-gray-600">WV</span>
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
              
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800">Jaipur Engineering College and Research Center</h4>
                  <span className="text-sm text-gray-600">India</span>
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
          
          <div className="neo-card relative group">
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Code size={24} />
            </div>
            
            <h3 className="text-xl font-semibold mb-4 pl-10">Professional Summary</h3>
            <p className="text-gray-700 mb-4">
              I'm a <span className="highlight-text">Senior ML Data Engineer and ETL Developer</span> with 5+ years of experience in designing and 
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
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-xl font-bold text-primary">5+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-xl font-bold text-primary">20+</div>
                <div className="text-xs text-gray-600">Projects Completed</div>
              </div>
              <div className="flex-1 p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-600">ML Models in Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
