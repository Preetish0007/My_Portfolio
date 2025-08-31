import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 }
      ],
      color: 'blue'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Science & ML',
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'Seaborn', level: 80 },
        { name: 'OpenCV', level: 75 }
      ],
      color: 'purple'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Salesforce Platform',
      skills: [
        { name: 'Apex Programming', level: 85 },
        { name: 'Triggers', level: 80 },
        { name: 'Flows', level: 85 },
        { name: 'CRM Development', level: 90 }
      ],
      color: 'green'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'MS Excel', level: 90 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'Arduino IDE', level: 75 }
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across various technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`bg-white border-2 ${colorClasses.border} rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${colorClasses.light} rounded-lg ${colorClasses.text}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${colorClasses.bg} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'C++', 'Python', 'Java', 'Machine Learning', 'Data Analysis', 'Salesforce',
              'CRM Development', 'IoT', 'Power BI', 'SQL', 'OpenCV', 'NumPy'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;