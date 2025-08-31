import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CRM Garage Management System',
      description: 'Built a comprehensive CRM system for garage operations, significantly improving operational efficiency. Features automated inventory management, service reminders, and real-time performance tracking dashboards.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Salesforce', 'Apex', 'Flows', 'CRM', 'Automation'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024'
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Developed a machine learning model to predict heart disease risk using patient attributes like age, cholesterol levels, and blood pressure. Implemented RandomForestClassifier for accurate patient classification based on likelihood of developing heart disease.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Machine Learning', 'RandomForest', 'Pandas', 'NumPy'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023'
    },
    {
      title: 'IoT Based Motion Capture Device',
      description: 'Designed and built a prototype IoT device for motion capture using ESP32 board and Arduino IDE. The device captures and processes motion data for various applications including gesture recognition and movement analysis.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ESP32', 'Arduino IDE', 'IoT', 'C++', 'Sensors'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023'
    },
    {
      title: 'Data Analytics Projects',
      description: 'Completed multiple data science projects during internship including data visualization, statistical analysis, and predictive modeling. Utilized Jupyter Notebook for comprehensive data exploration and analysis.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Jupyter', 'Pandas', 'Seaborn', 'Data Visualization'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
                  <Calendar size={16} className="mr-2" />
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Tag size={16} className="text-slate-500 mr-2" />
                    <span className="text-sm font-semibold text-slate-700">Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Preetish0007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-all duration-300 hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;