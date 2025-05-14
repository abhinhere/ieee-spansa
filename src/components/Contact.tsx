import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will contact you shortly with more details.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Register for SPANSA</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Secure your spot at IEEE SPANSA 2025. Limited seats available!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">Organization/Institution</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your organization"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Special Requests or Questions</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Any specific requirements or questions"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition-colors flex items-center justify-center w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Registration
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-red-800 text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-red-300" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:spansa@ieeecalicut.org" className="text-red-200 hover:text-white transition-colors">
                      ieee@cev.ac.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-red-300" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+91999999999" className="text-red-200 hover:text-white transition-colors">
                      +91 9999999999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-red-300" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-red-200">
                      College of Enginnering<br />
                      Vadakara, Kozhikode<br />
                      Kerala, India - 673601
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="font-medium">Early Bird Registration</span>
                  <span className="text-red-600">Until june 02, 2025</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="font-medium">Regular Registration</span>
                  <span className="text-red-600">Until june 10, 2025</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="font-medium">Late Registration</span>
                  <span className="text-red-600">Until June 12, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Event Dates</span>
                  <span className="text-red-600">March 16, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;