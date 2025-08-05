import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        Education
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION.map((item, index) => (
          <div key={index} className="bg-pink-50/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-pink-500/10 dark:hover:shadow-pink-400/5 transition-shadow text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{item.degree}</h3>
            <p className="text-pink-500 dark:text-pink-400 font-semibold mt-1">{item.institution}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;