import React from 'react';
import { CERTIFICATIONS, ExternalLinkIcon } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        Certifications
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <a 
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group bg-pink-50/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-pink-400/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                {ExternalLinkIcon}
            </div>
            <h3 className="font-bold text-gray-900 dark:text-gray-50 pr-6">{cert.name}</h3>
            <p className="text-sm text-pink-500 dark:text-pink-400 mt-1">{cert.issuer}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;