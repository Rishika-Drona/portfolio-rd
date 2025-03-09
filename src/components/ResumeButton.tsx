
import React from 'react';
import { FileDown } from 'lucide-react';

const ResumeButton = () => {
  const handleResumeDownload = () => {
    // Create a downloadable link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This assumes you'll add the PDF to the public folder
    link.download = 'RishikaDrona_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
