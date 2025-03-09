
import { useEffect, useRef } from 'react';

const skillsData = {
  languages: [
    "Python", "R", "SQL", "JavaScript", "Java", "C++", "Scala"
  ],
  frameworks: [
    "Pandas", "NumPy", "NLTK", "Scikit-learn", "PyTorch", "TensorFlow", "Matplotlib", "SpaCy", "Hugging Face", "FastAPI"
  ],
  cloud: [
    "AWS", "GCP", "Azure", "Lambda", "EC2", "S3", "Redshift", "EMR", "Spark", "Hadoop", "Kubernetes", "Docker"
  ],
  databases: [
    "MongoDB", "PostgreSQL", "Oracle", "Firebase", "RDS", "DynamoDB", "Hive", "Pinecone", "Weaviate", "Elasticsearch"
  ],
  tools: [
    "Git", "Terraform", "Airflow", "Jenkins", "Docker", "Kubernetes", "CI/CD Pipelines", "MLflow", "Kubeflow", "Ray"
  ],
  visualization: [
    "Tableau", "Power BI", "Splunk", "D3.js", "Plotly", "Streamlit", "Dash"
  ]
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="neo-card transition-all hover:shadow-lg group">
    <h3 className="text-lg font-medium mb-4 text-primary group-hover:gradient-text transition-all duration-300">{title}</h3>
    <div className="flex flex-wrap gap-2 skill-grid">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="skill-tag"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add visible class to all skill grids when parent is visible
          const skillGrids = entry.target.querySelectorAll('.skill-grid');
          skillGrids.forEach(grid => {
            grid.classList.add('visible');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-container">
      <div className="main-container">
        <h2 className="section-title">Skills</h2>
        
        <div 
          ref={skillsRef} 
          className="scroll-appear mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <SkillCard title="Languages/Libraries" skills={skillsData.languages} />
          <SkillCard title="Frameworks" skills={skillsData.frameworks} />
          <SkillCard title="Cloud & Infrastructure" skills={skillsData.cloud} />
          <SkillCard title="Databases" skills={skillsData.databases} />
          <SkillCard title="Tools & DevOps" skills={skillsData.tools} />
          <SkillCard title="Visualization" skills={skillsData.visualization} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
