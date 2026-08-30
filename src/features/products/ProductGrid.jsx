import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Dri-FIT Training T-Shirt",
    category: "Men's T-Shirt",
    price: "₹1,499",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 2,
    name: "Club Fleece Hoodie",
    category: "Men's Hoodie",
    price: "₹2,999",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 3,
    name: "Performance Joggers",
    category: "Men's Joggers",
    price: "₹2,499",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 4,
    name: "Tech Fleece Jacket",
    category: "Men's Jacket",
    price: "₹3,499",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 5,
    name: "Air Training Shoes",
    category: "Men's Footwear",
    price: "₹7,999",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 6,
    name: "Sports Track Jacket",
    category: "Men's Jacket",
    price: "₹2,799",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 7,
    name: "Heritage Training Backpack",
    category: "Men's Bag",
    price: "₹2,199",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 8,
    name: "Club Sports Cap",
    category: "Men's Accessories",
    price: "₹999",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 9,
    name: "Essential Oversized T-Shirt",
    category: "Men's T-Shirt",
    price: "₹1,799",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 10,
    name: "Core Pullover Hoodie",
    category: "Men's Hoodie",
    price: "₹3,299",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 11,
    name: "Training Track Pants",
    category: "Men's Joggers",
    price: "₹2,699",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 12,
    name: "Lightweight Windbreaker",
    category: "Men's Jacket",
    price: "₹3,999",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 13,
    name: "Everyday Running Shoes",
    category: "Men's Footwear",
    price: "₹6,499",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 14,
    name: "Classic Sports Shorts",
    category: "Men's Shorts",
    price: "₹1,999",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 15,
    name: "Performance Training Tee",
    category: "Men's T-Shirt",
    price: "₹1,599",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 16,
    name: "Urban Utility Jacket",
    category: "Men's Jacket",
    price: "₹4,499",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 17,
    name: "Essential Training Shorts",
    category: "Men's Shorts",
    price: "₹1,899",
    image: "YOUR_IMAGE_URL_HERE",
  },
  {
    id: 18,
    name: "Everyday Sports Hoodie",
    category: "Men's Hoodie",
    price: "₹2,799",
    image: "YOUR_IMAGE_URL_HERE",
  },
];

function ProductGrid({
  selectedCategories = [],
  sortOption = "featured",
  visibleProducts = 9,
}) {
  let filteredProducts = [...products];

  // Category Filter
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      const productCategory = product.category
        .replace("Men's ", "")
        .toLowerCase()
        .replace(/s$/, "");

      return selectedCategories.some((category) => {
        const selectedCategory = category
          .toLowerCase()
          .replace(/s$/, "");

        return productCategory === selectedCategory;
      });
    });
  }

  // Sorting
  if (sortOption === "low-high") {
    filteredProducts.sort(
      (a, b) =>
        Number(a.price.replace(/[₹,]/g, "")) -
        Number(b.price.replace(/[₹,]/g, ""))
    );
  }

  if (sortOption === "high-low") {
    filteredProducts.sort(
      (a, b) =>
        Number(b.price.replace(/[₹,]/g, "")) -
        Number(a.price.replace(/[₹,]/g, ""))
    );
  }

  // Show only required number of products
  const displayedProducts = filteredProducts.slice(
    0,
    visibleProducts
  );

  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {displayedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;