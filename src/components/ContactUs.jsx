import React from "react";

export default function ContactUs() {
  return (
    <section id="contactus" className="flex flex-col items-center my-14">
      <div className="">
        <h1 className="text-4xl font-bold mb-2">
          Shree Hemkunt Tyres and Services
        </h1>
        <p className="text-gray-700 text-center">
          CISF Campus Road, Ahinsa Khand-02, Indirapuram, Ghaziabad
        </p>
        <p className="text-gray-700 text-center">
          Open: Monday to Sunday - 10:00AM to 8:00PM
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-4 ">
        <button className="px-6 py-3 bg-black hover:bg-white hover:text-black hover:border border-black/40  text-white font-semibold rounded-lg shadow-md">
          Contact Us
        </button>
        <button className="px-6 py-3 bg-black hover:bg-white hover:text-black hover:border border-black/40 text-white font-semibold rounded-lg shadow-md">
          Get Directions
        </button>
      </div>
    </section>
  );
}
