"use client";

import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Error from "./error";
import Loading from "./loading";

const Dashboard = () => {
  return (
    <section>
      <Header />
      <h4 className="heading text-center py-5">
        View the human spinal stucture below{" "}
      </h4>
      <h4 className="heading text-4xl text-center py-5">
     Click to Explore
      </h4>
      <div className="flex flex-col items-center justify-center">
        {/* Add your content here */}
        <iframe
          src="https://human.biodigital.com/viewer/?be=2WCG&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=true&ui-label-list=true&initial.hand=true&disable-scroll=false&uaid=4favK"
          width="80%"
          height="600px"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
