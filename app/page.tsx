'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import RootLayout from "@/app/componennts/layout/RootLayout";
import FeaturedPost from "@/app/componennts/ui/FeaturedPost";
import { Bookmark, Facebook, Twitter, Instagram, Youtube, Music, Linkedin } from 'lucide-react';
import SearchResult from "@/app/componennts/ui/SearchResult";

// Separate component for search functionality
function SearchHandler({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('s');

  // If there's a search query, show search results
  if (searchQuery) {
    return <SearchResult />;
  }

  return <>{children}</>;
}

export default function Home() {
  const breakingNews = [
    { title: "Breaking: Major political development shakes the capital", slug: "major-political-development" },
    { title: "New technology breakthrough announced by leading tech company", slug: "tech-breakthrough-announced" },
    { title: "Sports: Championship game results and highlights", slug: "championship-game-results" },
    { title: "Weather alert: Severe conditions expected in multiple regions", slug: "severe-weather-alert" },
    { title: "Economic update: Market trends and financial news", slug: "economic-market-update" },
    { title: "Health: Latest medical research findings released", slug: "medical-research-findings" }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-500', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50' },
    { name: 'Twitter', icon: null, color: 'text-gray-800', hoverBg: 'hover:bg-gray-800', hoverShadow: 'hover:shadow-gray-800/50', customIcon: 'x' },
    { name: 'Instagram', icon: null, color: 'text-purple-600', hoverBg: 'hover:bg-purple-600', hoverShadow: 'hover:shadow-purple-600/50', customIcon: 'instagram' },
    { name: 'Youtube', icon: Youtube, color: 'text-red-500', hoverBg: 'hover:bg-red-600', hoverShadow: 'hover:shadow-red-600/50' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50' },
    { name: 'Truth', icon: null, color: 'text-blue-500', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50', customIcon: 'truth' }
  ];

  const mainArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      category: "MEDIA",
      title: "TPUSA Launches Rival Show to Bad Bunny's Super Bowl Headline",
      author: "THRIVE NEWS FOUNDATION",
      date: "OCTOBER 10, 2025",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529753253655-470be9a42781?auto=format&fit=crop&w=800&q=80",
      category: "CHURCH",
      title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
      description: "Suspect Killed in Police Confrontation Grand Blanc Township, Michigan – A peaceful Sunday worship service at a chapel of The...",
      author: "THRIVE NEWS FOUNDATION",
      date: "SEPTEMBER 28, 2025"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      category: "MEDIA",
      title: "Tim Allen Finally Forgives His Father's Killer—Here's What Inspired Him",
      description: "Why the Cross is Both the Source of Our Forgiveness and Our Call to Forgive Others Forgiveness is one of...",
      author: "THRIVE NEWS FOUNDATION",
      date: "SEPTEMBER 26, 2025"
    }
  ];

  const editorsPick = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80",
      category: "CHRISTIAN NEWS",
      title: "8 Christian Contributions That Shaped Society",
      author: "THRIVE NEWS FOUNDATION",
      date: "SEPTEMBER 25, 2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      category: "BUSINESS",
      title: "10 Key Takeaways from the Faith-Driven Entrepreneur Conference",
      badge: "02"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80",
      category: "MEDIA",
      title: "11 Unforgettable Moments From Charlie Kirk's Memorial Service",
      badge: "03"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      category: "CHURCH",
      title: "The Three Most Powerful Words From Charlie Kirk's Memorial: The Quote Heard Around The World",
      badge: "04"
    }
  ];

  return (
    <RootLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHandler>
          <div className="font-sans">
            {/* Breaking News Marquee */}
            <div className="text-gray-800 py-2 overflow-hidden bg-red-500 text-white mt-2 hidden md:block">
              <div className="flex items-center">
                <div className="flex-1 ml-2 md:ml-4">
                  <div className="animate-marquee hover:pause-marquee whitespace-nowrap">
                    {/* First set of news */}
                    {breakingNews.map((news, index) => (
                      <Link
                        key={index}
                        href={`/${news.slug}`}
                        className="mr-4 md:mr-8 hover:text-black font-semibold text-xs md:text-sm transition-colors cursor-pointer font-medium"
                      >
                        {news.title}
                      </Link>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {breakingNews.map((news, index) => (
                      <Link
                        key={`duplicate-${index}`}
                        href={`/${news.slug}`}
                        className="mr-4 md:mr-8 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        {news.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FeaturedPost />
            </div>

            <div className="max-w-[1360px] mx-auto px-4 md:px-6 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  {/* Section Title */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black pb-3 md:pb-4 border-b-4 border-black">More Latest News</h2>
                  </div>

                  {/* Featured Large Article */}
                  <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={mainArticles[0].image}
                      alt={mainArticles[0].title}
                      className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <span className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded">
                      {mainArticles[0].category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 md:mb-4 leading-tight group-hover:text-red-400 transition">
                        {mainArticles[0].title}
                      </h3>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-xs">T</span>
                          </div>
                          <span className="font-bold">{mainArticles[0].author}</span>
                          <span>•</span>
                          <span className="hidden sm:inline">{mainArticles[0].date}</span>
                        </div>
                        <Bookmark className="w-4 h-4 md:w-5 md:h-5 text-white cursor-pointer hover:fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Article List */}
                  <div className="space-y-4 md:space-y-6">
                    {mainArticles.slice(1).map((article) => (
                      <div key={article.id} className="flex flex-col sm:flex-row gap-3 md:gap-6 pb-4 md:pb-6 border-b border-gray-200 cursor-pointer group">
                        <div className="flex-shrink-0 relative w-full sm:w-32 md:w-40">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full sm:w-full h-48 sm:h-28 md:h-32 object-cover rounded group-hover:opacity-80 transition"
                          />
                          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 md:px-3 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-red-600 transition leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2 md:mb-3 line-clamp-2">
                            {article.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-black font-bold text-xs">T</span>
                            </div>
                            <span className="font-semibold">{article.author}</span>
                            <span>•</span>
                            <span className="hidden md:inline">{article.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 md:space-y-8 mt-8 md:mt-0">
                  {/* Follow Us on Socials */}
                  <div className="md:mt-10">
                    <h3 className="text-sm md:text-base font-black mb-4 md:mb-6 pb-2 md:pb-4">Follow Us on Socials</h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                      {socialLinks.map((social, idx) => (
                        <button
                          key={idx}
                          className={`bg-white ${social.hoverBg} ${social.hoverShadow} hover:shadow-md shadow rounded-lg p-3 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer gap-2 group`}
                        >
                          {/* Instagram Icon */}
                          {social.customIcon === 'instagram' && (
                            <svg className={`w-5 h-5 ${social.color} group-hover:text-white transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="2" width="20" height="20" rx="5" />
                              <circle cx="12" cy="12" r="4" />
                              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                            </svg>
                          )}

                          {/* Twitter/X Icon */}
                          {social.customIcon === 'x' && (
                            <svg className={`w-5 h-5 ${social.color} group-hover:text-white transition-colors`} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          )}

                          {/* Truth Icon */}
                          {social.customIcon === 'truth' && (
                            <svg className={`w-5 h-5 ${social.color} group-hover:text-white transition-colors`} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm3 4v12h4V6h-4z" />
                            </svg>
                          )}

                          {/* Lucide Icons */}
                          {social.icon && <social.icon className={`w-5 h-5 ${social.color} group-hover:text-white transition-colors`} />}

                          <span className={`text-sm font-semibold ${social.color} group-hover:text-white transition-colors`}>
                            {social.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Editor's Pick */}
                  <div className="mt-6 md:mt-0">
                    <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 pb-2 md:pb-4 border-b-4 border-black">Editor's Pick</h3>
                    <div className="space-y-3 md:space-y-4">
                      {editorsPick.map((article, idx) => (
                        <div key={article.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                          <span className="absolute top-2 md:top-3 right-2 md:right-3 bg-red-600 text-white text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                            {article.category}
                          </span>
                          {article.badge && (
                            <span className="absolute bottom-2 md:bottom-3 right-2 md:right-3 text-white text-2xl md:text-3xl font-black opacity-30">
                              {article.badge}
                            </span>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                            <h4 className="text-xs md:text-sm font-black text-white leading-tight group-hover:text-red-400 transition">
                              {article.title}
                            </h4>
                            {article.author && (
                              <p className="text-xs text-white/80 mt-1 md:mt-2 hidden sm:block">{article.author} • {article.date}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <main className="max-w-[1360px] mx-auto px-4 md:px-6 flex flex-col gap-2">
              {/* Must Read Section */}
              <section className="py-6 md:py-8">
                <div className="text-center mb-6 md:mb-8">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">Must Read</h1>
                  <p className="text-gray-600 text-sm md:text-base">Popular Articles This Month</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* Featured Article - Left Side */}
                  <div className="lg:col-span-2">
                    <article className="bg-white">
                      <div className="relative group">
                        <Image
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                          alt="Media bias article"
                          width={800}
                          height={500}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        <span className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded">
                          MEDIA
                        </span>
                      </div>
                      <div className="p-4 md:p-6">
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 leading-tight">
                          The Biggest Lies the Media Has Told You
                        </h2>
                        <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none">
                          A Look at Mainstream Media's Bias and Lack of Accountability For decades, Americans have trusted the mainstream media as their primary source of information. However, recent revelations have exposed a pattern of bias, misinformation, and lack of accountability that has eroded public trust.
                        </p>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs md:text-sm text-gray-500 gap-1">
                          <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                          <span className="hidden md:inline">OCTOBER 1, 2025</span>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* Smaller Articles Grid - Right Side */}
                  <div className="space-y-4 md:space-y-6 hidden md:block">
                    {/* Article 1 */}
                    <article className="relative group cursor-pointer h-[46%]">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                          alt="American hero holiday"
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-base md:text-lg leading-tight">
                          This Original American Hero's Holiday Is Officially Restored October 13
                        </h3>
                      </div>
                    </article>

                    {/* Article 2 */}
                    <article className="relative group cursor-pointer h-[50%]">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
                          alt="Erika Kirk tribute"
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                          FAMILY
                        </span>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-base md:text-lg leading-tight">
                          5 Key Takeaways from Erika Kirk's Heartfelt Tribute to Her Late Husband, Charlie Kirk
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div className="hidden lg:block">
                    {/* Article 3 */}
                    <article className="relative group cursor-pointer h-full">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=400&q=80"
                          alt="TPUSA rival show"
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                        <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-base md:text-lg leading-tight">
                          TPUSA Launches Rival Show to Bad Bunny's Super Bowl Headline
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </section>

              {/* Top Articles Section */}
              <section className="py-6 md:py-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-black">Top Articles</h2>
                  <Link href="/blog" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm md:text-base">
                    View Blog
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Top Row - 3 Large Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {/* Article 1 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Forrest Frank line in the sand"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                      <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight">
                        Forrest Frank Draws a "Line in the Sand," Announces He Will Not Attend Dove Awards or Grammys
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">T!</span>
                          </div>
                          <span className="font-semibold">THRIVE.NEWS.FOUNDATION</span>
                        </div>
                        <span>OCTOBER 8, 2025</span>
                      </div>
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                        alt="Explosives found at church"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                      <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight">
                        Explosives Found Outside DC Church During Red Mass Preparations
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">T!</span>
                          </div>
                          <span className="font-semibold">THRIVE.NEWS.FOUNDATION</span>
                        </div>
                        <span>OCTOBER 8, 2025</span>
                      </div>
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                        alt="Three Democrats voted"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
                      <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight">
                        These Three Democrats Voted for Government Reopening Amid Shutdown Stalemate
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">T!</span>
                          </div>
                          <span className="font-semibold">THRIVE.NEWS.FOUNDATION</span>
                        </div>
                        <span>OCTOBER 7, 2025</span>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Second Row - 4 Smaller Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                  {/* Article 1 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80"
                        alt="Media lies"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        MEDIA
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        The Biggest Lies the Media Has Told You
                      </h3>
                      <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
                        alt="Legacy article"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        CHRISTIAN NEWS
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        We All Leave a Legacy - What Will Yours Be?
                      </h3>
                      <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=80"
                        alt="Israeli flags"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        ISRAEL
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        Charlie Kirk's Unwavering Support for Israel Revealed
                      </h3>
                      <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
                    </div>
                  </article>

                  {/* Article 4 - Sponsored */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80"
                        alt="Christian social connection"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        BUSINESS
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        (Sponsored) Pioneering Christian Online Space: 'AT SAY' Unveils Next Phase in Christian Social Connection
                      </h3>
                      <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
                    </div>
                  </article>
                </div>

                {/* Third Row - 4 Smaller Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Article 1 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80"
                        alt="Statue of Liberty"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        GOVERNMENT
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        8 Legal Ways to Immigrate to the US: The Ethical Paths That Welcome Over a Million People Each Year
                      </h3>
                      <span className="text-xs text-gray-500">SEPTEMBER 30, 2025</span>
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=300&q=80"
                        alt="Middle East peace plan"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        ISRAEL
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        20 Takeaways from US & Israel Middle East Peace Plan
                      </h3>
                      <span className="text-xs text-gray-500">SEPTEMBER 29, 2025</span>
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80"
                        alt="Lawmakers speaking"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        GOVERNMENT
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        30 Lawmakers Gone Mad: Democrats' Unhinged Crusade Against ICE
                      </h3>
                      <span className="text-xs text-gray-500">SEPTEMBER 29, 2025</span>
                    </div>
                  </article>

                  {/* Article 4 */}
                  <article className="relative group cursor-pointer">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80"
                        alt="Child coloring"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                        FAMILY
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 leading-tight text-sm">
                        A Biblical Approach to Overcoming Anxiety
                      </h3>
                      <span className="text-xs text-gray-500">SEPTEMBER 29, 2025</span>
                    </div>
                  </article>
                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-8">
                  <Link href="/articles" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                    See More
                  </Link>
                </div>
              </section>

              {/* More Top Stories Section */}
              <section className="py-6 md:py-12">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-black">More Top Stories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Column 1 - CHURCH */}
                  <div className="space-y-4 md:space-y-6">
                    {/* Main Article */}
                    <article className="bg-white">
                      <div className="relative group">
                        <Image
                          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                          alt="Kim Clement prophecies"
                          width={800}
                          height={500}
                          className="w-full h-56 md:h-64 object-cover rounded-sm"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-red-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded">
                            CHURCH
                          </span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-tight">
                          10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025
                        </h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs md:text-sm text-gray-500 gap-1">
                          <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                          <span className="hidden md:inline">SEPTEMBER 26, 2025</span>
                        </div>
                      </div>
                    </article>

                    {/* Smaller Articles */}
                    <div className="space-y-3 md:space-y-4">
                      <article className="flex gap-3 cursor-pointer group items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80"
                            alt="House Democrats vote"
                            width={140}
                            height={140}
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xs md:text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1 line-clamp-2">
                            Here Are the 58 House Democrats Who Voted No On the Charlie Kirk Honor Resolution
                          </h3>
                          <span className="text-xs text-gray-500 hidden md:inline">SEPTEMBER 19, 2025</span>
                        </div>
                      </article>

                      <article className="flex gap-3 cursor-pointer group items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                            alt="Students join Turning Point"
                            width={140}
                            height={140}
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            62,000 Students Join Turning Point After Charlie Kirk's Death
                          </h3>
                          <span className="text-xs text-gray-500">SEPTEMBER 19, 2025</span>
                        </div>
                      </article>

                      <article className="flex gap-3 cursor-pointer group items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80"
                            alt="Erika Kirk leadership"
                            width={140}
                            height={140}
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            7 Reasons Why Erika Kirk is the Right Leader for This Moment
                          </h3>
                          <span className="text-xs text-gray-500">SEPTEMBER 19, 2025</span>
                        </div>
                      </article>

                      <article className="flex gap-3 cursor-pointer group items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=100&q=80"
                            alt="Charlie Kirk tribute"
                            width={140}
                            height={140}
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            Charlie Kirk: A Life Devoted to Faith and Freedom
                          </h3>
                          <span className="text-xs text-gray-500">SEPTEMBER 12, 2025</span>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* Column 2 - CHRISTIAN NEWS */}
                  <div className="space-y-6">
                    {/* Main Article */}
                    <article className="bg-white">
                      <div className="relative group">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                          alt="Christian contributions"
                          width={800}
                          height={500}
                          className="w-full h-64 object-cover rounded-sm"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                            CHRISTIAN NEWS
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-black mb-3 leading-tight">
                          8 Christian Contributions That Shaped Society
                        </h2>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                          <span>SEPTEMBER 25, 2025</span>
                        </div>
                      </div>
                    </article>

                    {/* Sponsored Content */}
                    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="relative">
                        <Image
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                          alt="Christian social connection"
                          width={800}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                          BUSINESS
                        </span>
                        <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded">
                          (Sponsored)
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                          Pioneering Christian Online Space: 'AT SAY' Unveils Next Phase in Christian Social Connection
                        </h3>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          Social Network Aims to Connect Christians Around the Globe In a world where digital noise...
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                          <div>
                            <p className="font-semibold mb-1">Connect</p>
                            <p>Build meaningful relationships with fellow believers worldwide through our secure platform.</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Share</p>
                            <p>Share your faith journey, testimonies, and encouragement with the Christian community.</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Grow</p>
                            <p>Access resources, join groups, and participate in discussions that strengthen your walk.</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* Column 3 - MEDIA */}
                  <div className="space-y-6">
                    {/* Main Article */}
                    <article className="bg-white">
                      <div className="relative group">
                        <Image
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                          alt="Charlie Kirk martyr"
                          width={800}
                          height={500}
                          className="w-full h-64 object-cover rounded-sm"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
                            MEDIA
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-black mb-3 leading-tight">
                          Charlie Kirk: A Modern-Day Christian Martyr
                        </h2>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="font-semibold">ANDREW WOMMACK</span>
                          <span>SEPTEMBER 24, 2025</span>
                        </div>
                      </div>
                    </article>

                    {/* Smaller Articles */}
                    <div className="space-y-6">
                      <article className="flex flex-col-reverse md:flex-row gap-3 cursor-pointer group">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            7 Reasons Why Erika Kirk is the Right Leader for This Moment
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                            Erika Kirk Unanimously Voted CEO of Turning Point USA In breaking news Erika Kirk Unanimously Voted CEO of Turning Point USA In breaking news
                          </p>
                          <div className="flex flex-col justify-between text-xs text-gray-500">
                            <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                            <span>SEPTEMBER 19, 2025</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                            alt="Erika Kirk speaking"
                            width={120}
                            height={120}
                            className="w-full h-48 md:w-28 md:h-28 object-cover rounded"
                          />
                        </div>
                      </article>
                      <article className="flex flex-col-reverse md:flex-row  gap-3 cursor-pointer group">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            The Real Reasons Jimmy Kimmel's Show Got Cancelled (And It's Not Because of Cancel Culture)
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                            Why Jimmy Kimmel's Show Was Pulled Amid Backlash
                          </p>
                          <div className="flex flex-col justify-between text-xs text-gray-500">
                            <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                            <span>SEPTEMBER 18, 2025</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=100&q=80"
                            alt="Jimmy Kimmel show"
                            width={120}
                            height={120}
                            className="w-full h-48 md:w-28 md:h-28 object-cover rounded"
                          />
                        </div>
                      </article>
                      <article className="flex flex-col-reverse md:flex-row gap-3 cursor-pointer group">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            7 Reasons Why Erika Kirk is the Right Leader for This Moment
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                            Erika Kirk Unanimously Voted CEO of Turning Point USA In breaking news Erika Kirk Unanimously Voted CEO of Turning Point USA In breaking news
                          </p>
                          <div className="flex flex-col justify-between text-xs text-gray-500">
                            <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                            <span>SEPTEMBER 19, 2025</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                            alt="Erika Kirk speaking"
                            width={120}
                            height={120}
                            className="w-full h-48 md:w-28 md:h-28 object-cover rounded"
                          />
                        </div>
                      </article>
                      <article className="flex flex-col-reverse md:flex-row gap-3 cursor-pointer group">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
                            The Real Reasons Jimmy Kimmel's Show Got Cancelled (And It's Not Because of Cancel Culture)
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                            Why Jimmy Kimmel's Show Was Pulled Amid Backlash
                          </p>
                          <div className="flex flex-col justify-between text-xs text-gray-500">
                            <span className="font-semibold">T! THRIVE.NEWS.FOUNDATION</span>
                            <span>SEPTEMBER 18, 2025</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=100&q=80"
                            alt="Jimmy Kimmel show"
                            width={120}
                            height={120}
                            className="w-full h-48 md:w-28 md:h-28 object-cover rounded"
                          />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </SearchHandler>
      </Suspense>
    </RootLayout>
  );
}
