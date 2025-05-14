import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Dr. Amrita Patel',
      role: 'AI Research Scientist',
      company: 'Google DeepMind',
      bio: 'Leading researcher in the field of artificial intelligence, with focus on reinforcement learning and neural networks.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        website: '#',
      }
    },
    {
      id: 2,
      name: 'Prof. Raj Kumar',
      role: 'Professor of Electronics',
      company: 'IIT Bombay',
      bio: 'Expert in VLSI design and embedded systems with over 15 years of teaching and research experience.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        website: '#',
      }
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechFusion Inc.',
      bio: 'Pioneering technologist specializing in cloud architecture and sustainable computing solutions.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      role: 'Robotics Engineer',
      company: 'Boston Dynamics',
      bio: 'Specializes in humanoid robotics and machine learning applications for autonomous systems.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
        website: '#',
      }
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'Cybersecurity Expert',
      company: 'SecureNet',
      bio: 'Renowned security researcher with expertise in network security and ethical hacking.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 6,
      name: 'John Williams',
      role: 'IoT Solutions Architect',
      company: 'SmartTech Labs',
      bio: 'Innovator in IoT ecosystem design with a focus on smart cities and sustainable technology.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      socials: {
        linkedin: '#',
        website: '#',
      }
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Speakers</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Learn from industry leaders and experts who are shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-500 text-sm mb-4">{speaker.company}</p>
                <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>
                <div className="flex space-x-3">
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.socials.website && (
                    <a href={speaker.socials.website} className="text-gray-500 hover:text-gray-800 transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More speakers to be announced soon!</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            Interested in speaking?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;