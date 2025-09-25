import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/ceylon-innovation-logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 md:px-8">

      <img src={logo} alt="Ceylon Innovation Logo" className="h-16 mb-4 md:ml-43 md:mt-10" />


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="md:col-span-2 md:mt-5">
          <p className="text-sm leading-relaxed max-w-lg">
            Our experts offer you top-quality, tailor-made IT solutions & we steer customers through the 
            next generation of business innovation powered by technology with state-of-the-art business 
            automation, software development, and consultation services.
          </p>
        </div>
        

        

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/About" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="/products" className="hover:text-cyan-400">Products</a></li>
            <li><a href="/Contact" className="hover:text-cyan-400">Contact Us</a></li>
          </ul>
        </div>


        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Hotline:</strong> <a href="tel:+94114758900" className=" text-blue-400 hover:text-cyan-400">+94 114 758 900</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:info@ceyloninnovation.com" className="text-blue-400 hover:text-cyan-400">info@ceyloninnovation.com</a>
            </li>
          </ul>
        </div>

        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-start md:items-end md:mt-[-30px]">
          
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/CeylonInnovation?_rdc=1&_rdr" aria-label="Facebook" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/ceylon_innovation/" aria-label="Instagram" className="text-gray-400 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/ceylon-innovation" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/ceyloninno" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright and Bottom Text */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-6 text-sm text-center md:text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Ceylon Innovation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}