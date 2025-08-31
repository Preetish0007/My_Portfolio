import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Salesforce Developer Intern',
      company: 'The Smartbridge',
      location: 'Virtual',
      duration: 'Jul 2024 - Sep 2024',
      description: 'Worked extensively on different CRM projects, focusing on automating business processes and improving operational efficiency through Salesforce platform development.',
      achievements: [
        'Developed and implemented multiple CRM solutions for business process optimization',
        'Automated business workflows using Salesforce Flows and Apex triggers',
        'Enhanced data management and reporting capabilities for client organizations',
        'Gained expertise in Salesforce ecosystem including Apex programming and Flow automation'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Learn and Build',
      location: 'Hybrid',
      duration: 'Jul 2023 - Sep 2023',
      description: 'Focused on data analysis and machine learning projects using Python and Jupyter Notebook. Developed predictive models and worked on data visualization to extract meaningful insights.',
      achievements: [
        'Completed 2-3 minor projects and 1 major project using Python and data science libraries',
        'Developed machine learning models for predictive analytics',
        'Gained proficiency in Jupyter Notebook for data analysis and visualization',
        'Applied statistical methods and algorithms to solve real-world data problems'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:ml-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <ExternalLink size={16} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-slate-500 space-y-1">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;