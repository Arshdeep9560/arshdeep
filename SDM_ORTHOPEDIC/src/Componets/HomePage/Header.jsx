import React from 'react';

const Header = () => {
  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center justify-between mx-auto">
        <div className="flex justify-end w-full md:w-auto md:ml-auto">
          <nav className="flex items-center text-base">
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Contact</a>
          </nav>
          <form action="" className="relative flex">
            <input type="search" className="text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-gray-300 focus:px-3" placeholder="Search..." />
            <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-gray-300 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;

