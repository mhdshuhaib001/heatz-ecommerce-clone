import { useState } from "react";
import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Mobile Accs", href: "/mobile" }, 
    { name: "Computer Accs", href: "/computer" },
    { name: "Multimedia", href: "/multimedia" },
    { name: "Support", href: "/support" }
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] bg-black/40 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-gray-500/50 z-50">
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
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[#00E489] text-sm font-medium transition hover:text-[#00E489]/80"
            >
              {item.name}
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
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-[#00E489] text-lg text-center py-2 hover:text-[#00E489]/80"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
