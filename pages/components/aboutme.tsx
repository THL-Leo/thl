import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='flex items-start'>
      <div className='m-5 flex flex-col'>
        {' '}
        <br />
        {/* Add flex-col class to make the content stack vertically */}
        <div>
          <p className='mt-0 pt-20 text-8xl'>Hello!</p>{' '}
          {/* Use mt-0 to remove top margin */}
          <br />
        </div>
        <div>
          <p className='mt-0 pt-20 text-4xl'>
            {' '}
            {/* Use mt-0 to remove top margin */}
            My name is Leo Lee and I am a first-year Master student at the
            University of Southern California.
          </p>
        </div>
      </div>
      <div className='m-5'>
        <Image
          src='/me.jpeg' // Replace with the URL of your picture
          alt='Leo Lee' // Add an alt attribute for accessibility
          width={0} // Set the width of the image
          height={0} // Set the height of the image
          sizes='100vw'
          style={{width: '100%', height: 'auto'}} // optional
        />
      </div>
    </div>
  );
};

export default AboutMe;
