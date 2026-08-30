import React from "react";
import ProductFilters from "../features/products/ProductFilters";
import ProductSort from "../features/products/ProductSort";
import ProductGrid from "../features/products/ProductGrid";

function Men() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <section className="px-5 py-12 text-center md:px-10 md:py-16">
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
          <ProductFilters />
        </aside>

        {/* Products Area */}
        <main className="min-w-0 flex-1">

          {/* Sort */}
          <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-5">
            <p className="text-sm font-semibold">
              186 Products
            </p>

            <ProductSort />
          </div>

          {/* Product Grid */}
          <ProductGrid />

          {/* Load More */}
          <div className="mt-12 flex justify-center">
            <button className="border border-black px-10 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-black hover:text-white">
              Load More
            </button>
          </div>

        </main>

      </section>

    </div>
  );
}

export default Men;