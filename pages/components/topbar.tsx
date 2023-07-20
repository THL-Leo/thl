import React from 'react';
import {Navbar} from 'flowbite-react';
import ThemeSwitch from './themeswitch';

export default function NavigationBar() {
  return (
    <header className='sticky top-0 z-20'>
      <Navbar fluid rounded className='bg-transparent'>
        <Navbar.Brand href='/'>
          <span className='self-center whitespace-nowrap px-3 text-xl font-semibold text-inherit'>
            THL
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Navbar.Toggle />
          <ThemeSwitch />
        </div>
        <Navbar.Collapse className='justify-center'>
          <Navbar.Link href='/' className='text-inherit'>
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href='#' className='text-inherit'>
            <p>Projects</p>
          </Navbar.Link>
          <Navbar.Link href='/resume' className='text-inherit'>
            <p>Resume</p>
          </Navbar.Link>
          <Navbar.Link href='#' className='text-inherit'>
            <p>Contact Me</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
