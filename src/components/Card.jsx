import React from "react";

export default function Card({ item, index }) {
  return (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-auto max-h-40 object-contain"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{item.name}</h3>
      </div>
    </div>
  );
}
