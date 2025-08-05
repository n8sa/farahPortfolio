import React, { useState } from 'react';
import { PROJECTS, GITHUB_URL, GithubIcon, ExternalLinkIcon } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        My Projects
      </h2>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Panel: Project Details */}
        <div className="md:w-3/5 lg:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl shadow-pink-500/10 dark:shadow-pink-500/5 overflow-hidden">
             <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="w-full h-64 object-cover"
             />
             <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3">{selectedProject.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300 text-sm font-medium px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right Panel: Project List */}
        <div className="md:w-2/5 lg:w-1/3 flex flex-col">
          <div className="space-y-4">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-2 
                  ${selectedProject.id === project.id 
                    ? 'bg-pink-50 dark:bg-pink-900/20 border-pink-500 dark:border-pink-400 shadow-md' 
                    : 'bg-white dark:bg-gray-800 hover:bg-pink-50/50 dark:hover:bg-gray-700/50 hover:border-pink-200 dark:hover:border-pink-800 border-transparent'
                  }`}
              >
                <h4 className={`font-bold text-lg ${selectedProject.id === project.id ? 'text-pink-600 dark:text-pink-400' : 'text-gray-800 dark:text-gray-200'}`}>
                    {project.name}
                </h4>
              </button>
            ))}
          </div>
            <a 
                href={GITHUB_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full text-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                View All Projects
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;