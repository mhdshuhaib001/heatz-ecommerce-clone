
import React, { useRef, useEffect } from "react";
import {
  Headphones,
  BatteryCharging,
  Archive,
  Speaker,
  Cable,
  HardDrive,
} from "lucide-react";

const productCategories = [
  {
    name: "Headphones",
    href: "/headphones",
    icon: <Headphones className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Chargers",
    href: "/chargers",
    icon: <BatteryCharging className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Cases",
    href: "/cases",
    icon: <Archive className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Speakers",
    href: "/speakers",
    icon: <Speaker className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Cables",
    href: "/cables",
    icon: <Cable className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Storage",
    href: "/storage",
    icon: <HardDrive className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Accessories",
    href: "/accessories",
    icon: <Headphones className="w-8 h-8 text-[#00E489]" />, 
    image: "/CategoryItem/Mouse.jpg",
  },
  {
    name: "Gadgets",
    href: "/gadgets",
    icon: <BatteryCharging className="w-8 h-8 text-[#00E489]" />,
    image: "/CategoryItem/Mouse.jpg",
  }
];

function CategoryNavbar({ show, currentCategory }) {
  const scrollContainerRef = useRef(null);
  const activeItemRef = useRef(null);
  
  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeItem = activeItemRef.current;
      
      const containerWidth = container.offsetWidth;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      
      const targetScrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      

      container.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentCategory, show]);

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] bg-black/50 backdrop-blur-md rounded-full shadow-md border border-gray-600/50 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div 
        ref={scrollContainerRef}
        className="flex items-center justify-start overflow-x-auto py-3 scrollbar-hide relative scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-center space-x-2 px-2 min-w-max">
          {productCategories.map((category, index) => {
            const isActive = currentCategory === category.name;
            return (
              <a
                key={index}
                href={category.href}
                ref={isActive ? activeItemRef : null}
                className={`text-white text-sm flex flex-col items-center justify-center group whitespace-nowrap transition-all duration-300 px-4 ${
                  isActive ? "scale-110" : ""
                }`}
              >
                <div className={`relative w-14 h-14 flex items-center justify-center ${
                  isActive ? "bg-[#00E489]/20 rounded-full" : ""
                }`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      isActive 
                        ? "scale-110" 
                        : "group-hover:-translate-y-2"
                    }`}
                  />
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#00E489]"></div>
                  )}
                </div>
                <span className={`mt-2 text-sm transition-all duration-300 ${
                  isActive 
                    ? "opacity-100 font-medium text-[#00E489]" 
                    : "opacity-0 group-hover:opacity-100"
                }`}>
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryNavbar;