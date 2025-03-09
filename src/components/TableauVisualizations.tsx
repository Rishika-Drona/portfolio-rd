
import { useEffect, useRef } from 'react';
import { ExternalLink, BarChart4, Sparkles, Zap, Gem } from 'lucide-react';

const visualizationData = [
  {
    title: "Customer Segmentation Analysis",
    description: "Interactive dashboard analyzing customer segments based on purchase behavior and demographics.",
    tableauUrl: "https://public.tableau.com/app/profile/rishika.drona/vizzes"
  },
  {
    title: "Sales Performance Metrics",
    description: "Comprehensive visualization of sales metrics across regions with trend analysis and forecasting.",
    tableauUrl: "https://public.tableau.com/app/profile/rishika.drona/vizzes"
  },
  {
    title: "Product Performance Dashboard",
    description: "Analysis of product performance metrics including sales volume, revenue, and customer satisfaction scores.",
    tableauUrl: "https://public.tableau.com/app/profile/rishika.drona/vizzes"
  }
];

const TableauVisualizations = () => {
  const visualizationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (visualizationsRef.current) {
      observer.observe(visualizationsRef.current);
    }
    
    return () => {
      if (visualizationsRef.current) {
        observer.unobserve(visualizationsRef.current);
      }
    };
  }, []);

  return (
    <section id="tableau" className="section-container bg-gradient-to-b from-white to-accent/30">
      <div className="main-container">
        <h2 className="section-title flex items-center">
          <BarChart4 size={28} className="mr-2 text-primary animate-pulse-subtle" /> Tableau Visualizations
        </h2>
        
        <div className="mb-6 max-w-2xl">
          <p className="text-gray-700">
            Interactive data visualizations created using Tableau. These dashboards showcase my ability to transform complex data into meaningful insights through effective visualization techniques.
          </p>
        </div>
        
        <div 
          ref={visualizationsRef} 
          className="scroll-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {visualizationData.map((viz, index) => (
            <div 
              key={index} 
              className="neo-card overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-500 p-6"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">{viz.title}</h3>
              <p className="text-gray-700 text-sm flex-grow">{viz.description}</p>
              
              <a 
                href={viz.tableauUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full bg-primary/10 text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm group"
              >
                <span>View Dashboard</span>
                <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <a 
            href="https://public.tableau.com/app/profile/rishika.drona/vizzes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center">
              <Gem size={18} className="mr-2 animate-pulse-subtle" />
              <span>Explore All Visualizations</span>
              <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TableauVisualizations;
