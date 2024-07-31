import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { services } from "@/assets/data/services";
import ServiceCard from "../../../components/ServiceCard";

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
