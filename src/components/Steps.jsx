import React from "react";
import { FaUser, FaBox, FaRocket } from "react-icons/fa";

function Steps() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <FaUser />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select tools that fit your needs.",
      icon: <FaBox />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Get Started In 3 Steps
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition relative text-center"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                {step.id}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Steps;