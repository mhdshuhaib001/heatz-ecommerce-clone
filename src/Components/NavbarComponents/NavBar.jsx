import { useState, useRef } from "react";
import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
const productSlides = [
  {
    products: [
      {
        id: 1,
        name: "Gaming Headset",
        price: "1999",
        image: "/Product/headphone (3).jpg",
        colors: ["#000", "#ccc", "#ff0000"]
      },
      {
        id: 2,
        name: "Wireless Headset",
        price: "2499",
        image: "/Product/headphone (3).jpg",
        colors: ["#00ff00", "#0000ff"]
      },
      {
        id: 3,
        name: "Pro Headset",
        price: "2999",
        image: "/Product/Watche1 (3).jpeg",
        colors: ["#ffcc00", "#333"]
      },
      {
        id: 4,
        name: "Pro Headset",
        price: "2999",
        image: "/Product/keybord.png",
        colors: ["#ffcc00", "#333"]
      },
      {
        id: 5,
        name: "Pro Headset",
        price: "2999",
        image: "/Product/headphone (3).jpg",
        colors: ["#ffcc00", "#333"]
      }
      ,
      {
        id: 6,
        name: "Pro Headset",
        price: "2999",
        image: "/Product/headphone (3).jpg",
        colors: ["#ffcc00", "#333"]
      }
    ],
    featuredImage: "PromoProduct/Keyboard5.jpg",
    featuredAlt: "Premium Gaming Headset"
  }
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navRef = useRef(null);
  const menuContainerRef = useRef(null);

  const categories = [
    { id: "mobile", label: "Mobile Accs" },
    { id: "computer", label: "Computer Accs" },
    { id: "multimedia", label: "Multimedia" },
    { id: "support", label: "Support" }
  ];

  const handleCategoryMouseEnter = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMenuVisible(true);
  };

  const handleMenuMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className="relative">
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[87%] md:w-[70%] bg-black/40 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-500/50 z-50"
      >
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <a href="/" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-[#00E489]"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>

          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/${category.id}`}
                className="text-[#00E489] text-sm font-medium transition hover:text-[#00E489]/80"
                onMouseEnter={() => handleCategoryMouseEnter(category.id)}
              >
                {category.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-6 w-6 text-[#00E489] cursor-pointer hover:text-[#00E489]/80" />
            <ShoppingBag className="h-6 w-6 text-[#00E489] cursor-pointer hover:text-[#00E489]/80" />
            <Heart className="h-6 w-6 text-[#00E489] cursor-pointer hover:text-[#00E489]/80" />
            <User className="h-6 w-6 text-[#00E489] cursor-pointer hover:text-[#00E489]/80" />
          </div>

          <button
            className="md:hidden text-[#00E489]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`absolute left-0 top-16 w-full bg-black/90 backdrop-blur-lg p-5 rounded-b-2xl transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/${category.id}`}
              className="block text-[#00E489] text-lg text-center py-2 hover:text-[#00E489]/80"
            >
              {category.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        ref={menuContainerRef}
        className="fixed left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] z-40 pt-16"
      >
        <MegaMenu
          isVisible={isMenuVisible}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
          slides={productSlides}
        />
      </div>
    </div>
  );
}
