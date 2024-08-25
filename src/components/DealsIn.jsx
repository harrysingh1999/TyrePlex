import React from "react";
import Card from "./Card";
import { deals } from "../Utils/Constant";

function DealsIn() {
  
  return (
    <section id="deals-in" className="mb-8 mx-4 md:mx-8 lg:mx-16">
      <h2 className="text-3xl font-bold mb-6">Deals In</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <Card key={index} item={deal} index={index} />
        ))}
      </div>
    </section>
  );
}

export default DealsIn;
