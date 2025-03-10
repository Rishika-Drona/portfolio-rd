import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-accent/50">
      <div className="main-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div 
          ref={contactRef} 
          className="scroll-appear mt-12 max-w-3xl mx-auto"
        >
          <div className="neo-card relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/5 rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <a 
                      href="mailto:rishikadrona.rd@gmail.com" 
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      rishikadrona.rd@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <span className="text-gray-700">San Jose, CA</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Social Links</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Rishika-Drona" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-white hover:bg-[#333] hover:border-[#333] transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/rishika-drona" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://www.rishikadrona.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="Website"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 w-full flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
