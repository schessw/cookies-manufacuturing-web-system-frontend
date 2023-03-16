import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                {/** 
                <Link to="/">
                  <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
                </Link>
                */}
              </div>
              {/* Navigation links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/** 
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  */}
                </div>
              </div>
            </div>
            {/* Login/Register button */}
            <div className="hidden md:block">
              {/** 
              <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in / Register</Link>
              */}
              </div>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}


      <div className="relative">
        <img className="w-full h-auto" src="jumbotron-cookie-home.png" alt="Delightful Cookies" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-opacity-60 bg-gray-600 p-20 rounded-md shadow-md">
          <h1 className="text-4xl font-bold mb-4">Delightful Cookies</h1>
          <p className="text-lg font-medium">We create the most delicious, mouth-watering cookies that you'll ever taste. Our secret recipe has been passed down from generation to generation, ensuring that each batch is made with love and care.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;