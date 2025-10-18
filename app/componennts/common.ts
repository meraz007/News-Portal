import BlogOne from "@/app/asstes/img/BlogOne.jpg"
import BlogTwo from "@/app/asstes/img/BlogTwo.jpg"
import BlogThree from "@/app/asstes/img/BlogThree.jpg"
import BlogFour from "@/app/asstes/img/BlogFour.jpg"
import BlogFive from "@/app/asstes/img/BlogFive.jpg"
import { StaticImageData } from "next/image"

export interface MegaMenuItem {
    title: string
    date: string
    image: StaticImageData
    slug: string
  }
  
  export interface NavLink {
    name: string
    href?: string
    megaMenu?: MegaMenuItem[]
  }
  
  export const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Church",
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,  
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
    },
    { name: "Media", 
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,   
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
     },
    { name: "Government", 
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,  
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
     },
    { name: "Arts", 
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,  
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
     },
    { name: "Education", 
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,  
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,  
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
     },
    { name: "Family", 
      megaMenu: [
        {
          title: "Tragic Shooting at Michigan LDS Chapel Leaves Multiple Dead and Injured",
          date: "September 28, 2025",
          image: BlogOne,
          slug: "tragic-shooting-at-michigan-lds-chapel-leaves-multiple-dead-and-injured",
        },
        {
          title: "10 Mind-Blowing Prophecies from Kim Clement That Are Rocking 2025",
          date: "September 26, 2025",
          image: BlogTwo,
          slug: "10-mind-blowing-prophecies-from-kim-clement-that-are-rocking-2025",
        },
        {
          title: "The Three Most Powerful Words From Charlie Kirk’s Memorial",
          date: "September 22, 2025",
          image: BlogThree,  
          slug: "the-three-most-powerful-words-from-charlie-kirks-memorial",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFour,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
        {
            title: "15 Things the Bible Teaches Us About Heaven",
            date: "September 22, 2025",
            image: BlogFive,
            slug: "15-things-the-bible-teaches-us-about-heaven",
        },
      ],
     },
    // { name: "More", href: "#" },
    // { name: "Listings", href: "#" },
    { name: "Subscribe", href: "/subscribe" },
    { name: "Donate", href: "/donate" },
  ]
  