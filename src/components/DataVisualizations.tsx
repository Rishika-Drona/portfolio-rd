
import { useEffect, useRef } from 'react';
import { BarChart, BarChart4, Activity, HeartPulse, Zap, LineChart, AudioLines, SparkleIcon, Sparkles } from 'lucide-react';

const DataVisualizations = () => {
  const visualsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (visualsRef.current) {
      observer.observe(visualsRef.current);
    }
    
    return () => {
      if (visualsRef.current) {
        observer.unobserve(visualsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-accent/30 relative overflow-hidden">
      <div className="main-container">
        <h2 className="section-title flex items-center mb-12">
          <Sparkles size={28} className="mr-2 text-primary animate-pulse-subtle" /> 
          Creative Visualizations
        </h2>
        
        <div 
          ref={visualsRef} 
          className="scroll-appear grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Heartbeat Animation */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <HeartPulse size={24} className="text-red-500 mr-2" />
                <h3 className="text-lg font-semibold">Heartbeat Visualization</h3>
              </div>
              <div className="h-40 w-full flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg overflow-hidden">
                <div className="heartbeat-container w-full px-4 flex items-center">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="heartbeat-line"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        height: `${Math.sin(i * 0.5) * 25 + 30}px`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bar Chart Animation */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <BarChart4 size={24} className="text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">Bar Chart Animation</h3>
              </div>
              <div className="h-40 w-full flex items-end justify-center space-x-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg py-4 px-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="bar-chart-column bg-blue-500"
                    style={{
                      height: `${Math.random() * 100}%`,
                      width: '8px',
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Audio Waveform */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <AudioLines size={24} className="text-purple-500 mr-2" />
                <h3 className="text-lg font-semibold">Audio Waveform</h3>
              </div>
              <div className="h-40 w-full flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="audio-wave-container">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="audio-wave-bar"
                      style={{
                        animationDuration: `${0.7 + Math.random() * 1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart Animation */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <LineChart size={24} className="text-green-500 mr-2" />
                <h3 className="text-lg font-semibold">Line Chart Trend</h3>
              </div>
              <div className="h-40 w-full flex items-center justify-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg overflow-hidden relative">
                <svg viewBox="0 0 100 30" className="w-full h-full p-4">
                  <path
                    d="M0,15 Q5,5 10,20 T20,10 T30,15 T40,5 T50,20 T60,10 T70,15 T80,5 T90,10 T100,15"
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.8)"
                    strokeWidth="0.5"
                    className="line-chart-path"
                  />
                  <circle className="line-chart-dot" r="0.8" fill="#10b981">
                    <animateMotion
                      path="M0,15 Q5,5 10,20 T20,10 T30,15 T40,5 T50,20 T60,10 T70,15 T80,5 T90,10 T100,15"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Histogram Animation */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <BarChart size={24} className="text-orange-500 mr-2" />
                <h3 className="text-lg font-semibold">Histogram Animation</h3>
              </div>
              <div className="h-40 w-full flex items-end justify-center space-x-1 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg py-4 px-2">
                <div className="histogram-container">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="histogram-group">
                      <div
                        className="histogram-bar bg-orange-400"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      ></div>
                      <div
                        className="histogram-bar bg-orange-500"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      ></div>
                      <div
                        className="histogram-bar bg-orange-600"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Energy Wave */}
          <div className="neo-card overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Zap size={24} className="text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">Energy Wave</h3>
              </div>
              <div className="h-40 w-full flex items-center justify-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg overflow-hidden">
                <div className="energy-wave">
                  <div className="energy-wave-circle"></div>
                  <div className="energy-wave-circle"></div>
                  <div className="energy-wave-circle"></div>
                  <div className="energy-wave-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;
