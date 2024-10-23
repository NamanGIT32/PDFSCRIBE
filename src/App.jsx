import React, { useState } from "react";
import Header from "./components/Header";
import feature1 from "./assets/img/feature1.png";
import feature2 from "./assets/img/feature2.png";
import feature3 from "./assets/img/feature3.png";
import dropImg from "./assets/img/dropImg.png";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FaqDropdown from "./components/FaqDropdown";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { faqItems } from "./components/FaqDropdown";
const App = () => {
  const [openIndex, setOpenIndex] = useState(0); // First dropdown open by default
  const [selectedFile, setSelectedFile] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle the selected FAQ
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <Header />

      {/* Hero section */}
      <div className="flex flex-col items-center mt-10 px-4">
        <div className="text-teal-600 font-semibold text-sm mb-2">
          #AI-Powered Precision
        </div>
        <div className="text-3xl font-bold text-center text-[#353535] mb-4">
          Transform Your Documents with AI-Powered Precision
        </div>
        <p className="text-gray-500 text-center mb-10">
          Seamless, Accurate, and Fast Translations at Your Fingertips
        </p>
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-xl">
          <div className="border-2 border-dashed border-gray-300 p-10 flex flex-col items-center justify-center mb-6 relative">
            <img src={dropImg} alt="Drop or Upload here" />
            <div className="text-gray-400 mb-2">
              {selectedFile ? selectedFile.name : "Select Or Drop A File"}
            </div>
            <div className="text-gray-400 text-sm">File Upto 25 MB</div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-6">
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue=""
            >
              <option value="" disabled>
                Choose Language
              </option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300">
            Translate
          </button>
        </div>
      </div>

      {/* Best Features */}
      <div className="border-y border-teal-400 py-12 px-5 md:px-10 lg:px-24 my-10 text-center">
        {/* Title */}
        <div className="text-teal-600 font-semibold">#Best Features</div>
        <div className="mt-2 text-[#353535] font-bold text-3xl">
          Why Choose Our Translator?
        </div>

        {/* Feature Section */}
        <div className="mt-5 py-5 border border-gray-300 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center px-4">
            <img
              src={feature1}
              alt="Real-time Translation"
              className="w-28 h-28"
            />
            <div className="text-[#353535] text-xl font-semibold my-2">
              Real-time Translation
            </div>
            <div className="text-[#676768] text-sm text-center">
              Experience instant translations as you upload or edit your
              documents. Our AI ensures you get the results you need without the
              wait.
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center sm:border-l lg:border-x border-gray-300 px-4">
            <img src={feature2} alt="Multilingual OCR" className="w-28 h-28" />
            <div className="text-[#353535] text-xl font-semibold my-2">
              Multilingual OCR
            </div>
            <div className="text-[#676768] text-sm text-center">
              Translate scanned documents and images within PDFs with our
              cutting-edge Optical Character Recognition technology.
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center px-4 ">
            <img
              src={feature3}
              alt="Contextual Accuracy"
              className="w-28 h-28"
            />
            <div className="text-[#353535] text-xl font-semibold my-2">
              Contextual Accuracy
            </div>
            <div className="text-[#676768] text-sm text-center">
              Our AI provides highly accurate translations that understand the
              context of the documents you are working with.
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Plans and pricing */}
      <Pricing />

      {/* F&Q */}
      <div className="text-center pt-6 mt-28 border border-slate-300 mx-5 lg:mx-auto w-full lg:w-[800px] px-5 sm:px-10 rounded-lg">
        <div className="text-green font-semibold">#F&Q</div>
        <div className="mt-2 mb-10 text-center text-[#353535] font-bold text-2xl sm:text-3xl">
          Frequently Asked Questions
        </div>
        <div className="mt-10">
          <div className="max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <FaqDropdown
                key={index}
                heading={faq.heading}
                description={faq.description}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
