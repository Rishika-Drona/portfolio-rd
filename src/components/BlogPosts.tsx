
import { useEffect, useRef } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

const blogPostsData = [
  {
    title: "Machine Learning Fundamentals: A Practical Approach",
    description: "Exploring the core concepts of machine learning with hands-on examples and practical applications in data science.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg",
    url: "https://medium.com/@rishikadrona.rd/machine-learning-fundamentals-a-practical-approach-7d82ea7c3f0b"
  },
  {
    title: "Data Visualization Techniques for Business Intelligence",
    description: "How effective data visualization can transform raw data into actionable business insights using modern tools.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CnNXJFS8d2f5yEULRf7ySw.jpeg",
    url: "https://medium.com/@rishikadrona.rd"
  },
  {
    title: "Natural Language Processing in the Real World",
    description: "Examining how NLP is transforming industries from healthcare to finance with practical implementation examples.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Vq-bFSTjRgxW8ioQmgVF7w.jpeg",
    url: "https://medium.com/@rishikadrona.rd"
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
          <BookOpen size={24} className="mr-2 text-primary" /> Blog Articles
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
              className="blog-card neo-card overflow-hidden h-full flex flex-col group"
            >
              <div className="relative overflow-hidden h-48 -mx-6 -mt-6 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={post.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 text-primary font-medium px-4 py-2 rounded-lg shadow-md transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center"
                  >
                    Read Article <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{post.title}</h3>
              <p className="text-gray-700 text-sm flex-grow">{post.description}</p>
              
              <a 
                href={post.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary font-medium text-sm inline-flex items-center hover:text-primary/80 transition-colors"
              >
                Continue Reading <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <a 
            href="https://medium.com/@rishikadrona.rd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            View All Articles
            <ExternalLink size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
