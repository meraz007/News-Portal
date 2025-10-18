'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RootLayout from '../componennts/layout/RootLayout';
import { RightSideCommonSection } from '../componennts/ui/RightSIdeCommonSection';

const AboutPage = () => {
  return (
    <RootLayout>
      <div className="min-h-screen bg-white">
        
        {/* About Banner */}
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1360px] mx-auto px-4 w-full">
              <h1 className="text-5xl md:text-7xl font-bold text-white font-serif">About</h1>
            </div>
          </div>
          {/* Background pattern of flags */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 via-white to-blue-500 transform rotate-12 scale-150"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1360px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            
            {/* Main Content - Left Column */}
            <div className="lg:col-span-4 space-y-16">
              
              {/* THRIVE's Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
                    alt="Modern recording studio setup"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-bold text-black mb-6 font-serif">THRIVE!'s Mission</h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    THRIVE! shares and spreads faith through media.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-black mb-6 font-serif">Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    THRIVE! is the news and entertainment studio of the future, leveraging media and technology 
                    to create viral content for people of faith. We encompass news, entertainment, books, and music 
                    to spread the message of hope and truth.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
                    alt="Professional video camera with live feed"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* The Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-4xl font-bold text-black mb-6 font-serif">The Problem</h2>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      Free speech is under attack
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      Religious liberties are at stake
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      News media is inherently biased and corrupt
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      Faith perspectives are being censored and suppressed
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      Groupthink and radical left liberalism has infiltrated the mainstream media with dangerous ideology & rampant bias
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-black mb-6 font-serif">Action</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    THRIVE! is a next-generation news network building a network of news, journalism, and faith-based 
                    commentary to uphold constitutional freedoms and tell "the truth, the whole truth, so help us God."
                  </p>
                </div>
              </div>

              {/* Ben Franklin Quote */}
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <blockquote className="text-2xl md:text-3xl italic text-gray-800 font-serif leading-relaxed">
                  "A Bible and a newspaper in every house... are the principal support of virtue, morality, and civil liberty"
                </blockquote>
                <cite className="block mt-4 text-lg text-gray-600">- Ben Franklin</cite>
              </div>

              {/* History Section */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-8 font-serif">History</h2>
                
                <div className="space-y-12">
                  {/* 2003-2007 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                        alt="Extreme HOME magazine cover"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">2003-2007</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        THRIVE! was founded in 2003, with our first print publication launching in 2007. 
                        This publication was distributed until 2014, establishing our foundation in faith-based media.
                      </p>
                    </div>
                  </div>

                  {/* 2011-2015 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                        alt="UNITE magazine cover"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-2xl font-bold text-black mb-4">2011-2015</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        In 2011, we launched "UNITE," a second publication focused on faith-based news. 
                        This publication was distributed until 2015, expanding our reach in the Christian community.
                      </p>
                    </div>
                  </div>

                  {/* 2016-2018 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                        alt="Logos Post website screenshot"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">2016-2018</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        In 2016, we launched Logos Post, our first digital platform. This website operated until 2018, 
                        marking our transition into the digital media space.
                      </p>
                    </div>
                  </div>

                  {/* 2020-Present */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <Image
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
                        alt="THRIVE! media activities collage"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-2xl font-bold text-black mb-4">2020-Present</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        In 2020, we relaunched THRIVE! with a renewed vision to spread faith through digital media. 
                        We're now expanding into premium content, subscriptions, streaming news app, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Expansion & Calls to Action */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-black mb-6 font-serif">Current Expansion & Get Involved</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We're expanding into premium content, subscriptions, streaming news app, and more. 
                  Join us in spreading faith through media and upholding truth in journalism.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "Write for us", link: "/write" },
                    { title: "Subscribe to THRIVE!", link: "/subscribe" },
                    { title: "Donate", link: "/donate" },
                    { title: "Share", link: "/share" },
                    { title: "Advertise", link: "/advertise" },
                    { title: "View our Impact Report", link: "/impact" },
                    { title: "Volunteer", link: "/volunteer" },
                    { title: "Join our prayer team", link: "/prayer" }
                  ].map((action, index) => (
                    <Link
                      key={index}
                      href={action.link}
                      className="bg-red-600 text-white flex py-4 px-1 justify-center rounded text-center font-semibold hover:bg-red-700 transition-colors"
                    >
                      {action.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <RightSideCommonSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AboutPage; 