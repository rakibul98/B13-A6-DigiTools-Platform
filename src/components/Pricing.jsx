import React from "react";

function Pricing() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Simple, Transparent Pricing
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Starter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Perfect for getting started
            </p>

            <h2 className="text-3xl font-bold mb-4">
              $0
              <span className="text-base font-normal text-gray-400">
                /Month
              </span>
            </h2>

            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✔ Access to free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="w-full bg-linear-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="bg-linear-to-b from-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg relative text-left">
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-lg font-semibold mb-1">Pro</h3>
            <p className="text-sm text-white/80 mb-4">Best for professionals</p>

            <h2 className="text-3xl font-bold mb-4">
              $29
              <span className="text-base font-normal text-white/70">
                /Month
              </span>
            </h2>

            <ul className="text-sm text-white/90 space-y-2 mb-6">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="w-full bg-white text-purple-600 py-2 rounded-full font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Enterprise
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mb-4">
              $99
              <span className="text-base font-normal text-gray-400">
                /Month
              </span>
            </h2>

            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="w-full bg-linear-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;