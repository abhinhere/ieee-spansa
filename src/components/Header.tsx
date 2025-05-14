import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className={`font-bold text-2xl ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              IEEE SB CEV
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-red-400 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-red-700 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
            >
              Register Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <ChevronRight className="w-4 h-4 mr-1" />
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-red-700 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors flex justify-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;