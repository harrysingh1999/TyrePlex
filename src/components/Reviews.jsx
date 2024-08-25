import React from "react";
import { reviews } from "../Utils/Constant";

function Reviews() {
  return (
    <section id="reviews" className="mt-8 mx-8 lg:mx-16">
      <h2 className="text-2xl md:text-3xl font-bold  mb-6">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* reviews Array is used here which is imported from Constant.js file */}

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {review.name}
            </h3>
            <p className="text-gray-700 text-center">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
