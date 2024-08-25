import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import ServicesOffered from "./components/ServicesOffered";
import DealsIn from "./components/DealsIn";
import PaymentMode from "./components/PaymentMode";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Banner />
      <Products />
      <DealsIn />
      <ServicesOffered />
      <PaymentMode />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
