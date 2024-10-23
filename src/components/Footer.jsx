import React from "react";
import { FiMail } from "react-icons/fi";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
import icon from "../assets/img/icon.png";

const Footer = () => {
  return (
    <>
      <div className="px-5 md:px-[8vw] mt-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Section */}
          <div className="flex flex-col gap-3 text-[#606F7B] text-base">
            <h1 className="font-semibold text-black mb-1">Product</h1>
            <div>Employee database</div>
            <div>Payroll</div>
            <div>Absences</div>
            <div>Time tracking</div>
            <div>Shift planner</div>
            <div>Recruiting</div>
          </div>

          {/* Information Section */}
          <div className="flex flex-col gap-3 text-[#606F7B] text-base">
            <h1 className="font-semibold text-black mb-1">Information</h1>
            <div>FAQ</div>
            <div>Blog</div>
            <div>Support</div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-3 text-[#606F7B] text-base">
            <h1 className="font-semibold text-black mb-1">Company</h1>
            <div>About us</div>
            <div>Careers</div>
            <div>Contact us</div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-gray-100 p-6 md:p-8 h-fit rounded-sm">
            <h1 className="font-semibold text-black mb-1">Subscribe</h1>
            <div className="relative my-5">
              <FiMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="text-gray-400 text-sm">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </div>
          </div>
        </div>

        <hr className="my-10 w-full" />

        <div className="flex flex-col flex-wrap xs:flex-row justify-between items-center py-5 mb-5 gap-7">
          <div className="flex items-center gap-2">
            <img src={icon} alt="icon" className="w-8 h-8" />
            <div className="text-green text-2xl font-semibold">PDFSCRIBE</div>
          </div>
          <div className="flex gap-5 text-[#676768] font-semibold text-sm md:text-base">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookies</div>
          </div>
          <div className="flex gap-5 text-2xl ">
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <TiSocialTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
