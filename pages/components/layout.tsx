import React from 'react';
import NavigationBar from './topbar';
import MyFooter from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='w-full bg-white shadow-md dark:bg-black'>
        <NavigationBar />
      </div>
      <main className='flex-grow'>{children}</main>
      <div className='mt-auto w-full'>
        <MyFooter />
      </div>
    </div>
  );
};

export default Layout;
