import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Navbar from 'components/Navbar';

const PublicLayout = () => {
  const location = useLocation();

  const allowedPaths = ['/career', '/about', '/'];

  const showNavbar = allowedPaths.includes(location.pathname) ? <Navbar /> : null

  return(
    <div className='flex flex-col'>
      {showNavbar}
      <div className='h-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default PublicLayout;
