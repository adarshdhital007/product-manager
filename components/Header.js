import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div
  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
  style={{
    border: '2px solid black', // black circle border
    borderRadius: '50%', // this will make the border a circle
    padding: '5px', 
    userSelect: 'none', // disable user selection
    pointerEvents: 'none',
  }}
>
  <img
    src="/main.png" 
    alt="Custom Logo"
    className="w-10 h-10 rounded-full"
  />
</div>
          <span className="ml-3 text-xl">Product Manager</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900" href="#about">
            About
          </a>
          <a className="mr-5 hover:text-gray-900" href="#contact">
            Contact Us
          </a> */
          /*future use ko lagi */
          }
          <a
            className="mr-4"
            href="https://github.com/adarshdhital007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}  className="text-5xl text-gray-900 hover:text-gray-600" />
          </a>
          <a
            href="https://www.instagram.com/adarshdhital007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-5xl text-gray-900 hover:text-gray-600" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
