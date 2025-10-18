'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Pagination from '@/app/componennts/ui/Pagination';

const SearchResult = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('s') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?s=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Update search query when URL parameters change
  useEffect(() => {
    const urlQuery = searchParams.get('s') || '';
    setSearchQuery(urlQuery);
  }, [searchParams]);

  // Sample search results data
  const searchResults = [
    {
      id: 1,
      title: "Is There a Wall of Separation Between Church and State?",
      category: "CHURCH",
      date: "JUNE 19, 2025",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
      slug: "wall-separation-church-state"
    },
    {
      id: 2,
      title: "Faith & Fraud? Bill Hwang's $10 Billion Wall Street Scandal Shocks Christian Community",
      category: "ECONOMY",
      date: "JULY 12, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      slug: "bill-hwang-wall-street-scandal"
    },
    {
      id: 3,
      title: "God on Wall Street - Ark Invest's Cathy Wood & the \"New Creation\"",
      category: "BUSINESS",
      date: "SEPTEMBER 3, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
      slug: "cathy-wood-ark-invest-wall-street"
    },
    {
      id: 4,
      title: "The Three Most Powerful Words From Charlie Kirk's Memorial: The Quote Heard Around The World",
      category: "CHURCH",
      date: "SEPTEMBER 22, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      slug: "charlie-kirk-memorial-quote"
    },
    {
      id: 5,
      title: "15 Things the Bible Teaches Us About Heaven",
      category: "CHURCH",
      date: "SEPTEMBER 22, 2025",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      slug: "bible-teaches-heaven"
    },
    {
      id: 6,
      title: "Great Men and Women Who Gave Their Lives for God and Country",
      category: "CHRISTIAN NEWS",
      date: "SEPTEMBER 11, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      slug: "great-men-women-god-country"
    },
    {
      id: 7,
      title: "10,000 Baptisms: A Wave of Revival Continues at Pirate's Cove",
      category: "CHRISTIAN NEWS",
      date: "AUGUST 19, 2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      slug: "10000-baptisms-pirates-cove"
    },
    {
      id: 8,
      title: "9 Signs Revival Is Stirring Again In America - Could This Be The Fifth Great Awakening?",
      category: "CHRISTIAN NEWS & CHURCH",
      date: "AUGUST 12, 2025",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      slug: "revival-stirring-america-fifth-awakening"
    },
    {
      id: 9,
      title: "Tacoma University's Historic Championship Victory",
      category: "SPORTS",
      date: "OCTOBER 5, 2025",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      slug: "tacoma-university-championship"
    },
    {
      id: 10,
      title: "Historical Perspectives on Faith and Leadership",
      category: "CHURCH",
      date: "OCTOBER 3, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      slug: "historical-perspectives-faith-leadership"
    },
    {
      id: 11,
      title: "Media Coverage of Religious Events",
      category: "MEDIA",
      date: "OCTOBER 1, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      slug: "media-coverage-religious-events"
    },
    {
      id: 12,
      title: "Health and Wellness in Christian Communities",
      category: "HEALTH",
      date: "SEPTEMBER 28, 2025",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
      slug: "health-wellness-christian-communities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-8 px-4 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">
          Search Results for: {searchQuery}
        </h1>
        <p className="text-lg text-gray-600 mb-8 font-sans">
          Showing {searchResults.length} results for your search
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative bg-white rounded-sm overflow-hidden">
            <div className="flex items-center ">
              <div className="pl-4 pr-2">
                <Search className="w-5 h-5 text-black" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search for articles..."
                className="flex-1 py-3 px-2 text-black font-sans text-lg focus:outline-none"
              />
              <div className="w-px h-8 bg-red-600"></div>
              <button
                type="submit"
                className="pr-4 text-black font-sans text-lg hover:bg-red-600 hover:text-white transition-colors cursor-pointer px-2 py-3 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-[1360px] mx-auto px-4 pb-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchResults.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-2 leading-tight font-serif line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 font-sans">
                  {article.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default SearchResult;