import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 px-4 md:px-8 lg:px-16">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-8 lg:space-y-0">
        <div className="lg:w-1/3">
          <h3 className="text-lg font-bold">Have a Question About Tyres?</h3>
          <p className="mt-2">Get an answer in 24 hours from our experts.</p>
          <div className="mt-4">
            <input
              type="text"
              className="border rounded-md p-2 w-full text-black"
              placeholder="Ask or search your question"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around md:space-x-8 lg:space-x-16 w-full lg:w-2/3">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold">Information</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Are you a Tyre Dealer?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Customer Service</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Shipping & Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xs md:text-base text-center border-t border-white/30 pt-2">
        <p>
          © 2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
