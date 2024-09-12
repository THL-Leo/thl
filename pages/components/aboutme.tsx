import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-start 2xl:flex-row'>
      <div
        className='m-5 flex flex-col'
        style={{maxWidth: '1000px', width: '100%', margin: '0 auto'}}>
        <p className='m-1 text-2xl md:m-2 md:text-4xl xl:m-3 xl:text-5xl'>
          Welcome!
        </p>
        <p className='m-1 text-xl md:m-2 md:text-3xl xl:m-3 xl:text-4xl'>
          My name is Leo Lee and I am a second-year Master student studying
          Computer Science at the University of Southern California. My research
          interests are Machine Learning and Outlier Detection.
        </p>
        <p className='m-1 text-xl md:m-2 md:text-3xl xl:m-3 xl:text-4xl'>
          I decided to pursue Computer Science because I enjoy building things
          from scratch and seeing the final result. Besides coding, I enjoy
          watching basketball, sailing, and playing the saxophone. I am a
          diehearted Celtics fan living in LA. If you are interested in my work
          or just want to connect, reach out to me through my{' '}
          <Link href='https://www.linkedin.com/in/thl-leo/'>LinkedIn </Link>
          or email!
        </p>
      </div>
      <div className='m-5'>
        <div className='m-1 md:m-2 xl:ml-3'>
          <Image
            src='/me.jpeg'
            alt='Leo Lee'
            width={300}
            height={300}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '50%',
              overflow: 'hidden',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
