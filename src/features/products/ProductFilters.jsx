import React from "react";

function ProductFilters() {
  return (
    <aside className="w-full">

      {/* Filter Heading */}
      <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider">
          Filters
        </h2>

        <button className="text-xs font-medium text-gray-500 hover:text-black">
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="border-b border-black/10 pb-7">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider">
          Category
        </h3>

        <div className="flex flex-col gap-3">
          {[
            "T-Shirts",
            "Hoodies",
            "Jackets",
            "Joggers",
            "Footwear",
            "Accessories",
          ].map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-black"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="border-b border-black/10 py-7">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider">
          Size
        </h3>

        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="h-9 min-w-10 border border-black/20 px-3 text-xs font-medium hover:border-black hover:bg-black hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="border-b border-black/10 py-7">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider">
          Color
        </h3>

        <div className="flex flex-col gap-3">
          {["Black", "White", "Grey", "Blue"].map((color) => (
            <label
              key={color}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-black"
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="py-7">
        <h3 className="mb-5 text-xs font-bold uppercase tracking-wider">
          Price
        </h3>

        <div className="flex flex-col gap-3">
          {[
            "Under ₹1,000",
            "₹1,000 - ₹2,500",
            "₹2,500 - ₹5,000",
            "Above ₹5,000",
          ].map((price) => (
            <label
              key={price}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="radio"
                name="price"
                className="h-4 w-4 accent-black"
              />
              {price}
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
}

export default ProductFilters;