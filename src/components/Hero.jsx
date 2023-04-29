import React from 'react';
import heroImage from '../assets/hero-image.png';
import logo from '../assets/logo.svg';


export default function Hero() {
  return (
    <section id="hero" className="bg-hero-image w-screen h-screen bg-no-repeat">
      <div id="header" className="flex justify-between items-center px-4 py-2">
          <div id="header-left" className="flex items-center ml-4">
          <img src={logo} alt="logo" className="mr-3"/>
          <span id="boxchampy" alt="boxchampy" className="text-white w-boxchampy text-xl font-bold font-boxchampy whitespace-no-wrap">Boxchampy</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-white-900 px-4 py-2">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white-900 px-4 py-2">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white-900 px-4 py-2">Locations</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white-900 px-4 py-2">Contact</a>
              </li>
            </ul>
          </nav>
      </div>
      <div id="hero-copy" className="flex flex-col justify-center items-start h-full pl-14 mt-[-5%]">
        <h1 class="text-white font-saira font-bold uppercase text-center text-8xl"><span className="">Fight like<br></br> a

          <span className="text-red-600"> Champion</span>
              
        </span></h1>
      </div>
    </section>
  );
};

