import React from 'react';
import { Users, Lightbulb, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Networking',
      description: 'Connect with industry experts, researchers, and fellow enthusiasts.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-600" />,
      title: 'Innovation',
      description: 'Explore cutting-edge technologies and breakthrough research.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: 'Global Perspective',
      description: 'Gain insights from international speakers and diverse viewpoints.'
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: 'Recognition',
      description: 'Participate in competitions and showcase your talents.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About SPANSA</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Students Professional Awarness, Networking and Skill Advancement.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovate. Connect. Inspire.</h3>
            <p className="text-gray-600 mb-4">
              Students Professional Awarness, Networking and Skill Advancement
            </p>
            <p className="text-gray-600 mb-6">
              With a diverse range of speakers, workshops, and networking opportunities, 
              SPANSA offers something valuable for everyone interested in the future of technology.
            </p>
            <div className="flex items-center text-red-600">
              <span className="text-sm font-medium">Organized by IEEE SB CEV</span>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-red-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Attend SPANSA 2025?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-red-800 text-white rounded-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Join us for SPANSA 2025</h3>
              <p className="text-red-100">
                Don't miss this opportunity to be part of an enriching experience. 
                Limited seats available!
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-white text-red-800 px-6 py-3 rounded-md font-medium hover:bg-red-50 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;