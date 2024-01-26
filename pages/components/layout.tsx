import React from 'react';
import NavigationBar from './topbar';
import MyFooter from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <MyFooter />
    </>
  );
};

export default Layout;
