"use client"

import Link from "next/link"
import Image from "next/image"
import { MegaMenuItem } from "../common"
import { FC, useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface MegaMenuProps {
    items: MegaMenuItem[]
    menuName: string
    menuDescription?: string
}

export const MegaMenu: FC<MegaMenuProps> = ({ items, menuName, menuDescription }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const itemsPerSlide = 4; // Show 4 items at a time
    const totalSlides = items.length; // Total items for one-by-one sliding

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto-slide functionality
    useEffect(() => {
        if (isAutoPlaying && totalSlides > 1) {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, 2500); // Auto-slide every 2.5 seconds for smoother feel

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [isAutoPlaying, totalSlides]);

    // Pause auto-slide on hover
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    // Create sliding items array with looping
    const getSlidingItems = () => {
        const slidingItems = [];
        for (let i = 0; i < itemsPerSlide; i++) {
            const index = (currentSlide + i) % items.length;
            slidingItems.push(items[index]);
        }
        return slidingItems;
    };

    const currentItems = getSlidingItems();

    return (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 z-[60] transform transition-all duration-200 ease-out opacity-0 animate-[slideDown_0.2s_ease-out_forwards]">
            <div className="p-6 max-w-[1360px] mx-auto rounded-md bg-white shadow-lg">
                {/* Menu Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{menuName}</h2>
                    <p className="text-sm text-gray-600 mt-1">{menuDescription || 'Latest updates and stories'}</p>
                </div>
                
                {/* Slider Container */}
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 cursor-pointer"
                    >
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 cursor-pointer"
                    >
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>

                    {/* Slider Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentItems.map((item, i) => (
                            <div
                                key={`${currentSlide}-${i}`}
                                className="bg-white border border-gray-100 rounded-md overflow-hidden cursor-pointer hover:shadow-sm transition-all duration-500 group animate__animated animate__lightSpeedInRight"
                                style={{ 
                                    animationDelay: `${i * 150}ms`,
                                    animationDuration: '0.8s'
                                }}
                            >
                                <div className="relative overflow-hidden rounded-tl-md rounded-tr-md">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={180}
                                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <Link href={`/${item.slug}`} className="font-semibold text-sm leading-snug hover:text-red-600 transition-colors duration-200 line-clamp-3">
                                        {item.title}
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Show More Button */}
                <div className="flex justify-center mt-6">    
                    <Link 
                        href={`/category/${menuName.toLowerCase()}`} 
                        className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 border border-gray-300 rounded-full px-4 py-2 hover:border-gray-400"
                    >
                        Show more
                        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
