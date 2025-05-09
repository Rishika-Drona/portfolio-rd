
import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

const certificationsData = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "Oct 2023",
    description: "Advanced certification validating expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    logo: "/lovable-uploads/3491d31a-713e-4722-aafc-5bcb61e205de.png"
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "May 2023",
    description: "Certification demonstrating proficiency in applying data science and machine learning techniques on Azure.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    logo: "/lovable-uploads/c3ad983c-4e79-404f-9840-013d328b687a.png"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Dec 2022",
    description: "Validates skills in using TensorFlow to build and train machine learning models for a variety of applications.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    logo: "/lovable-uploads/76781931-7eb0-4d33-93df-cb20e7d5e266.png"
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "Aug 2022",
    description: "Comprehensive credential covering data science methodologies, tools, and techniques with practical applications.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    logo: "/lovable-uploads/a4b9a606-b2b7-4177-b780-e17e1777a45a.png"
  }
];

const Certifications = () => {
  const certRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (certRef.current) {
      observer.observe(certRef.current);
    }
    
    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" className="section-container bg-gradient-to-b from-accent/30 to-white">
      <div className="main-container">
        <h2 className="section-title flex items-center">
          <Award size={28} className="mr-2 text-primary animate-pulse-subtle" /> Certifications
        </h2>
        
        <div className="mb-6 max-w-2xl">
          <p className="text-gray-700">
            Professional certifications that validate my expertise in data science, machine learning, and cloud technologies.
          </p>
        </div>
        
        <div 
          ref={certRef} 
          className="scroll-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {certificationsData.map((cert, index) => (
            <div 
              key={index} 
              className="neo-card h-full flex flex-col group hover:shadow-lg transition-all duration-500"
            >
              <div className="relative mb-4 flex justify-between items-start">
                <div className="w-16 h-16 flex items-center justify-center p-2 overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} logo`} 
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Sparkles size={16} />
                </div>
              </div>
              
              <h3 className="text-base font-semibold mb-1 text-gray-900 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-3">Issued: {cert.date}</p>
              <p className="text-gray-700 text-sm flex-grow">{cert.description}</p>
              
              <a 
                href={cert.credentialUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full bg-primary/10 text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm group"
              >
                <span>View Credential</span>
                <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
