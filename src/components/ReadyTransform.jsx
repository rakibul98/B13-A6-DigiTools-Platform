import React from "react";
import { PiBroadcast } from "react-icons/pi";

function ReadyTransform() {
  return (
    <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-purple-300 text-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h2>

      <p className="text-white/80 max-w-2xl mx-auto mb-8">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:opacity-90">
          Explore Products
        </button>

        <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      <p className="text-sm text-white/70">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
}

export default ReadyTransform;