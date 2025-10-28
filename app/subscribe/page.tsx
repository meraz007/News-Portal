'use client';

import React, { useState } from 'react';
import RootLayout from '../componennts/layout/RootLayout';
import { Check, Plus, Minus } from 'lucide-react';

const SubscribePage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How does subscription plan work?",
      answer: "Our subscription plan gives you access to all of our content from podcasts to exclusive interviews."
    },
    {
      question: "Does Year Plan have the same Monthly plan?",
      answer: "Yes, the yearly plan includes all the same features as the monthly plan, but with a 20% discount when billed annually."
    },
    {
      question: "Can I cancel or upgrade any time?",
      answer: "Absolutely! You can cancel or upgrade your subscription at any time through your account settings."
    },
    {
      question: "Can I get support for account problems?",
      answer: "Yes, our premium support team is available to help with any account issues or questions you may have."
    },
    {
      question: "Do you also accept donations?",
      answer: "Yes, we accept donations to help support our mission of spreading faith through media. You can donate through our donate page."
    }
  ];

  return (
    <RootLayout>
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="max-w-[1360px] mx-auto px-4 py-16">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-serif">
              THRIVE! News Premium
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-serif">
              Thousands of members are enjoying breaking news and analysis you can't find anywhere else. 
              Stay informed and inspired with an exclusive subscription to THRIVE! News. Subscribe now for 
              the latest news and perspective from a faith-driven perspective delivered straight to your inbox, 
              plus exclusive discounts and access to our monthly prophetic roundtable.
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 relative">
              <h3 className="text-3xl font-bold text-black mb-4 font-serif">Free Plan</h3>
              <p className="text-gray-600 mb-6">
                Sign up for breaking news in your inbox daily. Unsubscribe anytime.
              </p>
              <div className="text-4xl font-bold text-black mb-8 font-serif">
                $Free/forever
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Daily News",
                  "Delivered to your inbox",
                  "Stay in the know",
                  "News & analysis you can trust",
                  "Unsubscribe any time"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-red-600 text-white py-4 px-6 rounded font-semibold hover:bg-red-700 transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Monthly Plan - Highlighted */}
            <div className="bg-red-600 text-white rounded-lg p-8 relative transform scale-105 shadow-2xl">
              <div className="absolute -top-1 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif">Monthly Plan</h3>
              <p className="text-red-100 mb-6">
                Subscribe to our premium plan for just $10/month. Cancel anytime.
              </p>
              <div className="text-4xl font-bold mb-8 font-serif">
                $10/month
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited access to content",
                  "Live Monthly Prophetic Roundtable",
                  "Exclusive discounts",
                  "Premium support",
                  "Cancel any time"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-4 px-6 rounded font-semibold hover:bg-gray-800 transition-colors">
                  PayPal Checkout
                </button>
                <button className="w-full bg-white text-black py-4 px-6 rounded font-semibold hover:bg-gray-100 transition-colors">
                  Debit or Credit Card
                </button>
                <div className="text-center text-xs text-red-100 mt-2">
                  Powered by PayPal
                </div>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 relative">
              <h3 className="text-3xl font-bold text-black mb-4 font-serif">Yearly Plan</h3>
              <p className="text-gray-600 mb-6">
                Billed yearly at $100, Save 20%. Cancel anytime.
              </p>
              <div className="text-4xl font-bold text-black mb-8 font-serif">
                $100/year
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited access to content",
                  "Live Monthly Prophetic Roundtable",
                  "Exclusive discounts",
                  "Premium support",
                  "Cancel any time"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-4 px-6 rounded font-semibold hover:bg-gray-800 transition-colors">
                  PayPal Checkout
                </button>
                <button className="w-full bg-white text-black py-4 px-6 rounded font-semibold border border-gray-300 hover:bg-gray-100 transition-colors">
                  Debit or Credit Card
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">
                  Powered by PayPal
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 text-center font-serif">
              Still have questions?
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-black">
                      {expandedFAQ === index ? '-' : '+'} {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default SubscribePage;