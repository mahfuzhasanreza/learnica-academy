import cansat_logo from '../../../assets/logo/cansat-logo.png'
import { useState } from 'react';
import Modal from 'react-modal';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-blue-50 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 z-50 mt-3 w-64 p-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
              <li>
                <a className="rounded-lg hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200">
                  Home
                </a>
              </li>
              <li>
                <a className="rounded-lg hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a className="rounded-lg hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200">
                  Team
                </a>
                <ul className="p-2 mt-1 bg-gray-50/80 rounded-lg border border-gray-100">
                  <li>
                    <a className="text-sm hover:bg-white hover:text-blue-600 rounded-md transition-all duration-200">
                      ASTRO 2024
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:bg-white hover:text-blue-600 rounded-md transition-all duration-200">
                      ASCEND 2025
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:bg-white hover:text-blue-600 rounded-md transition-all duration-200">
                      Join Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img className="cursor-pointer w-20 hover:scale-105 transition-transform duration-200" src={cansat_logo} alt="CanSat" />
        </div>

        {/* Navbar Center */}
        <div className="navbar-end hidden lg:flex">
          
        </div>

        {/* Navbar End */}
        <div className="w-full navbar-end flex items-center gap-2">
          <div className=''>
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <a className="px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 font-medium transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a className="px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 font-medium transition duration-200">
                Projects
              </a>
            </li>
            <li>
              <details className="dropdown">
                <summary className="px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 font-medium cursor-pointer transition duration-200">
                  Team
                </summary>
                <ul className="p-3 mt-2 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg min-w-48 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  <li>
                    <a className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                      ASTRO 2024
                    </a>
                  </li>
                  <li>
                    <a className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                      ASCEND 2025
                    </a>
                  </li>
                  <li>
                    <a className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                      Join Us
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          </div>
          <a className="btn bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold px-6">
            <span className="flex items-center space-x-2">
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
          {/* Watch for Details Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer ml-2 px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg text-base font-semibold hover:scale-105 transform transition-all duration-300 shadow flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Watch for Details
          </button>
          {/* Modal for YouTube Video */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Watch for Details Video"
            className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 z-[999]"
            overlayClassName="fixed inset-0 bg-black/60 z-[998]"
          >
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1eZ9H9aFC4k?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 rounded-full hover:bg-white transition-all"
              >
                ✕
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
