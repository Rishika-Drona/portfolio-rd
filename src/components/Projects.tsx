
import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "LLM Application",
    period: "Jan 2024 - Mar 2024",
    description: "Developed an application leveraging OpenAI APIs to access advanced language models including GPT-3.5-turbo, GPT-4, and utilized Anyscale Endpoints to interact with open-source LLMs like Llama-2-70b. The project involved building scalable NLP solutions for various conversational AI use cases.",
    tags: ["OpenAI", "GPT-4", "Anyscale", "Llama-2", "NLP"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "LLM Index",
    period: "Dec 2023 - Feb 2024",
    description: "Built an LLM application using Llama Index (GPT Index) as a data framework to integrate multiple data sources with LLMs. Implemented core components in Python for effective data ingestion and retrieval. Leveraged plugin-based architectures for flexibility.",
    tags: ["Llama Index", "LLMs", "Data Framework", "Python"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Deep Learning Project",
    period: "Aug 2020 - Dec 2020",
    description: "Developed a face verification system using Resnet-34 (built from scratch) with an AUC score of 0.93. Identified phoneme phrases from Mel spectogram frames using a 3-layer Bi-LSTM and beam search to achieve an average Levenshtein distance of 7.25. Built a speech to text transcription system using a Pyramidal Bi-LSTM encoder, attention-based decoder, Teacher Forcing, and Locked Dropout to achieve an average Levenshtein distance of 8.4.",
    tags: ["ResNet", "Bi-LSTM", "Speech Recognition", "PyTorch"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Amazon Predictive Model for Device Failure",
    period: "Jun 2021 - Sept 2021",
    description: "Designed and implemented a predictive model for Amazon to identify failing Amazon Echo devices (Random Forest, XGBoost, Logistic Regression) to forecast device failures. Utilized tools such as Python (Pandas, Scikit-learn, XGBoost) for data preprocessing, feature engineering, and model evaluation, achieving a precision of 92% and a recall of 80%. Deployed the model with Flask and set up monitoring for real-time predictions using AWS Lambda and CloudWatch.",
    tags: ["Random Forest", "XGBoost", "AWS", "Flask", "CloudWatch"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section-container bg-accent/50">
      <div className="main-container">
        <h2 className="section-title">Projects</h2>
        
        <div 
          ref={projectsRef} 
          className="scroll-appear mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="neo-card transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-600">{project.period}</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.links.github} 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
                <a 
                  href={project.links.demo} 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
