import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        My Tech Stack
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div key={index} className="bg-pink-50/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-pink-200 dark:hover:bg-pink-900">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;