
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="contact" className="section-container bg-accent/50">
      <div className="main-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div 
          ref={contactRef} 
          className="scroll-appear mt-12 max-w-3xl mx-auto"
        >
          <div className="neo-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-4" size={20} />
                    <a 
                      href="mailto:rishikadrona.rd@gmail.com" 
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      rishikadrona.rd@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-primary mr-4" size={20} />
                    <a 
                      href="tel:+18418882099" 
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      (841) 888-2099
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-4" size={20} />
                    <span className="text-gray-700">San Jose, CA</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Social Links</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/rishika-drona" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/rishika-drona" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://www.rishikadrona.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:text-primary transition-colors"
                      aria-label="Website"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 w-full"
                  >
                    Send Message
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
