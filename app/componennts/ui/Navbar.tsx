"use client";

import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { MegaMenu } from "./MegaMenu";
import { navLinks, NavLink } from "../common";
import { ChevronDown, Facebook, Twitter, Youtube, Linkedin, Rss, Search, Menu, X } from "lucide-react";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-white ${activeMenu ? '' : 'border-b border-gray-200'}`}>
            {/* Top Section - Always visible */}
            <div className="relative">
                <div className="max-w-[1360px] mx-auto flex justify-between items-center py-4 md:py-6 px-4 md:px-6 text-gray-600 text-sm md:relative bg-white md:bg-transparent fixed md:static top-0 md:top-auto w-full md:w-auto z-50 md:z-auto">
                    {/* Social Icons - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-3">
                        <Facebook className="cursor-pointer hover:text-blue-600 transition" />
                        <Twitter className="cursor-pointer hover:text-blue-400 transition" />
                        <Youtube className="cursor-pointer hover:text-red-600 transition" />
                        <Linkedin className="cursor-pointer hover:text-blue-700 transition" />
                        <Rss className="cursor-pointer hover:text-orange-600 transition" />
                    </div>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-red-600 transition"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className={`transition-all duration-300 ease-in-out ${isSticky ? 'scale-75' : 'scale-100'} flex-1 md:flex-none`}>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80" viewBox="0 0 500 100" className="w-full h-auto max-w-[300px] md:max-w-none" role="img" aria-labelledby="titleDesc">
                                <text x="70" y="35" fontFamily="Georgia, 'Times New Roman', Times, serif" fontSize="16" fontStyle="italic" fill="#000000">the</text>
                                <text x="70" y="70" fontFamily="Georgia, 'Times New Roman', Times, serif" fontSize="36" fontWeight="700" fill="#000000">CAMPUS</text>
                                <text x="240" y="70" fontFamily="Georgia, 'Times New Roman', Times, serif" fontSize="36" fontWeight="700" fill="#D62828">TODAY</text>
                            </svg>
                        </Link>
                    </div>

                    {/* Search - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-3 text-gray-600">
                        <Search className="cursor-pointer hover:text-red-600 transition" />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-lg mt-18">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link: NavLink) => (
                                <Link
                                    key={link.name}
                                    href={link.href || "#"}
                                    className="font-bold text-base text-gray-800 hover:text-red-600 transition-colors border-b border-gray-200 pb-3 last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* Search for mobile */}
                            <div className="flex items-center gap-3 text-gray-600 border-t border-gray-200 pt-3">
                                <Search className="cursor-pointer" />
                                <span className="text-sm">Search</span>
                            </div>
                            {/* Social icons for mobile */}
                            <div className="flex items-center gap-4 text-gray-600 border-t border-gray-200 pt-3">
                                <Facebook className="cursor-pointer hover:text-blue-600 transition" />
                                <Twitter className="cursor-pointer hover:text-blue-400 transition" />
                                <Youtube className="cursor-pointer hover:text-red-600 transition" />
                                <Linkedin className="cursor-pointer hover:text-blue-700 transition" />
                            </div>
                        </nav>
                    </div>
                )}

                {/* Desktop Navigation bar - Sticky */}
                <nav
                    className={`hidden md:flex bg-white transition-all duration-300 justify-center items-center gap-4 lg:gap-6 font-semibold text-sm ${
                        isSticky 
                            ? 'fixed top-0 left-0 right-0 z-50 shadow-lg py-3' 
                            : 'relative'
                    }`}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                    {navLinks.map((link: NavLink) => (
                        <div
                            key={link.name}
                            className="relative inline-flex items-center"
                            onMouseEnter={() => setActiveMenu(link.megaMenu ? link.name : null)}
                        >
                            <Link
                                href={link.href || "#"}
                                className={`font-bold text-sm lg:text-base relative group ${activeMenu === link.name
                                    ? "text-red-600"
                                    : "text-gray-800 hover:text-red-600"
                                    } transition-colors duration-200 ${isSticky ? 'py-2' : 'pt-4 mb-3'}`}
                            >
                                {link.name}
                                {/* Animated bottom border */}
                                <div className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${activeMenu === link.name
                                        ? 'w-full'
                                        : 'w-0 group-hover:w-full'
                                    }`}></div>
                            </Link>
                            {link.megaMenu && (
                                <ChevronDown
                                    size={18}
                                    className={`ml-1 mt-1.5 transition-transform duration-300 ease-in-out ${activeMenu === link.name ? 'rotate-180' : 'rotate-0'
                                        }`}
                                />
                            )}
                        </div>
                    ))}

                    {(() => {
                        const activeLink = navLinks.find(l => l.name === activeMenu)
                        const items = activeLink?.megaMenu
                        if (!items) return null

                        // Define menu names and descriptions
                        const menuConfig: Record<string, { name: string; description: string }> = {
                            'Church': {
                                name: 'Church',
                                description: 'Latest updates and stories from the church community'
                            },
                            'Media': {
                                name: 'Media',
                                description: 'Videos, podcasts, and multimedia content'
                            },
                            'Government': {
                                name: 'Government ',
                                description: 'Political updates and policy changes'
                            },
                            'Arts': {
                                name: 'Arts',
                                description: 'Creative works and cultural events'
                            },
                            'Education': {
                                name: 'Education',
                                description: 'Educational updates and academic achievements'
                            },
                            'Family': {
                                name: 'Family',
                                description: 'Family-focused content and parenting tips'
                            }
                        }

                        const config = activeMenu ? menuConfig[activeMenu] : null
                        const finalConfig = config || {
                            name: `${activeMenu || 'News'}`,
                            description: 'Latest updates and stories'
                        }

                        return <MegaMenu
                            items={items}
                            menuName={finalConfig.name}
                            menuDescription={finalConfig.description}
                        />
                    })()}
                </nav>
            </div>
        </header>
    )
}

export default Navbar