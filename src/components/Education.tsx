import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science (AI)',
      institution: 'Poornima Institute of Engineering and Technology',
      location: 'Jaipur, India',
      duration: '2021 - 2025',
      gpa: '9.01/10',
      description: 'Specializing in Artificial Intelligence with strong foundation in computer science fundamentals, data structures, algorithms, and machine learning. Maintaining excellent academic performance while gaining practical industry experience.'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Shiv Jyoti International School',
      location: 'Kota, India',
      duration: '2020 - 2021',
      gpa: '83.4%',
      description: 'Completed senior secondary education with strong performance in mathematics and science subjects, building the foundation for engineering studies.'
    }
  ];

  const certifications = [
    {
      name: 'Data Analytics and Visualization Job Simulation',
      issuer: 'Deloitte Australia',
      date: '2023',
      credentialId: 'DELOITTE-DA-2023'
    },
    {
      name: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: '2022',
      credentialId: 'SFDC-AI-2022'
    },
    {
      name: 'Data Analytics and Visualization Job Simulation',
      issuer: 'Accenture North America',
      date: '2022',
      credentialId: 'ACCENTURE-DA-2022'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 ml-4">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {edu.degree}
                  </h4>
                  
                  <div className="text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500 mb-3">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center mb-1 sm:mb-0">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                    <div className="font-semibold text-green-600">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 ml-4">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {cert.name}
                  </h4>
                  
                  <div className="text-purple-600 font-semibold mb-2">
                    {cert.issuer}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Issued {cert.date}
                    </div>
                    <span className="font-mono text-xs bg-slate-200 px-2 py-1 rounded">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
              <h4 className="text-lg font-bold mb-2">Continuous Learning</h4>
              <p className="text-blue-100">
                Always staying updated with the latest technologies and industry best practices. 
                Currently pursuing additional certifications in cloud architecture and DevOps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
