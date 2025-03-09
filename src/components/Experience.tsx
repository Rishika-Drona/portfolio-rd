import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experienceData = [
  {
    company: "Deutsch, LA",
    location: "Remote",
    position: "Senior ML Data Engineer/ETL Developer",
    period: "Mar 2023 - Present",
    responsibilities: [
      "Architected and maintained secured ETL pipelines using Prefect, Stitch, and Informatica, leveraging orchestration tools like Jenkins, Airflow, and Terraform to increase data integration efficiency by 25% and reduce latency by 27% for end-to-end augmented segmentation projects.",
      "Led the development of ML models, integrating transformers and GPT architectures through LangChain, and applying fine-tuning techniques (PEFT, QLORA, LORA) along with advanced prompt engineering to boost NLP model performance in production environments.",
      "Conducted A/B testing using statistical tools (Python, R, SQL), streamlining the evaluation of new features and driving data-driven decisions that improved application performance and user engagement.",
      "Implemented MLOps best practices, creating CI/CD pipelines for model training, validation, and deployment that reduced model delivery time by 40%.",
      "Mentored junior team members on data science methodologies and machine learning fundamentals, leading to improved team productivity and knowledge sharing.",
      "Optimized data processing pipelines that handle over 10TB of data daily, resulting in 35% reduction in processing time and significant cost savings."
    ],
    achievements: [
      "Recognized for implementing a novel approach to feature engineering that improved model accuracy by 18%",
      "Successfully led a cross-functional team to deliver a complex ML project ahead of schedule"
    ]
  },
  {
    company: "Deutsch, LA",
    location: "Remote",
    position: "Lead Data Scientist / ETL Developer",
    period: "Feb 2022 - Mar 2023",
    responsibilities: [
      "Designed and optimized a predictive model using TensorFlow, PyTorch, and Scikit-learn, improving financial risk assessment accuracy by 40% while integrating AI agents into the Sampleit AI model for seamless production deployment.",
      "Automated workflows with AWS Lambda, streamlining data exchange between AI models and production environments.",
      "Collaborated with data science and business operations efficiency teams.",
      "Spearheaded a customer segmentation project using deep learning and NLP frameworks (NLTK, HuggingFace, etc.), leveraging RAG, embeddings, and agent-based architectures to deliver intelligent and scalable business solutions.",
      "Implemented an ensemble model (Logistic Regression, XGBoost, and SVM) to predict (accuracy ~92%) and proactively act on issues in order processing thereby enhancing customer experience.",
      "Architected cloud-based data lakes and warehouses that improved query performance by 60% while reducing storage costs by 25%.",
      "Led the development of dashboards and visualizations that provided stakeholders with real-time insights into business metrics and KPIs."
    ],
    achievements: [
      "Awarded 'Innovation Star' for developing an automated anomaly detection system that saved the company $200,000 annually",
      "Published a technical case study on the company's ML architecture that was featured in a major data science publication"
    ]
  },
  {
    company: "Top Golf",
    location: "TX",
    position: "Data Scientist",
    period: "Jun 2021 - Feb 2022",
    responsibilities: [
      "Performed customer segmentation using Python, R, and SQL, enhancing targeted marketing campaigns with a 30% increase in conversion rate by transforming raw data into actionable business insights.",
      "Managed datasets exceeding 5TB with AWS Redshift and Atriprety Server, optimizing queries to reduce data retrieval times by 20% and improve large-scale data processing.",
      "Developed interactive dashboards with Tableau and Splunk to visualize experiment results and key performance indicators (KPIs), enabling real-time data-driven decisions for stakeholders.",
      "Built, deployed, and monitored GEMM solutions by leveraging expertise in LLMs, Computer Vision, and Time Series Analysis, employing model fine-tuning techniques to create scalable AI applications addressing diverse business use cases.",
      "Implemented a recommendation engine that increased average customer spend by 15% through personalized offers and promotions.",
      "Collaborated with marketing teams to design and analyze A/B tests for promotional campaigns, identifying optimal strategies that led to a 22% improvement in email open rates."
    ],
    achievements: [
      "Recognized for developing a customer loyalty prediction model that helped retain high-value customers",
      "Delivered a series of technical workshops to non-technical stakeholders to improve data literacy across the organization"
    ]
  },
  {
    company: "Marshall University",
    location: "WV",
    position: "Research Assistant",
    period: "Jan 2020 - May 2021",
    responsibilities: [
      "Designed and implemented a virus detection model incorporating anomaly detection methods such as Isolation Forest, One-Class SVM, and statistical outlier detection, significantly improving diagnostic accuracy.",
      "Applied medical NLP techniques into the model for conversation summarization, evidence extraction, outcome prediction, and experimented using Python and R, resulting in actionable insights from clinical data.",
      "Automated data pipelines to handle large-scale data ingestion, employing web scraping tools (BeautifulSoup, Scrapy, Selenium) for efficient data collection, preprocessing, and seamless integration into ML workflows.",
      "Collaborated with a team of researchers to publish findings in peer-reviewed journals, contributing to advancements in medical data analysis.",
      "Developed novel feature extraction techniques for time-series medical data that improved model performance on limited datasets.",
      "Mentored undergraduate students on research methodologies and data analysis techniques, supporting their academic growth and project contributions."
    ],
    achievements: [
      "Co-authored a research paper published in a top-tier medical informatics journal",
      "Awarded a research grant for innovative application of machine learning in healthcare diagnostics"
    ]
  },
  {
    company: "Metal Analysis and Service Pvt. Ltd.",
    location: "Mumbai",
    position: "Data Scientist",
    period: "Jun 2018 - Nov 2019",
    responsibilities: [
      "Led MLOps initiatives by deploying machine learning models on AWS, GCP, and Azure using Kubeflow, MLflow, and ModelMesh, ensuring deployment-time and enhancing model reliability for production environments.",
      "Developed robust integrations between AI models and internal platforms, ensuring seamless collaboration and efficient data exchange across systems.",
      "Optimized large-scale inference processes for the metal quality detection model through quantization, distillation, and acceleration techniques using GPU/TPUs, improving prediction speed and model reliability.",
      "Built real-time monitoring dashboards with Tableau and Power BI, providing stakeholders immediate visibility into operational metrics and model performance.",
      "Implemented computer vision algorithms to detect defects in manufacturing processes, reducing quality control costs by 30% and improving defect detection rates.",
      "Designed and implemented a predictive maintenance system that reduced unplanned downtime by 45% and extended equipment lifespan."
    ],
    achievements: [
      "Received recognition for developing an algorithm that improved metal quality classification accuracy by 28%",
      "Successfully led the migration of analytics infrastructure to cloud platforms, resulting in 40% cost reduction"
    ]
  }
];

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [expandedJobs, setExpandedJobs] = useState<{[key: number]: boolean}>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="section-container">
      <div className="main-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div 
          ref={experienceRef} 
          className="scroll-appear mt-12 relative"
        >
          {experienceData.map((job, index) => (
            <div 
              key={index} 
              className="timeline-item neo-card mb-6 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 md:space-x-4">
                  <span className="flex items-center text-sm text-gray-500 mb-1 md:mb-0">
                    <MapPin size={14} className="mr-1 text-primary/70" /> {job.location}
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-600">
                    <Calendar size={14} className="mr-1 text-primary/70" /> {job.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {job.responsibilities.slice(0, expandedJobs[index] ? job.responsibilities.length : 3).map((responsibility, respIndex) => (
                  <li key={respIndex} className="text-gray-700 text-sm flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary/70 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              
              {job.responsibilities.length > 3 && (
                <button 
                  onClick={() => toggleJob(index)}
                  className="text-sm text-primary font-medium flex items-center hover:text-primary/80 transition-colors mb-3"
                >
                  {expandedJobs[index] ? (
                    <>
                      Show less <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      Show more <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              )}
              
              {expandedJobs[index] && job.achievements && job.achievements.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-800 flex items-center mb-2">
                    <Award size={14} className="mr-1 text-primary" /> Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
