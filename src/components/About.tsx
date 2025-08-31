import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a dedicated Computer Science student at Poornima Institute of Engineering and Technology, Jaipur, 
              with a strong academic record (9.01 GPA). My journey in technology spans from CRM development 
              to data science and IoT solutions, always driven by a passion for innovation.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Through internships at The Smartbridge and Learn and Build, I've gained hands-on experience 
              in Salesforce development, data science, and machine learning. I specialize in building 
              practical solutions that bridge technology and real-world applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Data Science
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Salesforce Developer
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                IoT Solutions
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4">
                  Academic Excellence
                </h3>
              </div>
              <p className="text-slate-600">
                Maintaining a 9.01 GPA while gaining practical industry experience through internships and hands-on projects.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4">
                  Industry Experience
                </h3>
              </div>
              <p className="text-slate-600">
                Gained valuable experience through internships in Salesforce development and data science, working on real-world projects.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4">
                  Technical Innovation
                </h3>
              </div>
              <p className="text-slate-600">
                Combining theoretical knowledge with practical skills to create innovative solutions in AI, IoT, and business automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;