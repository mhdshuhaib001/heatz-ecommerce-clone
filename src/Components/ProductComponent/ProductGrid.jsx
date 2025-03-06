import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

function ProductGrid({ product }) {
  return (
    <div className="group relative bg-gray-100 rounded-xl overflow-hidden hover:bg-white/95 transition-colors shadow-sm hover:shadow-md">
      <div className="flex items-center justify-center p-4 h-32">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {product.colors && product.colors.length > 0 && (
        <div className="flex justify-center gap-1.5 mb-1.5">
          {product.colors.map((color, index) => (
            <div key={index} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      )}

      <div className="px-3 pb-3 pt-0 text-black">
        <div className="text-center w-full">
          <p className="font-medium text-xs">{product.name}</p>
          <p className="font-bold text-sm">₹ {product.price}</p>
        </div>

        <div className="absolute right-2 bottom-10 flex flex-col items-center gap-1">
          <button className="text-gray-400 hover:text-red-500 transition">
            <Heart className="h-4 w-4" />
          </button>
          <button className="text-gray-700 hover:text-black transition bg-gray-200 hover:bg-gray-300 p-1.5 rounded-full">
            <ShoppingCart className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
