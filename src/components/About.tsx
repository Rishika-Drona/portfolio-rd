
import { useEffect, useRef } from 'react';

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
    <section id="about" className="section-container bg-accent/50">
      <div className="main-container">
        <h2 className="section-title">About Me</h2>
        
        <div ref={aboutRef} className="scroll-appear grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="neo-card">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800">Marshall University</h4>
                  <span className="text-sm text-gray-600">WV</span>
                </div>
                <p className="text-primary italic text-sm mb-1">Masters in Computer Science (Data Science)</p>
                <p className="text-sm text-gray-600 mb-2">GPA: 4.00</p>
                <p className="text-sm text-gray-700">
                  Coursework: Deep Learning, Neural Networks for NLP, Machine Learning for Large Datasets, 
                  Cloud Computing, User-Centered Research and Evaluation, Data Science for Product Development, 
                  Quantitative Data Science.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800">Jaipur Engineering College and Research Center</h4>
                  <span className="text-sm text-gray-600">India</span>
                </div>
                <p className="text-primary italic text-sm mb-1">Bachelor of Technology (Computer Science)</p>
                <p className="text-sm text-gray-700">
                  Notable Projects: Real-time Chat Application (JavaScript, Firebase), 
                  Retail Data Predictive Analytics (Python, R).
                  Awarded Best Undergrad Research Project, 2017 for an ML-based project on Google Lens Recognition.
                </p>
              </div>
            </div>
          </div>
          
          <div className="neo-card">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-gray-700 mb-4">
              I'm a Senior ML Data Engineer and ETL Developer with 5+ years of experience in designing and 
              implementing data science and machine learning solutions for various industries including finance,
              healthcare, and marketing.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise spans across the full data science lifecycle - from data acquisition and cleaning to 
              model development, deployment, and monitoring in production environments.
            </p>
            <p className="text-gray-700">
              I specialize in building scalable ML pipelines using orchestration tools like Airflow and Jenkins, 
              implementing NLP solutions, and developing interactive dashboards for data visualization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
