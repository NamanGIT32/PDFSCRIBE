import React, { useState, useEffect } from "react";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
export const faqItems = [
  {
    heading: "What is UX design?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim veritatis optio quasi nisi alias ipsa debitis rem neque dolorum, ad, accusantium quaerat praesentium vero voluptas autem odit dolorem maiores itaque suscipit, est laudantium? Asperiores?",
  },
  {
    heading: "What are the key principles of UX design?",
    description:
      "UX design is important because it ensures that a product is user-friendly, accessible, and enjoyable for its intended audience, which leads to better engagement and satisfaction.",
  },
  {
    heading: "What is the difference between UX and UI design?",
    description:
      "Improving UX design involves understanding user needs through research, creating wireframes, usability testing, and continuously refining the design based on feedback.",
  },
  {
    heading: "What is a wireframe?",
    description:
      "Improving UX design involves understanding user needs through research, creating wireframes, usability testing, and continuously refining the design based on feedback.",
  },
  {
    heading: "What is user testing?",
    description:
      "Improving UX design involves understanding user needs through research, creating wireframes, usability testing, and continuously refining the design based on feedback.",
  },
];
const FaqDropdown = ({ heading, description, isOpen, onClick }) => {
  return (
    <div className="mb-12 sm:mb-20 text-left ">
      <div
        className="flex items-center gap-2 justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="font-bold text-lg sm:text-2xl text-[#353535]">
          {heading}
        </div>
        {isOpen ? (
          <BsArrowUpCircle className="text-[#008080] text-xl sm:text-2xl shrink-0 " />
        ) : (
          <BsArrowDownCircle className="text-[#008080] text-xl sm:text-2xl shrink-0" />
        )}
      </div>
      {isOpen && (
        <div
          className={`text-[#353535] text-sm sm:text-base mt-3 text-left transition-[height] duration-300 ${
            isOpen ? "h-fit" : "h-0 "
          }`}
        >
          {description}
        </div>
      )}
    </div>
  );
};
export default FaqDropdown;
