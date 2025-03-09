
import React from 'react';
import { FileDown } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    // Create an anchor link to download the resume
    try {
      const link = document.createElement('a');
      
      // Set the link to the resume file in the public folder
      link.href = '/RD_resume.pdf'; 
      link.download = 'RishikaDrona_Resume.pdf';
      
      // Append to body, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started",
        description: "Your resume download has started successfully.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download failed",
        description: "Please try again or contact me directly for a copy.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <button
      onClick={handleResumeDownload}
      className="btn-primary group relative overflow-hidden flex items-center space-x-2"
    >
      <span className="relative z-10 flex items-center">
        <FileDown size={18} className="mr-2 animate-pulse-subtle" />
        <span>Download Resume</span>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </button>
  );
};

export default ResumeButton;
