import React from 'react';
import NavigationBar from './topbar';
// import MyFooter from './footer';

type LayoutProps = {
  children: React.ReactNode;
  showNavBar: boolean; // Add this prop to control visibility
};

const Layout: React.FC<LayoutProps> = ({children, showNavBar}) => {
  return (
    <>
      <div className={`fade ${showNavBar ? 'show' : ''}`}>
        <NavigationBar />
      </div>
      <main>{children}</main>
      {/* <div className={`fade ${showNavBar ? 'show' : ''}`}>
        <MyFooter />
      </div> */}
    </>
  );
};

export default Layout;
