
import { useEffect, useRef } from 'react';
import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';

const blogPostsData = [
  {
    title: "Machine Learning Fundamentals: A Practical Approach",
    description: "Exploring the core concepts of machine learning with hands-on examples and practical applications in data science.",
    url: "https://medium.com/@rishikadrona.rd/machine-learning-fundamentals-a-practical-approach-7d82ea7c3f0b",
    image: "/lovable-uploads/e4b421dd-6d4c-4c55-a92a-21ff31568e66.png"
  },
  {
    title: "Data Visualization Techniques for Business Intelligence",
    description: "How effective data visualization can transform raw data into actionable business insights using modern tools.",
    url: "https://medium.com/@rishikadrona.rd",
    image: "/lovable-uploads/3c40327b-1c68-4f43-9b6c-7cc01de0296f.png"
  },
  {
    title: "Natural Language Processing in the Real World",
    description: "Examining how NLP is transforming industries from healthcare to finance with practical implementation examples.",
    url: "https://medium.com/@rishikadrona.rd",
    image: "/lovable-uploads/64be17b3-dc7c-4051-be74-dd5eb849b1a4.png"
  }
];

const BlogPosts = () => {
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (blogRef.current) {
      observer.observe(blogRef.current);
    }
    
    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <section id="blog" className="section-container bg-gradient-to-b from-accent/30 to-white">
      <div className="main-container">
        <h2 className="section-title flex items-center">
          <BookOpen size={28} className="mr-2 text-primary animate-pulse-subtle" /> Blog Articles
        </h2>
        
        <div className="mb-6 max-w-2xl">
          <p className="text-gray-700">
            I share my insights and knowledge about data science, machine learning, and analytics through articles on Medium. 
            Here are some of my recent publications.
          </p>
        </div>
        
        <div 
          ref={blogRef} 
          className="scroll-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {blogPostsData.map((post, index) => (
            <div 
              key={index} 
              className="blog-card neo-card overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-500"
            >
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">  
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-700 text-sm flex-grow">{post.description}</p>
                
                <a 
                  href={post.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-primary font-medium text-sm inline-flex items-center hover:text-primary/80 transition-colors group"
                >
                  <span>Read Article</span> 
                  <ExternalLink size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <a 
            href="https://medium.com/@rishikadrona.rd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Sparkles size={18} className="mr-2 animate-pulse-subtle" />
              <span>Discover All Articles</span>
              <ExternalLink size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
