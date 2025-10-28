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
    {
      title: "Prime Minister Announces New Economic Reform Plan",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
  ];

  return (
    <section className="max-w-[1350px] mx-auto py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="md:col-span-2 lg:col-span-2">
        {/* Featured Post */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={800}
            height={500}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 p-4 sm:p-6 text-white">
            <span className="text-sm uppercase font-semibold bg-red-600 px-3 py-1 rounded-md">
              {featuredPost.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-3 leading-tight hover:text-red-400 transition">
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
      <div className="flex flex-col gap-4 md:overflow-y-auto">
        {sidePosts.map((post, idx) => (
           <article key={idx} className="relative group cursor-pointer">
           <div className="relative">
             <Image
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80"
               alt="Media lies"
               width={300}
               height={200}
               className="w-full h-40 sm:h-44 md:h-48 object-cover"
             />
             <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
               MEDIA
             </span>
           </div>
           <div className="p-3 sm:p-4">
             <h3 className="font-bold text-black mb-2 leading-tight text-md">
               The Biggest Lies the Media Has Told You
             </h3>
             <p className="text-gray-500 text-xs">Democrats of Prioritizing Illegal Immigrant </p>
             <span className="text-xs text-gray-500">OCTOBER 1, 2025</span>
           </div>
         </article>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:overflow-y-auto">
        {sidePosts.map((post, idx) => (
          <article key={idx} className="flex flex-col sm:flex-row gap-3 cursor-pointer group items-start sm:items-center">
          <div className="order-2 sm:order-1 flex-1">
            <h3 className="font-semibold text-sm text-black group-hover:text-red-600 transition-colors leading-tight mb-1">
              Here Are the 58 House Democrats Who Voted No On the Charlie Kirk Honor Resolution
            </h3>
          </div>
          <div className="order-1 sm:order-2 flex-shrink-0 w-full sm:w-auto">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&q=80"
              alt="House Democrats vote"
              width={140}
              height={140}
              className="w-full h-32 sm:w-24 sm:h-24 rounded-lg sm:rounded-full object-cover"
            />
          </div>
        </article>
        ))}
        <SubscriptionCard />
      </div>
      
    </section>
  );
};

export default FeaturedPost;
