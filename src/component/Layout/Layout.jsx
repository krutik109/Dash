


import React, { useState } from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import SideBar from '../SideBar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarOpen ? 'd-block col-12 col-sm-3 col-xl-2' : 'd-none d-md-block col-md-3 col-lg-3 col-xl-2'
            } border sidebar_height`}
        >
          <SideBar toggleSidebar={toggleSidebar} />
        </div>

        {/* Main content */}
        <div
          className={`main-content ${isSidebarOpen ? 'col-12 col-sm-9 col-xl-10' : 'col-12 col-md-9 col-lg-9 col-xl-10'
            } sidebar_height`}
        >
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Layout;
