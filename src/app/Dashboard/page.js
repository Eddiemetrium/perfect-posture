"use client";

import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Error from "./error";
import Loading from "./loading";
import FaqList from "../../../components/faqs/faqList";

const Dashboard = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h4 className="text-2xl md:text-3xl lg:text-4xl text-center py-5 px-4">
          View the human spinal structure below
        </h4>
        <h4 className="text-3xl md:text-4xl lg:text-5xl text-center py-5 px-4">
          Click to Explore
        </h4>
        <div className="flex justify-center px-4 mb-8">
          <iframe
            src="https://human.biodigital.com/viewer/?be=2WCG&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=true&ui-label-list=true&initial.hand=true&disable-scroll=false&uaid=4favK"
            className="w-full max-w-4xl h-[400px] md:h-[600px]"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>

        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Identify the pain point
              </h3>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">A. Scapular Region</h3>
            <p className="mb-4">
              The scapula is a triangular bone that lies in the upper back.
            </p>
            {/* Add an image of the scapula here */}

            <h4 className="text-xl font-semibold mb-2">
              COMMON CAUSES FOR SCAPULAR PAIN IN ADULTS INCLUDE:
            </h4>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <span className="font-semibold">Muscle strain:</span> The most
                common cause of pain between the shoulder blades. This can occur
                due to poor posture, lifting heavy objects, twisting motions, or
                sleeping on an unsupportive mattress.
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Trauma and Shoulder/Upper Back Pain:
                </span>{" "}
                Traumatic injuries from car crashes, falls, and sports-related
                collisions can result in serious injuries to the shoulder joint
                and spine.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Scapular dyskinesis:</span>{" "}
                Abnormal positioning or movement of the shoulder blade, often
                characterized by a prominent medial border of the scapula.
              </li>
            </ol>

            <h4 className="text-xl font-semibold mb-2">
              How to address back pain:
            </h4>
            <ol className="list-decimal list-inside mb-4">
              <li>Exercises</li>
              <li>Purchases</li>
              <li>Posture correction</li>
              <li>Furniture replacement</li>
              <li>Speak to a professional</li>
            </ol>

            <h4 className="text-xl font-semibold mb-4">1. Exercises</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/CRc1rC5SGcg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/WZzaLUwNZ_Q"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-2xl font-bold mb-4">B. Thoracic Region</h3>
            {/* Add a relevant image of the mid-back here */}
            <p className="mb-4">
              Back pain is most often associated with the lower back because the
              thoracic spine, or middle back, is less prone to injury. However,
              it's still possible to experience pain or discomfort from the base
              of the neck down to the waist.
            </p>

            <h4 className="text-xl font-semibold mb-2">
              COMMON CAUSES FOR THORACIC PAIN IN ADULTS INCLUDE:
            </h4>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <span className="font-semibold">LIFESTYLE:</span> Poor posture,
                being overweight, lack of physical activity, and smoking can all
                contribute to middle back pain.
              </li>
              <li className="mb-2">
                <span className="font-semibold">INJURY</span>
              </li>
            </ol>

            <h4 className="text-xl font-semibold mt-8 mb-4">2. INJURY</h4>
            <iframe
              className="w-full aspect-video max-w-2xl mx-auto"
              src="https://www.youtube.com/embed/GonNUMJOFlk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Dashboard;
