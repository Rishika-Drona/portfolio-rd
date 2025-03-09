
import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles, Zap } from 'lucide-react';

const certificationsData = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "Oct 2023",
    description: "Advanced certification validating expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    badgeImg: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "May 2023",
    description: "Certification demonstrating proficiency in applying data science and machine learning techniques on Azure.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    badgeImg: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Dec 2022",
    description: "Validates skills in using TensorFlow to build and train machine learning models for a variety of applications.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    badgeImg: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "Aug 2022",
    description: "Comprehensive credential covering data science methodologies, tools, and techniques with practical applications.",
    credentialUrl: "https://www.linkedin.com/in/rishika-drona/",
    badgeImg: "https://images.unsplash.com/photo-1599658880307-94c774b664a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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
              <div className="relative mb-4 flex justify-center">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Sparkles size={16} />
                </div>
                <img 
                  src={cert.badgeImg} 
                  alt={cert.title} 
                  className="w-28 h-28 object-contain transition-transform group-hover:scale-105 duration-300"
                />
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
