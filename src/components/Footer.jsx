import React from 'react';
import fbIcon from '../assets/icon-facebook.svg';
import igIcon from '../assets/icon-instagram.svg';
import liIcon from '../assets/icon-linkedin.svg';



export default function Footer() {
  return (
    <footer id="footer" className="bg-black py-4 mt-20">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-white">© 2023 Boxchampy. All rights reserved.</div>
        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </div>
    </footer>


  );
};

