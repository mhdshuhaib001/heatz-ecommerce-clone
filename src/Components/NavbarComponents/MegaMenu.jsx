import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductGrid from "../ProductComponent/ProductGrid";

const MegaMenu = ({ isVisible, onMouseEnter, onMouseLeave, slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div
      className={`absolute top-full left-0 w-full mt-2 bg-black/60 backdrop-blur-md rounded-3xl transition-all duration-300 ease-in-out overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {slides[activeSlide].products.map((product) => (
                <ProductGrid key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-80 hidden md:block">
            <div className="relative h-[350px] overflow-hidden rounded-2xl">
              <img
                src={slides[activeSlide].featuredImage || "/placeholder.svg"}
                alt={slides[activeSlide].featuredAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
