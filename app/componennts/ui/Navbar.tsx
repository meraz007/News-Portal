"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { MegaMenu } from "./MegaMenu";
import { navLinks, NavLink } from "../common";
import { ChevronDown, Facebook, Twitter, Youtube, Linkedin, Rss, Search } from "lucide-react";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <header className={` bg-white ${activeMenu ? '' : 'border-b border-gray-200'}`}>
            <div className="">
                <div className="max-w-[1360px] mx-auto flex justify-between items-center py-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-3">
                        <Facebook className="cursor-pointer" />
                        <Twitter className="cursor-pointer" />
                        <Youtube className="cursor-pointer" />
                        <Linkedin className="cursor-pointer" />
                        <Rss className="cursor-pointer" />
                    </div>

                    <div>
                        <Link href={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="100" viewBox="0 0 500 100" role="img" aria-labelledby="titleDesc">
  
  <text x="70" y="35" font-family="Georgia, 'Times New Roman', Times, serif" font-size="20" font-style="italic" fill="#000000">the</text>
  
  <text x="70" y="70" font-family="Georgia, 'Times New Roman', Times, serif" font-size="44" font-weight="700" fill="#000000">CAMPUS</text>
  
  <text x="280" y="70" font-family="Georgia, 'Times New Roman', Times, serif" font-size="44" font-weight="700" fill="#D62828">TODAY</text>
</svg>
                        </Link>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="700" height="100" viewBox="0 0 700 100" role="img" aria-labelledby="titleDesc">
                        <text x="70" y="35" font-family="Georgia, 'Times New Roman', Times, serif" font-size="20" font-style="italic" fill="#000000">the</text>
                        <text x="70" y="70" font-family="Georgia, 'Times New Roman', Times, serif" font-size="44" font-weight="700" fill="#000000">CAMPUS</text>
                        
                        <text x="305" y="70" font-family="Georgia, 'Times New Roman', Times, serif" font-size="44" font-weight="700" fill="#D62828">TODAY</text>
                        </svg> */}
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <Search className="cursor-pointer" />
                    </div>
                </div>

                {/* Navigation bar */}
                <nav
                    className="relative flex justify-center items-center gap-6 font-semibold text-sm"
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
                                className={`pt-4 mb-3 font-bold text-base relative group ${activeMenu === link.name
                                        ? "text-red-600"
                                        : "text-gray-800 hover:text-red-600"
                                    } transition-colors duration-200`}
                            >
                                {link.name}                                
                                {/* Animated bottom border */}
                                <div className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
                                    activeMenu === link.name 
                                        ? 'w-full' 
                                        : 'w-0 group-hover:w-full'
                                }`}></div>
                            </Link>
                            {link.megaMenu && (
                                <ChevronDown 
                                    size={18} 
                                    className={`ml-1 mt-1.5 transition-transform duration-300 ease-in-out ${
                                        activeMenu === link.name ? 'rotate-180' : 'rotate-0'
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