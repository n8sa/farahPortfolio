import React from 'react';
import { EXPERIENCES } from '../constants';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      <div className="absolute left-2 sm:left-4 top-1 w-px h-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="absolute left-0 sm:left-2 top-4 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 group-hover:bg-pink-500 dark:group-hover:bg-pink-400 transition-colors"></div>
      <div className="p-4 bg-pink-50/50 dark:bg-gray-800/50 rounded-lg shadow-lg hover:shadow-xl hover:shadow-pink-500/20 dark:hover:shadow-pink-400/10 transform hover:-translate-y-1 transition-all duration-300">
        <p className="text-sm text-pink-500 dark:text-pink-400 mb-1">{experience.period}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{experience.role}</h3>
        <p className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">{experience.company} &middot; {experience.location}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        Work Experience
      </h2>
      <div className="relative">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;