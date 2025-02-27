import React from 'react';
import Image from 'next/legacy/image';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-center lg:justify-between'>
      <div className='w-full p-4 lg:w-1/2'>
        <h1 className='mb-4 text-2xl font-bold md:text-3xl lg:text-3xl'>Hi!</h1>
        <p className='mb-6 text-lg md:text-xl'>
          I'm Leo Lee, a Master's student in Computer Science at USC, graduating
          in May 2025. I have a passion for building impactful software that
          focuses on making our daily lives easier.
        </p>
      </div>
      <div className='mt-8 w-full p-4 lg:mt-0 lg:w-1/2'>
        <div className='relative mx-auto h-64 w-64'>
          <Image
            src='/me.jpg'
            alt="THL's profile picture"
            layout='fill'
            objectFit='cover'
            className='full'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
