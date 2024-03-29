import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-start 2xl:flex-row'>
      <div className='m-5 flex flex-col'>
        <div>
          <p className='m-3 text-3xl md:m-6 md:text-6xl xl:m-10 xl:text-8xl'>
            Welcome!
          </p>
          <br />
        </div>
        <div>
          <p className='m-3 text-xl md:m-6 md:text-3xl xl:m-10 xl:text-4xl'>
            My name is Leo Lee and I am a first-year Master student at the
            University of Southern California. My research interests are
            Artificial Intelligence and Machine Learning.
          </p>
          <p className='m-3 text-xl md:m-6 md:text-3xl xl:m-10 xl:text-4xl'>
            Besides coding, I enjoy watching basketball, sailing, and playing
            the saxophone. I am also a diehearted Celtics fan living in LA. If
            you are interested in my work, reach out to me through my{' '}
            <Link href='https://www.linkedin.com/in/thl-leo/'>LinkedIn </Link>
            or email!
          </p>
        </div>
      </div>
      <div className='m-5'>
        {/* https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height*/}
        <div className='m-3 md:m-6 xl:ml-10'>
          <Image
            src='/me.jpeg'
            alt='Leo Lee'
            width={0}
            height={0}
            sizes='100vw'
            style={{width: '100%', height: 'auto'}}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
