import React, { useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { TbSquareLetterXFilled } from "react-icons/tb";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const Pricing = () => {
  const [green, setGreen] = useState(1);
  return (
    <div className="px-5 md:px-10 lg:px-24">
      <div className="text-green font-semibold text-center"># Pricing </div>
      <div className="mt-2 text-center text-[#353535] font-bold text-3xl">
        Plans and pricing{" "}
      </div>
      <div className="text-sm mt-3 text-[#676768] text-center">
        Choose the best plan for your business.
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-14 mt-14">
        {/* Enterprise Plan */}
        <div
          className={`flex flex-col border rounded-xl p-6 h-fit sm:w-[350px] ${
            green === 0
              ? "border-[#008080] transition duration-300"
              : "border-slate-300"
          }`}
          onClick={() => setGreen(0)}
        >
          <div className="text-xl">Enterprise</div>
          <div className="my-3">
            <span className="text-3xl font-bold">$0</span>
            <span className="text-sm text-[#606F7B] ">/ Month</span>
          </div>
          <div className="text-sm text-[#606F7B]">
            Flexible pricing without monthly fees and a 5% fee per transaction.
          </div>
          <div className="my-6">
            <div className="flex items-center gap-3 ">
              <TbSquareLetterXFilled className="text-red-500 text-xl" />
              <span>5% fee per transaction</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Unlimited pages</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Unlimited payments</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Email notifications</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Weekly reports</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Customisation options</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>No whitelabel branding</span>
            </div>
          </div>
          <button
            className={` border outline-none px-3 py-2 rounded-lg w-fit self-center ${
              green === 0
                ? "bg-[#008080] text-white hover:bg-teal-700 transition duration-300"
                : "bg-white border-[#008080] text-[#008080]"
            } `}
          >
            Choose Plan
          </button>
        </div>
        {/* Premium Plan */}
        <div
          className={`border rounded-xl p-6 sm:w-[350px] flex flex-col ${
            green === 1
              ? "border-[#008080] transition duration-300"
              : "border-slate-300"
          }`}
          onClick={() => setGreen(1)}
        >
          <div className="text-xl">Premium</div>
          <div className="my-3">
            <span className="text-3xl font-bold">$60</span>
            <span className="text-sm text-[#606F7B] ">/ Month</span>
          </div>
          <Box sx={{ width: 200 }}>
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                color: "teal", // Changes the color of the thumb and track
                "& .MuiSlider-thumb": {
                  backgroundColor: "teal", // Thumb color
                },
                "& .MuiSlider-track": {
                  backgroundColor: "teal", // Track color
                },
              }}
            />
          </Box>
          <div className="text-sm text-[#606F7B]">
            Monthly pricing that automatically adjusts based on your transaction
            volume.
          </div>
          <div className="my-6">
            <div className="flex items-center gap-3 ">
              <BsCheckSquareFill className="text-green-500" />
              <span>No transaction fees</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Unlimited pages</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Unlimited payments</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Email notifications</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Weekly reports</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>Customisation options</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[#A0A9B0]">
              <BsCheckSquareFill className=" " />
              <span>No whitelabel branding</span>
            </div>
          </div>
          <button
            className={` border outline-none px-3 py-2 rounded-lg w-fit self-center ${
              green === 1
                ? "bg-[#008080] text-white hover:bg-teal-700 transition duration-300"
                : "bg-white border-[#008080] text-[#008080]"
            } `}
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
