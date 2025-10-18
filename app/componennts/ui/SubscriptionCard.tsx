"use client";
import { Check } from "lucide-react";

const SubscriptionCard = () => {
  const features = [
    "Unlimited access to content",
    "Monthly prayer calls", 
    "Exclusive discount",
    "Premium support"
  ];

  return (
    <div className="max-w-md mx-auto bg-red-600 rounded-2xl p-8 text-white shadow-2xl">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">
          Get unlimited access to everything
        </h2>
        <p className="text-red-100 text-md">
          Plans starting at just $10 per month. Cancel anytime.
        </p>
      </div>

      {/* Pricing */}
      <div className="text-center mb-4">
        <div className="flex items-baseline justify-center">
          <span className="text-xl font-bold">$10</span>
          <span className="text-md text-red-200 ml-2">/month</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Check className="w-3 h-3 text-white bg-white bg-opacity-20 rounded-full p-1" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Payment Buttons */}
      <div className="space-y-3 mb-6">
        {/* PayPal Button */}
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-gray-800">P</span>
          </div>
          <span className="font-semibold">PayPal Checkout</span>
        </button>

        {/* Credit Card Button */}
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
            </svg>
          </div>
          <span className="font-semibold">Debit or Credit Card</span>
        </button>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-red-200">
          Powered by <span className="text-blue-400 font-semibold">PayPal</span>
        </p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
