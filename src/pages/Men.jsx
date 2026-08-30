import React, { useState } from "react";

import ProductFilters from "../features/products/ProductFilters";
import ProductSort from "../features/products/ProductSort";
import ProductGrid from "../features/products/ProductGrid";

function Men() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [visibleProducts, setVisibleProducts] = useState(9);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    setVisibleProducts(9);
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    setVisibleProducts(9);
  };

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 9);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
          MEN
        </h1>

        <p className="mt-3 text-sm text-gray-600">
          Performance. Style. Everyday comfort.
        </p>
      </section>

      {/* Products Layout */}
      <section className="mx-auto flex max-w-[1600px] gap-8 px-5 pb-16 md:px-8 lg:px-10">
        {/* Filters */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <ProductFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={handleCategoryChange}
          />
        </aside>

        {/* Products */}
        <main className="min-w-0 flex-1">
          {/* Sort Bar */}
          <div className="mb-6 border-b border-black/10 pb-5">
            <ProductSort
              sortOption={sortOption}
              setSortOption={handleSortChange}
            />
          </div>

          {/* Product Grid */}
          <ProductGrid
            selectedCategories={selectedCategories}
            sortOption={sortOption}
            visibleProducts={visibleProducts}
          />

          {/* Load More */}
          {visibleProducts < 18 && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="border border-black px-10 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-black hover:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}

export default Men;