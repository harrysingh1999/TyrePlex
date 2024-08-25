import React from "react";

function Banner() {
  return (
    <main>
      <section id="store-info" className="mb-8 text-center">
        <img
          src="https://t4.ftcdn.net/jpg/03/48/65/09/360_F_348650949_mUvLeuzPIGYHRgXq8Don8b3T7zN6XC2A.jpg"
          alt="Store Banner"
          className="w-full h-auto rounded-md shadow-md mb-4 object-cover"
          style={{ maxHeight: "390px" }}
        />
      </section>
    </main>
  );
}

export default Banner;
