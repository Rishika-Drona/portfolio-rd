
import { useEffect, useRef } from 'react';

const experienceData = [
  {
    company: "Deutsch, LA",
    location: "Remote",
    position: "Senior ML Data Engineer/ETL Developer",
    period: "Mar 2023 - Present",
    responsibilities: [
      "Architected and maintained secured ETL pipelines using Prefect, Stitch, and Informatica, leveraging orchestration tools like Jenkins, Airflow, and Terraform to increase data integration efficiency by 25% and reduce latency by 27% for end-to-end augmented segmentation projects and developed, deployed, and monitored ML model on AWS and GCP using IaC.",
      "Led the development of ML models, integrating transformers and GPT architectures through LangChain, and applying fine-tuning techniques (PEFT, QLORA, LORA) along with advanced prompt engineering to boost NLP model performance in production environments.",
      "Conducted A/B testing using statistical tools (Python, R, SQP), streamlining the evaluation of new features and driving data-driven decisions that improved application performance and user engagement."
    ]
  },
  {
    company: "Scio",
    location: "Remote",
    position: "Lead Data Scientist / ETL Developer",
    period: "Feb 2022 - Mar 2023",
    responsibilities: [
      "Designed and optimized a predictive model using TensorFlow, PyTorch, and Scikit-learn, improving financial risk assessment accuracy by 40% while integrating AI agents into the Sampleit AI model for seamless production deployment.",
      "Automated workflows with AWS Lambda, streamlining data exchange between AI models and production environments.",
      "Collaborated with data science and business operations efficiency teams.",
      "Spearheaded a customer segmentation project using deep learning and NLP frameworks (NLTK, HuggingFace, etc.), leveraging RAG, embeddings, and agent-based architectures to deliver intelligent and scalable business solutions and implemented an ensemble model (Logistic Regression, XGBoost, and SVM) to predict (accuracy ~92%) and proactively act on issues in order processing thereby enhancing customer experience."
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
      "Built, deployed, and monitored GEMM solutions by leveraging expertise in LLMs, Computer Vision, and Time Series Analysis, employing model fine-tuning techniques to create scalable AI applications addressing diverse business use cases."
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
      "Automated data pipelines to handle large-scale data ingestion, employing web scraping tools (BeautifulSoup, Scrapy, Selenium) for efficient data collection, preprocessing, and seamless integration into ML workflows."
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
      "Built real-time monitoring dashboards with Tableau and Power BI, providing stakeholders immediate visibility into operational metrics and model performance."
    ]
  }
];

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="experience" className="section-container">
      <div className="main-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div 
          ref={experienceRef} 
          className="scroll-appear mt-12 relative"
        >
          {experienceData.map((job, index) => (
            <div key={index} className="timeline-item neo-card mb-6 transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-sm text-gray-500 mr-3">{job.location}</span>
                  <span className="text-sm font-medium text-gray-600">{job.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="text-gray-700 text-sm">
                    • {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
