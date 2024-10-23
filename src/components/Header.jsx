import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import icon from "../assets/img/icon.png";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center px-6 md:px-10 lg:px-14 py-5 relative z-50">
      <div className="flex items-center gap-2">
        <img src={icon} alt="icon" />
        <div className="text-green text-2xl font-semibold">PDFSCRIBE</div>
      </div>
      <div className="hidden md:flex items-center gap-5 text-[#676768] text-base">
        <div>Home</div>
        <div>Features</div>
        <div>Testimonials</div>
        <div>About us</div>
      </div>
      <button className="hidden md:block text-white outline-none bg-[#008080] px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
        Get Started
      </button>

      <div className="md:hidden">
        <FiMenu
          onClick={toggleMenu}
          className="text-3xl text-[#008080] cursor-pointer"
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <div className="text-2xl font-semibold text-[#008080]">Menu</div>
          <FiX
            onClick={toggleMenu}
            className="text-2xl text-[#008080] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-6 p-5 text-[#676768] text-lg">
          <div onClick={toggleMenu} className="cursor-pointer">
            Home
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            Features
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            Testimonials
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            About us
          </div>
          <button className="mt-4 text-white outline-none bg-[#008080] px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="flex gap-5 text-3xl absolute bottom-0 my-5 px-10">
          <TiSocialLinkedin />
          <TiSocialFacebook />
          <TiSocialTwitter />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default Header;
