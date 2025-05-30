import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;