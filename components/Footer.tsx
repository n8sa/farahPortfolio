import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, GithubIcon, LinkedinIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between text-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            {GithubIcon}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            {LinkedinIcon}
          </a>
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Farah Nisa Syahindah Binti Yaakob. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;