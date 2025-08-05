import React from 'react';
import { EMAIL_ADDRESS, MailIcon, LocationIcon, LOCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
        Let's Connect
      </h2>
      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
        I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
         <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            {MailIcon} {EMAIL_ADDRESS}
         </a>
         <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            {LocationIcon} {LOCATION}
         </div>
      </div>
      <a 
        href={`mailto:${EMAIL_ADDRESS}`} 
        className="inline-block px-8 py-4 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;