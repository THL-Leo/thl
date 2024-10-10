import React from 'react';
import {Navbar} from 'flowbite-react';
import ThemeSwitch from './themeswitch';

export default function NavigationBar() {
  return (
    <header className='sticky top-0 z-20'>
      <Navbar fluid rounded className='bg-white dark:bg-black'>
        <Navbar.Brand href='/'>
          <span className='self-center whitespace-nowrap px-3 text-xl font-semibold text-black dark:text-white'>
            THL
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Navbar.Toggle />
          <ThemeSwitch />
        </div>
        <Navbar.Collapse className='justify-center'>
          <Navbar.Link
            href='/'
            className='font-bold text-black dark:text-white'>
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link
            // href='/project'
            href='https://github.com/THL-Leo'
            className='font-bold text-black dark:text-white'>
            <p>Projects</p>
          </Navbar.Link>
          <Navbar.Link
            href='/resume'
            className='font-bold text-black dark:text-white'>
            <p>Resume</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
