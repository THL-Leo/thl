import React from 'react';
import {HiCheck} from 'react-icons/hi';

const Todo = () => {
  const goals: [string, boolean][] = [
    ['Read Mathematics for Machine Learning', false],
    ['Read Algorithms for Modern Hardware', false],
    ['Read How to Scale Your Model', false],
    ['Make a web scraper for novels and compile into a PDF', true],
    ['Make a Discord bot for my own server', true],
    [
      'Run a Local LLM on my Intel MacBook and run OpenWebUI for frontend',
      true,
    ],
    ['Go to a hackathon in Spring 2025', false],
    ['Find a job', false],
  ];

  return (
    <div className='mx-auto flex min-h-screen max-w-4xl p-10'>
      <div className='flex gap-8'>
        {/* Year */}
        <div className='pt-2 text-5xl font-bold'>2025</div>

        {/* Vertical Line */}
        <div className='h-full w-0.5 rounded-full bg-current' />

        {/* Goals List */}
        <ul className='space-y-6 text-lg'>
          {goals.map(([goal, completed], index) => (
            <li key={index} className='flex items-center gap-3'>
              <span className='text-lg'>{goal}</span>
              {completed && <HiCheck className='ml-2 h-5 w-5 text-green-500' />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
