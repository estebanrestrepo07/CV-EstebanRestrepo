import React from 'react';
import { Link } from 'react-router-dom';


const OopsNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8 relative overflow-hidden">

    <div className="text-6xl mb-4 mt-8">🤷‍♂️</div>
    <div className="relative text-9xl font-bold text-blue-500 mb-6">
      <h1 className="text-9xl font-extrabold text-blue-500 mb-4">404</h1>
    </div>
    
    <h1 className="text-4xl font-bold text-blue-500 mb-2">Oops! This page got lost in cyberspace.</h1>
    <p className="text-lg text-gray-700 mb-6">
      It seems you've stumbled into the unknown. Maybe my resume is so good, it scared this page away! 😅
    </p>
    
    <Link to="/">
      <div
        className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-indigo-600 transition-all"
      >
        🏠 Take me Home
      </div>
    </Link>
    
    <div className="">
      <div className="mt-10 text-sm text-gray-500">
        (This error page has no idea where it is, either.)
      </div>
    </div>
  </div>
);

export default OopsNotFound;

