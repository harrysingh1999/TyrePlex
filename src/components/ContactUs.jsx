import React from "react";

export default function ContactUs() {
  return (
    <section
      id="contactus"
      className="flex flex-col items-center my-14 mx-4 sm:mx-8 lg:mx-16"
    >
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold sm:font-bold mb-2">
          Shree Hemkunt Tyres and Services
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          CISF Campus Road, Ahinsa Khand-02, Indirapuram, Ghaziabad
        </p>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          Open: Monday to Sunday - 10:00 AM to 8:00 PM
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-2 sm:space-x-4">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-md">
          Contact Us
        </button>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-md">
          Get Directions
        </button>
      </div>
    </section>
  );
}
