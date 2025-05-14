import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
  id="hero"
  className="relative pt-20 md:pt-0 text-white"
  style={{
    backgroundImage: 'linear-gradient(to bottom right, #E3522D, #CD0500, #B30000)',
  }}
>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-32 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-red-300">SPANSA</span> 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Students Professional Awarness, Networking and Skill Advancement
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-red-300" />
                <div>
                  <p className="text-sm text-red-200">Date</p>
                  <p className="font-medium">June 16, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-300" />
                <div>
                  <p className="text-sm text-red-200">Location</p>
                  <p className="font-medium">Kozhikode , Kerala</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3 text-red-300" />
                <div>
                  <p className="text-sm text-red-200">Duration</p>
                  <p className="font-medium">1 Day</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#contact" 
              className="bg-white text-red-900 hover:bg-red-50 px-6 py-3 rounded-md font-medium transition-colors text-center"
            >
              Register Now
            </a>
            <a 
              href="#schedule" 
              className="border border-white/50 hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors text-center"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;