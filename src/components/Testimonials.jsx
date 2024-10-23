import React from "react";
import testimonial1 from "../assets/img/testimonial1.png";
import testimonial2 from "../assets/img/testimonial2.png";
import testimonial3 from "../assets/img/testimonial3.png";
import { IoStarSharp } from "react-icons/io5";
const Testimonials = () => {
  return (
    <div className="border-b border-[#008080] pb-12 px-5 md:px-10 lg:px-24 my-10 text-center">
      <div className="text-green font-semibold">#Testimonials</div>
      <div className="mt-2 text-center text-[#353535] font-bold text-2xl md:text-3xl">
        What our clients say about us.
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center gap-5 lg:gap-10 mt-7">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]">
          <img
            src={testimonial1}
            className="rounded-full w-16 h-16 md:w-24 md:h-24"
            alt="James Pattinson"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            James Pattinson
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp className="text-gray-400" />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
            tortor donec ipsum consequat semper consequat adipiscing ultrices.”
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]">
          <img
            src={testimonial2}
            className="rounded-full w-16 h-16 md:w-24 md:h-24"
            alt="Greg Stuart"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            Greg Stuart
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Vestibulum, cum nam non amet consectetur morbi aenean condimentum
            eget. Ultricies integer nunc neque consectetur accumsan laoreet.
            Viverra nibh ultrices.”
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]">
          <img
            src={testimonial3}
            className="rounded-full w-16 h-16 md:w-24 md:h-24"
            alt="Trevor Mitchell"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            Trevor Mitchell
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp className="text-gray-400" />
            <IoStarSharp className="text-gray-400" />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Ut tristique viverra sed porttitor senectus. A facilisis metus
            pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec,
            id sed. Tincidunt.”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
