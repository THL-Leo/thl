'use client';

import {Footer} from 'flowbite-react';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark className='bottom-0 left-0 2xl:fixed'>
      <div className='w-full'>
        <div className='w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between'>
          <div className='mt-0 flex space-x-6 sm:justify-center'>
            <Footer.Icon
              href='https://www.linkedin.com/in/thl-leo/'
              icon={BsLinkedin}
            />
            <Footer.Icon href='https://github.com/THL-Leo' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
