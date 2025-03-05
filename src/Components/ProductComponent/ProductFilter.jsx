import React from "react";

function ProductFilter({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  className = ""
}) {
  return (
    <div className={`
      flex space-x-2 
      overflow-x-auto 
      scrollbar-hide 
      bg-zinc-700 
      rounded-full 
      py-1 
      px-2
      w-full
      ${className}
    `}>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.id)}
          className={`
            px-3 sm:px-4 md:px-5 
            py-2 sm:py-3 
            rounded-full 
            text-xs sm:text-sm 
            font-medium 
            whitespace-nowrap 
            transition-colors 
            duration-300 
            ${
              activeCategory === category.id
                ? "bg-emerald-400 text-black"
                : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ProductFilter;