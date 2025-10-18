"use client";
import Image from "next/image";
import Link from "next/link";
import NewsCards from "./NewsCards";
import SubscriptionCard from "./SubscriptionCard";

const FeaturedPost = () => {
  const featuredPost = {
    title:
      "Aircraft Made in Palestine Fires: One of UN’s Most Destructive Blazes",
    image:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    category: "World News",
    author: "John Doe",
    date: "October 9, 2025",
    link: "#",
  };

  const sidePosts = [
    {
      title: "Aggressive Protest Erupts as Government Faces Criticism",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      title: "Prime Minister Announces New Economic Reform Plan",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      title: "Prime Minister Announces New Economic Reform Plan",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
  ];

  return (
    <section className="max-w-[1350px] mx-auto py-2 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-2">
        {/* Featured Post */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={800}
            height={500}
            className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 p-6 text-white">
            <span className="text-sm uppercase font-semibold bg-red-600 px-3 py-1 rounded-md">
              {featuredPost.category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3 leading-tight hover:text-red-400 transition">
              <Link href={featuredPost.link}>{featuredPost.title}</Link>
            </h2>
            <div className="mt-3 text-sm text-gray-300">
              By {featuredPost.author} • {featuredPost.date}
            </div>
          </div>
        </div>
        <NewsCards />
      </div>
      {/* Side Posts */}
      <div className="flex flex-col gap-4 h-[420px]">
        {sidePosts.map((post, idx) => (
           <article key={idx} className="relative group cursor-pointer">
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
             <p className="text-gray-500">Democrats of Prioritizing Illegal Immigrants…</p>
             <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
           </div>
         </article>
        ))}
      </div>
      <div className="flex flex-col gap-4 h-[420px]">
        {sidePosts.map((post, idx) => (
          <article key={idx} className="flex gap-3 cursor-pointer group items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
              Here Are the 58 House Democrats Who Voted No On the Charlie Kirk Honor Resolution
            </h3>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80"
              alt="House Democrats vote"
              width={140}
              height={140}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </article>
        ))}
        <SubscriptionCard />
        {sidePosts.map((post, idx) => (
          <article key={idx} className="flex gap-3 cursor-pointer group items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
              Here Are the 58 House Democrats Who Voted No On the Charlie Kirk Honor Resolution
            </h3>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80"
              alt="House Democrats vote"
              width={140}
              height={140}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </article>
        ))}
      </div>
      
    </section>
  );
};

export default FeaturedPost;
