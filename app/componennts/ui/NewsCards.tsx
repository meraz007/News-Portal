"use client";
import Image from "next/image";
import Link from "next/link";

const NewsCards = () => {
  const newsPosts = [
    {
      id: 1,
      title: "Unmasking Democrats' Costly Shutdown Demands",
      summary: "Spotlight on Democrats' Lavish Spending Counterproposal Washington D.C. - House...",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=400&q=80",
      category: "GOVERNMENT",
      source: "THRIVE.NEWS.FOUNDATION",
      date: "OCTOBER 14, 2025",
      link: "#"
    },
    {
      id: 2,
      title: "China Cracks Down on Underground Church, Detains Beijing Pastor & Members",
      summary: "Washington Calls For Immediate Release Of Detained Zion Church Pastor...",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80",
      category: "CHURCH",
      source: "THRIVE.NEWS.FOUNDATION",
      date: "OCTOBER 14, 2025",
      link: "#"
    },
    {
      id: 3,
      title: "Blessed Are The Peacemakers: A Breakthrough In Israel",
      summary: "'Prayers of Millions Answered' for Peace in Israel TEL AVIV...",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=400&q=80",
      category: "GOVERNMENT",
      source: "THRIVE.NEWS.FOUNDATION",
      date: "OCTOBER 13, 2025",
      link: "#"
    }
  ];

  return (
    <section className="max-w-[1350px] mx-auto py-8">
      <div className="space-y-6">
        {newsPosts.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex gap-6 p-6">
              {/* Image Section */}
              <div className="relative flex-shrink-0">
                <div className="w-64 h-48 relative overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3 hover:text-red-600 transition-colors">
                    <Link href={post.link}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {post.summary}
                  </p>
                </div>

                {/* Source and Date */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    {/* T! Badge */}
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm flex items-center justify-center w-6 h-6">
                      T!
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {post.source}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-sm text-gray-600">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsCards;
