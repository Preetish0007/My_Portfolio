import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">PM</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Preetish Mehta</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Computer Science Student & Aspiring Data Scientist
          </p>
          
          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging technology to solve real-world problems through data science and software development. 
            Currently pursuing Bachelor of Technology in Computer Science with expertise in machine learning, CRM systems, and IoT solutions.
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/preetish-mehta/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Preetish0007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:preetishmehta6384@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Call to action */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View My Work
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;