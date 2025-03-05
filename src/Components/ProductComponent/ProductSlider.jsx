import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductFilter from "./ProductFilter";

function ProductSlider({ products = [], categories = [], viewAllLink }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [visibleProducts, setVisibleProducts] = useState(products);
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!products || products.length === 0) return;

    setVisibleProducts(
      activeCategory
        ? products.filter(
            (p) =>
              (p.category || "").toLowerCase() === activeCategory.toLowerCase()
          )
        : products
    );
  }, [activeCategory, products]);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);

        setIsScrolling(true);
        clearTimeout(scrollingTimeoutRef.current);
        scrollingTimeoutRef.current = setTimeout(
          () => setIsScrolling(false),
          500
        );
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <ProductFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          className="w-full sm:w-auto"
        />

        {viewAllLink && (
          <a
            href={viewAllLink}
            className="flex items-center text-white hover:text-emerald-400 transition-colors duration-300 self-end sm:self-center"
          >
            <span className="mr-2 text-sm sm:text-base">View All Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-12 sm:w-24 lg:w-44 pointer-events-none z-10 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-24 lg:w-44 pointer-events-none z-10 bg-gradient-to-l from-black/60 to-transparent"></div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-12 sm:px-24 lg:px-44 scrollbar-hide snap-x scroll-smooth"
        >
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: index * 0.05 }
                }}
                exit={{ opacity: 0, y: 10 }}
                className="min-w-[240px] sm:min-w-[280px] max-w-[240px] sm:max-w-[280px] bg-white p-3 sm:p-4 rounded-lg overflow-hidden snap-start shadow-md"
              >
                <div className="relative h-48 sm:h-64 bg-white flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full"
                  />
                  {product.label && (
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          product.label === "New"
                            ? "text-emerald-700"
                            : product.label === "Trending"
                            ? "text-amber-700"
                            : "text-gray-700"
                        }`}
                      >
                        {product.label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4 text-black">
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex gap-1 mb-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  )}
                  <h3 className="font-medium text-sm sm:text-base mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="font-bold text-sm sm:text-base">
                    ₹ {product.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="relative mb-2 mt-4 px-12 sm:px-24 lg:px-44">
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;