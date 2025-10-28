'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import { ChevronUp } from 'lucide-react';

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  console.log(showScrollTop);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div>
          <header className=''>
              <Navbar />
          </header>
          <main className='flex-grow px-4 pt-[100px] sm:pt-0'>
              {children}
          </main>
          <div className='bg-gray-100'>
            <Footer />
          </div>
      </div>
      {/* <Footer /> */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  )
}

export default RootLayout