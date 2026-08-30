import React from "react";

function ProductSort() {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      
      <span className="text-sm font-medium text-gray-600">
        186 Products
      </span>

      <select
        className="cursor-pointer border border-black/20 bg-white px-4 py-3 text-sm outline-none focus:border-black"
        defaultValue="featured"
      >
        <option value="featured">Sort by: Featured</option>
        <option value="newest">Newest</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>

    </div>
  );
}

export default ProductSort;