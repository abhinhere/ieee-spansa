import React, { useState } from 'react';

interface Event {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  description: string;
  venue: string;
}

interface DaySchedule {
  date: string;
  day: string;
  events: Event[];
}

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const schedule: DaySchedule[] = [
    {
      date: 'March 16, 2025',
      day: 'Day 1',
      events: [
        {
          id: 1,
          time: '09:00 - 10:00',
          title: 'Registration & Welcome Coffee',
          description: 'Pick up your conference materials and enjoy refreshments.',
          venue: 'Main Hall'
        },
        {
          id: 2,
          time: '10:00 - 11:00',
          title: 'Opening Ceremony & Keynote',
          speaker: 'Devang',
          description: 'The Future of AI and Its Impact on Society',
          venue: 'Auditorium'
        },
        {
          id: 3,
          time: '11:15 - 12:15',
          title: 'Panel Discussion',
          description: 'Emerging Technologies in Sustainable Development',
          venue: 'Auditorium'
        },
        {
          id: 4,
          time: '12:15 - 13:30',
          title: 'Lunch Break',
          description: 'Networking lunch with speakers and attendees',
          venue: 'Dining Area'
        },
        {
          id: 5,
          time: '15:15 - 16:45',
          title: 'Technical Session: Design Advances',
          speaker: 'Sahaf',
          description: 'design methodologies and technologies',
          venue: 'Seminar Hall'
        },
      ]
    },
    {
      date: 'March 16, 2025',
      day: 'Day 2',
      events: [
        {
          id: 8,
          time: '09:00 - 09:30',
          title: 'Morning Coffee',
          description: 'Start your day with coffee and networking',
          venue: 'Main Hall'
        },
        {
          id: 9,
          time: '09:30 - 10:30',
          title: 'Keynote: Robotics Revolution',
          speaker: 'Dr. Michael Chen',
          description: 'The latest advances in robotics and automation',
          venue: 'Auditorium'
        },
        {
          id: 10,
          time: '10:45 - 12:15',
          title: 'Workshop: IoT Solutions',
          speaker: 'John Williams',
          description: 'Building scalable and secure IoT ecosystem',
          venue: 'Workshop Room B'
        },
        {
          id: 11,
          time: '12:15 - 13:30',
          title: 'Lunch Break',
          description: 'Networking lunch with speakers and attendees',
          venue: 'Dining Area'
        },
        {
          id: 12,
          time: '13:30 - 14:30',
          title: 'Technical Session: Cloud Architecture',
          speaker: 'Sarah Johnson',
          description: 'Designing resilient and efficient cloud systems',
          venue: 'Seminar Hall'
        },
        {
          id: 13,
          time: '14:45 - 16:15',
          title: 'Student Project Exhibition',
          description: 'Showcase of innovative projects by students',
          venue: 'Exhibition Area'
        },
        {
          id: 14,
          time: '16:30 - 17:30',
          title: 'Closing Ceremony & Awards',
          description: 'Conclusion of the event with recognition of outstanding contributions',
          venue: 'Auditorium'
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Two days of inspiring talks, hands-on workshops, and networking opportunities
          </p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">{schedule[activeDay].date}</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-8 md:left-20 w-0.5 bg-red-200"></div>
            
            <div className="space-y-8">
              {schedule[activeDay].events.map((event) => (
                <div key={event.id} className="relative pl-12 md:pl-28">
                  <div className="absolute left-4 md:left-16 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center -translate-y-1/2 top-8">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between mb-3">
                      <span className="text-red-600 font-semibold">{event.time}</span>
                      <span className="text-gray-500 text-sm">{event.venue}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h4>
                    {event.speaker && (
                      <p className="text-red-700 mb-2">Speaker: {event.speaker}</p>
                    )}
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">The full agenda is subject to minor changes</p>
          <a 
            href="#contact" 
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;