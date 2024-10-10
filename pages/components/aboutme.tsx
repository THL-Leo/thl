import React from 'react';
import Image from 'next/legacy/image';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-between'>
      <div className='w-full p-4 lg:w-1/2'>
        <h1 className='mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
          Welcome to My Portfolio!
        </h1>
        <p className='mb-6 text-lg md:text-xl'>
          I am Leo Lee, currently pursuing a Master's in Computer Science at the
          University of Southern California, with an expected graduation in May
          2025. I gained valuable experience as a Software Engineer Intern at
          Advanced Micro Devices (AMD), where I thrived in fast-paced
          environments and embraced new technologies. My strong communication
          skills enable effective collaboration with cross-functional teams, and
          I am a proactive team player. I am also a risk-taker, unafraid to
          tackle new challenges head-on and implement new ideas.
        </p>
      </div>
      <div className='mt-8 w-full p-4 lg:mt-0 lg:w-1/2'>
        <div className='relative mx-auto h-64 w-64'>
          <Image
            src='/me.jpg'
            alt="THL's profile picture"
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
