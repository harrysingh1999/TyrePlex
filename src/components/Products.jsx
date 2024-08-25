import React, { useState } from "react";
import { products } from "../Utils/Constant";

function Products() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (filter === "all" || product.type === filter) &&
      product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="products" className="mb-8 mx-4 md:mx-8 lg:mx-16">
      <h2 className="text-3xl font-bold mb-6">Tyres Available</h2>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <label htmlFor="search" className="font-semibold mr-2">
            Search:
          </label>
          <input
            id="search"
            type="text"
            className="p-2 border rounded-md w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by brand..."
          />
        </div>
        <div>
          <label htmlFor="filter" className="font-semibold mr-2">
            Filter by:
          </label>
          <select
            id="filter"
            className="p-2 border rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="car">Car Tyres</option>
            <option value="bike">Bike Tyres</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.model}
              className="w-full h-auto max-h-40 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {product.brand} - {product.model}
              </h3>
              <p className="text-gray-700">{product.size}</p>
              <p className="text-gray-800 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
