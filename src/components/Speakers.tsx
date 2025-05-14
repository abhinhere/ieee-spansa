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
      name: 'Devang',
      role: 'Chair',
      company: 'CEV',
      bio: 'Im Devang.',
      image: 'devang.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        website: '#',
      }
    },
    {
      id: 2,
      name: 'Sahaf',
      role: 'ECC',
      company: 'CEV',
      bio: 'Sahaf boy yeah',
      image: 'sahaf.png',
      socials: {
        linkedin: '#',
        website: '#',
      }
    },
    {
      id: 3,
      name: 'Devang',
      role: 'Chair',
      company: 'CEV.',
      bio: 'Im Devang .',
      image: 'devang.png',
      socials: {
        linkedin: '#',
        twitter: '#',
      }
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Speakers</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
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
                <p className="text-red-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-500 text-sm mb-4">{speaker.company}</p>
                <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>
                <div className="flex space-x-3">
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} className="text-gray-500 hover:text-red-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} className="text-gray-500 hover:text-red-400 transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default Speakers;