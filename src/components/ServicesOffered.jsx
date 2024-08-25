import React from "react";
import Card from "./Card";
import { services } from "../Utils/Constant";

function ServicesOffered() {

  return (
    <section id="services-offered" className="mb-8 mx-4 md:mx-8 lg:mx-16">
      <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} item={service} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesOffered;
