import React from 'react';

const projects = [
  {title: 'Project 1', details: ['Details of Project 1']},
  {title: 'Project 2', details: ['Details of Project 2']},
  {title: 'Project 6', details: ['Details of Project 6']},
];

const Projects = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-white'>
      <div className='grid grid-cols-1 gap-8 border-white p-8 dark:border-black md:grid-cols-3'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex transform flex-col items-center rounded-lg  bg-opacity-90 p-6 shadow-lg transition-transform hover:scale-105 '>
            <h2 className='text-shadow mb-4 text-xl font-bold'>
              {project.title}
            </h2>
            <ul className='list-none space-y-2'>
              {project.details.map((point, index) => (
                <li key={index} className='text-sm'>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
