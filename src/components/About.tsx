import React, { useEffect, useRef, useState } from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-slate-800 mb-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg text-slate-600 leading-relaxed transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            } hover:text-slate-800 hover:scale-[1.02]`}>
              I'm a dedicated Computer Science student at Poornima Institute of Engineering and Technology, Jaipur, 
              with a strong academic record (9.01 GPA). My journey in technology spans from CRM development 
              to data science and IoT solutions, always driven by a passion for innovation.
            </p>
            
            <p className={`text-lg text-slate-600 leading-relaxed transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            } hover:text-slate-800 hover:scale-[1.02]`}>
              Through internships at The Smartbridge and Learn and Build, I've gained hands-on experience 
              in Salesforce development, data science, and machine learning. I specialize in building 
              practical solutions that bridge technology and real-world applications.
            </p>

            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-900 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s', animationIterationCount: 'infinite' }}>
                Data Science
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '2s', animationIterationCount: 'infinite' }}>
                Salesforce Developer
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '2s', animationIterationCount: 'infinite' }}>
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2s', animationIterationCount: 'infinite' }}>
                IoT Solutions
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className={`bg-slate-50 p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } delay-1000 group cursor-pointer hover:bg-slate-100`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Academic Excellence
                </h3>
              </div>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Maintaining a 9.01 GPA while gaining practical industry experience through internships and hands-on projects.
              </p>
            </div>

            <div className={`bg-slate-50 p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } delay-1200 group cursor-pointer hover:bg-slate-100`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4 group-hover:text-purple-600 transition-colors duration-300">
                  Industry Experience
                </h3>
              </div>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Gained valuable experience through internships in Salesforce development and data science, working on real-world projects.
              </p>
            </div>

            <div className={`bg-slate-50 p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } delay-1400 group cursor-pointer hover:bg-slate-100`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4 group-hover:text-green-600 transition-colors duration-300">
                  Technical Innovation
                </h3>
              </div>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                Combining theoretical knowledge with practical skills to create innovative solutions in AI, IoT, and business automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add some CSS animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(59, 130, 246, 0.1);
          }
        }
        
        .group:hover {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
