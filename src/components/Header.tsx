import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Trigger load animation
    setIsLoaded(true);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`text-xl font-bold transition-all duration-500 transform cursor-pointer
              hover:scale-110 hover:text-blue-500 ${
              scrolled ? 'text-slate-800' : 'text-white'
            } ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              Preetish Mehta
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform
                    hover:text-blue-500 hover:scale-110 hover:-translate-y-1 relative group ${
                    scrolled ? 'text-slate-700' : 'text-white/90'
                  } ${
                    isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-all duration-300 transform hover:scale-110 ${
                scrolled ? 'text-slate-800' : 'text-white'
              } ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t
          transition-all duration-300 transform origin-top ${
          isMenuOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium text-slate-700 
                  hover:text-blue-500 hover:bg-slate-50 hover:scale-105 hover:translate-x-2
                  transition-all duration-200 transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                  transitionDuration: '300ms'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating animation dots */}
      <div className="absolute top-2 left-1/4 w-1 h-1 bg-blue-500/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-4 right-1/3 w-1 h-1 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </header>
  );
};

export default Header;
