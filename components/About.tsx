import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        About Me
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-4 text-gray-600 dark:text-gray-400">
          <p>
            Hello! My name is Farah Nisa. For the past 3+ years, I've been diving deep into the world of software engineering, working across financial and enterprise IT environments. My passion lies in solving complex problems and turning ideas into scalable, high-quality solutions.
          </p>
          <p>
            I have a proven track record in delivering robust testing cycles and have significant experience with data migration, Azure infrastructure, and backend optimization. I thrive in fast-paced environments where I can collaborate with cross-functional teams to deliver exceptional results.
          </p>
          <p>
            Whether it's building an application from scratch or enhancing an existing system, I bring a commitment to quality and a user-centric mindset to every project.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
            <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-400/10 transform hover:-translate-y-2 transition-all duration-300">
                <img 
                    src="convoNisa.png" 
                    alt="Farah Nisa Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
