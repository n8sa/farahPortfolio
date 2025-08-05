import React from 'react';
import nisaProfile from '../context/nisaProfile.png';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS, GithubIcon, LinkedinIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-pink-500 dark:text-pink-400 text-lg font-medium">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50">
            Farah Nisa Syahindah.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-400">
            I bring ideas to life with code.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            I'm a detail-oriented Software Engineer with 3+ years of experience in system development, automation, and backend optimization. I'm passionate about creating scalable, high-quality solutions.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transform hover:-translate-y-1 transition-all">
              {GithubIcon}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transform hover:-translate-y-1 transition-all">
              {LinkedinIcon}
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600 shadow-2xl hover:shadow-pink-500/40 dark:hover:shadow-pink-500/20 transition-shadow">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
                  <img 
                      src={nisaProfile}
                      alt="Farah Nisa" 
                      className="w-full h-full object-cover rounded-full"
                  />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
