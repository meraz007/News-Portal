'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MoreHorizontal,
  Search,
  Heart,
  Frown,
  Smile,
  Moon,
  Angry,
  Skull,
  Eye,
  Zap
} from 'lucide-react';
import { RightSideCommonSection } from './RightSIdeCommonSection';

const BlogDetails = () => {
  const [reactions, setReactions] = useState({
    love: 0,
    sad: 0,
    happy: 0,
    sleepy: 0,
    angry: 0,
    dead: 0,
    wink: 0,
    surprise: 0
  });

  const handleReaction = (reaction: keyof typeof reactions) => {
    setReactions(prev => ({
      ...prev,
      [reaction]: prev[reaction] + 1
    }));
  };

  const latestNews = [
    {
      id: 1,
      title: "Unmasking Democrats' Costly Shutdown Demands",
      category: "GOVERNMENT",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80",
      slug: "democrats-shutdown-demands"
    },
    {
      id: 2,
      title: "Blessed Are The Peacemakers: A Breakthrough In Israel",
      category: "EDUCATION",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      slug: "peacemakers-breakthrough-israel"
    },
    {
      id: 3,
      title: "U.S. Outlines Plans to Dismantle Domestic Terror Org Antifa",
      category: "GOVERNMENT",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
      slug: "us-dismantle-antifa"
    },
    {
      id: 4,
      title: "This Original American Hero's Holiday is Restored October 13",
      category: "EDUCATION",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      slug: "american-hero-holiday-restored"
    }
  ];

  const relatedArticles = [
    {
      id: 1,
      title: "Tim Allen Finally Forgives His Father's Killer - Here's What Inspired Him",
      slug: "tim-allen-forgives-father-killer"
    },
    {
      id: 2,
      title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
      slug: "kim-clement-prophecies-2025"
    },
    {
      id: 3,
      title: "Charlie Kirk: A Modern-Day Christian Martyr",
      slug: "charlie-kirk-christian-martyr"
    },
    {
      id: 4,
      title: "11 Unforgettable Moments From Charlie Kirk's Memorial Service",
      slug: "charlie-kirk-memorial-moments"
    },
    {
      id: 5,
      title: "15 Things the Bible Teaches Us About Heaven",
      slug: "bible-teaches-heaven"
    }
  ];

  const bottomRelatedArticles = [
    {
      id: 1,
      title: "Media Coverage Analysis",
      category: "MEDIA",
      date: "SEPTEMBER 20, 2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80",
      slug: "media-coverage-analysis"
    },
    {
      id: 2,
      title: "Government Response to Memorial",
      category: "GOVERNMENT",
      date: "SEPTEMBER 21, 2025",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      slug: "government-response-memorial"
    },
    {
      id: 3,
      title: "Church Community Reactions",
      category: "CHURCH",
      date: "SEPTEMBER 22, 2025",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
      slug: "church-community-reactions"
    },
    {
      id: 4,
      title: "Business Leaders Pay Tribute",
      category: "BUSINESS",
      date: "SEPTEMBER 23, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      slug: "business-leaders-tribute"
    }
  ];

    return (
    <div className="min-h-screen bg-white">
      {/* Main Content Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-4">
            
            {/* Article Header */}
            <div className="mb-8">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded uppercase tracking-wide">
                  CHURCH
                </span>
              </div>
              
              {/* Article Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight font-serif">
                The Three Most Powerful Words From Charlie Kirk's Memorial: The Quote Heard Around The World
              </h1>
              
              {/* Article Metadata */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                <span className="font-semibold">BY KYLE PATTERSON</span>
                <span>•</span>
                <span>1 MIN READ</span>
                <span>•</span>
                <span className="text-red-600 cursor-pointer hover:underline">SAVE IT</span>
                <span>•</span>
                <span>LAST UPDATED SEPTEMBER 22, 2025 10:50 PM</span>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Twitter className="w-5 h-5 text-blue-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Erika Kirk speaking at Charlie Kirk's memorial"
                width={800}
                height={500}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Article Body */}
            <div className="prose prose-sm sm:prose-lg max-w-none mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-800 mb-4 sm:mb-6">
                <span className="text-6xl font-bold text-black float-left mr-2 mt-1">T</span>
                he memorial service for Charlie Kirk was a moment that will be remembered for generations to come. 
                As thousands gathered to honor the life and legacy of this remarkable leader, it was his widow, 
                Erika Kirk, who delivered the most powerful message of forgiveness and grace.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-6">
                Standing before the crowd with unwavering strength, Erika Kirk spoke words that would echo around the world: 
                <strong className="text-black"> "I forgive him."</strong> These three simple words carried the weight of 
                unimaginable pain and the power of divine grace.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-6">
                The impact of her statement was immediate and profound. Social media erupted with discussions about 
                forgiveness, grace, and the Christian response to tragedy. Leaders from across the political and 
                religious spectrum praised her courage and faith.
              </p>
              
              {/* Read More Section */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg my-6 sm:my-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Read More</h3>
                <ul className="space-y-2">
                  {relatedArticles.map((article) => (
                    <li key={article.id} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <Link href={`/${article.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-6">
                The memorial service was not just a time of mourning, but a celebration of a life well-lived. 
                Charlie Kirk's impact on American politics and Christian values will continue to inspire 
                generations to come.
              </p>
            </div>
            
            {/* Tags */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">TAGGED</h3>
              <div className="flex flex-wrap gap-2">
                {['Charlie Kirk', 'Erika Kirk', 'I forgive him', 'Memorial'].map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Sign Up For Daily Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
                />
                <button className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-red-700 transition-colors text-sm sm:text-base">
                  Sign up
                </button>
              </div>
            </div>
            
            {/* Share This Article */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Share This Article</h3>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Twitter className="w-5 h-5 text-blue-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Reaction Emojis */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">What do you think?</h3>
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2">
                {[
                  { key: 'love', icon: Heart, label: 'Love' },
                  { key: 'sad', icon: Frown, label: 'Sad' },
                  { key: 'happy', icon: Smile, label: 'Happy' },
                  { key: 'sleepy', icon: Moon, label: 'Sleepy' },
                  { key: 'angry', icon: Angry, label: 'Angry' },
                  { key: 'dead', icon: Skull, label: 'Dead' },
                  { key: 'wink', icon: Eye, label: 'Wink' },
                  { key: 'surprise', icon: Zap, label: 'Surprise' }
                ].map(({ key, icon: Icon, label }) => (
                  <button
                    key={key}
                    onClick={() => handleReaction(key as keyof typeof reactions)}
                    className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Icon className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-xs text-gray-500">{reactions[key as keyof typeof reactions]}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Previous/Next Article Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="border-t pt-4 sm:pt-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">PREVIOUS ARTICLE</h4>
                <Link href="/previous-article" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Previous Article Title Here
                </Link>
              </div>
              <div className="border-t pt-4 sm:pt-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">NEXT ARTICLE</h4>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <Link href="/next-article" className="text-blue-600 hover:text-blue-800 hover:underline block">
                      Next Article Title Here
                    </Link>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80"
                    alt="Next article"
                    width={60}
                    height={40}
                    className="w-15 h-10 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Right Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-4 sm:top-8 space-y-6 sm:space-y-8">
            <RightSideCommonSection />
            </div>
          </div>
        </div>
         {/* You Might Also Like - Bottom */}
         <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {bottomRelatedArticles.map((article) => (
                  <article key={article.id} className="cursor-pointer group">
                    <div className="relative mb-2 sm:mb-3">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-32 sm:h-40 object-cover rounded group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded uppercase">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-black mb-1 sm:mb-2 leading-tight group-hover:text-red-600 transition-colors text-sm sm:text-base">
                      {article.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">{article.date}</p>
                  </article>
                ))}
              </div>
            </div>
      </div>
    </div>
  );
};

export default BlogDetails;