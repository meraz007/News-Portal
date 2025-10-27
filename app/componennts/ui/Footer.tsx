"use client";

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();
    
    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?s=${encodeURIComponent(searchQuery)}`);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    
    return (
        <div className='py-4 md:py-6 max-w-[1360px] mx-auto px-4 md:px-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
                <div className='flex items-center'>
                    <div className="font-extrabold text-xl md:text-2xl tracking-tight">
                        <span className="text-red-600">THRIVE!</span>
                        <span className="bg-black text-white px-2 py-1 ml-1">NEWS</span>
                    </div>
                </div>
                <div className="w-full md:w-auto block relative flex bg-gray-200 rounded items-center">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full rounded p-2 pl-9 md:pl-10 focus:outline-none text-sm"
                    />
                    <span className="text-red-400 hidden md:inline">|</span>

                    <button
                        onClick={handleSearch}
                        className="cursor-pointer hover:scale-105 hover:bg-red-700 px-3 md:px-4 py-2 rounded transition flex items-center justify-center hover:text-white text-sm"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-6 md:gap-8 mb-6 md:mb-8 mt-8 md:mt-12">
                {/* Daily Report */}
                <div className="flex-shrink-0 w-full md:w-auto">
                    <h3 className="text-base md:text-lg font-bold mb-3">Daily Report</h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-2">
                        <div className="w-full sm:w-auto">
                            <label className="block text-xs md:text-sm mb-1">Email address:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full sm:w-64 px-3 md:px-4 py-2 bg-gray-200 border-0 rounded text-sm"
                            />
                        </div>
                        <button className="bg-red-600 text-white px-6 py-2 sm:py-1.5 rounded font-medium hover:bg-red-700 transition whitespace-nowrap">
                            Sign up
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <h3 className="text-base md:text-lg font-bold mb-3 text-center sm:text-left">Quick Links</h3>
                    <div className="flex gap-6 justify-center sm:justify-start items-center">
                        <ul className="space-y-1 text-center sm:text-start grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                            <li><Link href="/about" className="hover:underline text-xs md:text-sm">About</Link></li>
                            <li><Link href="/advertising" className="hover:underline text-xs md:text-sm">Advertising</Link></li>
                            <li><Link href="/subscriptions" className="hover:underline text-xs md:text-sm">Subscriptions</Link></li>
                            <li><Link href="/affiliates" className="hover:underline text-xs md:text-sm">Affiliates</Link></li>
                            <li><Link href="/directory" className="hover:underline text-xs md:text-sm">Directory</Link></li>
                            <li><Link href="/shop" className="hover:underline text-xs md:text-sm">Shop</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* Categories */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <h3 className="text-base md:text-lg font-bold mb-3 text-center sm:text-left">Categories</h3>
                    <div className="flex gap-6 justify-center sm:justify-start">
                        <ul className="space-y-1 text-center sm:text-start grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                            <li><Link href="/category/church" className="hover:underline text-xs md:text-sm">Church</Link></li>
                            <li><Link href="/category/media" className="hover:underline text-xs md:text-sm">Media</Link></li>
                            <li><Link href="/category/government" className="hover:underline text-xs md:text-sm">Government</Link></li>
                            <li><Link href="/category/arts" className="hover:underline text-xs md:text-sm">Arts</Link></li>
                            <li><Link href="/category/education" className="hover:underline text-xs md:text-sm">Education</Link></li>
                            <li><Link href="/category/family" className="hover:underline text-xs md:text-sm">Family</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Links */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <h3 className="text-base md:text-lg font-bold mb-3 text-center sm:text-left">Links</h3>
                    <div className="flex gap-6 justify-center sm:justify-start">
                        <ul className="space-y-1 text-center sm:text-start">
                            <li><Link href="/linktree" className="hover:underline text-xs md:text-sm">Linktree</Link></li>
                            <li><Link href="/marketing" className="hover:underline text-xs md:text-sm">Marketing</Link></li>
                            <li><Link href="/shop" className="hover:underline text-xs md:text-sm">Shop</Link></li>
                            <li><Link href="/donate" className="hover:underline text-xs md:text-sm">Donate</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer