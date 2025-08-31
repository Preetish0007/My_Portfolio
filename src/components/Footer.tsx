import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">
              © {new Date().getFullYear()} Preetish Mehta. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-slate-300">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            <span>and React</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            This portfolio is built with React, TypeScript, and Tailwind CSS. 
            Designed for performance, accessibility, and modern web standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;