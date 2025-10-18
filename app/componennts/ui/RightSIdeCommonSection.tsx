import Link from 'next/link';
import Image from 'next/image';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Facebook, Youtube, Linkedin , Search} from 'lucide-react';

export const RightSideCommonSection = () => {
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
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, color: 'text-blue-500', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50' },
        { name: 'Twitter', icon: null, color: 'text-gray-800', hoverBg: 'hover:bg-gray-800', hoverShadow: 'hover:shadow-gray-800/50', customIcon: 'x' },
        { name: 'Instagram', icon: null, color: 'text-purple-600', hoverBg: 'hover:bg-purple-600', hoverShadow: 'hover:shadow-purple-600/50', customIcon: 'instagram' },
        { name: 'Youtube', icon: Youtube, color: 'text-red-500', hoverBg: 'hover:bg-red-600', hoverShadow: 'hover:shadow-red-600/50' },
        { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50' },
        { name: 'Truth', icon: null, color: 'text-blue-500', hoverBg: 'hover:bg-blue-600', hoverShadow: 'hover:shadow-blue-600/50', customIcon: 'truth' }
    ];
      const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    console.log('Subscribed with email:', email);
    // Add your subscription logic here
  };
  // Unwrap params Promise


  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/?s=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
    return (
        <aside className="space-y-8">
            {/* Donate Button */}
            <div className="bg-red-600 text-white text-center p-4 rounded-lg font-bold">
              Donate Now
            </div>

            {/* Social Links */}
            <div className="py-8 px-6 max-w-md mx-auto">
              <h2 className="text-2xl font-black mb-6">Stay Connected</h2>

              <div className="grid grid-cols-2 gap-4">
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

            {/* Search */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Search Articles</h3>
              <div className="relative flex bg-gray-100 w-full rounded items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full rounded p-2 pl-10 focus:outline-none"
                />
                <span className="text-red-400">|</span>

                <button
                  onClick={handleSearch}
                  className="cursor-pointer hover:scale-105 hover:bg-red-700 px-4 py-2 rounded transition flex items-center justify-center hover:text-white"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Latest News</h3>
              <div className="space-y-4">
                {posts.map((item, idx) => (
                  <div className="flex gap-3" key={idx}>
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt="Latest News"
                        width={150}
                        height={75}
                        className="w-28 h-20 object-cover rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="#" className="text-base font-semibold tracking-none leading-tight hover:text-red-600 transition">{item.title}</Link>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">
                        {item.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white py-12 px-6 text-center max-w-md mx-auto">
              <h2 className="text-4xl font-black mb-4">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-base text-gray-700 mb-8">
                Subscribe to our newsletter to get our newest articles instantly!
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-left font-semibold mb-2">
                    Email address:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-red-600 text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition"
                >
                  Sign up
                </button>
              </div>
            </div>
          </aside>
    )
}
