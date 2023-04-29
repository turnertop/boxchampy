import React from 'react';
import infoSectionImage from '../assets/infosection-image.jpg';


export default function InfoSection() {
  return (
    <section>
      <div id="info-section" className="flex flex-wrap">
        <div id="info-section-image" className="w-full md:w-1/2 p-6">
          <img src={infoSectionImage} />
        </div>
        <div id="info-section-text" className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl text-gray-800 font-bold leading-tight uppercase mb-2">How we got started in the business</h1>
          <p className="mt-4 text-gray-600 leading-relaxed mr-30 flex-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Bibendum est ultricies integer quis auctor elit sed vulputate. Vel eros donec ac odio tempor. Id donec ultrices tincidunt arcu non. </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
  Sign Up
</button>

        </div>
      </div>
    </section>

  );
};

