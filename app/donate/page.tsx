"use client";

import Image from "next/image";
import { useState } from "react";
import RootLayout from "../componennts/layout/RootLayout";
import { Check, Mail, ExternalLink, Play } from "lucide-react";

const page = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoClick = () => {
        setVideoLoaded(true);
    };

    return (
        <RootLayout>
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=600&fit=crop&crop=center"
                    alt="News studio with lighting equipment"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center h-full max-w-[1360px] mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-bold text-white font-serif tracking-wide">
                        Donate
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1360px] mx-auto px-6 py-16">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black font-serif leading-tight">
                        Be a part of building the faith-based news & entertainment studio & network of the future, today!
                    </h2>
                </div>

                {/* Studio Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Studio Image */}
                    <div className="relative">
                        <div className="bg-white border-2 border-gray-200 p-4 rounded-lg shadow-lg">
                            <div className="relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop&crop=center"
                                    alt="Modern news studio with professional lighting setup"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay with THRIVE branding */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <div className="text-center bg-white bg-opacity-90 px-6 py-4 rounded-lg">
                                        <div className="text-red-600 font-bold text-2xl mb-2">THRIVE!</div>
                                        <div className="text-black font-bold text-lg">LIVE THE WHOLE WORLD THRIVE!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            THRIVE! is building the leading faith-based studio producing news, media, and entertainment to share and spread faith!
                        </p>
                        
                        <p className="text-lg">
                            <em>You can play a vital role</em> in supporting Christian media. As a donor and reader-supported not-for-profit organization, your dollar directly impacts hearts and minds and shifts culture toward a Biblical worldview.
                        </p>
                        
                        <p className="text-lg">
                            Your partnership counters negative, harmful content, and mainstream media bias, with faith-based inspirational stories, commentary from a Biblical worldview, breaking news, and viral content that leverages media and tech to make good news spread rapidly amid a lost generation.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mb-12">
                    <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Your gift of any amount supports content creation that inspires, informs, spreads hope & shares stories of faith. Become a monthly partner today and join us in our mission to spread and share faith. <em>Will you join us?</em>
                    </p>
                    
                    {/* Checkbox */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded text-white">
                            <Check size={16} />
                        </div>
                        <span className="font-bold text-lg text-gray-800">
                            Yes, I want to fund faith-based outreach through media, news, and entertainment.
                        </span>
                    </div>
                </div>
                {/* YouTube Video with Custom Thumbnail */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer" onClick={handleVideoClick}>
                        {!videoLoaded ? (
                            <>
                                {/* Custom Thumbnail */}
                                <Image
                                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop&crop=center"
                                    alt="THRIVE! News Mission Video Thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
                                    <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                                        <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                
                                {/* Video Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-white text-xl font-bold mb-2">THRIVE! News Foundation Mission</h3>
                                    <p className="text-white/90 text-sm">Watch how we're building the future of faith-based media</p>
                                </div>
                                
                                {/* YouTube Logo */}
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                    YouTube
                                </div>
                            </>
                        ) : (
                            /* Actual YouTube Video */
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&autoplay=1&mute=0"
                                title="THRIVE! News - Faith-based Media Mission"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 text-sm">
                            {!videoLoaded 
                                ? "Click the play button to watch our mission video"
                                : "Learn more about THRIVE! News Foundation's mission"
                            }
                        </p>
                    </div>
                </div>
                 {/* Donation Methods */}
                 <div className="grid md:grid-cols-2 gap-8 mt-20 justify-center max-w-3xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">By PayPal:</h3>
                        <p className="text-gray-600 mb-4">
                            Donate through PayPal here.
                        </p>
                        <a 
                            href="#" 
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                        >
                            Donate via PayPal <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Mail size={20} />
                            By Mail:
                        </h3>
                        <div className="text-gray-600">
                            <p className="font-semibold">THRIVE! News Foundation</p>
                            <p>PO BOX 10302</p>
                            <p>Costa Mesa, CA 92627</p>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default page