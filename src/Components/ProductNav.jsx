import React from "react";
import { Headphones, BatteryCharging, Archive, Speaker, Cable, HardDrive } from "lucide-react";

function ProductNavbar({ show }) {
    const productCategories = [
        { name: "Headphones", href: "/headphones", icon: <Headphones className="w-5 h-5 text-[#00E489]" /> },
        { name: "Chargers", href: "/chargers", icon: <BatteryCharging className="w-5 h-5 text-[#00E489]" /> },
        { name: "Cases", href: "/cases", icon: <Archive className="w-5 h-5 text-[#00E489]" /> },
        { name: "Speakers", href: "/speakers", icon: <Speaker className="w-5 h-5 text-[#00E489]" /> },
        { name: "Cables", href: "/cables", icon: <Cable className="w-5 h-5 text-[#00E489]" /> },
        { name: "Storage", href: "/storage", icon: <HardDrive className="w-5 h-5 text-[#00E489]" /> },
      ];
    

  return (
    <div
      className={` absolute left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] bg-black/40 backdrop-blur-lg  rounded-full shadow-lg border border-gray-500/50 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center overflow-x-auto py-2">
          {productCategories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="text-white hover:text-[#00E489] px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductNavbar;
