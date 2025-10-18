'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import Pagination from '@/app/componennts/ui/Pagination';
import RootLayout from '@/app/componennts/layout/RootLayout';
import { RightSideCommonSection } from '@/app/componennts/ui/RightSIdeCommonSection';

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  // Unwrap params Promise
  const { slug } = use(params);

  // Capitalize the category name from slug
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const posts = [
    {
      title: "A Widow’s Perspective: Erika Kirk’s Courage and Leadership After Charlie Kirk’s Assassination",
      image:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
      date: "October 10, 2025",
      author: "THRIVE News",
      text: "A Fellow Widow & CEO Reflects On Erika Kirk’s Faith, Strength, and…",
      category: "Media",
    },
    {
      title: "The Biggest Lies the Media Has Told Us",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      date: "October 10, 2025",
      author: "THRIVE News",
      text: "Rival \"All American Halftime Show\" Planned for Super Bowl The NFL's announcement…",
      category: "Media",
    },
    {
      title: "Charlie Kirk: A Modern-Day Christian Martyr",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      date: "October 9, 2025",
      author: "THRIVE News",
      text: "Rival \"All American Halftime Show\" Planned for Super Bowl The NFL's announcement…",
      category: "Faith",
    },
    {
      title: "Jimmy Kimmel Is Back – Sort Of",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      date: "October 8, 2025",
      author: "THRIVE News",
      text: "Rival \"All American Halftime Show\" Planned for Super Bowl The NFL's announcement…",
      category: "Media",
    },
    {
      title:
        "11 Unforgettable Moments From Charlie Kirk's Memorial Service",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      date: "October 8, 2025",
      author: "THRIVE News",
      text: "Rival \"All American Halftime Show\" Planned for Super Bowl The NFL's announcement…",
      category: "Faith",
    },
  ];

  return (
    <RootLayout>
      <div className="py-10 max-w-[1360px] mx-auto">
        <h1 className="text-2xl font-bold leading-tight tracking-none pb-1 mb-6">
          Latest {categoryName} News
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left content */}
          <div className="lg:col-span-2">
            {/* Post Grid */}
            <div className="grid sm:grid-cols-2 gap-10">
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden bg-white shadow hover:shadow-md transition"
                >
                  <div className="relative group">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={500}
                      className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[28px] font-semibold leading-8 tracking-tight hover:text-red-600 transition hover:underline">
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <p className="text-lg text-gray-500 mt-2">
                      {post.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {post.author} • {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <Pagination />
            </div>
            {/* <Pagination /> */}
          </div>

          {/* Sidebar */}
          <RightSideCommonSection />
        </section>
      </div>
    </RootLayout>
  )
}

export default page