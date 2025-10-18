import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {/* Previous Button */}
      {/* <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="cursor-pointer w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button> */}

      {/* Page 1 */}
      <button
        onClick={() => handlePageClick(1)}
        className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg font-semibold transition ${
          currentPage === 1
            ? 'bg-red-600 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        onClick={() => handlePageClick(2)}
        className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg font-semibold transition ${
          currentPage === 2
            ? 'bg-red-600 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        onClick={() => handlePageClick(3)}
        className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg font-semibold transition ${
          currentPage === 3
            ? 'bg-red-600 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        3
      </button>

      {/* Dots */}
      <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg">
        <span className="text-gray-600 font-bold">...</span>
      </div>

      {/* Last Page */}
      <button
        onClick={() => handlePageClick(totalPages)}
        className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg font-semibold transition ${
          currentPage === totalPages
            ? 'bg-red-600 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {totalPages}
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="cursor-pointer w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}